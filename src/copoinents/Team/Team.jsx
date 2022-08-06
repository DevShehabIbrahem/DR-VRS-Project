import { useState } from "react";
import { Teamdata } from "../../data";
import "./Team.scss";
import { useSpring, animated } from "react-spring";

const Team = () => {
  const [show, setShow] = useState({});

  const colleps = (index) => {
    setShow((show) => ({ ...show, [index]: !show[index] }));
  };

  //accordin animation

  return (
    <>
      <h3 className="team_title">PIT TEAM</h3>

      <div className="team">
        {Teamdata.map((cart, i) => (
          <div className="team__cart" key={i}>
            <img src={cart.imgUrl} alt="" />
            <div className="team__cart__title">
              <h3>{cart.name}</h3>
              <span onClick={() => colleps(i)}>{!show[i] ? "-" : "+"}</span>
            </div>
            <span>{cart.title}</span>
            <p className={!show[i] ? "show" : "content"}>
              {!show[i] ? cart.dec : ""}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
