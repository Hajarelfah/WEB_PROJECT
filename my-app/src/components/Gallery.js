import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "./MenuItem";
import "../style/Menu.css";
import Scrollbars from "react-custom-scrollbars";


function Gallery() {
  return (
  
    <div className="menu">
     <Scrollbars style={{ width: '100%', height: '800px',placeItems:'center' }}>
        <h1 className="menuTitle" style={{textAlign:'center',color:'#ffffff', }} >OUR FLOWERS</h1>
        
      <div className="menuList"style={{ width: '100%', height: '800px',placeItems:'center' }}>
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              description={menuItem.description}
            />
          );
        })}
      </div>
      </Scrollbars>
    </div>
    
  );
}

export default Gallery;

