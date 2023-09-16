import "./art_cont.css"
import content_img from "../article_content/6g.jpg"

export default function art_cont() {
  return (
    <>
    <div className="content">
      <img src={content_img} alt="Image" />
      <div className="information">
        <div className="categories">
          <span className="cate">Technology</span>
        </div>

        <div className="artcont">
          <span className="art_title">6G TECHNOLOGY</span>
          <br />
          <span className="art_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi quos, incidunt explicabo perferendis libero totam, distinctio modi soluta quisquam illo saepe cumque maxime, reprehenderit vero magnam officiis dolorum nulla aut eaque. Reprehenderit repellendus voluptatem suscipit ad dolor ex omnis deserunt quasi, distinctio odio ut perspiciatis assumenda, id harum ipsam, voluptatibus velit natus beatae aliquid! Eligendi quasi totam accusantium quibusdam.</span>
          <br />
          <span className="postTime">1 hour ago</span>
        </div>

        <div className="likeBtns">
          <span><i class="fa-regular fa-heart"></i> Likes</span>
          <i class="fa-solid fa-ban"></i>
        </div>
      </div>
    </div>



    <div className="content">
      <div className="information">
        <div className="categories">
          <span className="cate">Technology</span>
        </div>

        <div className="artcont">
          <span className="art_title">6G TECHNOLOGY</span>
          <br />
          <span className="art_desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, doloremque rerum, consequuntur voluptate deserunt nisi voluptates explicabo optio quisquam accusamus dolores neque, consequatur suscipit? Voluptates eius magni quam asperiores perferendis, possimus facilis maxime molestias cumque nulla. Laudantium fugiat, odit officiis, sint, iure a reiciendis accusantium perferendis quam quae atque deserunt..</span>
          <br />
          <span className="postTime">1 hour ago</span>
        </div>

        <div className="likeBtns">
          <span><i class="fa-regular fa-heart"></i> Likes</span>
          <i class="fa-solid fa-ban"></i>
        </div>
      </div>
      <img src={content_img} alt="Image" />

    </div>
    </>
  )
}
