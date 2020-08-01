import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
function Hero(props){
    return(
        <div className='hero'>
            <div className='card' style={{width:'25.5rem'}}>
                <img src={props.src} className='card-img-top' style={{height:'500px', width:'400px'}} alt='img'></img>
                <div className='card-body'>
                    <h5 className='card-text'>Hero: {props.name}</h5>
                    <h5 className='card-text'>Arena: {props.arena}</h5>
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
                <h5 className='card-text'>Arena: {props.arena}</h5>
            </div>
            </div>
        </div>
    );
}

function Arena(props){
    return(
        <div>
          {React.Children.map(props.children, (filho) => {
                return React.cloneElement(filho, {...props});
            })}
        </div>
    );

}

export {Hero, Enemy, Arena};