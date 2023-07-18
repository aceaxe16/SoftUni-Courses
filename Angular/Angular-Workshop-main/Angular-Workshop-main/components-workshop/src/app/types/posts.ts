import { userId } from "./userId"

interface themeId {
    "subscribers": string[],
    "posts":string[],
    "_id": string,
    "themeName": string,
    "userId": string,
    "created_at": string,
    "updatedAt": string,
    "__v": number
}

export interface Post{
    
        "likes": string[],
        "_id": string,
        "text": string,
        "userId": userId,
        "themeId": themeId,
        "created_at": string,
        "updatedAt": string,
        "__v": number
    
}