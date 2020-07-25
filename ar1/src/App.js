import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Estudante from './components/questao1/Estudante'
import EstudanteClasse from './components/questao2/EstudanteClasse'
import EstudantePai from './components/questao3/EstudantePai';
import EstudanteClassePai from './components/questao4/EstudanteClassePai';

/*
function Questao1() {
  return (
   <Estudante/>
  );
}

*/

/*
function Questao2() {
  return (
    <div>
        <EstudanteClasse></EstudanteClasse>
    </div> 
  );
}
*/

/*
function Questao3(){
  return(
    <div>
      <EstudantePai></EstudantePai>
    </div>
  )
}
*/

function Questao4(){
  return(
    <div class='card text-white bg-info border-dark mb-3'  id='box-ini'>
      <div class='card-header'>Estudante</div>
      <div class='card-body' id='box'>
          <EstudanteClassePai/>
      </div>
    </div>
  )
}

export default Questao4;