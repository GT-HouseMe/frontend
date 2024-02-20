import logoBlack from '../public/logoBlack.png';
import './styles/homepage.css'

const Home = () => {
  return (
    <div className="center">
      <img src={logoBlack} alt="Logo" className="logo" />
      <h2>Renting made simple, for students, by students</h2>
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  );
};

export default Home;
