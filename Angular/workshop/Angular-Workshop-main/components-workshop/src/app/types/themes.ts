import { userId } from "./userId"

export interface Theme{    
        "subscribers": string[],
        "posts": string[],
        "_id": string,
        "themeName":string
        "userId": userId,
        "created_at": string,
        "updatedAt": string,
        "__v": number
    
}