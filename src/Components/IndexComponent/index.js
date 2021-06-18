import React,{ Fragment } from 'react';
import './style.css';


import HomeComponent from './../HomeComponent';
import WorkComponent from './../WorkComponent';
import PortfolioComponent from './../PortfolioComponent';
import ProfileComponent from './../ProfileComponent';
import AboutComponent from './../AboutComponent';
import SocialMediaComponent from './../SocialMediaComponent';



function IndexComponent() {
  return (
    <Fragment> 
      <HomeComponent />
      <WorkComponent />
      <PortfolioComponent />
      <ProfileComponent />
      <AboutComponent />
      <SocialMediaComponent />
    </Fragment>
  );
}

export default IndexComponent;
