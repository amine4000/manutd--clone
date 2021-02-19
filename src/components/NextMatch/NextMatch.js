import React from 'react';
import classes from './NextMatch.module.css'
// import VidIcon from '../../../assets/playVideo.png'
const BigArticle=(props)=>{

// background

//champions league logo

//date 

//timer

//man utd vs psg (with the logos)

//button match centre

    return(
        <figure className={classes.NextMatch__ImgBox}>
          <img src={props.srcBackground} className={classes.NextMatch__Pic}></img>
          <div className={classes.NextMatch__text}>
                <img src={props.uclSrc} className={classes.NextMatch__ucl}></img>
                        <div className={classes.NextMatch__header}>
                            <h3 className={classes.NextMatch__title}>
                                {props.title}
                        </h3>
                    </div>
                </div>
                <div className={classes.NextMatch__Timer}>

                </div>
                <div className={classes.NextMatch__teams}>
                    <div className={classes.ManUTD}>MAN UTD</div>
                    <img src={props.manUtdLogo}  className={classes.ClubLogos}></img>
                    <div className={classes.versus}>vs</div>
                    <img src={props.psgLogo} className={classes.ClubLogos}></img>
                    <div className={classes.PSG}>PSG</div>
                </div>
                    <button className={classes.btn}>
                        <a href="#">Match Centre</a>
                    </button>

        </figure>

        )
    }
        /* // <article className={classes.NextMatch}>
        //     <div className={classes.BigVideo__ImgBox}>
        //          <img src={props.src} className={classes.BigVideo__Pic}></img>
        //     </div>
        //     <div className={classes.BigVideo__text}>
        //         <img src={VidIcon} className={classes.BigVideo__VidIcon}/>
        //             <div className={classes.BigVideo__header}>
        //                 <h2 className={classes.BigVideo__title}>
        //                     {props.title}
        //                    </h2>

        //             </div>
        //             <div className={classes.BigVideo__footer}>
        //                 <div className={classes.BigVideo__TimeSection}>
        //                     <div className={classes.BigVideo__time}>{props.time}</div>
        //                     <div>|</div>
        //                 <div className={classes.BigVideo__section}>{props.section}</div>
        //                 </div>
        //                 <div className={classes.BigVideo__shareIcon}><a href="#"><i class="fas fa-share-alt"></i></a></div>   
        //             </div>
        //     </div>
        // </article> */
    



export default BigArticle;