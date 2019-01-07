import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    render: h => h(App),

});

/*
render: h => h(App) is shorthand for:

render (createElement) {
    return createElement(App);
}

VUE CLI uses the runtime-only build of VUE, so using template: to specify what to render doesn't work above.

If you use the version of Vue with the compiler, then it will.
 */

/* original new Vue:

new Vue({
  render: h => h(App),
}).$mount('#app')

 */