import React , {useState} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { postproduit } from '../redux/userSlice/produitslice';
import ProduitCard from './ProduitCard';
import "./produitCard.css"

const Produit = () => {

  const produit = useSelector((store) => store.produit?.produit);
 


  const [show, setShow] = useState(false);
  // initialisation of the hook of adding a new event
    const [produits, setProduits] = useState({
      name: "",
      img:"",
      type: "",
      prix: "",
      description: "",
      cathegori : "",
      marque :"",
    });
    const dispatch = useDispatch();


  return (
    <div>
      <br/><br/><br/><br/><br/>
      <button onClick={() => setShow(!show)}>add produit</button>
      {show ? (
        <div>
          <div id="form" class="topBefore">
            <div className="info">
              
              <input
                type="text"
                placeholder="Title"
                onChange={(e) =>
                  setProduits({ ...produits, name: e.target.value })
                }
              />
              
              <input
                type="text"
                placeholder="the Workspace"
                onChange={(e) =>
                  setProduits({ ...produits, img: e.target.value })
                }
              />
              <br />
              <input
                style={{width: '185px'}}
                type="Date"
                placeholder="Date"
                onChange={(e) =>
                  setProduits({ ...produits, type: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Description"
                onChange={(e) =>
                  setProduits({ ...produits, prix: e.target.value })
                }
              />
               <input
                type="text"
                placeholder="Description"
                onChange={(e) =>
                  setProduits({ ...produits, description: e.target.value })
                }
              />
               <input
                type="text"
                placeholder="Description"
                onChange={(e) =>
                  setProduits({ ...produits, cathegori: e.target.value })
                }
              />
               <input
                type="text"
                placeholder="Description"
                onChange={(e) =>
                  setProduits({ ...produits, marque: e.target.value })
                }
              />
              </div>

<button 
  onClick={() => {
    dispatch(postproduit(produits));
    setShow(false);
    
    }}>
  Submit
  </button>
  <br /><br />
</div>
</div>
) : null}
      <br/>
            <div className='card-produit'>
      {produit?.map((el)=><ProduitCard el={el}/>)}
    </div>
      
      
      
    </div>
  )
}

export default Produit