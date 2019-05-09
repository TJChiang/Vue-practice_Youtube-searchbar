import Vue from 'vue';
import App from './App';

new Vue({
    render: h => h(App)     // render: function(h) {return h(App);}
}).$mount('#app');      // el: '#app'