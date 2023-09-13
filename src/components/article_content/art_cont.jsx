import "./art_cont.css"
import content_img from "../article_content/6g.jpg"

export default function art_cont() {
  return (
    <div className="content">
      <img src={content_img} alt="" />
      <div className="information">
        <div className="categories">
          <span className="cate">Life</span>
          <span className="cate">Music</span>
        </div>
        <span className="art_title">6G TECHNOLOGY</span>
        <br />
        <span className="postTime">1 hour ago</span>
      </div>
    </div>
  )
}
