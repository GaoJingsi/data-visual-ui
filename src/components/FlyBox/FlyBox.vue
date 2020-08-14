<template>
    <div class="container" ref="container">
        <svg class="fly-box">
            <defs>
                <path :id="rectId" :d="path"/>

                <radialGradient
                        :id="radialGradientId"
                        cx="50%"
                        cy="50%"
                        fx="100%"
                        fy="50%"
                        r="50%"
                >
                    <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
                    <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
                </radialGradient>

                <mask :id="`${starMaskId}`">
                    <circle r="50" cx="5" cy="5" :fill="`url(#${radialGradientId})`">
                        <animateMotion :path="path" dur="3s" repeatCount="indefinite"
                                       rotate="auto"/>
                    </circle>
                </mask>
            </defs>

            <use :href="`#${rectId}`" stroke="#000000" stroke-width="1" fill="none"/>
            <use :href="`#${rectId}`" stroke="#09f" stroke-width="3" fill="none" :mask="`url(#${starMaskId})`"/>
        </svg>

        <div class="content-container">
            <slot/>
        </div>
    </div>
</template>

<script>
    import {ref, onMounted, computed, getCurrentInstance} from 'vue'
    import {v4 as uuidv4} from 'uuid'

    export default {
        name: 'flyBox',
        setup() {
            const uuid = uuidv4({
                random: [
                    0x10,
                    0x91,
                    0x56,
                    0xbe,
                    0xc4,
                    0xfb,
                    0xc1,
                    0xea,
                    0x71,
                    0xb4,
                    0xef,
                    0xe1,
                    0x67,
                    0x1c,
                    0x58,
                    0x36
                ]
            })
            // const uuid = uuidv4()
            let width = ref(0)
            let height = ref(0)
            let path = computed(() => `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`)
            let rectId = `rect-${uuid}`
            let radialGradientId = `radialGradient-${uuid}`
            let starMaskId = `starMask-${uuid}`
            onMounted(() => {
                const instance = getCurrentInstance()
                width.value = instance.ctx.$refs.container.clientWidth
                height.value = instance.ctx.$refs.container.clientHeight
            })
            return {
                path,
                rectId,
                radialGradientId,
                starMaskId
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        position: relative;

        .fly-box {
            position: absolute;
            z-index: -1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }

        .content-container {
            width: auto;
            height: 100%;
            padding: 10px;
        }
    }
</style>