function addFocusEvent(inputs) {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('mouseenter', (event) => {
			event.target.focus();
		});

	}
}

const ignoreList = ['www.youtube.com'];

if (!ignoreList.includes(window.location.hostname)) {
	addFocusEvent(document.getElementsByTagName('input'));
	addFocusEvent(document.getElementsByTagName('textarea'));
}