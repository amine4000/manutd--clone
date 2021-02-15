import React from 'react';
import classes from './Toolbar.module.css'
import NavigationItems from './Navigation/NavigationItems/NavigationItems'
import LogoSrc from '../../../assets/Logo.png'
import GlobeIconSVG from '../../../assets/globe.svg'
import SearchIconSVG from '../../../assets/search.svg'
import UserIconSVG from '../../../assets/user.svg'
import hcl from '../../../assets/hcl.png'

const toolbar=()=>{
    var toolbarClasses=[classes.sticky, classes.Toolbar].join(' ')

    return(
        <header className={toolbarClasses}>
            <div className={classes.Toolbarunit1}>
                <a href="#" className={classes.LogoBox}>
                <img className={classes.Logo} src={LogoSrc}/>
                </a>
                <NavigationItems/>
                
            </div>

        <div className={classes.Toolbarunit2}>
        <div className={classes.IconBox}>
            <img src={SearchIconSVG} className={classes.Icon}/>
            <p className={classes.IconDescription}>search</p>
        </div>
        <div className={classes.IconBox}>
            <img src={UserIconSVG} className={classes.Icon}/>
            <p className={classes.IconDescription}>sign In</p>
        </div>
        <div className={classes.IconBox}>
            <img src={GlobeIconSVG} className={classes.Icon}/>
            <p className={classes.IconDescription}>EN</p>
        </div>
        <div className={classes.poweredBy}>
            Powered by<img className={classes.poweredByImg} src={hcl}/>
        </div>

        {/* <div>Sign In</div>
        <div>Language</div>
        <div>Powered by</div> */}
        </div>


        {/* <div>Menu</div>
        <nav>
            ...
        </nav> */}

    </header>

    )

}


export default toolbar;