import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput title="RestApi" link="" />
        <SkillsInput
          title="Typescript"
          link="https://www.typescriptlang.org/"
        />
        <SkillsInput title="Redux Toolkit" link="" />
        <SkillsInput
          title="Google Firebase"
          link="https://firebase.google.com/"
        />
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput
          title="SCSS/SASS"
          link="https://sass-lang.com"
        />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="BEM" link="https://getbem.com/" />
        <SkillsInput title="Trello" link="https://trello.com/en" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="Vercel" link="https://vercel.com/" />
      </div>
    </div>
  );
};

export default Skills;