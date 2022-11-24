import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import Search from "./pages/Search";
import Login from "./pages/Login";
import Maps from "./pages/Maps";



import "./App.css";
import { produitslist } from "./pages/Data";

import ServiceInstallation from "./pages/ServiceInstallation";
import CommandedePiece from "./pages/Commande de Piece";
import { userCurrent } from "./redux/userSlice/userSlice";
import { useDispatch } from "react-redux";
import { getproduit, postproduit } from "./redux/userSlice/produitslice";
import Produit from "./pages/Produit";
import ProduitCard from "./pages/ProduitCard";
import CardDetails from "./pages/CardDetails";
import Profile from "./components/Profile";


// import {Rate} from './pages/Rate'
const App = () => {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();

  const [Produitslist, setData] = useState(produitslist);
  useEffect(() => {
    
      dispatch(userCurrent());
      // dispatch(postproduit());
    dispatch(getproduit());
  }, []);

  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/produits/:id"
            element={<ProductDetails Produitslist={Produitslist} />}
          /> */}
          <Route path="/search" element={<Search />} />
          <Route
            path="/ServiceInstallation"
            element={<ServiceInstallation />}
          />
           <Route path="/produit" element={<Produit />} />
          <Route path="/CommandedePiece" element={<CommandedePiece />} />
          {/* <Route path="/Dashbord" element={<Dashbord />} /> */}
          <Route path="/map" element={<Maps />} />
          <Route path="/card" element={<ProduitCard />} />
           <Route path="/cardDetails/:name" element={<CardDetails />} /> 
           <Route path="/profil" element={<Profile/>} /> 
        </Routes>
      </div>
      {/* <Maps/> */}
      {/* <Dashbord/> */}
      <Footer />
    </div>
  );
};

export default App;
