<template>
    <div class="wrapper">
        <div class="tips">只能上传2MB以内png、jpeg文件</div>
        <y-upload accept="image/*"
                  action="https://node-server-11.herokuapp.com/upload"
                  name="file"
                  :fileList.sync="fileList"
                  :parseResponse="parseResponse"
                  class="uploader"
                  @error="error"
                  method="post"
                  :size="2*1024*1024"
                  @uploaded="uploaded"
        >
            <y-button icon="upload" class="button">上传</y-button>
        </y-upload>

        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import YUpload from '../../../src/uploader/uploader'
    import YButton from '../../../src/button/button'

    export default {
        components: {
            YUpload,
            YButton,
        },

        data() {
            return {
                fileList: [],
                avatarImage: '',
                content: `
<y-upload accept="image/*"
          action="https://node-server-11.herokuapp.com/upload"
          name="file"
          :fileList.sync="fileList"
          :parseResponse="parseResponse"
          @error="error"
          method="post"
          :size="2*1024*1024"
          @uploaded="uploaded"
>
    <y-button icon="upload">上传</y-button>
</y-upload>

---- S data ----

fileList: [],
avatarImage: '',

---- E data ----

----S methods ----

parseResponse(id){
    let url="https://node-server-11.herokuapp.com/preview/"+id
    return url
},
error(error){
    alert(error)
},
uploaded(){
    //上传成功
}

----E methods ----
      `.trim()
            }
        },

        methods: {
            //拿到后端的数据，进行处理组成url，并返回url
            parseResponse(id){
                let url=`https://node-server-11.herokuapp.com/preview/${id}`
                return url
            },
            error(error){
                alert(error)
            },
            uploaded(){
                //上传成功
            }
        }
    }
</script>

<style lang="scss" scoped>
.tips{
    color:#1890ff;
    font-size:14px;
    margin:10px 0;

}
</style>