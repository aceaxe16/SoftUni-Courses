import { Post } from "./posts"
import { userId } from "./userId"

export interface Theme{    
        "subscribers": string[],
        "posts": any //string[] | Post[],
        "_id": string,
        "themeName":string
        "userId": userId,
        "created_at": string,
        "updatedAt": string,
        "__v": number
    
}