import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Cadastro from './componentes/Cadastro/Cadastro';
import Home from './componentes/Home/Home';
import Contador from './componentes/Contador/Contador'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Contador />
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
    
    </BrowserRouter>
   
  )
}
export default App;