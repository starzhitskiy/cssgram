'use strict';

// let borderRenge = document.querySelector('#spacing');

// let imgWrap = document.querySelector('.ba-filtered-img-wrap');

// function changeBorder() {
// 	imgWrap.style.borderWidth = `${borderRenge.value}px`;
// }

// borderRenge.addEventListener('change', changeBorder);
// borderRenge.addEventListener('input', changeBorder);


// let colorPicker = document.querySelector('#base');

// let elements = document.querySelectorAll('.hl');

// function changeColor() {

// 	// elements.forEach(element => {
// 	// 	element.style.color = colorPicker.value;
// 	// });

// 	// imgWrap.style.borderColor = colorPicker.value;

// 	document.documentElement.style.setProperty('--base', colorPicker.value)
// }

// colorPicker.addEventListener('change', changeColor);
// colorPicker.addEventListener('input', changeColor);


// ///////

// let blurRange = document.querySelector('#blur');
// let blurLabel = document.querySelector('[data-blur]');

// function changeBlur() {
// 	document.documentElement.style.setProperty('--blur', blurRange.value + 'px');
// 	blurLabel.textContent = blurRange.value + 'px';
// }

// blurRange.addEventListener('change', changeBlur);
// blurRange.addEventListener('input', changeBlur);

// /////

// let contrastRange = document.querySelector('#contrast');
// // let contrastLabel = document.querySelector('[data-contrast]');

// function changeContrast() {
// 	// document.documentElement.style.setProperty('--contrast', contrastRange.value + '%');
// 	// contrastLabel.textContent = contrastRange.value + '%';
// 	setCssVar('contrast', contrastRange.value + '%');
// 	setLabelVal('contrast', contrastRange.value + '%');
// }

// contrastRange.addEventListener('change', changeContrast);
// contrastRange.addEventListener('input', changeContrast);

// ================================================

function setCssVar(varName, varVal) {
	if(!varName || !varVal) return;
	document.documentElement.style.setProperty(`--${varName}`, varVal);
}

function setLabelVal(labelName, labelVal) {
	//Get element from HTML with data attribute
	let label = document.querySelector(`[data-${labelName}]`); 
	if(label == undefined) return; //If there no element with data-... exit from function
	label.textContent = labelVal; //Change label element text 
}

function changeHandle() {
	// console.log(this); // this == range kotoriy my trogaem
	let rangeVarVal = this.value + (this.dataset.units || ''); //Get value from range
	let cssVarName = this.name; //Get CSS var name from range name attribute
	
	setCssVar(cssVarName, rangeVarVal);
	setLabelVal(cssVarName, rangeVarVal);
}


const ranges = document.querySelectorAll('.range, #base');

ranges.forEach(element => {
	element.addEventListener('change', changeHandle);
	element.addEventListener('input', changeHandle);
});

const clearBtn = document.querySelector('[data-clear]');

function clearAll() {
	//Get all ranges
	ranges.forEach(element => {
		const defaultVal = element.getAttribute('value'); //Get default values from html attribute

		element.value = defaultVal; //Clear range value to default
		element.dispatchEvent(new Event('change')); //Trigger change event to chane CSS var
	});
}

clearBtn.addEventListener('click', clearAll);

document.addEventListener('keydown', (event) => {
	event.preventDefault();
	// if(event.code == 'Escape' && event.altKey÷){ //If Esc and alt keys is pressed
	if(event.code == 'Escape'){ //If Esc and alt keys is pressed
		clearAll();
	}
});