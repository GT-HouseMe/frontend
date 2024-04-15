import "../styles/profile.css";
import { Link, useParams } from "react-router-dom";
import galleryimg from './Images/mikeandsully.jpg'
import profilepic from './Images/profile.png'
import Cookies from 'js-cookie';
import { ChangeEvent, SetStateAction, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  console.log('cookies: ', Cookies.get());
  const user = useParams();
  console.log(user);
  const [username, setUsername] = useState<string>("user123@email.com");
  axios.get('http://localhost:3000/users/${user}').then((response) => setUsername(response.data.email));
  const [name, setName] = useState<string>("Yee Haw");
  axios.get('http://localhost:3000/users/${user}').then((response) => setName(response.data.name));
  const [description, setDescription] = useState<string>("Describe yourself here");
  axios.get('http://localhost:3000/users/${user}').then((response) => setDescription(response.data.description));
  const [edit, setEdit] = useState<string>("Edit Profile");
  const [friends, setFriends] = useState<Array<string>>([""]);
  axios.get('http://localhost:3000/users').then((response) => setFriends(response.data));
  let d = "Describe yourself here";
  function handleEditProfile() {
    if (edit == "Edit Profile") {
      setEdit("Save");
    } else {
      setDescription(d);
      axios.patch('http://localhost:3000/users/${user}', {description: description}).then(response => console.log(response.data)).catch(error => console.log(error.response));
      setEdit("Edit Profile");
    }
  }
  function handleFindFriends() {
    setFriends([...friends, "person"])
  }
  function handleAddDescription(event: ChangeEvent) {
    if (edit == "Save" && event.currentTarget.tagName != "") {
      d = event.currentTarget.tagName;
    }
  }
  const toList = n => <li>{n}</li>;
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
          <th><h2>Friends</h2></th>
        </tr>
        <tr>
          <td><center>{name}</center>
          </td>
          <td><center>
            Homeless <br />
            <Link className="listings" to="/Listings">View Available Housing</Link></center></td>
          <td><center><button type="button" onClick={handleFindFriends}>Add People</button></center></td>
        </tr>
        <tr>
          <td><center><br /><br /><h2>About Me</h2></center></td>
          <td><center><h2>Gallery</h2></center></td>
          <td><center>Friends: <ul>{friends.map(toList)}</ul></center></td>
        </tr>
        <tr>
          <td>
          <center>
            <textarea name="" id="" cols="30" rows="10" placeholder={description} onChange={handleAddDescription}></textarea><br />
            <button type="button" onClick={handleEditProfile}>{edit}</button></center>
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
