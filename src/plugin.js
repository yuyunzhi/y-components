import Toast from './toast'

export default {
    install (Vue,options){
        Vue.prototype.$toast=function(message,toastOptions) {
            console.log(toastOptions);
            //生成一个toast并插入到body
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor({
                propsData:{
                    autoClose:toastOptions.autoClose,
                    closeButton:toastOptions.closeButton,
                    autoCloseDelay:toastOptions.autoCloseDelay
                }
            });
            toast.$slots.default = [message];
            //slots放在$mount前面
            toast.$mount();
            document.body.appendChild(toast.$el)
        }
    }
}