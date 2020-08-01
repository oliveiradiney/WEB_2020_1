import React from 'react';
/*
import Arena from './components/Questao1/Arena'

function App(){
  return(
    <div>
      <Arena></Arena>
    </div>
  );
}

export default App;
*/
/*
import Arena from './components/Questao2/Arena'

function App(){
  return(
    <div>
      <Arena></Arena>
    </div>
  );
}



export default App;
*/

/*
import World from './components/Questao3/World';
import Arena from './components/Questao3/Arena'

function App() {
  return (
    <div>
      <World>
        <Arena />
        <Arena />
        <Arena />
      </World>
    </div>
  );
}

export default App;
*/


import {Hero, Enemy, Arena} from './components/Questao4/Arena'
import {img_1, img_2} from './constants'

function App(){
  return(
    <div>
      <Arena arena='Torneio do poder'>
          <Hero name='Goku' src={img_1}></Hero>
          <Enemy name='Kanba' src={img_2}></Enemy>
      </Arena>  
    </div>
  );
}
export default App;

