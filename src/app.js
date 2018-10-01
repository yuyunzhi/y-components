import Vue from 'vue'
import Button from './g-button.vue'

console.log(Button);
Vue.component('g-button',Button);

new Vue({
    el:'#app',
});