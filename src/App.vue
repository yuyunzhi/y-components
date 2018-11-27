<template>
    <div>
        <y-slides :selected="selected" width="300px" height="200px">
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
                selected: undefined
            }
        },
        created() {
            let n = 1
            setInterval(() => {
                if(n===4){n=1}
                this.selected = n.toString()
                n++
            },800)
        }
    }
</script>

<style lang="scss">
    *{margin:0;padding:0;box-sizing: border-box}
    .box {
        width: 100px;
        height: 100px;
        background: #ddd;
        border: 1px solid red;
    }
</style>