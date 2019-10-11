import React, {useState} from 'react';
import Input from '../Input/Input';
import './Cadastro.scss'


const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [count, setCount] = useState(1);
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState();

  const resposta = texto => {
    setMensagem(texto);
    setTimeout(() => {
      setMensagem("")
    }, 1500);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(email === confirmEmail){
      const payload = {
        name: nome,
        email: email,
        confirm_email: confirmEmail,
        password: senha
      }
  
      localStorage.setItem(`Dados ${count}`, JSON.stringify(payload));
  
      setStatus(true)
      setCount(count + 1);
      setNome("");
      setEmail("");
      setConfirmEmail("");
      setSenha("");
      resposta("Cadastrado com sucesso")
      
      
    } else{
        resposta("Email ou senha incorretos");
        setStatus(false)

        }
  } 

  return (
    <div className="Cadastro">
      <h1>Se cadastre abaixo</h1>
      <p style={status ? {color:"green"} : {color:"red"}} >{mensagem}</p>
      <form onSubmit={handleSubmit}>
        <Input 
          value={nome} 
          type="text" 
          label="Nome" 
          placeholder="Nome completo" 
          obrigatorio
          atualizarState={setNome}/>
        <Input 
        value={email} 
          type="email" 
          label="Email" 
          placeholder="Digite seu email" 
          obrigatorio
          atualizarState={setEmail}/>
        <Input 
          value={confirmEmail} 
          type="email" 
          label="Confirmar Email" 
          placeholder="Confirme seu email" 
          obrigatorio
          atualizarState={setConfirmEmail}/>
        <Input 
          value={senha} 
          type="password" 
          label="Senha" 
          placeholder="Digite sua senha" 
          obrigatorio
          atualizarState={setSenha}/>
        <button>Cadastrar</button>
      </form>
    </div>
   
  )
}
export default Cadastro;