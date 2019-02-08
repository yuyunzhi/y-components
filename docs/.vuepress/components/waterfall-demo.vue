<template>
    <div class="wrapper">
        <y-waterfall
                :dataSource="items"
                :imgWidth="150"
                :imgHeight="150"
                responsiveLayout
        >
            <template slot-scope="getData">
                <div class="y-waterfall-content" >{{getData.x.content}}</div>
            </template>
        </y-waterfall>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import YWaterfall from '../../../src/waterfall/waterfall'
    import YButton from '../../../src/button/button'
    export default {
        components: {
            YWaterfall,YButton
        },
        data(){
            return{
                items:[
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFqfDCARzriAAH02_btBdk74.jpeg',
                        content:'我禁不住抬起头来，看那天窗外空中的一轮明月。'
                    },
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FGLTk-AeP5LAAyavtXusQc09.jpeg',
                        content:'李白，字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。'
                    },
                    {
                        url:'http://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFPCxmAHMIiAA67iRy_22417.jpeg',
                        content:'我禁不住抬起头来。'
                    },
                    {
                        url: 'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFpEbSAaY4AAAOMd0VNyWg95.jpeg',
                        content:'我禁不住抬起头来，看那天窗外空中的一轮明月，不由得低头沉思，想起远方的家乡。'
                    },
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFqa6SAPu0jAAGC0-PeOFE20.jpeg',
                        content:'床前明月光，疑是地上霜。'
                    },

                    {
                        url:'http://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFPCxmAHMIiAA67iRy_22417.jpeg',
                        content:'李白，字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。'
                    },
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FGLTk-AeP5LAAyavtXusQc09.jpeg',
                        content:'白居易，字乐天，号香山居士，又号醉吟先生，祖籍太原，到其曾祖父时迁居下邽，生于河南新郑。是唐代伟大的现实主义诗人，唐代三大诗人之一。'
                    },
                    {
                        url: 'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFpEbSAaY4AAAOMd0VNyWg95.jpeg',
                        content:'看那天窗外空中的一轮明月，不由得低头沉思。'
                    },
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFqa6SAPu0jAAGC0-PeOFE20.jpeg',
                        content:'苏轼，北宋文学家、书画家、美食家。'
                    },
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFqfDCARzriAAH02_btBdk74.jpeg',
                        content:'杜甫，字子美，自号少陵野老，世称“杜工部”、“杜少陵”等，汉族，河南府巩县（今河南省巩义市）人，唐代伟大的现实主义诗人，杜甫被世人尊为“诗圣”，其诗被称为“诗史”。'
                    },
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFqfDCARzriAAH02_btBdk74.jpeg',
                        content:'我禁不住抬起头来，看那天窗外空中的一轮明月'
                    },
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FGLTk-AeP5LAAyavtXusQc09.jpeg',
                        content:'李白，字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。'
                    },
                    {
                        url:'http://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFPCxmAHMIiAA67iRy_22417.jpeg',
                        content:'我禁不住抬起头来'
                    },
                    {
                        url: 'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFpEbSAaY4AAAOMd0VNyWg95.jpeg',
                        content:'我禁不住抬起头来，看那天窗外空中的一轮明月，不由得低头沉思，想起远方的家乡。'
                    },
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFqa6SAPu0jAAGC0-PeOFE20.jpeg',
                        content:'床前明月光，疑是地上霜。'
                    },

                    {
                        url:'http://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFPCxmAHMIiAA67iRy_22417.jpeg',
                        content:'李白，字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。'
                    },
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FGLTk-AeP5LAAyavtXusQc09.jpeg',
                        content:'白居易，字乐天，号香山居士，又号醉吟先生，祖籍太原，到其曾祖父时迁居下邽，生于河南新郑。是唐代伟大的现实主义诗人，唐代三大诗人之一。'
                    },
                    {
                        url: 'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFpEbSAaY4AAAOMd0VNyWg95.jpeg',
                        content:'看那天窗外空中的一轮明月，不由得低头沉思。'
                    },
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFqa6SAPu0jAAGC0-PeOFE20.jpeg',
                        content:'苏轼，北宋文学家、书画家、美食家。'
                    },
                    {
                        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFqfDCARzriAAH02_btBdk74.jpeg',
                        content:'杜甫，字子美，自号少陵野老，世称“杜工部”、“杜少陵”等。'
                    },
                ],
                content: `
 <y-waterfall
        :dataSource="items"
        :imgWidth="150"
        :imgHeight="150"
        responsiveLayout
>
    <template slot-scope="getData">
        <div class="content" >{{getData.x.content}}</div>
    </template>
</y-waterfall>

----- S data ------

items:[
    {
        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFqfDCARzriAAH02_btBdk74.jpeg',
        content:'我禁不住抬起头来，看那天窗外空中的一轮明月。'
    },
    {
        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FGLTk-AeP5LAAyavtXusQc09.jpeg',
        content:'李白，字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。'
    },
    {
        url:'http://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFPCxmAHMIiAA67iRy_22417.jpeg',
        content:'我禁不住抬起头来。'
    },
    {
        url: 'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFpEbSAaY4AAAOMd0VNyWg95.jpeg',
        content:'我禁不住抬起头来，看那天窗外空中的一轮明月，不由得低头沉思，想起远方的家乡。'
    },
    {
        url:'https://cxqy20190125.oss-cn-shanghai.aliyuncs.com/images/wKgB3FFqa6SAPu0jAAGC0-PeOFE20.jpeg',
        content:'床前明月光，疑是地上霜。'
    },
]

----- E data ------
      `.trim()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        position: relative;

        .waterfall{
            display: block;
            position: relative;
            .y-waterfall-content{
                font-size:14px;
            }
        }
    }

</style>