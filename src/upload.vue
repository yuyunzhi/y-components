<template>
    <div class="y-upload">
        <div @click="onClickUpload">
            <slot></slot>
        </div>
        <slot name="tips"></slot>
        <div ref="temp" style="width:0;height:0;overflow: hidden"></div>
    </div>
</template>

<script>
    export default {
        name:'YUpload',
        props: {
            action: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            accept:{
                type: String,
                required: true,
            }
        },
        methods:{
            onClickUpload(){
                let input = document.createElement('input')
                input.type = 'file'
                input.accept = this.accept
                this.$refs.temp.appendChild(input)
                input.addEventListener('change', () => {
                    let file = input.files[0]
                    console.log('file');
                    console.log(file);

                    input.remove()
                    let formData = new FormData()
                    //'avatarFile'要和后端指定好相同的名字
                    formData.append(this.name, file)

                    var xhr =new XMLHttpRequest()
                    xhr.open('post',this.action)
                    xhr.onload=function(){
                        console.log('123',xhr.response)
                        //this.avatarImage=`http://127.0.0.1:3000/upload/${response.data}`
                    }
                    xhr.send(formData)

                })
                input.click()
            }
        }
    }
</script>

<style scoped lang="scss">
.y-upload{

}
</style>