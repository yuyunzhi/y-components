<template>
    <div>
        <y-input value="这是输入框" class="one input"></y-input>
        <y-input value="这是输入框" disabled class="two input"></y-input>
        <y-input value="这是输入框" readonly class="three input"></y-input>
        <y-input value="123" error="请重新输入手机号码" class="four input"></y-input>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default {
        name: "input-demo",
        data(){
            return{
                content:`
<y-input value="这是输入框"></y-input>
<y-input value="这是输入框" disabled></y-input>
<y-input value="这是输入框" readonly></y-input>
<y-input value="123" error="请重新输入手机号码"></y-input>
                `.trim()
            }
        },
        components:{
            'y-input':Input,
        }
    }
</script>

<style scoped lang="scss">
    .input{
        margin:5px 3px;
    }
</style>