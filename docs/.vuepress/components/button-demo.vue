<template>
    <div>
        <y-button class="button">按钮</y-button>
        <y-button class="button" disabled>按钮</y-button>
        <y-button class="button" icon="shezhi1">按钮</y-button>


        <pre>
            <code>
                {{content}}
            </code>
        </pre>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import buttonGroup from '../../../src/button-group'
    export default {
        name: "button-demo",
        components:{
            'y-button':Button,
            'y-button-group':buttonGroup
        },
        data(){
            return{
                content:`
<y-button>按钮</y-button>
<y-button icon="shezhi1" icon-position="right">按钮</y-button>
<y-button loading>按钮</y-button>
<y-button disabled>按钮</y-button>
<y-button-group>
    <y-button icon="left">上一页</y-button>
    <y-button icon="right" icon-position="right">下一页</y-button>
</y-button-group>
                `
            }
        }
    }
</script>

<style scoped lang="scss">

</style>