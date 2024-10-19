import React from 'react';

const Header = () => {
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px',
  };

  const linkHoverStyle = {
    color: '#f6bd60', // Change to a contrasting color on hover
  };

  return (
    <header style={{ backgroundColor: '#84a59d', color: '#fff', padding: '20px' }}>
      <h1>Maggie Jenkins</h1>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <a href="#about" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>
              Contact
            </a>
          </li>
          <li>
            <a href="#resume" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
