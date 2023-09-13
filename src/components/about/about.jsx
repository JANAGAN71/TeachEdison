import "../about/about.css"
import AboutImg from "./aboutImage.jpg"

export default function about() {
    return (    
        <div className="aboutPage">
            <div className="aboutImg">
                <img src={AboutImg} alt="AboutImage" />
                <span className="aboutQoute">"The world always seems brighter when you've just made something that wasn't there before." - Neil Gaiman</span>
            </div>
            <span className="aboutus">ABOUT US</span>
            <div className="aboutContent">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quibusdam ab sint expedita distinctio quo veniam, error numquam quaerat dicta est eos aliquid fuga ea, neque ad optio. Ab ipsam nihil qui nemo tenetur dolores suscipit illum aliquid, et nulla, quo ipsa eum eligendi dicta repellat delectus minima! Soluta consequatur adipisci quod labore? Corrupti amet explicabo sed ipsum, minus labore distinctio at facilis doloribus. Nesciunt eos, quam enim optio, totam ratione ipsum impedit iste repudiandae ex dignissimos quae. Pariatur officia voluptatum perferendis, rem placeat, perspiciatis laborum officiis aut at nesciunt ipsum incidunt, assumenda sit. Architecto tempore deleniti sit recusandae magnam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio enim illum ipsum explicabo illo veniam voluptatibus maiores impedit adipisci veritatis molestiae est modi voluptates quae obcaecati quo fugiat sunt tenetur, iste quos dolore sint ipsam sed fugit. Magni nobis possimus nihil, cumque exercitationem ipsam ipsa laudantium perferendis itaque laborum minima corporis aliquam aspernatur quas. Excepturi pariatur itaque dicta explicabo. Vitae dignissimos neque, dolorum iure ratione a, repellat quasi possimus voluptas velit vel fuga. Provident veniam animi expedita doloribus fugiat harum facilis ratione, tempora consequatur commodi eligendi explicabo obcaecati quasi, consectetur, doloremque impedit enim perspiciatis maxime? Unde, facere at facilis eaque, temporibus accusantium doloribus praesentium vitae laborum architecto dolor deleniti eius quas omnis? Laborum sequi explicabo dolorem dolore expedita sapiente! Tenetur harum incidunt aperiam aspernatur ad aut vero ipsum quae beatae, dicta natus ab laborum velit repellendus fugiat fuga perferendis, deserunt ea impedit veritatis. Nihil quo eius voluptatibus nulla cupiditate eligendi exercitationem, quaerat iure id nemo? Quis obcaecati hic sunt. Consequatur deleniti maxime ratione voluptatum, distinctio debitis modi qui assumenda laborum illo, incidunt facere aperiam dolorum quis fuga delectus itaque totam sit reiciendis deserunt quisquam dolor repellat saepe. Deserunt, provident nam quibusdam magnam, facere ut velit eaque, ducimus et nobis cupiditate.</p>
            </div>
            <div className="contact">
                <div>
                <span className="contactTitle">
                    FOLLOW US : 
                </span>
                </div>
                <div className="sm_links">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-telegram"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}
