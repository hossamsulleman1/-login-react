import * as React from "react";
import { render } from "react-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { config } from "./Config";

const schema = {
  "{env}": {
    users: {
      "{userID}": {
        comment_count: "number",
        username: "string",
        is_verified: "boolean",
        created_at: "timestamp"
      }
    },
    posts: {
      "{postID}": {
        post_title: "string",
        post_data: (faker, key) => {
          // return faker.random.words(5)
          return key.split("/").join("-") + ":post_data";
        },
        // Can be async function !
        vote_counts: async (faker, key) => {
          const result = await doSomethingAsync()
          return result;
        }
        author_id: "{userID}",
        created_at: "timestamp"
      }
    },
    comments: {
      "{postID}": {
        "{commentID}": {
          value: "👍",
          userID: "{userID}"
        }
      }
    }
  }
};

const { generateJSON } = require("json-data-generator");

(async () => {
  const { keys, values, tree } = await generateJSON(schema);
  console.log({ keys, values, tree });
})()





export const GoogleAuth = () => {
  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <div>
        <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button>
        <button
          data-testid="signin-anon"
          onClick={() => {
            firebase.auth().signInAnonymously();
          }}
        >
          Sign In Anonymously
        </button>
        <button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
        <div>
          <IfFirebaseAuthed>
            {() => {
              return <div>You are authenticated</div>;
            }}
          </IfFirebaseAuthed>
          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>
        </div>
      </div>
    </FirebaseAuthProvider>
  );
};