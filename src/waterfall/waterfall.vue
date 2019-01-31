<template>
    <div class="y-waterfall-wrapper" ref="waterfallWrapper">
        <div v-for="(item) in dataSource" ref="singleBlock" class="y-waterfall-item">
            <img :src="item.url" ref="imgs" >
            <div ref="content">
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
            },
            responsiveLayout:{
                type:Boolean,
                default:false,
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
            if(this.responsiveLayout){
                window.addEventListener('resize', this.doWaterfall)
            }

        },
        beforeDestroy(){
            if(this.responsiveLayout){
                window.removeEventListener('resize', this.doWaterfall)
            }
        },
        methods: {
            doWaterfall(){
                this.getWidthAndHeight()
                this.setBlockStyle()
                this.setBlockPosition()
            },
            getWidthAndHeight(){
                //总宽度
                this.wrapperWidth = this.$refs.waterfallWrapper.getBoundingClientRect().width ;

                //总列数
                this.columns = parseInt(this.wrapperWidth / this.imgWidth, 10);

                //每个block的padding-bottom
                this.paddingBottom = (this.wrapperWidth-this.columns*this.imgWidth)/(this.columns+1)

                //每个block的宽度
                this.wrapperBlockWith=this.wrapperWidth / this.columns;

            },
            setBlockStyle(){
                this.$refs.singleBlock.forEach((block) => {
                    block.style.paddingBottom=this.paddingBottom+'px';
                    block.style.width = this.wrapperBlockWith+ 'px';
                    block.children[0].style.width = this.imgWidth + 'px';
                    block.children[0].style.height = this.imgHeight + 'px';
                    block.children[1].style.width = this.imgWidth + 'px';
                })
            },
            setBlockPosition(){
                //初始化第一行高度，放入数组
                let arrayHeight = []
                for (let i = 0; i < this.columns; i++) {
                    let height=this.$refs.singleBlock[i].getBoundingClientRect().height
                    arrayHeight.push(height);
                }

                //找到数组中最小的一位，记录下标
                //设置一个Block的位置 left top

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
                this.setContainerHeight(arrayHeight)
            },
            setContainerHeight(arrayHeight){
                let maxHeight = arrayHeight[0];
                for (let i = 0; i < arrayHeight.length; i++) {
                    if (arrayHeight[i] >maxHeight) {
                        maxHeight = arrayHeight[i];
                    }
                }
                this.$refs.waterfallWrapper.style.height=maxHeight+'px'
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
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: left;
            position: absolute;

        }
    }

</style>