<template>
    <div class="wrapper">
        <y-popover trigger="click" position="top" class="popover">
            <y-button>上</y-button>
            <div slot="content">你好</div>
        </y-popover>
        <y-popover trigger="click" position="right" class="popover">
            <y-button>右</y-button>
            <div slot="content">你好</div>
        </y-popover>
        <y-popover trigger="click" position="bottom" class="popover">
            <y-button>下</y-button>
            <div slot="content">你好</div>
        </y-popover>
        <y-popover trigger="click" position="left" class="popover">
            <y-button>左</y-button>
            <div slot="content">你好</div>
        </y-popover>
    </div>
</template>

<script>
    import YPopover from './popover/popover'
    import YButton from './button/button'
    export default {
        components: {
            YPopover,YButton
        }
    }
</script>

<style lang="scss">
    .wrapper{

        margin-top:50px;
        margin-left:50px;
        .popover{
            margin-left:20px;
        }
    }

</style>