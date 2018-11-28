<template>
    <div class="wrapper">
        <y-slides :selected.sync="selected" >
            <y-slides-item name="1">
                <div class="box">1</div>
            </y-slides-item>
            <y-slides-item name="2">
                <div class="box">2</div>
            </y-slides-item>
            <y-slides-item name="3">
                <div class="box">3</div>
            </y-slides-item>
        </y-slides>
    </div>
</template>

<script>
    import Slides from './slides'
    import SlidesItem from './slides-item'

    export default {
        components: {
            'y-slides': Slides,
            'y-slides-item': SlidesItem
        },
        data() {
            return {
                selected: '1'
            }
        },
        created() {

        }
    }
</script>

<style lang="scss">
    *{margin:0;padding:0;box-sizing: border-box}

    .wrapper{
        margin:40px;
    }
    .box {

        width: 100%;
        height: 300px;
        background: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:40px;

    }
</style>