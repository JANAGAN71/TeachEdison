import "../singlePost/singlePost.css"
import postImage from "../singlePost/6g.jpg"


export default function singlePost() {
    return (
        <div className="singlePost">
            <div className="singlePostwrap">
                <img src={postImage} alt="" className="postImg" />
                <div className="postTitle">
                    <h1 className="titleName">
                        <p>6G TECHNOLOGY</p>
                        <div className="updateBtn">
                            <i class=" btnIcon2 fa-regular fa-pen-to-square"></i>
                            <i className=" btnIcon1 fa-solid fa-trash-can"></i>
                        </div>
                    </h1>
                    <div className="postInfo">
                        <span className="authorName">Author: <b>Janagan</b></span>
                        <span className="postedDate">1 hour ago</span>
                    </div>
                    <p className="postdesc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis a eos porro illum architecto, vel doloremque atque velit quis nam, maxime repudiandae distinctio et voluptatem? Placeat soluta in modi sunt similique ea eaque harum quibusdam cumque? Dolores totam neque quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quasi exercitationem fugiat ea vel consequuntur praesentium, qui laudantium soluta numquam inventore enim aspernatur, ab sequi, ducimus dicta delectus modi. Reprehenderit explicabo minus magnam id error, beatae corporis ipsum in possimus necessitatibus ipsa culpa impedit sunt, obcaecati ut accusamus autem voluptas eum nostrum perspiciatis, itaque natus debitis. Porro inventore repudiandae error quidem blanditiis est aspernatur, sunt quam consequuntur iusto, eveniet iste, ea enim exercitationem voluptas itaque. Neque nostrum quidem iste animi deleniti rem expedita, assumenda et modi vel hic, quaerat, ab tenetur ducimus optio ipsum ipsam. Commodi odit natus saepe dolorum?
                    </p>
                </div>
            </div>
        </div>
    )
}
