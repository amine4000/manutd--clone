import React from 'react'
import BigArticle from './BigArticle/BigArticle'
import classes from './LatestNews.module.css';
import rashImg from '../../assets/rashford.jpg'
import oleImg from '../../assets/ole.jpg'
import youthImg from '../../assets/youth.jpg'
import degeaImg from '../../assets/degea.jpg'

import SmallArticle from './SmallArticle/SmallArticle'
import Videos from '../Videos/Videos'
const latestNews=()=>{
    return(
        <div className={classes.LatestNews}>
            <div className={classes.LatestArticles}>
            <BigArticle type={"small"} src={rashImg} 
            title={ "RASHFORD LEADS THE WAY AHEAD OF ISTANBUL CLASH"}
            desc={"Andy cole tells us what rashford needs to do to continue moving up the rankings of champions league scorers."}
            time={"1d"}
            section={"interveiws"}
            />

            <BigArticle src={oleImg} 
            title={ "OLE REVEAL team news for saints game"}
            desc={"Manchester United boss Ole Gunnar Solskjaer has provided the latest news on his squad in advance of Sunday afternoon's Premier League game at Southampton"}
            time={"21h"}
            section={"news"}
            />
            </div>
            <div>

            </div>
            <div style={{display:"flex", justifyContent: "space-evenly"}}>
            <SmallArticle src={youthImg}
                        title={ "The latest news on De Gea's knee injury"}
                        desc={"Manchester United boss Ole Gunnar Solskjaer has provided the latest news on his squad in advance of Sunday afternoon's Premier League game at Southampton"}
                        time={"21h"}
                        section={"news"}
            />
                        <SmallArticle src={degeaImg}
                        title={ "OLE REVEAL team news for saints game"}
                        desc={"Manchester United boss Ole Gunnar Solskjaer has provided the latest news on his squad in advance of Sunday afternoon's Premier League game at Southampton"}
                        time={"21h"}
                        section={"news"}
            />
                                    <SmallArticle src={degeaImg}
                        title={ "OLE REVEAL team news for saints game"}
   desc={"David has vowed to be \"back soon\" from the blow, after Ole confirmed he will undergo further tests on Monday"}
                        time={"21h"}
                        section={"news"}
            />
                        <SmallArticle src={degeaImg}
                        title={ "OLE REVEAL team news for saints game"}
                        desc={"Manchester United boss Ole Gunnar Solskjaer has provided the latest news on his squad in advance of Sunday afternoon's Premier League game at Southampton"}
                        time={"21h"}
                        section={"news"}
            />
            </div>
            


            
        </div>)

}

export default latestNews