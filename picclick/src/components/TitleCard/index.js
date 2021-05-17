import React from 'react';
import './style.css';
import vaultboyheader from '../../vaultboys02.png'

function TitleCard(props){
    return (
        <div className='jumbotron' style={{backgroundImage:`url(${vaultboyheader})`}}>
            <div className='title'>Vault Tec Memory Test</div>
        </div>
    );
}

export default TitleCard;