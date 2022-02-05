function $$$(elt, attr) {
	return window.getComputedStyle(elt)[attr]
}

function $$(eltsName) {
	return document.querySelectorAll(eltsName)
}

function $(eltName) {
	return document.querySelector(eltName)
}

function rnd(min, max) {
	return Math.floor(Math.random() * (max - ++min) + min)
}

function rndArr(arr) {
	return Math.floor(Math.random() * arr.length)
}