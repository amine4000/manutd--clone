import React from 'react'
import classes from './LatestVideos.module.css';

import rashImg from '../../assets/rashford.jpg'
import oleImg from '../../assets/ole.jpg'
import youthImg from '../../assets/youth.jpg'
import degeaImg from '../../assets/degea.jpg'
import BrunoImg from '../../assets/bruno.jpg'


import BigVideo from './BigVideo/BigVideo'
import SmallVideo from './SmallVideo/SmallVideo'

const latestVideos=()=>{
    return(
        <div className={classes.LatestVideos}>
            <div className={classes.LatestArticles}>
            <BigVideo type={"small"} src={rashImg} 
            title={ "RASHFORD LEADS THE WAY AHEAD OF ISTANBUL CLASH"}
            time={"1d"}
            section={"interveiws"}
            />

            <BigVideo src={oleImg} 
            title={ "OLE REVEAL team news for saints game"}
            time={"21h"}
            section={"news"}
            />
            </div>
            <div>

            </div>
            <div style={{display:"flex", justifyContent: "space-evenly"}}>
            <SmallVideo src={BrunoImg}
                        title={ "The latest news on De Gea's knee injury"}
                        desc={"Manchester United boss Ole Gunnar Solskjaer has provided the latest news on his squad in advance of Sunday afternoon's Premier League game at Southampton"}
                        time={"21h"}
                        section={"news"}
            />
                        <SmallVideo src={BrunoImg}
                        title={ "OLE REVEAL team news for saints game"}
                        desc={"Manchester United boss Ole Gunnar Solskjaer has provided the latest news on his squad in advance of Sunday afternoon's Premier League game at Southampton"}
                        time={"21h"}
                        section={"news"}
            />
                                    <SmallVideo src={BrunoImg}
                        title={ "OLE REVEAL team news for saints game"}
   desc={"David has vowed to be \"back soon\" from the blow, after Ole confirmed he will undergo further tests on Monday"}
                        time={"21h"}
                        section={"news"}
            />
                        <SmallVideo src={BrunoImg}
                        title={ "OLE REVEAL team news for saints game"}
                        desc={"Manchester United boss Ole Gunnar Solskjaer has provided the latest news on his squad in advance of Sunday afternoon's Premier League game at Southampton"}
                        time={"21h"}
                        section={"news"}
            />
            </div>
            


            
        </div>)

}

export default latestVideos