export default () => {
	self.addEventListener('message', e => { 
		if (!e) return;

        var Data = {

        }
        


		postMessage(Data);
	})
}
