import React from 'react';
import classes from './BigArticle.module.css'

const BigArticle=(props)=>{


    return(
        <article className={classes.BigArticle}>
            <div className={classes.BigArticle__ImgBox}>
                 <img src={props.src} className={classes.BigArticle__Pic}></img>
            </div>
            <div className={classes.BigArticle__text}>
                    <div className={classes.BigArticle__header}>
                        <h2 className={classes.BigArticle__title}>
                            {props.title}
                           </h2>
                        <p className={classes.BigArticle__desc}>
                            {props.desc}  
                        </p>
                    </div>
                    <div className={classes.BigArticle__footer}>
                        <div className={classes.BigArticle__TimeSection}>
                            <div className={classes.BigArticle__time}>{props.time}</div>
                            <div>|</div>
                        <div className={classes.BigArticle__section}> {props.section}</div>
                        </div>
                        <div className={classes.BigArticle__shareIcon}><a href="#"><i class="fas fa-share-alt"></i></a></div>   
                    </div>
            </div>
        </article>
    )
}

export default BigArticle;








// import React from 'react';
// import classes from './BigArticle.module.css'

// const BigArticle=(props)=>{

//     const classesArticleType=['BigArticle']
//     const classesArticleTitle=['BigArticle__title']
//     const classesArticleDesc=['BigArticle__desc']

//     if(props.type==="small"){
//         classesArticleType.push('BigArticle__small')
//         classesArticleTitle.push('BigArticle__title__small')
//         classesArticleDesc.push('BigArticle__desc__small')
//     }
    
//     return(
//         // <article className={classes.BigArticle}>
//         <article className={classesArticleType.join(" ")}>
//         <div className={classes.BigArticle__ImgBox}>
//              <img src={props.src} className={classes.BigArticle__Pic}></img>
//         </div>
//         <div className={classes.BigArticle__text}>
//                 <div className={classes.BigArticle__header}>
//                     <h2 className={classesArticleTitle.join(' ')}>
//                         {props.title}
//                        </h2>
//                     <p className={classesArticleDesc.join(' ')}>
//                         {props.desc}
                        
//                     </p>
//                 </div>
//                 <div className={classes.BigArticle__footer}>
//                     <div className={classes.BigArticle__TimeSection}>
//                     <div className={classes.BigArticle__time}>{props.time}</div>
//                         <div>|</div>
//                     <div className={classes.BigArticle__section}> {props.section}</div>
//                     </div>
//                     <div className={classes.BigArticle__shareIcon}><a href="#"><i class="fas fa-share-alt"></i></a></div>   
//                 </div>
//         </div>
//     </article>
//     )
// }

// export default BigArticle;