<template>
    <div class="wrapper">
        <div>只能上传2MB以内png、jpeg文件</div>
        <y-upload accept="image/*"
                  action="http://127.0.0.1:3000/upload"
                  name="file"
                  methods="0"
                  :fileList.sync="fileList"
                  :parseResponse="parseResponse"
                  @update:fileList="yyy"
                  class="uploader"
                  @error="error"
                  :size="2*1024*1024"
                  @addFile="addFile"
        >
            <y-button icon="upload">上传</y-button>
        </y-upload>
    </div>
</template>

<script>
    import YUpload from './upload'
    import YButton from './button/button'

    export default {
        components: {
            YUpload: YUpload,
            YButton,
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
            },
            yyy(e){
                console.log('e',e);
            },
            error(error){
                alert(error)
            },
            addFile(file){
                this.fileList.push(file)
            }
        }
    }
</script>

<style lang="scss">
.uploader{
    width:300px;
}



</style>