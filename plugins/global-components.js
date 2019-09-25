import Vue from 'vue'
import NextScreenButton from '@/components/UI/NextScreenButton.vue'
import ActionButton from '@/components/UI/ActionButton.vue'
import RombLine from '@/components/decorations/RombLine.vue'
import WaterNav from '@/assets/img/features/water_nav.svg'
import SandNav from '@/assets/img/features/sand_nav.svg'
import ColdNav from '@/assets/img/features/cold_nav.svg'
import HotNav from '@/assets/img/features/hot_nav.svg'
import ArrowLeft from '@/assets/img/left-arrow.svg'
import ArrowRight from '@/assets/img/right-arrow.svg'
import CloseButton from '@/assets/img/cross.svg'

const globals = {
	NextScreenButton,
	ActionButton,
	RombLine,
	WaterNav,
	SandNav,
	ColdNav,
	HotNav,
	ArrowLeft,
	ArrowRight,
	CloseButton
}

for (const [name, component] of Object.entries(globals)) {
	Vue.component(name, component)
}
