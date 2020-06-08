import React from "react";

const Header = ({props,onRouteChange}) => {
  return (
    <header className="App-header">
      <div className = 'mylogo'>
        <a href = 'App' style={{color:'black'}} className = 'one f3 fl pa3 pointer no-underline mt2'><span>▷ </span><b>FindMy!</b>Movies</a>
      </div>
      <div  style = {{display : 'flex',justifyContent : 'flex-end'}}>
      <a href = 'About.js' style={{color:'black'}} className = 'f3 link dim white  pa3  no-underline mt2'></a>

      </div>
    
    </header>
  );
};

export default Header;
