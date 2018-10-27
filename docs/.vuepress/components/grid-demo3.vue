<template>
    <div>
        <y-row>
            <y-col class="col" span="11" >11</y-col>
            <y-col class="col" span="11" offset="2">11</y-col>
        </y-row>

        <y-row>
            <y-col class="col" span="7" >7</y-col>
            <y-col class="col" span="7" offset="1">7</y-col>
            <y-col class="col" span="7" offset="2">7</y-col>
        </y-row>

        <y-row>
            <y-col class="col" span="8" >8</y-col>
            <y-col class="col" span="3" offset="2">3</y-col>
            <y-col class="col" span="3" offset="2">3</y-col>
            <y-col class="col" span="4" offset="2">3</y-col>
        </y-row>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'
    export default {
        name: "grid-demo3",
        data(){
            return{
                content:`
<y-row>
    <y-col class="col" span="11" >11</y-col>
    <y-col class="col" span="11" offset="2">11</y-col>
</y-row>

<y-row>
    <y-col class="col" span="7" >7</y-col>
    <y-col class="col" span="7" offset="1">7</y-col>
    <y-col class="col" span="7" offset="2">7</y-col>
</y-row>

<y-row>
    <y-col class="col" span="8" >8</y-col>
    <y-col class="col" span="3" offset="2">3</y-col>
    <y-col class="col" span="3" offset="2">3</y-col>
    <y-col class="col" span="4" offset="2">3</y-col>
</y-row>
                `.trim()
            }
        },
        components:{
            "y-col":Col,
            "y-row":Row
        }
    }
</script>

<style scoped lang="scss">
    .col{
        height:100px;
        background:#40a9ff;
        color:white;
        border:1px solid #1890ff;
        text-align: center;
        line-height:100px;
        font-size:20px;
    }
</style>