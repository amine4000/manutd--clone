import React from 'react';
import classes from './NavigationItem.module.css'



const navigationItem=()=>{

return(
        <div className={classes.NavigationItem__container}>
        <li className={classes.NavigationItem}>
                <a className={classes.NavigationLink} href="#">Videos</a>
        </li>
        <li className={classes.NavigationItem}>
                <a className={classes.NavigationLink} href="#">News</a>
        </li>
        <li className={classes.NavigationItem}>
                <a className={classes.NavigationLink} href="#">Shop</a>
        </li>
        <li className={classes.NavigationItem}>
                <a className={classes.NavigationLink} href="#">Fixtures</a>
        </li>
        <li className={classes.NavigationItem}>
                <a className={classes.NavigationLink} href="#">Players</a>
        </li>
        <li className={classes.NavigationItem}>
                <a className={classes.NavigationLink} href="#">My United</a>
        </li>
        <li className={classes.NavigationItem}>
                <a className={classes.NavigationLink} href="#">Tickets</a>
        </li>
        <li className={classes.NavigationItem}>
                <a className={classes.NavigationLink} href="#">Old trafford</a>
        </li>
        <li className={classes.NavigationItem}>
                <a className={classes.NavigationLink} href="#">More</a>
        </li>
        </div>
        
)
}

export default navigationItem;