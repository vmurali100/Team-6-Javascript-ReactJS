import { Component } from "react";

export class Albumschildd extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            album:{},
            users:[]
        }
    }
    render(){
        const{recievemessage,recievealbum,recieveusers}=this.props
        return(
            <div>
                <button onClick={()=>{recievemessage("hello albums")}}>send message</button>
                <button onClick={()=>{recievealbum(allalbums[0])}}>send album</button>
                <button onClick={()=>{recieveusers(allalbums)}}>send user</button>
            </div>
        )
    }
}

var allalbums=[
    {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "sunt qui excepturi placeat culpa"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "omnis laborum odio"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "non esse culpa molestiae omnis sed optio"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "eaque aut omnis a"
      },
      {
        "userId": 1,
        "id": 6,
        "title": "natus impedit quibusdam illo est"
      },
      {
        "userId": 1,
        "id": 7,
        "title": "quibusdam autem aliquid et et quia"
      },
      {
        "userId": 1,
        "id": 8,
        "title": "qui fuga est a eum"
      },
      {
        "userId": 1,
        "id": 9,
        "title": "saepe unde necessitatibus rem"
      },
      {
        "userId": 1,
        "id": 10,
        "title": "distinctio laborum qui"
      },
      {
        "userId": 2,
        "id": 11,
        "title": "quam nostrum impedit mollitia quod et dolor"
      },
      {
        "userId": 2,
        "id": 12,
        "title": "consequatur autem doloribus natus consectetur"
      },
      {
        "userId": 2,
        "id": 13,
        "title": "ab rerum non rerum consequatur ut ea unde"
      },
      {
        "userId": 2,
        "id": 14,
        "title": "ducimus molestias eos animi atque nihil"
      },
      {
        "userId": 2,
        "id": 15,
        "title": "ut pariatur rerum ipsum natus repellendus praesentium"
      },
      {
        "userId": 2,
        "id": 16,
        "title": "voluptatem aut maxime inventore autem magnam atque repellat"
      },
      {
        "userId": 2,
        "id": 17,
        "title": "aut minima voluptatem ut velit"
      },
      {
        "userId": 2,
        "id": 18,
        "title": "nesciunt quia et doloremque"
      },
      {
        "userId": 2,
        "id": 19,
        "title": "velit pariatur quaerat similique libero omnis quia"
      },
      
      {
        "userId": 6,
        "id": 51,
        "title": "odit laboriosam sint quia cupiditate animi quis"
      },
      {
        "userId": 6,
        "id": 52,
        "title": "necessitatibus quas et sunt at voluptatem"
      },
      {
        "userId": 6,
        "id": 53,
        "title": "est vel sequi voluptatem nemo quam molestiae modi enim"
      },
      {
        "userId": 6,
        "id": 54,
        "title": "aut non illo amet perferendis"
      },
      {
        "userId": 6,
        "id": 55,
        "title": "qui culpa itaque omnis in nesciunt architecto error"
      },
      {
        "userId": 6,
        "id": 56,
        "title": "omnis qui maiores tempora officiis omnis rerum sed repellat"
      },
      {
        "userId": 6,
        "id": 57,
        "title": "libero excepturi voluptatem est architecto quae voluptatum officia tempora"
      },
      {
        "userId": 6,
        "id": 58,
        "title": "nulla illo consequatur aspernatur veritatis aut error delectus et"
      },
      {
        "userId": 6,
        "id": 59,
        "title": "eligendi similique provident nihil"
      },
      {
        "userId": 6,
        "id": 60,
        "title": "omnis mollitia sunt aliquid eum consequatur fugit minus laudantium"
      },
      {
        "userId": 7,
        "id": 61,
        "title": "delectus iusto et"
      },
      {
        "userId": 7,
        "id": 62,
        "title": "eos ea non recusandae iste ut quasi"
      },
]