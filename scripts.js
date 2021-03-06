function init() {
	let configCatClient = configcat.createClient("2U7aCOfWMU-MKACsOXCM0g/LIyqQd4dW0al7huj-0r9Vw");

	configCatClient.getValueAsync("changeBlocksColor", false)
	.then((value) => {
		// if the feature flag is on, display the button and make it execute changeColor when clicked 
		if(value) {
			let colorBtn = document.querySelector('#colorBtn');
			colorBtn.onclick = changeColor
			colorBtn.style.display = 'block';
		}
	})

	function changeColor() {
		const colors = ['red', 'blue', 'yellow', 'golden', 'white', 'cyan', 'orange'];

		// pick a random color from the array
		let randColor = colors[Math.floor(Math.random() * (colors.length - 0) + 0)];
		let firstBlockColor = document.querySelectorAll('.block')[0].style.backgroundColor;

		while(randColor === firstBlockColor) {
			randColor = colors[Math.floor(Math.random() * (colors.length - 0) + 0)];
			if(firstBlockColor !== randColor) {
				break;
			}
		}

		const blocks = document.querySelectorAll('.block');

		for(let i = 0; i < blocks.length; i++) {
			blocks[i].style.backgroundColor = randColor;
		}
	}
}

init()