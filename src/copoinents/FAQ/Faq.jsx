import { useState } from "react";
import "../../css/FAQ/Faq.css";
import { Words } from "../../common/words";
import { accordin } from "../../data";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

const Faq = () => {
  const { FAQ } = Words;
  const [accor, setAccor] = useState({});
  const accorr = (index) => {
    setAccor({ ...accor, [index]: !accor[index] });
  };

  return (
    <div className="Faq">
      <div className="Faq__leftside">
        <div className="Faq__runtext">
          <div className="Faq-text">
            <h5>{FAQ}</h5>
          </div>
        </div>
        <div className="Faq__accordin">
          <ul>
            {accordin.map(({ dec, title }, i) => (
              <li key={title}>
                <div className="Faq__title">
                  <span onClick={() => accorr(i)}>
                    {accor[i] ? <FaMinus /> : <BiPlusMedical />}
                  </span>
                  <h3>{title}</h3>
                </div>
                <div className="Faq__info">
                  <p className={accor[i] ? "show" : ""}>{dec}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="Faq__right"></div>
    </div>
  );
};

export default Faq;
