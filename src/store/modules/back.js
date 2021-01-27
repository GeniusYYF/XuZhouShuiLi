const state = {
    openMenus: [{ title: "我的主页", icon: "md-home" }],
};

const getters = {
    getOpenMenus(state) {
        return state.openMenus
    }
};

const mutations = {
    addOpenMenus(state, val) {
        state.openMenus.push(val)
    },
    delOpenMenus(state, val) {
        state.openMenus.sclice(val)
    }
};

const actions = {
    // 登录页返回之前selectBox值
    addOpenMenusAction(context, obj) {
        console.log(obj)
        if (obj && obj.title) {
            if (context.state.openMenus.filter(menu => menu.title === obj.title).length > 0) {
                console.log("已打开菜单：", obj.title)
                // context.commit('activeMenu', val)
            }
            else {
                console.log("添加菜单：", obj)
                context.commit('addOpenMenus', obj)
            }
        }
    }
};

// 注意和仓库的区别
const store = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
export default store;
