import React from 'react';
import tape from '../../assets/playVideo.png'
import classes from './Videos.module.css'
const videos=(props)=>{

    
    return(
        <article className={classes.Video}>
        <div className={classes.Video__ImgBox}>
             <img src={props.src} className={classes.Video__Pic}></img>
        </div>
        <div>
            <img src={tape}/>
        </div>
        <div className={classes.Video__text}>
                <div className={classes.Video__header}>
                    <h2 className={classes.Video__title}>
                        {props.title}
                       </h2>
                </div>
                <div className={classes.Video__footer}>
                    <div className={classes.Video__TimeSection}>
                        <div className={classes.Video__time}>{props.time}</div>
                        <div>|</div>
                    <div className={classes.Video__section}> {props.section}</div>
                    </div>
                    <div className={classes.Video__shareIcon}><a href="#"><i class="fas fa-share-alt"></i></a></div>   
                </div>
        </div>
    </article>
    )


}

export default videos;