<template lang="html">
	<div class="image">
		<transition name="title" mode="out-in">
			<h2 v-show="portsNum === ports.length" class="title">
				Широкий набор портов
			</h2>
		</transition>
		<!-- Изображение девайста с боку -->
		<transition name="device">
			<div v-show="show" class="device">
				<!-- Изображение портов -->
				<picture v-for="(port, index) in ports" :key="port">
					<source
						media="(min-width: 1600px)"
						:srcset="
							`img/technical-features/${classes[index]}_large_desktop.png`
						"
					/>
					<source
						media="(min-width: 1024px)"
						:srcset="
							`img/technical-features/${classes[index]}_mid_desktop.png`
						"
					/>
					<source
						media="(min-width: 320px)"
						:srcset="
							`img/technical-features/${classes[index]}_mobile.png`
						"
					/>
					<img
						:class="[
							`${classes[index]}`,
							'port',
							dataSet[port] ? 'active' : ''
						]"
						:src="`img/technical-features/${classes[index]}.png`"
					/>
				</picture>

				<!-- Подписи -->
				<transition-group name="text" class="device-text" tag="div">
					<span
						v-for="(port, index) in ports"
						:key="`${port}-text`"
						v-show="dataSet[port]"
						:class="['text', `text-${classes[index]}`]"
						>{{ names[index] }}</span
					>
				</transition-group>

				<!-- Основной девайс -->
				<picture>
					<source
						media="(min-width: 1600px)"
						srcset="img/technical-features/ports_large_desktop.png"
					/>
					<source
						media="(min-width: 1024px)"
						srcset="img/technical-features/ports_mid_desktop.png"
					/>
					<source
						media="(min-width: 320px)"
						srcset="img/technical-features/ports_mobile.png"
					/>
					<img
						class="image__device"
						src="img/technical-features/ports_large_desktop.png"
					/>
				</picture>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean
		}
	},

	data() {
		return {
			portsNum: 0,
			intervalId: undefined,
			ports: ['showRs', 'showVga', 'showDp', 'showHdmi', 'showUsb'],
			names: ['RS-232', 'VGA', 'DVI-D', 'DisplayPort 1.1', 'USB'],
			classes: [
				'port__rs',
				'port__vga',
				'port__dp',
				'port__hdmi',
				'port__usb'
			],
			showRs: false,
			showVga: false,
			showDp: false,
			showHdmi: false,
			showUsb: false
		}
	},

	computed: {
		dataSet() {
			return this.$data
		}
	},

	watch: {
		show(val, oldVal) {
			if (val) {
				this.animate()
			}
		}
	},

	methods: {
		animate() {
			setTimeout(() => {
				this.showDevice = true
				this.intervalId = setInterval(() => {
					if (this.portsNum < this.ports.length) {
						this[this.ports[this.portsNum]] = true
						this.portsNum++
					} else {
						clearInterval(this.intervalId)
					}
				}, 300)
			}, 600)
		}
	}
}
</script>

<style lang="css" scoped>

.image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 149, 218, 0);
    height: 100%;
	& .title {
		position: absolute;
		z-index: 105;
		left: 20%;
		letter-spacing: 5px;
		writing-mode: vertical-rl;
		transform: rotate(180deg) translateX(0px);
		transform-origin: center center;
	}

    & .device {
		position: relative;
		z-index: 105;

        /* Порты */
        & .port {
            position: absolute;
            box-shadow: 4px 4px 18px 18px rgba(255, 255, 255, 0);
            opacity: 0;
            z-index: 102;
            transition: opacity .2s ease-in, box-shadow 0.2s ease-in;

            &.active {
                opacity: 1;
                box-shadow: 4px 4px 18px 18px rgba(255, 255, 255, 0.8);
            }

            &.port__rs {
				right: 40px;
				top: 176px;
            }

            &.port__vga {
				right: 42px;
				top: 420px;
            }
			&.port__dp {
				right: 40px;
				top: 498px;
			}
			&.port__hdmi {
				right: 47px;
				top: 623px;
			}
			&.port__usb {
				right: 44px;
				top: 675px;
			}
        } /* Порты end*/

		/* Подписи */

		& .device-text {
			position: absolute;
			width: 100%;
			height: 100%;

			& .text {
				color: #fff;
				position: absolute;
				text-align: left;
				right: -150px;
				min-width: 100px;

				&:before {
					display: block;
					position: absolute;
					top: calc(50% - 2px);
					left: -55px;
					content: "";
					height: 3px;
					width: 50px;
					background: linear-gradient(45deg, rgba(255, 255, 255, 0),rgba(255, 255, 255, 1));
					transform-origin: right;
				}

				&.text-port__rs {
					top: 184px;
				}
				&.text-port__vga {
					top: 425px;
				}
				&.text-port__dp {
					top: 503px;
				}
				&.text-port__hdmi {
					top: 628px;
				}
				&.text-port__usb {
					top: 680px;
				}
			}
		}
    }
}

/* Переходы появления */

.device-enter {
    opacity: 0;
    transform: translateX(-20px);
}

.device-enter-active {
    transition: opacity 0.3s ease-in, transform 0.3s ease-out;
}

.text-enter {
	opacity: 0;
	transform: translateX(20px);
	& .text:before {
		transform: scale(0);
	}
}

.text-enter-active {
	transition: opacity 0.2s ease-in, transform 0.2s ease-out;
	& .text:before {
		transition: transform .4s ease-out;
	}
}

.title-enter {
	transform: translateX(-30px);
	opacity: 0;
}

.title-enter-active {
	transition: opacity .3s ease-in, transform .3s ease-out;
}

/* Вырвавнивание портов и надписей */
/* Небольшие мониторы */
@media ( 1024px <= width < 1600px) {
	.image {
		& .device {
			& .port {
				&.port__rs {
					right: 25px;
					top: 118px;
				}
				&.port__vga {
					right: 27px;
					top: 282px;
				}
				&.port__dp {
					right: 26px;
					top: 334px;
				}
				&.port__hdmi {
					right: 31px;
					top: 418px;
				}
				&.port__usb {
					right: 29px;
					top: 453px;
				}
			}

			& .device-text {
				& .text {
					right: -120px;
					font-size: .9em;
					&.text-port__rs {
						top: 120px;
					}
					&.text-port__vga {
						top: 285px;
					}
					&.text-port__dp {
						top: 338px;
					}
					&.text-port__hdmi {
						top: 420px;
					}
					&.text-port__usb {
						top: 455px;
					}
				}
			}
		}
	}
}

/* Мобильные устройства */
@media ( 320px <= width < 1024px) {
	.image {
		& .title {
			font-size: .8em;
			transform: rotate(0deg) translateX(0);
			writing-mode: horizontal-tb;
			top: 20px;
			left: 0;
			width: 100%;
			text-align: center;
		}
		& .device {
			& .port {
				&.port__rs {
					right: 13px;
					top: 62px;
				}
				&.port__vga {
					right: 15px;
					top: 149px;
				}
				&.port__dp {
					right: 14px;
					top: 177px;
				}
				&.port__hdmi {
					right: 16px;
					top: 222px;
				}
				&.port__usb {
					right: 15px;
					top: 241px;
				}
			}
			& .device-text {
				& .text {
					right: -120px;
					font-size: .9em;
					&.text-port__rs {
						top: 62px;
					}
					&.text-port__vga {
						top: 149px;
					}
					&.text-port__dp {
						top: 177px;
					}
					&.text-port__hdmi {
						top: 222px;
					}
					&.text-port__usb {
						top: 241px;
					}
				}
			}
		}
	}
}
</style>
