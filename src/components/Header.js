import React from 'react';
import { ReactTyped } from 'react-typed';
import cast from '../Images/user.jpg';

const Header = () => {
  return (
    <header className="Header" id="header">
      <div>
        <p>FullStack | UI/UX | Cloud | AIML </p>
        <h1>
          Hey, I'm{' '}
          <span>
            <ReactTyped
              strings={["Dev Srijit"]}
              typeSpeed={60}
              backSpeed={40}
            />
          </span>
        </h1>
        <br />
        <p>- "Showcasing Creativity, Crafting Impact"</p>
        <p>Turning Ideas into Icons</p>
      </div>
      <div>
        <img className='pics' src={cast} alt="my_image" />
      </div>
    </header>
  );
};

export default Header;
