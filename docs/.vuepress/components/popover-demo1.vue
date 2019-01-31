<template>
    <div class="wrapper">
        <div class="block">
            <y-popover trigger="click" position="left" class="popover">
                <y-button>左</y-button>
                <div slot="content">你好</div>
            </y-popover>
            <y-popover trigger="click" position="top" class="popover">
                <y-button>上</y-button>
                <div slot="content">你好</div>
            </y-popover>
            <y-popover trigger="click" position="bottom" class="popover">
                <y-button>下</y-button>
                <div slot="content">你好</div>
            </y-popover>
            <y-popover trigger="click" position="right" class="popover">
                <y-button>右</y-button>
                <div slot="content">你好</div>
            </y-popover>
            <pre><code>{{content}}</code></pre>
        </div>
    </div>
</template>

<script>
    import YPopover from '../../../src/popover/popover'
    import YButton from '../../../src/button/button.vue'
    export default {
        components: {
            YPopover,YButton
        },
        data(){
            return{
                content: `
<y-popover trigger="click" position="left" class="popover">
    <y-button>左</y-button>
    <div slot="content">你好</div>
</y-popover>
<y-popover trigger="click" position="top" class="popover">
    <y-button>上</y-button>
    <div slot="content">你好</div>
</y-popover>
<y-popover trigger="click" position="bottom" class="popover">
    <y-button>下</y-button>
    <div slot="content">你好</div>
</y-popover>
<y-popover trigger="click" position="right" class="popover">
    <y-button>右</y-button>
    <div slot="content">你好</div>
</y-popover>
      `.trim()
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper{
        .popover{
            margin-left:20px;
        }
    }
</style>