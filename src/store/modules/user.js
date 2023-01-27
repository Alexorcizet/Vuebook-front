import { getLoggedInUser } from "../../services/user-service.js"

export default {
    state: {
        user: {}
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
    },
    actions: {
        async getUser({ commit }) {
            const user = await getLoggedInUser()
            commit({ type: 'setUser', user })
        },
    },
    getters: {
        user(state) {
            return state.user
        }
    },
}