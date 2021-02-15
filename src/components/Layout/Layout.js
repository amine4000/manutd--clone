import React from 'react'
import PrimaryHeader from '../Header/PrimaryHeader/PrimaryHeader'
import Toolbar from '../Header/Toolbar/Toolbar'

const layout=(props)=>{
return(
    <div>
        <PrimaryHeader/>
        <Toolbar/>
    {/* <header>primary header</header> */}
    {/* <div>Toolbar, backdrop, mobileNavigation</div> */}
    <main>
        {props.children}
    </main>
    </div>
)
}

export default layout;