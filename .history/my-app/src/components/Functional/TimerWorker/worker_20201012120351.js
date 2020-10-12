export default () => {
	self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
		if (!e) return;

        var Data = {}
        


		postMessage(Data);
	})
}
