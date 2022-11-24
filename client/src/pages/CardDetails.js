import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./cardDetails.css"
import UpdateProduit from './dashord/UpdateProduit';
import { deleteproduit } from '../redux/userSlice/produitslice';


function CardDetails(ping,setPing) {
  const navigate=useNavigate()
  const produits = useSelector((store) => store.produit?.produit);
  const [show, setShow] = useState(false);
  const params = useParams()
  const product = produits.filter((el) => el.name == params.name)[0]
 
  const dispatch = useDispatch();
  return (
   <article className="details-card" style={{ marginTop: "100px" }}>{ show ? 
   <UpdateProduit el={product} show={show} setShow={setShow}/>
    : <> <img className="details-card-image" src={`/${product.img}`} alt="shoes" />
      <div className='details-card-text'>
  
        <div className="">
          <div className="">
            <h2 className=""><strong>{product.name}</strong></h2>
            
          </div>
          <div className="">
          <h4 className="des">prix:</h4> <h2 className=""><strong>{product.prix}</strong></h2>
            
          </div>
          <div className="">
          <h4 className="des">type:</h4><h2 className=""><strong>{product.type}</strong></h2>
            
          </div>
          <div className="">
          <h4 className="des">marque:</h4> <h2 className=""><strong>{product.marque}</strong></h2>
            
          </div>
           
          

        </div>
        <div className="">
         
          <ul className="">
          <h4 className="des">Product details:</h4><div dangerouslySetInnerHTML={{ __html: product?.description }}></div>

          </ul>
        </div>
        <button className="card-button" onClick={()=>setShow(true)}> update
        </button>
        <button className="card-button" onClick={() => {dispatch(deleteproduit({ id: product?._id }));navigate("/produit");window.location.reload()}}>delete</button>

         {/* <button className="card-button" onClick={} update
        </button> */}
      </div>
       </>  }
    </article>
  )
}

export default CardDetails