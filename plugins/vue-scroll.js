import Vue from 'vue'
import vuescroll from 'vuescroll'
Vue.use(vuescroll, {
	ops: {
		rail: {
			background: 'rgba(0,0,0,.1)'
		},
		bar: {
			background: 'linear-gradient(.5turn, #0bdbdd, #0095da)'
		}
	}
})
