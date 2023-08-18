import React, { useContext } from "react";
//assets
import Logo from "../Card2/Logo.svg";
//css
import "./Card2.css";
import Store from "../../context/store";

const Card2 = ({ card }) => {
  console.log("card",card);
  const { cardData} = useContext(Store);
  const { selectedFile, setSelectedFile, fileDataURL, setFileDataURL } =
  useContext(Store);
  return (
    <div className="cards">
      {/* first card */}
      <div
        className={card.firstCardContent.firstCardBlog}
        // className={card.firstCardContent.firstCard}
        // style={{
        //   backgroundImage: `url(${card.firstCardContent.backGroundImage})`,
        // }}
      >
        <img
          src={card.firstCardContent.backGroundImage}
          className={card.firstCardContent.firstCard}
        />

       

        <div className="design-div">
          <img className="logo-img" src={`${fileDataURL || Logo}`} />
          <h3 className={card.firstCardContent.companyName}>
            {cardData.companyName
              ? cardData.companyName.slice(0, 15)
              : card.firstCardContent.companyNameText}
          </h3>
          <p className={card.firstCardContent.companyNameSlogan}>
            {cardData.companySlogan
              ? cardData.companySlogan.slice(0, 15)
              : card.firstCardContent.companyNameSloganText}
          </p>
         
        </div>
        <div className={card.firstCardContent.companyNameLoremTextBox}>
          {/* new classname */}
        <p className={card.firstCardContent.companyNameLoremText}>
            {cardData.description
              ? cardData.description.slice(0, 15)
              : card.firstCardContent.companyNameLoremTextContent}
          </p>
          </div>
      </div>

      {/* second card */}
      <div
        className={card.secondCardContent.secondCardBlog}

        // className={card.secondCardContent.secondCard}
        // style={{
        //   backgroundImage: `url(${card?.secondCardContent.backGroundImage})`,
        // }}
      >
        <img
          src={card.secondCardContent.backGroundImage}
          className={card.secondCardContent.secondCard}
          alt=""
        />
        <div className="company-info">
          <div className={card.secondCardContent.flexClassName}>
            <h2 className={card.secondCardContent.cardHolderName}>
              {cardData.name
                ? cardData.name.slice(0, 15)
                : card.secondCardContent.cardHolderNameText}
            </h2>
            <span className={card.secondCardContent.cardHolderSurname}>
              {cardData.surname
                ? cardData.surname.slice(0, 15)
                : card.secondCardContent.cardHolderSurnameText}
            </span>
          </div>
          <p className={card.secondCardContent.cardHolderOccupation}>
            {cardData.position
              ? cardData.position.slice(0, 15)
              : card.secondCardContent.cardHolderOccupationText}
          </p>
        </div>
        <div className="address-div">
          <div className="diviconlist">
            {card.iconList.map((v) => {
              return (
                <>
                  <div key={v.id} />
                  <div className={`${v.className}`}>{v.icon}</div>
                </>
              );
            })}
          </div>

          {/* <div className="fonticon">
            {card.addressText.map((v) => {
              return (
                <>

                
                  <div key={v.id} />
                  <p className={v.className}>{v.text}</p>
                </>
              );
            })}
          </div> */}
          <div>
            <p className={card.addressText[0].className}>
              {cardData.address
                ? cardData.address.slice(0, 15)
                : card?.addressText[0].text}
            </p>
            <p className={card.addressText[1].className}>
              {cardData.phone
                ? cardData.phone.slice(0, 15)
                : card.addressText[1].text}
            </p>
            <p className={card.addressText[2].className}>
              {cardData?.email
                ? cardData.email.slice(0, 15)
                : card?.addressText[2].text}
            </p>
            <p className={card.addressText[3].className}>
              {cardData?.website
                ? cardData.website.slice(0, 15)
                : card?.addressText[3].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
