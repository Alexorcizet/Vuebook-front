import { getPosts, createPost } from '../../services/post-service.js'

export default {
    strict: true,
    state: {
        posts: []
    },
    mutations: {
        setPosts(state, { posts }) {
            state.posts = posts
        },
        addPost(state, { post }) {
            state.posts.push(post)
        }

    },
    actions: {
        async getPosts({ commit }) {
            const posts = await getPosts()
            commit({ type: 'setPosts', posts })
        },
        async createPost({ commit }, { post }) {
            const newPost = await createPost(post)
            commit({ type: 'addPost', post: newPost })
        }
    },
    getters: {
        posts(state) {
            return state.posts
        }
    },
}