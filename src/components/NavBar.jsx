import React from 'react';

function NavBar() {
  return (
    <nav id='navBar'>
      <div id='navBar-container'>
        <div id='logo'>JL</div>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Skills</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
