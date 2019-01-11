function core(method,url,options){
    var xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = () => {
        options.success&&options.success(xhr.response)
    }
    xhr.onerror = () => {
        options.fail&&options.fail(xhr, xhr.response)
    }
    xhr.send(options.data)
}
export default {
    post(url,options){
        return core('post',url,options)
    },
    get(){},
    delete(){},
}