import React, { useContext } from "react";
//assets
import Logo from "../Card2/Logo.svg";
//css
import "./Card2.css";
import Store from "../../context/store";
import { Grid } from "@mui/material";

const Card2 = ({ card }) => {
  console.log("card", card);
  const { cardData } = useContext(Store);
  const { selectedFile, setSelectedFile, fileDataURL, setFileDataURL } =
    useContext(Store);

  

  const contactAddressValue = cardData.address
    ? cardData.address.slice(0, 15)
    : card?.addressText[0].text;

    const contactPhoneValue = cardData.phone
  ? cardData.phone.slice(0, 15)
  : card?.addressText[1].text;

  const contactEmailValue = cardData?.email
    ? cardData.email.slice(0, 15)
    : card?.addressText[2].text;

  const contactWebsiteValue = cardData?.website
    ? cardData.website
    : cardData?.website?.length == 0
    ? " "
    : card.contactList?.[3].text;

    console.log('contactWebsiteValue',contactWebsiteValue );

  return (
    <Grid className="cards" columns={{ xs: 1, sm: 2, }} container justifyContent="center">
      {/* first card */}
      <Grid
        className={card.firstCardContent.firstCardBlog}
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
            {cardData?.slogan
              ? cardData?.slogan
              : cardData.slogan?.length == 0
              ? ""
              : card.firstCardContent.companyNameSloganText}
          </p>
        </div>
        <div className={card.firstCardContent.companyNameLoremTextBox}>
          <p className={card.firstCardContent.companyNameLoremText}>
            {cardData.description
              ? cardData.description
              : cardData.description?.length == 0
              ? ""
              : card.firstCardContent.companyNameLoremTextContent}
          </p>
        </div>
      </Grid>

      {/* second card */}
      <Grid
        className={card.secondCardContent.secondCardBlog}
      >
        <img
          src={card.secondCardContent.backGroundImage}
          className={card.secondCardContent.secondCard}
          alt=""
        />
        <div className="company-info">
          <div className={card.secondCardContent.flexClassName}>
            <h2 className={card.secondCardContent.cardHolderName}>
              {cardData.firstName
                ? cardData.firstName.slice(0, 15)
                : card.secondCardContent.cardHolderNameText}
            </h2>
            <span className={card.secondCardContent.cardHolderSurname}>
              {cardData.lastName
                ? cardData.lastName.slice(0, 15)
                : card.secondCardContent.cardHolderSurnameText}
            </span>
          </div>
          <p className={card.secondCardContent.cardHolderOccupation}>
            {cardData.title
              ? cardData.title.slice(0, 15)
              : card.secondCardContent.cardHolderOccupationText}
          </p>
        </div>
        <div className="address-div">
          <div className="diviconlist">
            {card.iconList.map((v) => {
              return (
                <div
                  key={v.id}
                  style={{
                    display:
                      v.id === 1 && contactAddressValue
                        ? "block"
                        : v.id === 2 && contactPhoneValue
                        ? "block"
                        : v.id === 3 && contactEmailValue
                        ? "block"
                        : v.id === 4 && contactWebsiteValue
                        ? "block"
                        : "none",
                  }}
                >
                  <div className={`${v.className}`}>{v.icon}</div>
                </div>
              );
            })}
          </div>
          <div>
            <p className={card.addressText[0].className}>
              {contactAddressValue}
            </p>
            <p className={card.addressText[1].className}>{contactPhoneValue}</p>
            <p className={card.addressText[2].className}>{contactEmailValue}</p>
            <p className={card.addressText[3].className}>
              {contactWebsiteValue}
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Card2;
