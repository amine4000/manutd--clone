import React from 'react';
import adidasURL from '../../../assets/Adidas.png';
import chevroletURL from '../../../assets/Chevrolet.png';
import aonURL from '../../../assets/Aon.png';
import kohlerURL from '../../../assets/Kohler.png';
import classes from './PrimaryHeader.module.css';


const primaryHeader=()=>(
    <header className={classes.primaryHeader}>
        <ul className={classes.sponsors}>
            <li>
                <a><img className={classes.sponsorLogo} src={adidasURL} alt="sponsored by adidas"/></a>
            </li>
            <li>
                <a><img className={classes.sponsorLogo} src={chevroletURL} alt="sponsored by chevrolet"/></a>
            </li>
            <li>
                <a><img className={classes.sponsorLogo} src={aonURL} alt="sponsored by aon"/></a>
            </li>
            <li><a><img className={classes.sponsorLogo} src={kohlerURL} alt="sponsored by kohler"/></a></li>
        </ul>
    </header>
)

export default primaryHeader