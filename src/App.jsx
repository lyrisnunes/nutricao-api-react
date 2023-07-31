import  {useState, useEffect} from 'react';

import './styles.css'

// https://sujeitoprogramador.com/rn-api?api=posts

export function App(){
  const [nutri, setNutri] = useState([]);

  useEffect(()=> {

    function loadApi(){

      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      
      fetch(url)
      .then((r) => r.json())
      .then((json)=>{
        console.log(json)
        setNutri(json)
      })
    }
    loadApi()

  },[]);

  return(
    <div className='container'>
      <header>
        <h2>NUTRIÇÃO<span>.</span>API</h2>
      </header>

      <div className='informacao'>
        {nutri.map((item)=> {
          return(
            <article key={item.id} className='post'>
              <strong className='titulo'>{item.titulo}</strong>

              <img src={item.capa} alt={item.titulo} className='capa' />
              <p  className='subtitulo' >{item.subtitulo}</p>
              <a  className='btn' href="#">Acessar</a>
            </article>
          )
        })}
      </div>
    </div>
  )
}