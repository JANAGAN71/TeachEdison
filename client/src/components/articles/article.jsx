import "../articles/article.css"
import Content from "../article_content/art_cont.jsx"

export default function Article({Posts}) {
  console.log(Posts);
  return (
    <div className="articles">
      {Posts.map(p => (
        <Content post = {p} />
      ))}
    </div>
  )
}
