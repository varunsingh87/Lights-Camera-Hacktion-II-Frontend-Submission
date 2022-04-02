import React from 'react';
import { Logo } from '../images/Netflix'
import { ConnectButton, Icon, TabList, Tab } from 'web3uikit'
import Movies from '../components/Movies';
import './Home.css'

const Home = () => {

  return (
    <>
      <div className='logo'>
        <Logo />
      </div>
      <div className='connect'>
        <Icon fill='white' size={24} svg='bell' />
        <ConnectButton />
      </div>
      <div className="topBanner">
        <TabList defaultActiveKey={1} tabStyle="bar">
          <Tab tabKey={1} tabName='Movies'>
            <Movies />
          </Tab>
          <Tab tabKey={2} tabName='Watch List'>

          </Tab>
          <Tab tabKey={3} tabName='Create a Movie'>

          </Tab>
          <Tab tabKey={4} tabName='Find a movie'>

          </Tab>
          <Tab tabKey={5} tabName='Fan Art'>

          </Tab>
        </TabList>
      </div>
    </>
  )
}

export default Home;
