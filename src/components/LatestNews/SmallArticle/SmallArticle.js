import React from 'react';
// import youthImg from '../../../assets/youth.jpg'
import classes from './SmallArticle.module.css'

const smallArticle=(props)=>{
    return(
        <div className={classes.SmallArticle}>
            <div className={classes.SmallArticle__ImgBox}>
                <img  src={props.src} className={classes.SmallArticle__Pic}/>
            </div>
            <div className={classes.SmallArticle__text}>
                    <div className={classes.SmallArticle__header}>
                        <h2 className={classes.SmallArticle__title}>
                            {props.title}
                           </h2>
                        <p className={classes.SmallArticle__desc}>
                            {props.desc}  
                        </p>
                    </div>
                    <div className={classes.SmallArticle__footer}>
                        <div className={classes.SmallArticle__TimeSection}>
                            <div className={classes.SmallArticle__time}>{props.time}</div>
                            <div>|</div>
                        <div className={classes.SmallArticle__section}> {props.section}</div>
                        </div>
                        <div className={classes.SmallArticle__shareIcon}>
                            <a href="#"><i class="fas fa-share-alt"></i></a>
                        </div>   
                    </div>
            </div>
        </div>)

}

export default smallArticle