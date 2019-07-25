import Vue from 'vue'
import NextScreenButton from '@/components/UI/NextScreenButton.vue'
import ActionButton from '@/components/UI/ActionButton.vue'
import RombLine from '@/components/decorations/RombLine.vue'
import Ip65Nav from '@/assets/img/features/ip65_nav.svg'
import TemperatureNav from '@/assets/img/features/temperature_nav.svg'
import PortsNav from '@/assets/img/features/ports_nav.svg'
import TouchNav from '@/assets/img/features/touch_nav.svg'
import CustomizatiomNav from '@/assets/img/features/customization_nav.svg'

const globals = {
	NextScreenButton,
	ActionButton,
	RombLine,
	Ip65Nav,
	TemperatureNav,
	PortsNav,
	TouchNav,
	CustomizatiomNav
}

for (const [name, component] of Object.entries(globals)) {
	Vue.component(name, component)
}