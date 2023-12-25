import "./index.css";

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/profile-pic.png" alt="Anuj profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Anuj Kesarwani</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("./assets/Resume.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            // onclick="location.href='./#contact'"
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
      </div>
    </section>
  );
};

export default Profile;
