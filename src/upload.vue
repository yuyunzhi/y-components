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
                    this.uploadFiles(input.files)
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
            //上传前，判断文件大小
            //触发事件给外部，添加list清单
            beforeUploadFiles(rawFiles, newNames) {
                //对象转化成数组 rawFiles 是可以for遍历且含有length的对象
                rawFiles = Array.from(rawFiles)

                //判断每个文件的大小，只要超过限制就通知error
                for (let i = 0; i < rawFiles.length; i++) {
                    let {size, type} = rawFiles[i]
                    if (size > this.size) {
                        this.$emit('error', '文件大于2MB')
                        return false
                    }
                }

                //map 返回一个新的数组包含了该次上传的所有文件，标记uploading状态
                let allFile = rawFiles.map((rawFile, i) => {
                    let {type, size} = rawFile
                    return {name: newNames[i], type, size, status: 'uploading'}
                })

                this.$emit('update:fileList', [...this.fileList, ...allFile])
                return true

            },

            afterUploadFiles(newName, url) {
                //上传成功的一次只有一个，所以不需要遍历
                //找到修改替换上传成功的url status
                //通知外部，传入fileList
                let file = this.fileList.filter(f => f.name === newName)[0]
                let index = this.fileList.indexOf(file)
                let fileCopy  = JSON.parse(JSON.stringify(file))
                fileCopy.url = url
                fileCopy.status = 'success'
                let fileListCopy = [...this.fileList]
               fileListCopy.splice(index, 1, fileCopy)

                this.$emit('update:fileList', fileListCopy)
                this.$emit('uploaded')
            },

            uploadFiles(rawFiles) {

                let newNames = []
                //生成新的名字
                for (let i = 0; i < rawFiles.length; i++) {
                    let rawFile = rawFiles[i]
                    let {name, size, type} = rawFile
                    let newName = this.generateName(name)
                    newNames[i] = newName
                }
                //一次性生成所有图片的加载中状态
                if (!this.beforeUploadFiles(rawFiles, newNames)) {return}

                //对每一个图片进行发送请求
                for (let i = 0; i < rawFiles.length; i++) {
                    let rawFile = rawFiles[i]
                    let newName = newNames[i]
                    let formData = new FormData()
                    formData.append(this.name, rawFile)
                    this.doUploadFiles(formData, (response) => {
                        let url = this.parseResponse(response)
                        this.url = url
                        this.afterUploadFiles(newName, url)
                    }, (xhr) => {
                        this.uploadError(xhr, newName)
                    })
                }

            },
            uploadError(xhr, newName) {
                let file = this.fileList.filter(f => f.name === newName)
                let fileCopy = JSON.parse(JSON.stringify(file))

                fileCopy.status = 'fail'

                let index = this.fileList.indexOf(file)
                let fileListCopy = [...this.fileList]
                fileListCopy.splice(index, 1, fileCopy)

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
            doUploadFiles(formData, success, fail) {
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
                input.multiple=true
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