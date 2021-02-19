import React, {Component} from 'react'
import Layout from './components/Layout/Layout'
import LatestNews from './components/LatestNews/LatestNews'
import LatestVideos from './components/LatestVideos/LatestVideos'
import NextMatch from './components/NextMatch/NextMatch'
import oldTrafford from './assets/oldTrafford.jpg'
import ucl from './assets/ucl.png'
import manUtdLogo from './assets/Logo.png'
import psgLogo from './assets/psg.png'

class App extends Component {

render(){
  return (
    <div>    
      <Layout>
            <LatestNews/>
            <LatestVideos/>
            <NextMatch 
            srcBackground={oldTrafford} 
            uclSrc={ucl} 
            title={'Wednesday 2 December 2020 Kick Off 21:00'}
            manUtdLogo={manUtdLogo}
            psgLogo={psgLogo}
            />
            <LatestNews/>
            <LatestVideos/>
            <NextMatch 
            srcBackground={oldTrafford} 
            uclSrc={ucl} 
            title={'Wednesday 2 December 2020 Kick Off 21:00'}
            manUtdLogo={manUtdLogo}
            psgLogo={psgLogo}
            />
      </Layout>
    </div>
  )

  
}

 
}

export default App;
