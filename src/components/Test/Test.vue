<template>
    <div class="container">{{testData}}</div>
</template>

<script>
    export default {
        name: 'test',
        setup() {
            return {
                testData: 'test'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        color: red;
    }
</style>