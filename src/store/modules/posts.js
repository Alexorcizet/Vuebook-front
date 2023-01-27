import { getPosts } from '../../services/post-service.js'

export default {
    strict: true,
    state: {
        posts: []
    },
    mutations: {
        setPosts(state, { posts }) {
            state.posts = posts
        },
    },
    actions: {
        async getPosts({ commit }) {
            const posts = await getPosts()
            commit({ type: 'setPosts', posts })
        },
        async createPost({ commit }) {

        }
    },
    getters: {
        posts(state) {
            return state.posts
        }
    },
}