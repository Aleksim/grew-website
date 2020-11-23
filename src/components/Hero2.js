import React from 'react'
import "../pages/mystyles.scss"
import "../css/main.css"
import { FaDiscord, FaTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa"

 

const Hero2 = () => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
    return (
<div className="section hero-color ">
  <div className="container is-max-desktop hero-body">
    <h1 className="logo">
    Digital Innovation Grewing and Brewing.
    </h1>
    <h2 className="subtitle">
      100% independent and self-funded by <a href="https://twitter.com/ihmissuti">@ihmissuti</a>, <a href="https://twitter.com/aleksimmonen">@aleksimmonen</a>, <a href="https://twitter.com/Jmeriluoto">@JMeriluoto</a>.
    </h2>
    <button onClick={()=>{openInNewTab('https://discord.gg/tjyaZDY')}} className="button-gen button is-primary is-large">
        <span className="button-items">
          <strong>Connect in Discord</strong>
          <FaDiscord size={25} style={{ marginLeft:"5px"}}/>
        </span>
      </button>
      <div className="field">
        <div className="field-body hero-control" style={{marginTop:"10px"}}>
          <div className="field has-addons">
            <p className="control">
              <a href="https://twitter.com/Grewdev" target="_blank" class="button">
                  <FaTwitter size={25} style={{ marginRight:"10px", color:"#1DA1F2"}}/>    
                <span>
                  Twitter
                </span>
              </a>
            </p>
            <p className="control">
              <a href="https://www.linkedin.com/company/42470713" target="_blank" class="button">
                  <FaLinkedinIn size={25} style={{ marginRight:"10px", color:"#2867B2"}}/>    
                <span>
                  LinkedIn
                </span>
              </a>
            </p>
            <p className="control">
              <a href="https://github.com/Grew-dev" target="_blank" class="button">
                  <FaGithub size={25} style={{ marginRight:"10px", color:"#000"}}/>    
                <span>
                  Github
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    
  </div>

</div>
    )
}

export default Hero2
