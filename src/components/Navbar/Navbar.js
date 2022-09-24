import {BsPlusLg} from "react-icons/bs";

function Navbar() {
    return (
      <div className={"navbar"}>
          <div className={"logo"}>
              <div>
                  <img src={'ig_short.png'} alt={"INSTA_LOGO"}/>
              </div>
              <div>
                  <img src={"ig_long.png"} alt={"INSTAGRAM"}/>
              </div>
          </div>
          <div className={"icons"}>
              <div><img src={"home.png"} alt={"home-icon"}/></div>
              <div><img src={"search.png"} alt={"search-icon"}/></div>
              <div><img src={"heart.png"} alt={"heart-icon"}/></div>
              <div><img src={"send.png"} alt={"send-icon"}/></div>
          </div>
          <button type={"button"} className={"post-btn"}><BsPlusLg/> Add new post</button>
      </div>
    );
}

export default Navbar;