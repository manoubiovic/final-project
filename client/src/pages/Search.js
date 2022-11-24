import React, { useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../style/search.css";
import { useSelector } from "react-redux";
import ProduitCard from "./ProduitCard";

const SearchBox = () => {

  const [text, settext] = useState("  ")
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  // if keyword is a string and not empty then navigate to search page, otherwise if the product is not found return a message to the user in a modal box
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.length > 0) {
      navigate(`/search/${keyword}`);
    } else {
      alert("Please, enter the product to search for");
    }
  };

  //handleChange
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const produit = useSelector((store) => store.produit?.produit);
  console.log(produit)

  return (
    <>
      <InputGroup className="search_all" >
        <FormControl
          type="search"
          placeholder="Search Products..."
          
          onChange={(e)=>settext(e.target.value)}
        />
        <Button variant="secondary" id="button-addon2" onClick={submitHandler}>
          <FaSearch />
        </Button>
      </InputGroup>

      <div style={{marginTop:"25px"}}>
    

      <br/>
            <div className='card-produit'>
      {produit?.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())).map((el)=><ProduitCard el={el}/>)}
    </div>
      
      
      
    </div>
    </>
  );
};

export default SearchBox;
