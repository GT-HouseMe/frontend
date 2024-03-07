import "../styles/profile.css";
import { Link } from "react-router-dom";
import galleryimg from './Images/mikeandsully.jpg'
import profilepic from './Images/profile.png'

const Profile = () => {
  const username = "user123";
  const name = "Yee Haw";
  return (
    <div>
      <center>
        <h1>Profile</h1>
      <br />
      <br />
      <table>
        <tr>
          <th>
          <center><img src={profilepic} width="100px" height="100px"></img></center>
          <h2>{username}</h2></th>
          <th><h2>Current Residence</h2></th>
          <th><h2>Roommates</h2></th>
        </tr>
        <tr>
          <td><center>{name}<br />
          Pronouns:</center>
          </td>
          <td><center>
            Homeless <br />
            <Link className="listings" to="/Listings">View Available Housing</Link></center></td>
          <td><center><button type="button">Find People</button></center></td>
        </tr>
        <tr>
          <td><center><br /><br /><h2>About Me</h2></center></td>
          <td><center><h2>Gallery</h2></center></td>
          <td><center>Past Roommates:</center></td>
        </tr>
        <tr>
          <td>
          <center>
            <textarea name="" id="" cols="30" rows="10"></textarea><br />
            <button type="button">Edit Profile</button></center>
          </td>
          <td><center>
            <table className="gallery">
              <tr className="gallery">
                <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
              </tr>
              <tr className="gallery">
              <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
              </tr>
              <tr className="gallery">
              <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
              </tr>
              <tr className="gallery">
              <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
                <td className="gallery"><img src={galleryimg}></img></td>
              </tr>
            </table>
            <button type="button">Add Photos</button>
            </center></td>
        </tr>
      </table>
      </center>
    </div>
  );
};

export default Profile;
