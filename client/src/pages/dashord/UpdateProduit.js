import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { updateproduit } from "../../redux/userSlice/produitslice";

const UpdateProduit = ({ el,ping,setPing, show,setShow }) => {
    
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [produit, setProduit] = useState({});
  const handleChange = (e) =>
    setProduit({ ...produit, [e.target.name]: e.target.value });
  return   <tr className="produit-event">
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.name} name="name" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.img} name="img" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.type} name="type" />
      </td>
      <td>
        <input style={{height:"35px",width:"150px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.prix} name="prix" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.Description} name="Description" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.cathegori} name="cathegori" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.marque} name="marque" />
      </td>
      <td onClick={() => {dispatch(updateproduit({ id: el._id, produit:produit }));setShow(false);navigate("/produit");window.location.reload()}}>
      <button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>update</button>
      </td>
      <td onClick={() => setShow(false)}><button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>cancel</button></td>
   {/* <td 
         onClick={() => {dispatch(deleteproduit({ id: el._id }));setPing(!ping)}}><button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>delete</button>
      </td>  */}
      </tr>

};

export default UpdateProduit;