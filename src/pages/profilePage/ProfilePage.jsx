import React, { useContext, useEffect } from "react";
import List from "../../components/list/List";
import "./profilePage.scss";
import Chat from "../../components/chat/Chat";
import axiosInstance from "../../lib/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function ProfilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to='/profile/update'>
              <button>Update Profile</button>
            </Link>
          </div>

          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src={
                  currentUser?.avatar ||
                  "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.email}</b>
            </span>

            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>

          <List />

          <div className="title">
            <h1>Saved List</h1>
          </div>

          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
