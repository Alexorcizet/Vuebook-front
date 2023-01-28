import { utilService } from './util-service.js'
import { storageService } from "./storage.service.js"

const POSTS_DB = "postsDB"

export async function getPosts(userId) {
    let allPosts = await storageService.load(POSTS_DB) || []
    return allPosts
}

export async function createPost(post) {
    let posts = await storageService.load(POSTS_DB) || []
    let newPost = {
        _id: utilService.makeId(),
        text: post.msg,
        imgUrl: post.imgUrl,
        createdAt: Date.now(),
        createdBy: {
            _id: post.creator,
            firstName: post.creatorFirstName,
            lastName: post.creatorLastName
        },
        likedBy: []
    }
    posts.push(newPost)
    await storageService.save(POSTS_DB, posts)
    console.log(newPost);
    return newPost
}