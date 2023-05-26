
const SkillSection = (props) => {
    console.log(props);
  return (
    <div className="skills">
      <h2> {props.name} Skills:</h2>
      <ul>
        {props.skills.map((item) => (
          <li key={item}>{item} : {props.point}</li>
        ))}
      </ul>
    </div>
  );
};


export default SkillSection
