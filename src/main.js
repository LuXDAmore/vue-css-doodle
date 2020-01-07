// Vue
import Vue from 'vue';

// Skeleton
import 'modern-normalize/modern-normalize.css';
import 'github-markdown-css';
import './main.scss';
import VApp from './VApp';

// Component
import Library from './library';
import VueCssDoodle from './VueCssDoodle';

// Install
Vue.use(
    VueCssDoodle,
);

// Library data
Vue.use(
    Library,
    process.env,
);

// Config
const IS_DEV = process.env.NODE_ENV === 'development';

Vue.config.silent = ! IS_DEV;
Vue.config.productionTip = IS_DEV;

const vm = new Vue(
    {
        render: h => h(
            VApp,
        ),
    },
);

vm.$mount(
    '#app',
);
