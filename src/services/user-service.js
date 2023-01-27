import { utilService } from './util-service.js'
const user = {
    _id: utilService.makeId(),
    firstName: 'Alex',
    lastName: 'Hlebnikov',
    imgUrl: 'https://res.cloudinary.com/dk9b84f0u/image/upload/v1674823486/Vuebook/alex_vnmqb0.jpg',
    postsCreated: [],
    postsLiked: [],
    friends: [],
    groups: [],
}


export function getLoggedInUser() {
    return user
}