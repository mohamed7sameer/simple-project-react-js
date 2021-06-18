import axios from 'axios';
import React, { useState,useEffect } from 'react';
import {
  Portfolio,
  PortfolioTitle,
  PortfolioTitleSpan,
  PortfolioList,
  PortfolioListItem,
  Box,
  BoxItem,
  BoxItemImg,
  BoxItemOverlay,
  BoxItemOverlaySpan} from './style.js';

  
const  PortfolioComponent = () => {
  const [dataPortfolio,setDataPortfolio] = useState([])
  
  useEffect(()=>{
    axios.get('js/data.json').
    then((res)=> {
      setDataPortfolio(res.data.portfolio)
    })
  },[])

  const items = dataPortfolio.map((val)=>{
    return(
      <BoxItem key={val.id}>
          <BoxItemImg src={"assets" + val.image} alt="" />
          <BoxItemOverlay className="overlay">
              <BoxItemOverlaySpan>
                  Show Image
              </BoxItemOverlaySpan>
          </BoxItemOverlay>
      </BoxItem>
    )
  })

  return (
    
    <Portfolio>
            <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioListItem active>All</PortfolioListItem>
                <PortfolioListItem>HTML</PortfolioListItem>
                <PortfolioListItem>Photoshop</PortfolioListItem>
                <PortfolioListItem>Wordpress</PortfolioListItem>
                <PortfolioListItem>Mobile</PortfolioListItem>
            </PortfolioList>
            
            <Box>       
                {items}   
            </Box>
        </Portfolio>

  );
}

export default PortfolioComponent;
