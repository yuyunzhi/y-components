<template>
    <div class="y-waterfall-wrapper" ref="waterfallWrapper">


        <span v-for="(item) in dataSource" ref="singleBlock" class="y-waterfall-item">
            <!--<img :src="item.url" ref="imgs">-->
            <!--<slot :x="item"></slot>-->
            我
        </span>

    </div>
</template>

<script>
    export default {
        name: "YWaterfall",
        props:{
            dataSource:{
                type:Array,
                required:true,
            },
            singleWidth:{
                type:Number,
                required:true,
            }
        },
        mounted(){
            //总宽度
            let wrapperWidth=this.$refs.waterfallWrapper.getBoundingClientRect().width;
            console.log('wrapperWidth',wrapperWidth);
            //总列数
            let columns = parseInt(wrapperWidth/this.singleWidth,10);
            console.log('columns', columns);




            this.$refs.singleBlock.forEach((block,index)=>{
                block.style.width=(wrapperWidth/columns)+'px'

            })



/*            this.$refs.imgs.forEach((img,index)=>{
                img.style.width=this.singleWidth+'px';

            })*/


//             let arrayHeight =[]
//             for(let i = 0; i<columns;i++){
//                 let height = this.$refs.imgs[i].getBoundingClientRect().height
//                 arrayHeight.push(height);
//             }
//             console.log(arrayHeight);
//
//
//             this.$refs.imgs.forEach((img,index)=>{
//                 let minId=0;
//                 let minHeight=arrayHeight[0];
//                 for(let i=0;i<arrayHeight.length;i++){
//                     if(arrayHeight[i]<minHeight){
//                         minHeight=arrayHeight[i];
//                         minId=i;
//                     }
//                 }
// /*                img.style.left=minId*this.singleWidth+'px'
//                 img.style.top=minHeight+'px'
//                 arrayHeight[minId]= arrayHeight[minId]+img.getBoundingClientRect().height*/
//             })

        }
    }
</script>

<style scoped lang="scss">
    .y-waterfall-wrapper{
        display: flex !important;
        flex-direction: row;
        flex-wrap:wrap;
        span{
            display: block;
        }
    }

</style>