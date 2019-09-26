<template lang="html">
	<div class="image">
		<!-- Изображение девайста с боку -->
		<transition name="device">
			<div v-show="show" class="device">
				<!-- Изображение портов -->
				<img
					v-for="(port, index) in ports"
					:key="port"
					:class="[
						`${classes[index]}`,
						'port',
						dataSet[port] ? 'active' : ''
					]"
					:src="`img/technical-features/${classes[index]}.png`"
				/>
				<!-- Подписи -->

				<img
					class="image__device"
					src="img/technical-features/ports.png"
				/>
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
			names: ['RS-232', 'VGA', 'DisplayPort', 'HDMI', 'USB'],
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
			console.log(this.$data)
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

    & .device {
        width: 33%;

        & .image__device {
            width: 100%;
        }

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
                left: 57%;
                top: 19.5%;
                width: 2.9%;
            }

            &.port__vga {
                left: 56.6%;
                top: 46.8%;
                width: 2.9%;
            }
			&.port__dp {
				left: 56.6%;
                top: 55%;
                width: 3.2%;
			}
			&.port__hdmi {
				left: 56.6%;
                top: 69.4%;
                width: 2%;
			}
			&.port__usb {
				left: 56.6%;
				top: 75%;
                width: 2.5%;
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

/* Выравнивание портов в зависимости от ширины экрана */
@media (width: 1680px), (width: 1440px) {
	.image {
        & .device {
            & .port {
                &.port__rs {
                    top: 24.9%;
                }
                &.port__vga {
                    top: 47.3%;
                }
				&.port__dp {
					top: 54.6%;
				}
				&.port__hdmi {
					top: 65.8%;
				}
				&.port__usb {
					top: 70.7%;
				}
            }
        }
    }
}

@media (width: 1600px), (width: 1366px) {
	.image {
        & .device {
            & .port {
                &.port__rs {
                    top: 22.5%;
                }
                &.port__vga {
                    top: 46.8%;
                }
				&.port__dp {
					top: 54.8%;
				}
				&.port__hdmi {
					top: 67.6%;
				}
				&.port__usb {
					top: 72.8%;
				}
            }
        }
    }
}

@media (width: 1280px) {
	.image {
        & .device {
            & .port {
                &.port__rs {
                    top: 25.3%;
                }
                &.port__vga {
                    top: 47.6%;
                }
				&.port__dp {
					top: 54.6%;
				}
				&.port__hdmi {
					top: 65.7%;
				}
				&.port__usb {
					top: 70.7%;
				}
            }
        }
    }
}

@media (width: 1024px) {
	.image {
        & .device {
            & .port {
                &.port__rs {
                    top: 29.5%;
                }
                &.port__vga {
					top: 47.8%;
                }
				&.port__dp {
					top: 53.6%;
				}
				&.port__hdmi {
					top: 62.9%;
				}
				&.port__usb {
					top: 66.8%;
				}
            }
        }
    }
}

/* Retina */
/* MacBook Pro 13 */
@media (-webkit-min-device-pixel-ratio: 2) and (width: 1440px) {
	.image {
		& .device {
			& .port {
				&.port__rs {
					top: 22.7%;
				}
				&.port__vga {
					top: 47.3%;
				}
				&.port__dp {
					top: 55.0%;
				}
				&.port__hdmi {
					top: 67.0%;
				}
				&.port__usb {
					top: 73.0%;
				}
			}
		}
	}
}

/* MacBook Pro 15 */
@media (-webkit-min-device-pixel-ratio: 2) and (width: 2880px) {
	.image {
		& .device {
			& .port {
				&.port__rs {
					top: 25.2%;
				}
				&.port__vga {
					top: 47.8%;
				}
			}
		}
	}
}
</style>
