<template>
    <div class="y-waterfall-wrapper" ref="waterfallWrapper">

        <div v-for="(item) in dataSource" ref="singleBlock" class="y-waterfall-item">
            <img :src="item.url" ref="imgs" >
            <div class="content" ref="content">
                <slot :x="item"></slot>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "YWaterfall",
        props: {
            dataSource: {
                type: Array,
                required: true,
            },
            imgWidth: {
                type: Number,
                required: true,
            },
            imgHeight:{
                type: Number,
                required: true,
            }
        },
        data(){
          return{
              wrapperWidth:null,//总宽度
              columns:null,//列数
              paddingBottom:null,//每个block的padding
              wrapperBlockWith:null,//每个block的宽度
          }
        },
        mounted() {
            this.doWaterfall()
            
        },
        methods: {

            doWaterfall(){
                //总宽度
                this.wrapperWidth = this.$refs.waterfallWrapper.getBoundingClientRect().width;

                //总列数
                this.columns = parseInt(this.wrapperWidth / this.imgWidth, 10);

                //每个block的padding-bottom
                this.paddingBottom = (this.wrapperWidth-this.columns*this.imgWidth)/(this.columns+1)

                //每个block的宽度
                this.wrapperBlockWith=this.wrapperWidth / this.columns;

                this.$refs.singleBlock.forEach((block) => {
                    block.style.paddingBottom=this.paddingBottom+'px';
                    block.style.width = this.wrapperBlockWith+ 'px';
                    block.children[0].style.width = this.imgWidth + 'px';
                    block.children[0].style.height = this.imgHeight + 'px';
                    block.children[1].style.width = this.imgWidth + 'px';
                })

                let arrayHeight = []
                for (let i = 0; i < this.columns; i++) {
                    let height=this.$refs.singleBlock[i].getBoundingClientRect().height
                    arrayHeight.push(height);
                }

                this.$refs.singleBlock.forEach((block, index) => {
                    let minId = 0;
                    let minHeight = arrayHeight[0];
                    for (let i = 0; i < arrayHeight.length; i++) {
                        if (arrayHeight[i] < minHeight) {
                            minHeight = arrayHeight[i];
                            minId = i;
                        }
                    }
                    if (index < this.columns) {
                        block.style.left = index * this.wrapperBlockWith+ 'px';
                        block.style.top = '0px'
                    } else {
                        block.style.left = minId * this.wrapperBlockWith + 'px';
                        block.style.top = minHeight + 'px';
                        arrayHeight[minId] = arrayHeight[minId] + block.getBoundingClientRect().height
                    }


                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .y-waterfall-wrapper {
        display: flex !important;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
        .y-waterfall-item {
            text-align: left;
            position: absolute;
        }
    }

</style>