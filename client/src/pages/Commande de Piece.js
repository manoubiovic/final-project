import React from "react";

import "./commandedepiece.css"



const CommandedePiece = () => {
  
    return (
      <div className="piece">
        <div className="pieces">
          <h1
            style={{ fontSize: "40px", textShadow: "none", color: "orange" }}
          >
demande       </h1>
          <br />
          <input placeholder="Name of piece *" />
          <br />
          <input placeholder="reference *" />
          <br />
          <input placeholder="model car" />
          <br />
          <input placeholder="Phone Number" />
          <br />
          <br />
          <br />
          
          <button className="submit">Submit</button>
        </div>
          { <div className='left_side'>
               
                </div> }
              </div>
    );
  };

export default CommandedePiece;
