import Vue from 'vue'
import NextScreenButton from '@/components/UI/NextScreenButton.vue'
import ActionButton from '@/components/UI/ActionButton.vue'
import RombLine from '@/components/decorations/RombLine.vue'

const globals = {
	NextScreenButton,
	ActionButton,
	RombLine
}

for (const [name, component] of Object.entries(globals)) {
	Vue.component(name, component)
}
