import Vue from 'vue';
import Vuex from 'vuex';
import dashboard from './dashboard/index';
import state from "./root_state";
import mutations from "./root_mutations";

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  modules : {
    dashboard,
  }
});
