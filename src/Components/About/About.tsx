import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

export const About = () => {
  return (
    <div className="AboutPage">
      <div className="AboutText">
        <h1 className="AboutTextHeading">
          A Bit <b>About Me</b>
        </h1>
        <p>
          I love the process of changing a raw idea into a website or a product
          that impacts lives. I want to do work that challenges me as a
          developer & work that I can be proud of.
          <br />
          <br />I am fluent in <b>Java</b>, <b>C#</b> and <b>Python</b>. am
          working on a few projects in the <b>MERN</b> stack.
          <br />I plan to learn <b>Next.js</b>, <b>Three.js</b> and
          <b> Typescript</b> in the near future. <br />
          <br />
          Also, I love <b>coffee</b>{" "}
          <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
        </p>
      </div>
      <Tilt>
        <img className="Avatar" src={Avatar} alt="" />
      </Tilt>
    </div>
  );
};
