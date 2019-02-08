let onClickDocument = (e) => {
    let {target} = e;
    callbacks.forEach((item) => {
        if (target === item.el || item.el.contains(target)) {
            //表示在元素里面
        } else {
            //表示在元素外面
            item.callback()
        }
    })
};

//一开始监听
document.addEventListener('click', onClickDocument);

let callbacks = [];
export default {
    bind: function (el, binding, vnode) {
        callbacks.push({el, callback: binding.value})
    }
}

let removeListener = () => {
    document.removeEventListener('click', onClickDocument)
};

export {removeListener}