import { Grid, Typography, styled } from "@mui/material";
// import Photo from "../../../public/assets/profile-pic.png";
import './index.css'

const Profile = () => {
  return (
    <ProfileContainer>
      <PhotoContainer>
        <img src="./assets/profile-pic.png" alt="" />
      </PhotoContainer>
      <Content>
        <Typography variant="h3" sx={{ fontWeight: 600, textAlign: "center" }}>
          Hello, I'm
        </Typography>
        <Typography variant="h1" sx={{ fontSize: "3rem", textAlign: "center" }}>
          Anuj Kesarwani
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.75rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Frontend Developer
        </Typography>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            // onClick="window.open('./assets/resume-example.pdf')"
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            //   onClick="location.href='./#contact'"
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            // onclick="location.href='https://linkedin.com/'"
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            // onclick="location.href='https://github.com/'"
          />
        </div>
      </Content>
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

export const Content = styled(Grid)({
  alignSelf: "center",
  textAlign: "center",
});
