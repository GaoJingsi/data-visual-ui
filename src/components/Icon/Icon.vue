<template>
    <div class="icon-container">
        <div class="icon-wrapper" :style="style" :class="clazz">
            <svg class="icon">
                <use :href="iconId"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'icon',
        props: {
            name: {
                type: String,
                default: ''
            },
            prefix: {
                type: String,
                default: 'icon'
            },
            style: {
                type: Object,
                default: {}
            },
            clazz: {
                type: Array || Object,
                default: []
            }
        },
        setup(ctx) {
            const iconId = `#${ctx.prefix}${ctx.name}`
            return {
                iconId
            }
        }
    }
</script>

<style lang="scss" scoped>
    .icon-wrapper {
        display: inline-block;

        .icon {
            width: 100%;
            height: 100%;
            fill: currentColor;
        }
    }
</style>

<style lang="scss">
    .icon-container {
        display: inline-block;
    }
</style>