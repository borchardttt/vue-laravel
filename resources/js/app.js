import './bootstrap';
import Vue from 'vue';

import TestComponent from './components/TestComponent.vue';

new Vue({
    el: '#app',
    components: {
        'test-component': TestComponent
    }
});
