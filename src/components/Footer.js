import React from 'react';
import portfolioConfig from '../portfolio.config';

const { footer } = portfolioConfig;

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
