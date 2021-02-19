import React from 'react';
import classes from './NavigationItem.module.css'
import Backdrop from '../../../../../Backdrop/Backdrop'


class navigationItem extends React.Component{
        state={
                show:false
        }

        mouseMoveHandler=()=>{
                const doesShow=this.state.show=true;
                this.setState({show:doesShow})
        }

render(){
        return(
                <div className={classes.NavigationItem__container}>
                                            
                        <li onMouseMove={this.mouseMoveHandler} className={classes.NavigationItem}>
                                 <a className={classes.NavigationLink} href="#">Videos</a>
                         </li>
                         {/* {this.state.show? <Backdrop/>: null} */}
                           
        
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

}

export default navigationItem;