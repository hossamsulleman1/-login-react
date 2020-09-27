import React from "react";
import Button from "@material-ui/core/Button";
import { Heading } from "rebass";
import CustomQuoteSearch from "./HomeFolder/CustomQuoteSearch";
import Paper from "@material-ui/core/Paper";

function HomePage() {
  return (
    <div>
      <Heading fontSize={[5, 6]} color="primary">
        Home
      </Heading>

      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Text>
                Quick Track
            </Text>
        </Grid>
        <Grid item xs={6} sm={6}>
            <Text>Why Not Add a Custom Quote</Text>
            <CustomQuoteSearch></CustomQuoteSearch>
        </Grid>
        <Grid item xs={6} sm={6}>
            <Text>Authors SpotLight</Text>
            <Button>Recomend Features/Changes</Button>
        </Grid>
      </Grid>

      {/* 
<Text>
    Quick Track
</Text> */}
      <Paper>
        <CustomQuoteSearch></CustomQuoteSearch>
      </Paper>
    </div>
  );
}

export default HomePage;
