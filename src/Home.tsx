import houseLogo from './assets/house.svg';
import './styles/homepage.css'

const Home = () => {
  return (
    <div className="center">
      <div className="banner" style={{display: "flex"}}>
        <img src={houseLogo} alt="Logo" className="logo noDrag" style={{height: "13em", width: "auto"}} />
        <div id="header-parent">
          <h1 id="houseme-header" style={{fontSize: "10em"}}>GT HouseMe</h1>
        </div>
      </div>
      
      <h2 className ="bigText">Renting made simple, for students, by students</h2>
    </div>
  );
};

export default Home;
