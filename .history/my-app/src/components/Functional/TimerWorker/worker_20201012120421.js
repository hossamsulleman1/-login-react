export default () => {
	self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
		if (!e) return;

        console.log("WEB WORKER on")
        


		postMessage();
	})
}
