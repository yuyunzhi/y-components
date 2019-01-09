<template>
    <div class="y-uploader">
        <div @click="onClickUpload">
            <slot></slot>
        </div>

        <div ref="temp" style="width:0;height:0;overflow: hidden"></div>

        <ol class="y-uploader-fileList">
            <li v-for="(file,index) in fileList" :key="index">
                <template v-if="file.status==='uploading'">
                          <span class="y-uploader-spin-wrapper">
                    <y-icon name="loading" class="y-uploader-spin"></y-icon>
                                </span>
                </template>
                <template v-else-if="file.status ==='success'">
                    <img class="y-uploader-image" :src="file.url" width="32" height="32" alt="">
                </template>
                <template v-else-if="file.status ==='fail'">
                    <img src="https://i.loli.net/2019/01/09/5c35d9915d5ed.jpg"  class="y-uploader-defaultImage"/>
                </template>
                <span @click="onRemoveFile(file)">
                       <y-icon name="searchclose" class="y-uploader-delete"></y-icon>
                </span>


            </li>
        </ol>
    </div>
</template>

<script>
    import YIcon from './icon'

    export default {
        name: 'YUpload',
        components: {YIcon},
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
            },
            size:{
                type:Number,
                default:2*1024*1024
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
            beforeUploadFile(rawfile, newName, url) {
                let {type, size} = rawfile
                console.log(size);
                if(size>this.size){
                    this.$emit('error','文字大于2MB')
                    return false
                }else{
                    this.$emit('update:fileList', [...this.fileList, {name, type, size, status: 'uploading'}])

                    return true
                }

            },
            afterUploadFile(rawFile, newName, url) {
                //改url 和 status
                let file = this.fileList.filter(f => f.name === newName)
                let copy = JSON.parse(JSON.stringify(file))
                copy.url = url
                copy.status = 'success'

                //删除多余的一项,并用新的代替
                let index = this.fileList.indexOf(file)
                let fileListCopy = [...this.fileList]
                fileListCopy.splice(index, 1, copy)

                this.$emit('update:fileList', fileListCopy)
            },
            uploadFile(rawFile) {
                let {name, type, size} = rawFile
                //检测名字是否重复，并做处理
                let newName = this.generateName(name)
                //添加加载状态
                if(!this.beforeUploadFile(rawFile, newName)){return}
                //'avatarFile'要和后端指定好相同的名字
                let formData = new FormData()

                formData.append(this.name, rawFile)
                this.doUploadFile(formData, (response) => {
                    let url = this.parseResponse(response)
                    this.url = url
                    //删除加载状态
                    this.afterUploadFile(rawFile, newName, url)
                }, (xhr) => {
                    this.uploadError(xhr,newName)
                })
            },
            uploadError(xhr, newName) {
                let file = this.fileList.filter(f => f.name === newName)
                let fileCopy = JSON.parse(JSON.stringify(file))

                fileCopy.status = 'fail'

                let index = this.fileList.indexOf(file)
                let fileListCopy = [...this.fileList]
                fileListCopy.splice(index, 1, fileCopy)
                console.log('失败',fileListCopy);
                this.$emit('update:fileList', fileListCopy)

                let error = ''
                if (xhr.status === 0) {
                    error = '网络无法连接'
                }
                this.$emit('error', error)
            },
            generateName(name) {
                while (this.fileList.filter(f => f.name === name).length > 0) {
                    let dotIndex = name.lastIndexOf('.')
                    let nameWithoutExtension = name.substring(0, dotIndex)
                    let extension = name.substring(dotIndex)
                    name = nameWithoutExtension + '(1)' + extension
                }
                return name
            },
            doUploadFile(formData, success, fail) {
                var xhr = new XMLHttpRequest()
                xhr.open('post', this.action)
                xhr.onload = function () {
                    success(xhr.response)
                }.bind(this)
                xhr.onerror=function(){
                    fail(xhr,xhr.response)
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
    @import "var";

    .y-uploader {

        &-fileList {

            list-style: none;
            padding-left: 0;
            > li {
                display: flex;
                align-items: center;
                overflow: hidden;
                z-index: 0;
                background-color: #fff;
                border: 1px solid #c0ccda;
                border-radius: 6px;
                box-sizing: border-box;
                margin-top: 10px;
                padding: 10px 10px 10px 90px;
                height: 92px;
                position: relative;
                .y-uploader-delete {
                    width: 10px;
                    height: 10px;
                    cursor: pointer;
                    position: absolute;
                    top: 8px;
                    right: 8px;

                }
            }

        }
        &-image{
            vertical-align: middle;
            display: inline-block;
            width: 70px;
            height: 70px;
            float: left;
            position: relative;
            z-index: 1;
            margin-left: -80px;
        }
        &-defaultImage {
            vertical-align: middle;
            display: inline-block;
            width: 70px;
            height: 70px;
            float: left;
            position: relative;
            z-index: 1;
            margin-left: -80px;

        }
        &-name {
            margin-right: auto;
            &.success {
                color: green;
            }
            &.fail {
                color: red;
            }
        }
        &-remove {
            width: 32px;
            height: 32px;
        }
        &-spin-wrapper {
            vertical-align: middle;
            display: inline-flex;
            width: 70px;
            height: 70px;
            float: left;
            position: relative;
            z-index: 1;
            margin-left: -80px;
            justify-content: center;
            align-items: center;

        }
        &-spin {
            width: 35px;
            height: 35px;
            @include spin;
        }

    }
</style>