import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#99CCCC"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#99CCCC"
  },
  {
    skill: "Accessibility",
    level: "intermediate",
    color: "violet"
  },
  {
    skill: "React",
    level: "intermediate",
    color: "violet"
  },
  {
    skill: "Angular",
    level: "beginner",
    color: "lightgreen"
  },
]

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}

const Avatar = () => {
  return <img className="avatar" src="../img/robin-curly.jpg" alt="Robin Burrage" />
}

const Intro = () => {
  return (
    <>
      <h1>Robin Burrage</h1>
      <p>A Senior Front End Engineer specilaizing in UX/UI.</p>
    </>
  )
}

const SkillList = () => {
  return (
    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  )
}

const Skill = ({ skill, color, level }) => {
  return <div className='skill' style={{ backgroundColor: color }}>
    <span>{skill}</span>
    <span>
      {level === "beginner" && "😑"}
      {level === "intermediate" && "👍"}
      {level === "advanced" && "💪"}
    </span>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
