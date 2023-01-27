import { utilService } from './util-service.js'
const posts = [
    {
        _id: utilService.makeId(),
        text: 'Hello there, im a post',
        imgUrl: "https://res.cloudinary.com/dk9b84f0u/image/upload/v1663574364/Symphny/metal_jdjaa5.jpg",
        createdAt: '1674749759000',
        createdBy: {
            _id: '56a4sd6a8s4d65asdas',
            firstName: 'Alex',
            lastName: 'Hlebnikov'
        },
        likedBy: []
    }
]

export function getPosts() {
    let allPosts = posts.filter(post => post.createdBy._id === '56a4sd6a8s4d65asdas')
    return allPosts
}

export function createPost(post) {
    let newPost = {
        _id: utilService.makeId(),
        text: post.msg,
        imgUrl: post.img.url || '',
        createdAt: Date.now(),
        createdBy: {
            _id: post.creator,
            firstName: post.creatorFirstName,
            lastName: post.creatorLastName
        },
        likedBy: []
    }
    posts.push(newPost)
}