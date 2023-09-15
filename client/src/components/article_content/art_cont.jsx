import "./art_cont.css"
import content_img from "../article_content/6g.jpg"

export default function art_cont({post}) {
  return (
    <div className="content">
      {
        post.image && (
          <img src={post.image} alt="" />
      )}
      <div className="information">
        <div className="categories">
          {post.category.map((c) => (
          <span className="cate">{c.name}</span>
          ))}
        </div>
        <span className="art_title">{post.title}</span>
        <br />
        <span className="postTime">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <div className="likeBtns">
      <span><i class="fa-regular fa-heart"></i> Likes</span>
        <i class="fa-solid fa-ban"></i>
      </div>
    </div>
  )
}
