import React, { useState, useRef } from 'react';
import './App.css';



//Esse app de cronômetro usará o useState e o useRef do React.
//O objetivo é viabilizar um cronômetro alterando os estados de forma dinâmica com o useState
//e manter uma referência do status atual do countRef com useRef que 
const App = () => {
  const [timer, setTimer] = useState(0)
  console.log(`Timer (total seconds): ${timer}`)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)
  //o useRef é inicializado como null e seu valor só mudará 
  console.log(countRef)

  const getSeconds = `0${(timer % 60)}`.slice(-2)

  const minutesRaw = timer / 60
  const minutes = Math.floor(minutesRaw)
  const getMinutes = `0${minutes % 60}`.slice(-2)
  console.log(`Seconds ${timer}/60 = Minute Raw ${minutesRaw} - Minute: ${getMinutes}`)
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)


  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    //a cada clicada no start ele seta o intervalo em 1000
    console.log(countRef.current)
  }

  const handlePause = () => {
    clearInterval(countRef.current)
    //deabilita o botão. Pra resumir tem que clicar no start.
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    handleStart()
  }

  const handleReset = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  return (
    <div className='container'>

      {/* Linha do cabeçalho */}

      <div class="row">
        <div class="col"></div>
        <div class="col-10 center">
          <h1>Tomi's <br />React Stopwatch</h1>
          <h4>A complete stopwatch <br />running in ReactJS</h4>
        </div>
        <div class="col"></div>
      </div>


      {/* Linha do relógio */}



      <div className='row'>
        <div classname='col-1'></div>
        <div classname='col-10 stop'>
          <p className="clock center">{getHours}:{getMinutes}'{getSeconds}</p> {/* here we will show timer */}
        </div>
        <div classname='col-1'></div>
      </div>

      {/* Linha dos botões */}

      <div class="row">
        <div class="col"></div>
        <div class="col-10 buttons">
          
          {/* Aqui dá pra fazermos de duas formas, em relação aos botões:
          O código abaixo vai gerar um botão para cada evento. 
          Resolvi deixar aqui só para propósito educativo pois a forma como faremos, com operadores ternários
          nos permitirá que um botão tenha "dois valores", o que permite o uso de 2 botões somente. 

          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleResume}>Resume</button>
          <button onClick={handleReset}>Reset</button> */}


            {/* Aqui vamos usar um operador ternário para fazer com que só apareçam dois botões
          sendo que o start, ao iniciar vira pause e ao lado o reset */}
            {
              //aqui funciona assim: se isActive e is paused forem false, ou seja, o estado inicial deles que definimos antes
              //o botão será o de start.
              !isActive && !isPaused ?
                <button onClick={handleStart}>Start</button>
                //se o is paused for true, ou seja, se o timer estiver rodando
                //o botão que aparecerá será o de Pause.
                : (
                  isPaused ? <button onClick={handlePause}>Pause</button>
                    //e depois de entrar nessa condição ele verifica se o isPaused continua true. Caso for false, 
                    //ou seja, se o timer tiver sido pausado, o botão que aparece é o de resume.
                    :
                    <button onClick={handleResume}>Resume</button>
                )
            }

            {/* O botão de reset sempre vai aparecer pq está fora da nossa */}
            <button onClick={handleReset}>Reset</button>
          
        </div>
        <div class="col"></div>
      </div>


    </div>
  );
}

export default App;