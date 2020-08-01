import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function Hero(props){
    return(
        <div className='hero'>
            <div className='card' style={{width:'25.5rem'}}>
                <img src={props.src} className='card-img-top' style={{height:'500px', width:'400px'}} alt='img'></img>
                <div className='card-body'>
                    <h5 className='card-text'>Hero: {props.name}</h5>
                </div>
            </div>  
        </div>
    );
}

function Enemy(props){
    return(
        <div className='enemy'>
            <div className='card' style={{width: '25.5rem'}}>
            <img src={props.src} className='card-img-top' style={{height:'500px', width:'400px'}} alt='img'></img>
            <div className="card-body">
                <h5 className='card-text'>Enemy: {props.name}</h5>
            </div>
            </div>
        </div>
    );
}

function Arena(){
    return(
        <div>
            <Hero name='Goku' src={require('../../img/Hero.jpg')}/>
            <Enemy name='Kanba' src={require('../../img/Enemy.png')}/>
        </div>
    );

}

export default Arena;