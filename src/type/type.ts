export interface rating{
    rate:number,
    count:number
}
export interface product{
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating:rating
}