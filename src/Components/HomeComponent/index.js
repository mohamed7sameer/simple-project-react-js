import { Container } from 'react-bootstrap';
import './style.css';
const  HomeComponent = () => {
  return (
    <header className="home">
      <Container>
          <div className="home-information">
              <h2 className="home-title margin-bottom">Hamza Nabil</h2>
              <h4 className="home-info">Creative Director</h4>
              <p className="home-desc">
                  Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </p>
              <button className="home-btn">Let's Begin</button>
          </div>
      </Container>
    </header>
  );
}

export default HomeComponent;
