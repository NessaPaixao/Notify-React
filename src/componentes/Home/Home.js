import React from 'react';
import taça from "./taça.jpeg"
import {Link} from 'react-router-dom';
import './Home.scss'


const Home = () => {
  return (
    <div className="Home">
        <img src={taça} alt=""></img>
      <header> 
        <h1>Venha desfrutar das nossas delicias!!</h1>
        <h3>Para isso clique no botão abaixo e se cadastre no nosso site</h3>
        <img src="https://media1.tenor.com/images/814513b7f42ec6f124f8193c72605ad3/tenor.gif?itemid=10260545" alt=""></img>
        <Link to="/Cadastro"> <button>Cadastrar</button> </Link>

      </header>
    </div>
   
  )
}
export default Home;