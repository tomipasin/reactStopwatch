import React, { useState, useRef } from 'react';
import './App.css';

//Esse app de cronômetro usará os hooks useState e o useRef do React.
//O objetivo é viabilizar um cronômetro alterando os estados de forma dinâmica com o useState
//e manter uma referência do status atual do countRef com useRef.
const App = () => {
  //o hook useState retorna o valor inicial (timer), no nosso caso é zero, e também uma função 
  //pra atualizar este valor (setTimer).
  const [timer, setTimer] = useState(0)
  console.log(`Timer (total seconds): ${timer}`)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)
  //o hook useRef é inicializado como null e seu valor só mudará quando o cronômetro for disparado.
  //Ele retorna um objeto de ref mutável, ou seja, no andar do código ele vai sendo atualizado.
  console.log(`countref: ${countRef.current}`)

  //nosso cronômetro precisa mostrar segundos, minutos e horas. Para isso temos que usar o 
  //valor da const timer que, depois veremos, será atualizada a cada segundo.

  //aqui fazemos a matemática para obter o retorno em segundos:
  //mostro inicialmente 0 seguido do resto da divisão do valor do timer por 60. 
  //Deste número pego os dois últimos dígitos usando slice.
  const getSeconds = `0${(timer % 60)}`.slice(-2)

  //para os minutos primeiro crio um valor bruto que é o resultado de timer dividido por 60
  const minutesRaw = timer / 60;
  //depois arredondo para baixo esse valor.
  const minutes = Math.floor(minutesRaw)
  //e por fim pego também o resto da divisão dele por 60, fatiando os 2 últimos algarismos.
  const getMinutes = `0${minutes % 60}`.slice(-2)

  //para as horas é o valor dos 2 últimos algarismos de timer dividido por 3600(segundos) arredondado pra baixo.
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

  //para compreensão da lógica coloquei este console.log:
  console.log(`Seconds (timer:${timer})/60 = Minute Raw: ${minutesRaw} - minutes: ${minutes} - getMinutes: ${getMinutes}`)
  
  //aqui o código que vai ser acinoado no botão de start. Ele basicamente:
  const handleStart = () => {
    //com useState define que as consts isActive e isPaused são true (pois o status inicial delas é false)
    //essas consts é que definem se as funções de start, pause e resume estarão funcionais. 
    setIsActive(true)
    setIsPaused(true)
    //e manda um valor de ref para o countRef, que iniciamos como null, e a cada segundo (1000 milissegundos)
    //atualiza a const timer com uma arrow function que leva como atributo o valor atual de timer e adiciona a ela 
    //mais 1. Para atualizar o timer usamos a função setTimer que é fornecida pelo hook useState.
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  //aqui tratamos do pause que basicamente define o isPaused como false e limpa o intervalo do nosso 
  //objeto de referencia que em última análise serve para definir quando nosso cronômetro está
  //rodando (tem algum valor) ou quando está parado (null)
  const handlePause = () => {
    clearInterval(countRef.current)
    console.log(countRef.current)
    setIsPaused(false)
  }

  //o resume executa o start novamente. Como o intervalor de countRef não é alteardo o cronômetro 
  //continua de onde parou.
  const handleResume = () => {
    handleStart()
  }

  //O reset zera tudo.
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
          sendo que o start, ao iniciar vira pause, pause vira resume e ao lado o reset */}

            {/* Operador ternário */}

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

//exportamos tudo no App ;-)
export default App;