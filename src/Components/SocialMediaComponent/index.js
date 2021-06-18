import axios from 'axios';
import React from 'react';
import {SocialMedia,SocialMediaSocial,SocialMediaIcon,SocialMediaParagraph,SocialMediaParagraphSpan} from  './style.js';
class  SocialMediaComponent extends React.Component {

  state = {
    dataSocial : []
  }
  componentDidMount(){
    const dataSocialJson = axios.get('js/data.json').
    then((result)=>{
      this.setState({
        dataSocial : result.data.social
      })
    })
  }

  render(){

    const {dataSocial} = this.state;
    const socialElement = dataSocial.map((val)=>{
      return(
          <SocialMediaSocial key={val.id} iconId={val.id}>
              <SocialMediaIcon className={val.icon}></SocialMediaIcon>
              <SocialMediaParagraph>
                  <SocialMediaParagraphSpan>{val.title}</SocialMediaParagraphSpan>
                  <SocialMediaParagraphSpan className="info2">{val.body}</SocialMediaParagraphSpan>
              </SocialMediaParagraph>
          </SocialMediaSocial>
      )
    })

    return (
      <SocialMedia>
          {socialElement}
      </SocialMedia>
    );
  }
  
}

export default SocialMediaComponent;
