import "../create/create.css"

import UploadImage from "../create/6g.jpg"

export default function create() {
  return (
    <div className="createPage">
      <div className="createForm">
        <div className="createGrp">
          <img src={UploadImage} alt="" className="uploadImg" />
        </div>
        <div className="createGrp">
          <label htmlFor="fileInp">
            <i class="fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInp" style={{ display: "none" }} />
          <input type="text" className="writeInp" placeholder="Title" autoFocus={true} />
        </div>
        <div className="createGrp">
        <input type="text" className="AuthorNameInp" placeholder="Author Name" autoFocus={true} />
        </div>

        <div className="createGrp">
          <textarea name="" className="writeText" cols="30" rows="10" placeholder="Tell About Your Thoughts..."></textarea>
        </div>
        <div className="createGrp">
        <button className="publishBtn">Publish</button>
        </div>
      </div>
    </div>
  )
}
