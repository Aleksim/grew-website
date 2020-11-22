import React from 'react'
import "../css/main.css"
import "../pages/mystyles.scss"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const getImages = graphql`
  {
    car: file(relativePath: { eq: "welcome_to_helsinki.4deafcc7.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    chat: file(relativePath: { eq: "consolechat.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    weather: file(relativePath: { eq: "secure_local_weather.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pixtu: file(relativePath: { eq: "pixtu.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`

const Work = () => {
        const data = useStaticQuery(getImages)

        const openInNewTab = (url) => {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
        }
    return (
        <div className="section work-bg">
            <div className="container is-max-desktop">
                    <h2 className="movetocenter work-title">
                        Our work
                    </h2>
                            <div className="grew-container-wide">
                                <div className="columns">
                                    <div className="column">
                                        <Image
                                            className="image box"
                                            style={{
                                                width:"100%",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                            }}
                                            fluid={data.car.childImageSharp.fluid}
                                        />
                                    
                                    </div>
                                        <div className="column">
                                            <p className="project-title">pointNG.io</p>
                                            <h3 className="title is-4">                                                
                                                Get User Location Securely in JavaScript
                                            </h3>
                                            <p className="work-p">
                                            Privacy-first alternative for detecting user location in browsers without sending coordinate-data away.
                                            </p>
                                            
                                            <button onClick={()=>{openInNewTab('https://www.pointng.io')}} class="button is-primary is-large"><span><strong>&rarr; pointNG.io</strong></span></button>
                                        </div>
                                </div>
                            </div>
                            <div className="grew-container-wide">
                                <div className="columns">
                                    <div className="column">
                                        <div className="box">
                                        <Image
                                            className="image"
                                            style={{
                                                width:"100%",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                            }}
                                            fluid={data.chat.childImageSharp.fluid}
                                        />
                                        </div>
                                    
                                    </div>
                                        <div className="column">
                                            <p className="project-title">ConsoleChat.io</p>
                                            <h3 className="title is-4">
                                                Underground developer meeting room.
                                            </h3>
                                            <p className="work-p">
                                                ConsoleChat turns browsers' console into a global real-time chat that connects developers from websites.                                            
                                            </p>
                                            <button onClick={()=>{openInNewTab('https://www.consolechat.io/')}} class="button is-primary is-large"><span><strong>&rarr; consolechat.io</strong></span></button>
                                        </div>
                                </div>
                            </div>

                            <div className="grew-container-wide">
                                <div className="columns">
                                    <div className="column">
                                        <Image
                                            className="image box"
                                            style={{
                                                width:"100%",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                            }}
                                            fluid={data.weather.childImageSharp.fluid}
                                        />
                                    
                                    </div>
                                        <div className="column">
                                            <p className="project-title">secureweather.io</p>
                                            <h3 className="title is-4">
                                                Secure Local Weather Forecasts
                                            </h3>
                                            <p className="work-p">
                                                Privacy-friendly local weather forecasts. No tracking or transferring of coordinate-data.                                            
                                            </p>
                                            
                                            <button onClick={()=>{openInNewTab('https://proto.secureweather.io')}} class="button is-primary is-large"><span><strong>&rarr; prototype</strong></span></button>
                                        </div>
                                </div>

                            </div>

                            
                            <div className="grew-container-wide">
                                <div className="columns">
                                    <div className="column">
                                        <Image
                                            className="image box"
                                            style={{
                                                width:"100%",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                            }}
                                            fluid={data.pixtu.childImageSharp.fluid}
                                        />
                                    
                                    </div>
                                        <div className="column">
                                            <p className="project-title">pixtu.io</p>
                                            <h3 className="title is-4">
                                                Cookieless Real-Time Lead Conversion Prediction
                                            </h3>
                                            <p className="work-p">
                                                Predict whether your website visitors will buy or bounce. Optimize your website in real-time.                                            
                                            </p>
                                            
                                            <button onClick={()=>{openInNewTab('https://www.pixtu.io')}} class="button is-primary is-large"><span><strong>&rarr; Pixtu.io</strong></span></button>
                                        </div>
                                </div>

                            </div>
            </div>
        </div>
    )
}

export default Work
