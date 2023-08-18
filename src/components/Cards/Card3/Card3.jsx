import React, { useContext } from "react";
//css
import "./Card3.css";
//assets
import CardFirst from "../Card3/CardFirst.png";
import CardSecond from "../Card3/CardSecond.png";
import CardLogo from "../Card3/CardLogo.svg";
import Store from "../../context/store";
const Card3 = ({ card3, cardData }) => {
  const { selectFile,fileDataURL, setFileDataURL } = useContext(Store);
  return (
    <>
      <div className="cards">
        <div
          className="first-card3"
          style={{
            background: `url(${CardFirst})`,
            width: "400px",
            height: "230px",
            backgroundSize: "cover",
            margin: "auto",
          }}
        >
          <div className="text-general">
            <img src={`${fileDataURL}`}
             alt="" className="card-logo"
             value={selectFile} />
            <h1 className={card3?.firstCardContent?.companyName}>
              {cardData?.companyName
                ? cardData?.companyName.slice(0, 15)
                : card3?.firstCardContent?.companyNameText}
            </h1>
            <h5 className={card3?.firstCardContent?.companyNameSlogan}>
              {cardData?.companySlogan
                ? cardData?.companySlogan.slice(0, 15)
                : card3?.firstCardContent?.companyNameSloganText}
            </h5>
            <p className={card3?.firstCardContent?.companyNameLorem}>
              {cardData?.description
                ? cardData?.description.slice(0, 15)
                : card3?.firstCardContent?.companyNameLoremText}
            </p>
          </div>
        </div>
        <div
          className="second-card3"
          style={{
            background: `url(${CardSecond})`,
            width: "400px",
            height: "230px",
            backgroundSize: "cover",
            margin: "auto",
          }}
        >
          <div className="name-div">
            <div className={card3?.secondCardContent?.divClassName}>
              <h2 className={card3?.secondCardContent?.cardHolderName}>
                {cardData?.name
                  ? cardData?.name.slice(0, 15)
                  : card3?.secondCardContent?.cardHolderNameText}
              </h2>
              <h2 className={card3?.secondCardContent?.cardHolderSurname}>
                {cardData?.surname
                  ? cardData?.surname?.slice(0, 15)
                  : card3?.secondCardContent?.cardHolderSurnameText}
              </h2>
            </div>
            <p className={card3?.secondCardContent?.cardHolderOccupation}>
              {cardData?.position
                ? cardData?.position.slice(0, 15)
                : card3?.secondCardContent?.cardHolderOccupationText}
            </p>
          </div>

          <div className="address-list">
            <div className="address-icon">
              {card3?.addressIcon?.map((i) => {
                return (
                  <>
                    <div key={i.id} />
                    <div className={`${i.className}`}>{i?.icon}</div>
                  </>
                );
              })}
            </div>

            {/* <div className="address-text">
              {card3.addressText.map((i) => {
                return (
                  <>
                    <div key={i.id} />
                    <div className={`${i.className}`}>{i.text}</div>
                  </>
                );
              })}

            </div> */}

            <div>
              <p className="location-text">
                {cardData?.address
                  ? cardData?.address.slice(0, 15)
                  : card3?.addressText[0].text}
              </p>
              <p className="phone-text">
                {cardData?.phone ? cardData?.phone?.slice(0, 15) : card3?.addressText[1]?.text}{" "}
              </p>
              <p className="envelope-text">
                {cardData?.email ? cardData?.email?.slice(0, 15) : card3?.addressText[2]?.text}
              </p>
              <p className="arrow-text">
                {cardData?.website
                  ? cardData?.website?.slice(0, 15)
                  : card3?.addressText[3]?.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
