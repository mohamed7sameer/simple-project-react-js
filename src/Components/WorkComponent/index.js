import {Work,WorkTitle,WorkTitleSpan,WorkPart,
  WorkPartIcon,WorkPartTitle,WorkPartLine,WorkPartDesc} from './style';    
import { Container,Row,Col } from 'react-bootstrap';
import { Component } from 'react';
import axios from 'axios';
class  WorkComponent extends Component {
  state = {
    works : []
  }

  
  componentDidMount = () => {
    axios.get('js/data.json').then((res)=>{
      this.setState({
        works : res.data.works
      })
    })
    
  }

  render = ()=>{

    const {works} = this.state;
    const worksList = works.map((value)=>{
      return(
        <Col key={value.id}>
          <WorkPart>
              <WorkPartIcon className={value.icon_name} ></WorkPartIcon>
              <WorkPartTitle>{value.title}</WorkPartTitle>
              <WorkPartLine></WorkPartLine>
              <WorkPartDesc>
                  {value.body}
              </WorkPartDesc>
          </WorkPart>        
        </Col>
      )
    })

    return (
      <Work>
        <Container>
          <WorkTitle>
            <WorkTitleSpan>My</WorkTitleSpan> Work
          </WorkTitle>
          <Row>
            {worksList}
          </Row>
          
        </Container>
      </Work>
    );
  }
  
}

export default WorkComponent;
