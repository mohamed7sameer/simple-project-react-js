import {
  Creative,
  CreativeInfo,
  CreativeInfoTitle,
  CreativeInfoTitleSpan,
  CreativeInfoDir,
  CreativeInfoDesc,
  CreativeInfoDescLink
} from  './style.js';
import { Container } from 'react-bootstrap';
const  AboutComponent = () => {
  return (
    <Creative>
      <Container>
        <CreativeInfo>
          <CreativeInfoTitle><CreativeInfoTitleSpan>This is</CreativeInfoTitleSpan> Me</CreativeInfoTitle>
          <CreativeInfoDir>Creative Director</CreativeInfoDir>
          <CreativeInfoDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </CreativeInfoDesc>
          <CreativeInfoDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </CreativeInfoDesc>
        </CreativeInfo>
      </Container>
    </Creative>
  );
}

export default AboutComponent;
