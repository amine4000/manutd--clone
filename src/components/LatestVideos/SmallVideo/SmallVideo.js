import React from 'react';
// import youthImg from '../../../assets/youth.jpg'
import classes from './SmallVideo.module.css'
import VidIcon from '../../../assets/playVideo.png'

const smallVideo=(props)=>{
    return(
        <div className={classes.SmallVideo}>
            <div className={classes.SmallVideo__ImgBox}>
                <img  src={props.src} className={classes.SmallVideo__Pic}/>
            </div>
            <div className={classes.SmallVideo__text}>
            <img src={VidIcon} className={classes.BigVideo__VidIcon}/>
                    <div className={classes.SmallVideo__header}>
                        <h2 className={classes.SmallVideo__title}>
                            {props.title}
                           </h2>
                    </div>
                    <div className={classes.SmallVideo__footer}>
                        <div className={classes.SmallVideo__TimeSection}>
                            <div className={classes.SmallVideo__time}>{props.time}</div>
                            <div>|</div>
                        <div className={classes.SmallVideo__section}> {props.section}</div>
                        </div>
                        <div className={classes.SmallVideo__shareIcon}>
                            <a href="#"><i class="fas fa-share-alt"></i></a>
                        </div>   
                    </div>
            </div>
        </div>)

}

export default smallVideo