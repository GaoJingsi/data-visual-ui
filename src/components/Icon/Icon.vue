<template>
    <div class="icon-wrapper" :style="style" :class="clazz">
        <svg class="icon">
            <use :href="iconId"/>
        </svg>
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
        setup(ctx, a, b) {
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