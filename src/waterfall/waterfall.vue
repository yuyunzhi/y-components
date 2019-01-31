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
        mounted() {

            //总宽度
            let wrapperWidth = this.$refs.waterfallWrapper.getBoundingClientRect().width;
            console.log('wrapperWidth', wrapperWidth);

            //总列数
            let columns = parseInt(wrapperWidth / this.imgWidth, 10);
            console.log('columns', columns);

            let marginBottom = (wrapperWidth-columns*this.imgWidth)/(columns+1)

            let wrapperBlockWith=wrapperWidth / columns
            this.$refs.singleBlock.forEach((block) => {
                block.style.width = wrapperBlockWith+ 'px';
                block.children[0].style.width = this.imgWidth + 'px';
                block.children[0].style.height = this.imgHeight + 'px';
                block.children[1].style.width = this.imgWidth + 'px';
            })

            let arrayHeight = []
            for (let i = 0; i < columns; i++) {
                let height=this.$refs.singleBlock[i].getBoundingClientRect().height
                arrayHeight.push(height);
            }
            console.log(arrayHeight);
            //arrayHeight [100,150,80.74.120]
            this.$refs.singleBlock.forEach((block, index) => {
                let minId = 0;
                let minHeight = arrayHeight[0];
                for (let i = 0; i < arrayHeight.length; i++) {
                    if (arrayHeight[i] < minHeight) {
                        minHeight = arrayHeight[i];
                        minId = i;
                    }
                }
                // console.log('------------分割线-------------' + index);
                // console.log('minId',minId);
                // console.log('minHeight',minHeight);

                if (index < columns) {
                    block.style.left = index * wrapperBlockWith+ 'px'
                    block.style.top = '0px'
                    block.style.marginBottom= marginBottom+'px';
                } else {
                    block.style.left = minId * wrapperBlockWith + 'px'
                    block.style.top = minHeight + 'px'
                    arrayHeight[minId] = arrayHeight[minId] + block.getBoundingClientRect().height
                }


            })


        },
        methods: {}
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