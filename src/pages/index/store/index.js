import Vue from 'vue';
import Vuex from 'vuex';
import { utils } from '@/utils/rivers';

// 站点模块
// import security from './modules/security';
// import research from './modules/research';

Vue.use(Vuex);

// 返回 store 实例
export default new Vuex.Store({
    state: {
    },
    mutations: {
        setState: (state, payload) => utils.deepMerge(state, payload),
    },
    modules: {
        // security,
        // research,
    },
});
