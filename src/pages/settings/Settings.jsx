import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { useState, useEffect } from "react";
import { getUsers, saveUsers, getCurrentUser, setCurrentUser, clearCurrentUser } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
/* 
receive the functions as a prop and set it to the update button and delete button 
approppriately

*/

export default function Settings() {
  const currentUser = getCurrentUser();
  const [user, setUser] = useState(currentUser);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUsers = getUsers().map(u => u.email === user.email ? user : u);
    saveUsers(updatedUsers);
    setCurrentUser(user);
    navigate("/");
  };

  const handleDelete = () => {
    const remainingUsers = getUsers().filter(u => u.email !== user.email);
    saveUsers(remainingUsers);
    clearCurrentUser();
    navigate("/");
  };

    return (
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete" onClick={handleDelete}>Delete Account</span>
          </div>
          <form className="settingsForm" onSubmit={handleUpdate}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="profile"
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
              />
            </div>
            <label>Username</label>
            <input type="text" placeholder={user.username} name="name" onChange={(e) => setUser({ ...user, username: e.target.value })}/>
            <label>Email</label>
            <input type="email" placeholder={user.email} name="email" onChange={(e) => setUser({ ...user, email: e.target.value })}/>
            <label>Password</label>
            <input type="password" placeholder={user.password}  name="password" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>
        <Sidebar />
      </div>
    );
  }
