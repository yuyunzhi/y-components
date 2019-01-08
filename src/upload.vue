<template>
    <div class="y-upload">
        <div @click="onClickUpload">
            <slot></slot>
        </div>
        <slot name="tips"></slot>
        <div ref="temp" style="width:0;height:0;overflow: hidden"></div>

        <ol>
            <li v-for="(file,index) in fileList" :key="index">
                <template v-if="file.status==='uploading'">
                    菊花
                </template>
                <img :src="file.url" style="width:30px;height:30px">
                {{file.name}}
                <button @click="onRemoveFile(file)">x</button>
                {{file.status}}
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'YUpload',
        props: {
            action: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            accept: {
                type: String,
                required: true,
            },
            parseResponse: {
                type: Function,
                required: true,
            },
            fileList: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                url: 'about:blank'
            }
        },
        methods: {
            onClickUpload() {
                let input = this.createInput()
                input.addEventListener('change', () => {

                    this.uploadFile(input.files[0])
                    input.remove()
                })
                //点击触发
                input.click()
            },
            onRemoveFile(file) {
                let answer = window.confirm('你确定要删除吗？')
                if (answer) {
                    let copy = [...this.fileList]
                    let index = copy.indexOf(file)
                    copy.splice(index, 1)
                    this.$emit('update:fileList', copy)
                }
            },
            beforeUploadFile(rawfile,newName,url){
                let { type, size} = rawfile
                this.$emit('update:fileList', [...this.fileList, {name, type, size,status:'uploading'}])
            },
            afterUploadFile(rawFile,newName,url){
                let file = this.fileList.filter(f=>f.name===newName)
                console.log('file')
                console.log(file)

                let copy = JSON.parse(JSON.stringify(file))
                copy.url=url
                copy.status='success'

                let index=this.fileList.indexOf(file)
                let fileListCopy=[...this.fileList]
                fileListCopy.splice(index,1,copy)

                this.$emit('update:fileList', fileListCopy)
            },
            uploadFile(rawFile) {
                let {name, type, size} = rawFile
                let newName= this.generateName(name)
                this.beforeUploadFile(rawFile,newName)
                //'avatarFile'要和后端指定好相同的名字
                let formData = new FormData()

                formData.append(this.name, rawFile)
                this.doUploadFile(formData, (response) => {
                    let url = this.parseResponse(response)
                    this.url = url
                    this.afterUploadFile(rawFile,newName,url)
                })
            },
            generateName(name){
                while (this.fileList.filter(f => f.name === name).length > 0) {
                    let dotIndex = name.lastIndexOf('.')
                    let nameWithoutExtension = name.substring(0, dotIndex)
                    let extension = name.substring(dotIndex)
                    name = nameWithoutExtension + '(1)' + extension
                }
                return name
            },
            doUploadFile(formData, success) {
                var xhr = new XMLHttpRequest()
                xhr.open('post', this.action)
                xhr.onload = function () {
                    success(xhr.response)
                }.bind(this)
                xhr.send(formData)
            },
            createInput() {
                let input = document.createElement('input')
                input.type = 'file'
                input.accept = this.accept
                this.$refs.temp.appendChild(input)
                return input
            }
        }
    }
</script>

<style scoped lang="scss">
    .y-upload {

    }
</style>