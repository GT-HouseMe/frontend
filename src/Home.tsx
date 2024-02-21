import logoBlack from '../public/logoBlack.png';
import './styles/homepage.css'

const Home = () => {
  return (
    <div className="center">
      <img src={logoBlack} alt="Logo" className="logo noDrag" />
      <h2 className ="bigText">Renting made simple, for students, by students</h2>
    </div>
  );
};

export default Home;
