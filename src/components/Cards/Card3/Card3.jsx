import React, { useContext, useEffect, useState } from "react";
//css
import "./Card3.css";
//assets
import CardFirst from "../../Cards/Card3/CardFirst.png";
import CardLogo from "../../Cards/Card3/CardLogo.svg";
import Store from "../../context/store";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Grid } from "@mui/material";

const Card3 = ({ card3, cardData }) => {
  const { selectFile, fileDataURL, fontSize, nameStatus } = useContext(Store);



  const contactAddressValue = cardData?.address
    ? cardData.address
    : card3?.addressText[0].text;

  const contactPhoneValue = cardData?.phone
    ? cardData.phone
    : card3?.addressText[1].text;

  const contactEmailValue = cardData?.email
    ? cardData.email
    : card3?.addressText?.[2].text;

  const contactWebsiteValue = cardData?.website
    ? cardData.website
    : cardData?.website?.length == 0
    ? " "
    : card3.contactList?.[3].text;

  return (
    <Grid className="cards" columns={{ xs: 1, sm: 2, }} container justifyContent="center">
     
        <Grid  className={card3.firstCardContent.firstCardBlog}>
          <img
            style={{ width: "400px", height: "230px" }}
            src={card3.firstCardContent.backGroundImage}
            alt=""
          />
          <div className="text-general">
            <img
              src={`${fileDataURL || CardLogo}`}
              alt=""
              className="card-logo"
              value={selectFile}
            />
            <div style={{ textAlign: "-webkit-center" }}>
              <h1 className={card3.firstCardContent.companyName}>
              
                {cardData.companyName
                  ? cardData.companyName
                  : card3.firstCardContent.companyNameText}
              </h1>
              <h5 className={card3.firstCardContent.companyNameSlogan}>
            
                {cardData?.slogan
                  ? cardData?.slogan
                  : cardData.slogan?.length == 0
                  ? ""
                  : card3.firstCardContent.companyNameSloganText}
              </h5>
            </div>

            <p className={card3.firstCardContent.companyNameLorem}>
              {cardData.description
                ? cardData.description
                : cardData?.description?.length == 0
                ? ""
                : card3.firstCardContent.companyNameLoremText}
            </p>
          </div>
        </Grid>
        <Grid  className={card3.secondCardContent.secondCardBlog}>
          <img
            style={{ width: "400px", height: "230px" }}
            src={card3.secondCardContent.backGroundImage}
            alt=""
          />
          <div className="name-div">
            <div
              className={card3.secondCardContent.divClassName}
              style={{ flexDirection: nameStatus ? "column" : "row" }}
            >
              <h2 className={card3.secondCardContent.cardHolderName}>
                {cardData.firstName
                  ? cardData.firstName
                  : card3.secondCardContent.cardHolderNameText}
              </h2>
              <h2 className={card3.secondCardContent.cardHolderSurname}>
                {cardData.lastName
                  ? cardData.lastName
                  : card3.secondCardContent.cardHolderSurnameText}
              </h2>
            </div>
            <p className={card3.secondCardContent.cardHolderOccupation}>
              {cardData.title
                ? cardData.title
                : card3.secondCardContent.cardHolderOccupationText}
            </p>
          </div>

          <div className="address-list">
            <div className="address-icon">
              {card3.addressIcon.map((el) => {
                return (
                  <div
                   key={el.id}
                   style=
                   {{
                     display:
                       el?.id === 1 && contactAddressValue
                         ? "block"
                         : el.id === 2 && contactPhoneValue
                         ? "block"
                         : el.id === 3 && contactEmailValue
                         ? "block"
                         : el.id === 4 && contactWebsiteValue
                         ? "block"
                         : "none",
                   }}
                   
                   >
                    <div className={`${el.className}`}>{el.icon}</div>
                  </div>
                );
              })}
            </div>
            <div>
            <p className={card3.addressText[0].className}>
              {contactAddressValue}
            </p>
            <p className={card3.addressText[1].className}>{contactPhoneValue}</p>
            <p className={card3.addressText[2].className}>{contactEmailValue}</p>
            <p className={card3.addressText[3].className}>
              {contactWebsiteValue}
            </p>
          </div>
          </div>
        </Grid>
     
    </Grid>
  );
};

export default Card3;
