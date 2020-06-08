import React from "react";

const Header = ({props,onRouteChange}) => {
  return (
    <header className="App-header">
      <div className = 'mylogo'>
        <a style={{color:'black'}} className = ' f3 fl pa3  no-underline mt2'><span>▷ </span><b>FindMy!</b>Movies</a>
      </div>
      <div  style = {{display : 'flex',justifyContent : 'flex-end'}}>
         <a href = 'https://github.com/purveshshende2'><img src="https://img.icons8.com/windows/32/000000/github.png" alt = 'github' className = 'f3 link dim white  pa3  no-underline mt2'  /></a>

      </div>
    
    </header>
  );
};

export default Header;