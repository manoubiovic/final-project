import React from 'react'
import { Link } from 'react-router-dom'
import "./produitCard.css"

function ProduitCard({el}) {
  console.log(el)
  return (

    <div className='body'> 
     <div className="container">
     <div className="card">
      <div className="card-header">
      <Link to={`/cardDetails/${el.name}`}>  <img src={`${el.img}`} alt="" /></Link>
      </div>
      <div className="card-body">
        <div className="ss">
       
        <h1>
         {el.name}
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
       
        {/* <h1>
         {el.type}
        </h1> */}
        <h1>
         prix:                               {el.prix} Dt
        </h1>
        {/* <h4>
        <div dangerouslySetInnerHTML={{__html:el?.description}}></div>
        </h4> */}
        {/* <h4>
         {el.cathegori}
        </h4>
        <h4>
         {el.marque}
        </h4> */}
        
        {/* <p>
          An exploration into the truck's polarising design
        </p>
        <div className="user">
          <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
          <div className="user-info">
            <h5>July Dec</h5>
            <small>2h ago</small>
          </div> */}
        {/* </div> */}
      </div></div>
    </div>
 </div>
 </div>

  )
}

export default ProduitCard