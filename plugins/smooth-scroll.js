import smoothscroll from 'smoothscroll-polyfill'

export default (ctx, inject) => {
	// kick off the polyfill!
	smoothscroll.polyfill()
}
