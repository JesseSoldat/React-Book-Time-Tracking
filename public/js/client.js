window.client = (function () {
	function getTimers(success) {
		//pass a success function to send to React once we
		//get the data or an error
		return fetch('/api/timers', {
			headers: {
				Accept: 'application/json'
			},
		}).then(checkStatus)
		//return the data or an error
			.then(parseJSON)
			.then(success);
	}

	function checkStatus(response) {
		if (response.status >= 200 && response.status < 300) {
			return response;
		} else {
			const error = new Error(`HTTP Error ${response.statusText}`);
			error.status = response.statusText;
			error.response = response;
			console.log(error);
			throw error;
		}
	}

	function parseJSON(response) {
		return response.json();
	}

	return {
		getTimers
	}

})();