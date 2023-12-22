import { Grid, styled } from "@mui/material";
// import Photo from "../../../public/assets/profile-pic.png";

const Profile = () => {
  return (
    <ProfileContainer>
      <PhotoContainer>
        <img src="../../../public/assets/profile-pic.png" alt="" />
      </PhotoContainer>
      <Content></Content>
    </ProfileContainer>
  );
};

export default Profile;

export const ProfileContainer = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  gap: "5rem",
  height: "80vh",
});

export const PhotoContainer = styled(Grid)({
  display: "flex",
  height: "400px",
  width: "400px",
  margin: "auto 0",
});

export const Content = styled(Grid)({});
