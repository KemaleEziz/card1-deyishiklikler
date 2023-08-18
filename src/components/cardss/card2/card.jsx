import React from "react";
//assets
import FirstCard from "../assets/FirstCard.png";
import SecondCard from "../assets/SecondCard.png"
import Logo from "../assets/Logo.svg";

//css
import "./card.css"


const Card = ({ cards }) => {
  return (
    <>
      {/* first card */}
      <div
        className="background"
        style={{
          backgroundImage: `url(${FirstCard})`,
          backgroundSize: "cover",
          width: "400px",
          height: "230px",
        }}
      >
        <div className="design-div">
          <img className="logo-img" src={Logo}/>
          {cards[0].firstCardContent.map((v) => {
            return (
              <>
                <div key={v.id} />
                <h3 className={v.companyName}>{v.companyNameText}</h3>
                <p className={v.companyNameSlogan}> {v.pText}</p>
                <p className={v.pclassName1}>{v.pText1}</p>
              </>
            );
          })}
        </div>
        <p className="down-part-lorem"></p>
      </div>

      {/* second card */}
      <div
        className="background-second"
        style={{
          backgroundImage: `url(${SecondCard})`,
          backgroundSize: "cover",
          width: "400px",
          height: "230px",
          margin: "auto",
        }}
      >
        <div className="design-div1">
          {cards[0].secondCardContent.map((v) => {
            return (
              <>
                <div key={v.id} />
                <div className={v.flexClassName}>

                <h2 className={v.h2ClassName}>{v.h2Text}</h2>
                <span className={v.spanclassName}>{v.spanText}</span>
                </div>
                <p className={v.pclassName}>{v.pText}</p>
              </>
            );
          })}
        </div>
        <div className="address-div">
          {console.log(cards[0]?.iconList)}
          <div className="diviconlist">
            {cards[0]?.iconList.map((v) => {
              return (
                <>
                  <div key={v.id} />
                  <div className={`${v.className}`}>{v.icon}</div>
                </>
              );
            })}
          </div>

          <div className="fonticon">
            {cards[0].addressText.map((v) => {
              return (
                <>
                  <div key={v.id} />
                  <p className={v.className}>{v.text}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
