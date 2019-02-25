import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 公共存储仓库:读(this.$store.adminName)
export default new Vuex.Store({
  state: {
    adminName:'',
    golbalSettings:{
      apiUrl:'http://127.0.0.1:8090'
    }
  },
  // 数据修改方法：this.$store.commit('对应的方法','要重新填入的值')
  mutations: {
    setAdminName(state,value){
      // 同步修改
      state.adminName = value;
    },
    steGlobalSettings(state,value){
      state.golbalSettings = value;
    }
  },
  actions: {

  }
})
