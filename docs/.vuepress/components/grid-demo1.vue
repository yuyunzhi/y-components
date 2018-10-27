<template>
    <div>
        <y-row>
            <y-col class="col" span="12">12</y-col>
            <y-col class="col" span="12">12</y-col>
        </y-row>

        <y-row>
            <y-col class="col" span="8">8</y-col>
            <y-col class="col" span="8">8</y-col>
            <y-col class="col" span="8">8</y-col>
        </y-row>

        <y-row>
            <y-col class="col" span="6">6</y-col>
            <y-col class="col" span="6">6</y-col>
            <y-col class="col" span="6">6</y-col>
            <y-col class="col" span="6">6</y-col>
        </y-row>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'
    export default {
        name: "grid-demo",
        data(){
            return{
                content:`
 <y-row>
    <y-col class="col" span="12">12</y-col>
    <y-col class="col" span="12">12</y-col>
</y-row>

<y-row>
    <y-col class="col" span="8">8</y-col>
    <y-col class="col" span="8">8</y-col>
    <y-col class="col" span="8">8</y-col>
</y-row>

<y-row>
    <y-col class="col" span="6">6</y-col>
    <y-col class="col" span="6">6</y-col>
    <y-col class="col" span="6">6</y-col>
    <y-col class="col" span="6">6</y-col>
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