import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {img_1, img_2} from '../../constants';
import './style.css';
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
            <Hero name='Goku' src={img_1}/>
            <Enemy name='Kanba' src={img_2}/>
        </div>
    );

}

export default Arena;