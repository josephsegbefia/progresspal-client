import React from "react";
import {
  ProfileImageContainer,
  ProfileImage,
  ProfileContainer,
  ContactInfo
} from "../styled/styled";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImageContainer>
        <ProfileImage
        // src=
        // "https://media.licdn.com/dms/image/D4E35AQE-6lwR0eKqhA/profile-framedphoto-shrink_100_100/0/1691417306080?e=1695502800&v=beta&t=36jsfYuRwaxrZwNXplg5DIksYU8vvqvZNRMLyx4XmsY"
        ></ProfileImage>
      </ProfileImageContainer>
      <ContactInfo>
        <h1>Name: Joseph Segbefia</h1>
        <h2>Email: elsegbefia@gmail.com</h2>
        <h2>Member Since: 20th Sept 2020</h2>
      </ContactInfo>
    </ProfileContainer>
  );
};

export default Profile;
