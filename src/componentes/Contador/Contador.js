import React, {useState, useEffect} from 'react';
import './Contador.scss'

const Contador = () => {
    const [personagens, setPersonagens] = useState(1)

    useEffect(() =>{
        fetch(`https://rickandmortyapi.com/api/character/${personagens}`, {
          method: "GET"
        }).then(result => {
          return result.json()
        }).then(data => {
          console.log(data.name, data.gender)
        }).catch(() => {
          console.error("Ops,a internet ruim ou vocẽ que é")
        })
      },[personagens])

      const Proximo = () =>{
        setPersonagens(personagens + 1);
    }
      return(
          <> 
              <button onClick={Proximo}>Adicionar</button>
          </>
      )
}

export default Contador