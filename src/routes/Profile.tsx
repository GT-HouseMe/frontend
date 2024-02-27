import "../styles/profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const username = "user123";
  const name = "Yee Haw";
  return (
    <div>
      <center><h1>Profile</h1>
      <br />
      <br />
      <table>
        <tr>
          <th><h2>{username}</h2></th>
          <th><h2>Current Residence</h2></th>
          <th><h2>Roommates</h2></th>
        </tr>
        <tr>
          <td><center>{name}<br />
          Pronouns:</center>
          </td>
          <td><center><Link className="listings" to="/Listings">View Available Housing</Link></center></td>
          <td><center><button type="button">Find People</button></center></td>
        </tr>
        <tr>
          <td><center><br /><br /><h2>About Me</h2>
          <input type="text"></input></center></td>
          <td><center><h2>Gallery</h2></center></td>
          <td><center>Past Roommates:</center></td>
        </tr>
        <tr>
          <td><br /><br />
          <center><button type="button">Edit Profile</button></center>
          </td>
        </tr>
      </table>
      </center>
    </div>
  );
};

export default Profile;
