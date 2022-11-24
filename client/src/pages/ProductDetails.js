import React from "react";
import { useParams } from "react-router-dom";
const ProductDetails = ({ Produitslist }) => {
  const { id } = useParams();
  const Produitslists = Produitslist.filter((el) => el.id === parseInt(id))[0];
  console.log(Produitslists);
  return (
    <div className="articles_details">
      <h2>{Produitslists.title}</h2>
      <div className="annonce">{Produitslists.vid}</div>
     
      <h2>{Produitslists.price}</h2>
    </div>
  );
};
export default ProductDetails;
