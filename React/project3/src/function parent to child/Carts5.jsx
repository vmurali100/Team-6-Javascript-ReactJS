import { useState } from "react"
import { CartsChild5 } from "./CartsChild5"

export const Carts5=()=>{
    const[usercarts,setusercarts]=useState(allcarts)
    return(
        <div>
            <CartsChild5 usercarts={usercarts}/>
        </div>
    )
}
var allcarts =
     [
        {
            "id": 2,
            "userId": 3,
            "date": "2020-03-01T00:00:02.000Z",
            // "products": [
            //   {
            //     "productId": 7,
            //     "quantity": 1
            //   },
            //   {
            //     "productId": 8,
            //     "quantity": 1
            //   }
            // ],
            "__v": 0,
            "email": "mahitha@gmail.com"
        },
        {
            "id": 3,
            "userId": 3,
            "date": "2020-03-01T00:00:02.000Z",
            // "products": [
            //   {
            //     "productId": 7,
            //     "quantity": 1
            //   },
            //   {
            //     "productId": 8,
            //     "quantity": 1
            //   }
            // ],
            "__v": 0,
            "email": "deepthi@gmail.com"
        },
        {
            "id": 4,
            "userId": "3",
            "date": "2020-01-01T00:00:02.000Z",
            // "products": "pro",
            "__v": "0",
            "email": "suresh@gmail.com"
        },
        {
            "id": 5,
            "userId": 3,
            "date": "2020-03-01T00:00:02.000Z",
            // "products": [
            //   {
            //     "productId": 7,
            //     "quantity": 1
            //   },
            //   {
            //     "productId": 8,
            //     "quantity": 1
            //   }
            // ],
            "__v": 0,
            "email": "ramya@gmail.com"
        },
        {
            "id": 6,
            "userId": 4,
            "date": "2020-03-01T00:00:02.000Z",
            // "products": [
            //   {
            //     "productId": 10,
            //     "quantity": 2
            //   },
            //   {
            //     "productId": 12,
            //     "quantity": 3
            //   }
            // ],
            "__v": 0,
            "email": "kavya@gmail.com"
        },
        {
            "id": 6,
            "userId": 8,
            "date": "2020-03-01T00:00:02.000Z",
            // "products": [
            //   {
            //     "productId": 18,
            //     "quantity": 1
            //   }
            // ],
            "__v": 0,
            "email": "navya@gmail.com"
        }
    ]