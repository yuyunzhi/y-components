<template>
    <div class="wrapper">
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

        <!--   <hr>

           <y-row gutter="20">
               <y-col class="col" span="12">12</y-col>
               <y-col class="col" span="12">12</y-col>
           </y-row>

           <y-row gutter="20">
               <y-col class="col" span="8">8</y-col>
               <y-col class="col" span="8">8</y-col>
               <y-col class="col" span="8">8</y-col>
           </y-row>

           <y-row gutter="20">
               <y-col class="col" span="6">6</y-col>
               <y-col class="col" span="6">6</y-col>
               <y-col class="col" span="6">6</y-col>
               <y-col class="col" span="6">6</y-col>
           </y-row>

           <hr>

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
           </y-row>-->


    </div>
</template>

<script>
    import YRow from './grid/row'
    import YCol from './grid/col'

    export default {
        components: {
            YRow,YCol
        }
    }
</script>

<style lang="scss">
    .col{
        background:#40a9ff;
        border:1px solid #1890ff;
        height:100px;
    }
</style>