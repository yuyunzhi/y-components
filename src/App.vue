<template>
    <div class="wrapper">
        <y-upload accept="image/*"
                  action="http://127.0.0.1:3000/upload"
                  name="file"
                  methods="0"
                  :fileList.sync="fileList"
                  :parseResponse="parseResponse"
        >
            <button>上传</button>
            <template slot="tips">
                <div>只能上传300kb以内png、jpeg文件</div>
            </template>
        </y-upload>
    </div>
</template>

<script>
    import YUpload from './upload'

    export default {
        components: {
            YUpload: YUpload
        },

        data() {
            return {
                fileList: [],
                avatarImage: '',
            }
        },

        methods: {
            //拿到后端的数据，进行处理组成url，并返回url
            parseResponse(res){
                console.log('res',res)
                let obj = JSON.parse(res)
                let url=`http://127.0.0.1:3000/upload/${obj.id}`
                return url
            }
        }
    }
</script>

<style lang="scss">
    @mixin userInformationPosition {
        margin-top: 10px;
        display: flex;
        align-items: center;
        height: 3em;
    }

    .avatarTab {
        @include userInformationPosition;
        img {
            margin-left: 2em;
            width: 2.5em;
            height: 2.5em;
            border-radius: 50%;
            border: 1px solid grey;
        }
        .upload {
            margin-left: 1.5em;
            margin-right: 1.5em;
            color: blue;
            cursor: pointer;
        }
        .note {
            font-size: 12px;
        }
    }

</style>