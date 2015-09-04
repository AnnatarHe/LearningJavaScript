class FormShow {
	/**
	 * Constructor Function
	 * return btn element to this prototype 
	 * @param  {String} selector String should be DOM object
	 * @return {void}
	 */
	constructor(selector) {
		this.btn = document.querySelector(selector);
		this.addListener();
	}
	/**
	 * Listener
	 * @param {DOM} btn prototype.btn
	 */
	addListener() {
		let _btn = this.btn;
		_btn.addEventListener('click', (e) => {
			this.showLogin();
		})
	}
	/**
	 * Show Dialog in body
	 * proxy at show Function
	 * @return {void} 
	 */
	showLogin() {
		this.showMask();
		this.showDialog();
	}
	/**
	 * Create a Element at body
	 * @return {void} mask
	 */
	showMask() {
		let _maskHtml = document.createElement('div');
		_maskHtml.className = 'mask';
		document.body.appendChild(_maskHtml);
	}
	/**
	 * show Dialog just SHOW not create!
	 * @return {void} show
	 */
	showDialog() {
		let _dialog = document.querySelector('.form-container');
		_dialog.style.display = 'block';
	}
}
export default FormShow;