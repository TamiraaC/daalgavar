import React, { useState } from "react";
import "./youtube.css"

function Youtube() {
  const [newItem, setNewItem] = useState("");
  const [item, setItem] = useState([]);
  const [file, setFile] = useState("");

  const fileUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const addItem = () => {
    const itemuud = {
      id: Math.floor(Math.random() * 9999999),
      value: newItem,
      img: file,
    };
    setItem((oldlist) => [...oldlist, itemuud]);
  };

  const amaRaaDelete = (id) => {
    const arr = item.filter((amaraa) => amaraa.id !== id);
    setItem(arr);
  };
  return (
    <div className="AAA">
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      
      <input type="file" onChange={fileUpload} />

      <button onClick={() => addItem()}>ADD</button>
      <ul className="bb">
        {item.map((items) => {
          return (
            <li className="CC">
              <div>
                {items.value}
              <img src={items.img} alt="text" />
              <h2>fuck you</h2>
              </div>
              
              <button className="abc" onClick={() => amaRaaDelete(items.id)}>delete</button>
            </li>
            
          );
        })}
      </ul>
    </div>
  );
}

export default Youtube;