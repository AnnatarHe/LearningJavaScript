class FormHide {
	/**
	 * get Element and save it to prototype
	 * and go listen this button
	 * @param  {String} selector The Close class name
	 * @return {void}
	 */
	constructor(selector) {
		this.close = document.querySelector(selector);
		this.addListener();
	}
	/**
	 * Listen this btn after constructor
	 */
	addListener() {
		const _close = this.close;
		_close.addEventListener('click', () => {
			this.hideForm();
			this.hideMask();
	
		});
	}

	/**
	 * Hide form just turn the display to none
	 * and go to hide the mask
	 * @return {void} 
	 */
	hideForm() {
		let _container = document.querySelector('.form-container');
		_container.style.display = 'none';
	}
	/**
	 * remove mask node!
	 * @return {void} This is end!
	 */
	hideMask() {
		let _mask = document.querySelector('.mask');
		document.body.removeChild(_mask);
	}
}

export default FormHide;