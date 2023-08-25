import React, { useContext, useState, useEffect } from "react";

// ASSETS
import "./Card1.css";
import Store from "../../context/store";
import Logo from "../../Cards/Card1/logo1.svg";
import { Grid } from "@mui/material";
// CUSTOM IMPORTS

const VisitCard = ({ card, animateCard1 }) => {
  const {
    cardData,
    selectedFile,
    setSelectedFile,
    fileDataURL,
    setFileDataURL,
    fontSize,
    setFontSize,
    name,
    setName,
    flexDirection,
  } = useContext(Store);

  // const [companyNameLines, setCompanyNameLines] = useState();
  // const [CardHolderName, setCardHolderName] = useState();
  // const [sloganText, setSloganText] = useState();
  // const [description, setDescription] = useState();
  // const [surname, setSurname] = useState();
  // const [position, setPosition] = useState();

  // useEffect(() => {
  //   const companyName =
  //     cardData.companyName || card.firstCardContent.companyNameText; //company name
  //   const firstLine = companyName.slice(0,20);
  //   const secondLine = companyName.slice(30);

  //   const companySlogan =
  //     cardData.companySlogan || card.firstCardContent.companyNameSloganText; //slogan
  //   const firstLine2 = companySlogan.slice(0,35);
  //   const secondLine2 = companySlogan.slice(30);

  //   const description =
  //     cardData.description || card.firstCardContent.companyNameLoremContext; //lorem text
  //   const firstLine3 = description.slice(0,30);
  //   const secondLine3 = description.slice(45);

  //   const name = cardData.name || card.secondCardContent.cardHolderNameText; //card holder name
  //   const firstLine1 = name.slice(0,15);
  //   const secondLine1 = name.slice(20);

  //   const surname =
  //     cardData.surname || card.secondCardContent.cardHolderSurNameText; //card holder surname
  //   const firstLine4 = surname.slice(0,15);
  //   const secondLine4 = surname.slice(20);

  //   const position =
  //     cardData.position ||card.secondCardContent.cardHolderOccupationDescription; // card holder occupation
  //   const firstLine5 = position.slice(0,20);
  //   const secondLine5 = position.slice(40);

  //   setCompanyNameLines([firstLine, secondLine]);
  //   setCardHolderName([firstLine1, secondLine1]);
  //   setSloganText([firstLine2, secondLine2]);
  //   setDescription([firstLine3, secondLine3]);
  //   setSurname([firstLine4, secondLine4]);
  //   setPosition([firstLine5, secondLine5]);
  // },

  // [
  //   cardData.companyName,
  //   card.firstCardContent.companyNameText,

  //   cardData.name,
  //   card.secondCardContent.cardHolderNameText,

  //   cardData.companySlogan,
  //   card.firstCardContent.companyNameSloganText,

  //   cardData.description,
  //   card.firstCardContent.companyNameLoremContext,

  //   cardData.surname,
  //   card.secondCardContent.cardHolderSurNameText,

  //   cardData.position,
  //   card.secondCardContent.cardHolderOccupationDescription,
  // ]);

  return (
    <Grid className="cards" columns={{ xs: 1, sm: 2, }} container justifyContent="center">
      {/* first card */}
      <Grid item className={card.firstCardContent.firstCardBlog}>
        <img
          src={card.firstCardContent.backGroundImage}
          className={card.firstCardContent.firstCard}
        />
        <div
          className={card.firstCardContent.cardDesign}
          style={{ flexDirection: flexDirection ? "column" : "row" }}
        >
          <div className={card.firstCardContent.LogoBox}>
            <img
              value={selectedFile}
              className={card.firstCardContent.cardLogo}
              src={`${fileDataURL || Logo}`}
              alt=""
            />
          </div>
          <div>
            <div className={card.firstCardContent.companyName}>
              <h2
                style={{
                  fontSize: fontSize + "px",
                }}
              >
                {cardData.companyName
                  ? cardData.companyName
                  : card.firstCardContent.companyNameText}
                {/* {companyNameLines?.map((line, index) => (
                  <span key={index} className="company-name-line">
                    {line}
                  </span>
                ))} */}
              </h2>

             
              <p className={card.firstCardContent.companyNameSlogan}>
                {cardData?.slogan?
                  cardData?.slogan:cardData.slogan?.length == 0?'': card.firstCardContent.companyNameSloganText}
                {/* {sloganText?.map((line, index) => (
                  <span key={index} className="company-name-line">
                    {line}
                  </span>
                ))} */}
              </p>
            </div>
          </div>
        </div>

        <div className={card.firstCardContent.companyNameLoremTextBox}>
          {/* error burda bash verir */}
          <p className={card.firstCardContent.companyNameLoremText}>
            {cardData.description
              ? cardData.description: cardData.description?.length == 0 ?''
              : card.firstCardContent.companyNameLoremContext}

            {/* {description?.map((line, index) => (
              <span key={index} className="company-name-line">
                {line}
              </span>
            ))} */}
          </p>
        </div>
      </Grid>

      {/* second card */}
      <Grid item  className={card.secondCardContent.secondCardBlog}>
        <img
          src={card.secondCardContent.backGroundImage}
          className={card.secondCardContent.secondCard}
          alt=""
        />
        <div className={card.secondCardContent.informationBox}>
          <div className={card.secondCardContent.iconGroup}>
            {card.iconList.map((i, index) => {
              return (
                <div key={index}>
                  <div className={i.className} style={{ padding: "4px" }}>
                    {i.icon}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={card.secondCardContent.iconInformation}>
            {
              <>
                <div>
                  <p style={card.contactList[0].customStyle || {}}>
                    {cardData.address
                      ? cardData.address
                      : card.contactList[0].text}
                  </p>
                </div>
                <div>
                  <p style={card.contactList[1].customStyle || {}}>
                    {cardData?.phone
                      ? cardData.phone
                      : card?.contactList[1].text}
                  </p>
                </div>{" "}
                <div>
                  <p style={card.contactList[0].customStyle || {}}>
                    {cardData?.email
                      ? cardData.email
                      : card.contactList[2].text}
                  </p>
                </div>{" "}
                <div>
                  <p style={card.contactList[0].customStyle || {}}>
                    {
                    cardData?.website 
                      ? cardData.website:
                      cardData?.website?.length==0?" ":card.contactList[3].text
                    }
                  </p>
                </div>{" "}
              </>
            }
          </div>
        </div>

        <div
          className={card.secondCardContent.cardHolderNameBox}
          style={{ flexDirection: flexDirection ? "column" : "row" }}
        >
          <p className={card.secondCardContent.cardHolderName}>
            {cardData.firstName
              ? cardData.firstName
              : card.secondCardContent.cardHolderNameText}

           
          </p>
          <b>
            {" "}
            <span className={card.secondCardContent.cardHolderSurNameText}>
              {cardData.lastName
                ? cardData.lastName
                : card.secondCardContent.cardHolderSurNameText}
            </span>
          </b>
          <p className={card.secondCardContent.cardHolderOccupation}>
            {cardData.title
              ? cardData.title
              : card.secondCardContent.cardHolderOccupationDescription}
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default VisitCard;
