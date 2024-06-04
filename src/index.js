import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const Skills = [
  { skill: "HTML+CSS", level: "Advanced", color: "#3554f0" },
  { skill: "Java Script", level: "Intermediate", color: "#ecfc00" },
  { skill: "Web Design", level: "Advanced", color: "#347540" },
  { skill: "Git and Github", level: "Intermediate", color: "#e37449" },
  { skill: "React", level: "Advanced", color: "#00ffae" },
  { skill: "Sweltie", level: "Beginner", color: "#fc03a1" },
];

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
      {Skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}
function Skill({ skill, level, color, emoji }) {
  return (
    <div className="tag-name" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "Beginner" && "😒"}</span>
      <span>{level === "Intermediate" && "👍"}</span>
      <span>{level === "Advanced" && "💪"}</span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
