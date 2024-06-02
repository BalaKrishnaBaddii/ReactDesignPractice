import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      {/* <Box /> */}
      <Emojis />
    </div>
  );
}
function Emojis() {
  return <Box imageName="htmlcss" emoji="./images/html_css.svg" />;
}
function Box(props) {
  return (
    <div className="box-main">
      <div className="top">
        <img className="profile" src="./images/image1.jpg" alt="profile" />
      </div>
      <div className="bottom">
        <h1 className="profile-name">Bala Krishna Baddi </h1>
        <p>
          Hey i'm a full stack developer with 3 years of industrial experience.
          i worked almost ever cornor of the web technology. I Worked at PWc,
          Amazon, NetFlix etc technologies along React.js angular java script
          node.js etc..
        </p>
        <div className="tags-block">
          <div>
            <div className="tag-name" id="one">
              <div>HTML+CSS</div>
              <img
                className="tag-emoji"
                id="emoji-1"
                src={props.emoji}
                alt={props.imageName}
              />
            </div>
          </div>
          <div>
            <div className="tag-name" id="two">
              <div>Java Script</div>
              <img
                className="tag-emoji"
                id="emoji-1"
                src={props.emoji}
                alt={props.imageName}
              />
            </div>
          </div>
          <div>
            <div className="tag-name" id="three">
              <div>Web Design</div>
              <img
                className="tag-emoji"
                id="emoji-1"
                src={props.emoji}
                alt={props.imageName}
              />
            </div>
          </div>

          <div>
            <div className="tag-name" id="four">
              <div>Git and GitHub</div>
              <img
                className="tag-emoji"
                id="emoji-1"
                src={props.emoji}
                alt={props.imageName}
              />
            </div>
          </div>

          <div>
            <div className="tag-name" id="five">
              <div>React</div>
              <img
                className="tag-emoji"
                id="emoji-1"
                src={props.emoji}
                alt={props.imageName}
              />
            </div>
          </div>

          <div className="tag-name" id="six">
            <div>Swelte</div>
            <img
              className="tag-emoji"
              id="emoji-1"
              src={props.emoji}
              alt={props.imageName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
