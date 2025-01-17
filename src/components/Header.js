import React from 'react'
import cast from '../Images/user.jpg'

const Header= () => {
  return (
    <header className="Header" id="header">
      <div>
      <p>FullStack/ UI/UX developer</p>
        <h1>Hey, I'm <span>Dev</span> <br></br>
        Srijit From  India</h1>
        <br></br>
        <p>-"Showcasing Creativity, Crafting impact</p>
        <p>Turning ideas into icons"</p>
      </div>
       <div><img className='pics' src={cast} alt="my_image"></img></div>
        

    </header>
  )
}

export default Header;
