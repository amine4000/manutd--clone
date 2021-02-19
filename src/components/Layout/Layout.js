import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import PrimaryHeader from '../Header/PrimaryHeader/PrimaryHeader'
import Toolbar from '../Header/Toolbar/Toolbar'

const layout=(props)=>{
return(
    <div>
        <PrimaryHeader/>
        <Toolbar onMouseMove={()=>{
           return console.log('hello worrld')
        }}/>
        <Backdrop/>
    {/* <header>primary header</header> */}
    {/* <div>Toolbar, backdrop, mobileNavigation</div> */}
    <main>
        {props.children}
    </main>
    </div>
)
}

export default layout;