import { createStore } from 'vuex'
import user from './modules/user.js'
import posts from './modules/posts.js'

const storeOption = {
    strict: true,
    state() {
        return {

        }
    },
    mutations: {

    },
    getters: {

    },
    modules: {
        user,
        posts
    }
}
// Create a new store instance.
const store = createStore(storeOption)
export default store
