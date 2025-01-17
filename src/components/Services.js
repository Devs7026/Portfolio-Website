import React from 'react'

const Services= () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <h1 className="subtitle">Services I Offer</h1>
        <div className="serviceslist">
            <div>
            <i class="fa-solid fa-paint-roller"></i>
                <h2>UI/UX Design</h2>
                <p>I can create UI/UX designs using Figma.Figma is a cloud-based tool that enables real-time collaboration for creating and prototyping UI/UX designs.</p>
                <a href="https://www.figma.com/resource-library/difference-between-ui-and-ux/">Learn more</a>
            </div>
            <div>
            <i class="fa-solid fa-photo-film"></i>
                <h2>Photography</h2>
                <p>I use Creativity and Imagination to take aesthetic and high standard pictures for be it your products or yourself.</p>
                <a href="https://drive.google.com/drive/folders/1YFugaH_1Yv9i9LITMnAHFVpbG93JCnbt">Check it Out!</a>
            </div>
            <div>
            <i class="fa-solid fa-code"></i>
                <h2>Web Design</h2>
                <p>I can create a fully functional website design for you based on your requirements.</p>
                <a href="https://en.wikipedia.org/wiki/Web_design">Learn more</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default  Services;