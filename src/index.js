import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="box-main">
      <Avatar />
      <div className="bottom">
        <Intro />
        <Skillset />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="profile" src="./images/image1.jpg" alt="profile" />;
}
function Intro() {
  return (
    <div>
      <h1 className="profile-name">Bala Krishna Baddi </h1>
      <p>
        Hey i'm a full stack developer with 3 years of industrial experience. i
        worked almost ever cornor of the web technology. I Worked at PWc,
        Amazon, NetFlix etc technologies along React.js angular java script
        node.js etc..
      </p>
    </div>
  );
}
function Skillset() {
  return (
    <div className="tags-block">
      <Skill id="one" skill="HTML&CSS" emoji="💪" />
      <Skill id="two" skill="Java Script" emoji="💪" />
      <Skill id="three" skill="Web Design" emoji="💪" />
      <Skill id="four" skill="Git and Github" emoji="💪" />
      <Skill id="five" skill="React" emoji="💪" />
      <Skill id="six" skill="Sweltie" emoji="💪" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="tag-name" id={props.id}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
