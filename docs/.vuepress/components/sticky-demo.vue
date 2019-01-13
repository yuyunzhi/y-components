<template>
    <div class="wrapper">

        <y-sticky :distance="distance" class="sticky">
            <div>
                <img src="../../../styles/img/123.jpg" style="{width:160px;height:100px;}">
            </div>
        </y-sticky>


        <pre><code>{{content}}</code></pre>

    </div>

</template>

<script>
    import YSticky from '../../../src/sticky/sticky'

    export default {
        components: {
            YSticky,
        },
        data() {
            return {
                distance:100,
                content: `
<y-sticky :distance="100" >
    <div>
        <img src="//xxx.jpg"">
    </div>
</y-sticky>
      `.trim()
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
.sticky{
    z-index:999;
}
</style>

