 import { Box, Grid, MenuItem, Select } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Store from "../context/store";
import Card1 from "../Cards/Card1/Card1";
import Card2 from "../Cards/Card2/Card2";
import Card3 from "../Cards/Card3/Card3";
import Print from "../Print";
import { useLocation } from "react-router-dom";
import "./albom.css";
const Alboms = () => {
  const { state } = useLocation();
  const {
    cardData,
    setCardData,
    selectedCard,
    setSelectedCard,
    cards,
    fileDataURL,
    setFileDataURL,
    selectedFile,
    setSelectedFile,
    setFontSize,
    fontSize,
    flexDirection,
    setFlexDirection,
    setNameStatus,
    setName,
    setDisplay,
    setSlogan,
  } = useContext(Store);
  const frontComponentRef = useRef();

  const [cardList, setCardList] = useState([
    {
      projectName: "Card1",
      progectBgColor: "red",
    },
    {
      projectName: "Card2",
      progectBgColor: "blue",
    },
    {
      projectName: "Card3",
      progectBgColor: "yellow",
    },
  ]);
  const handleChange = (e) => {
    let id = e.target.value;
    setSelectedCard(id);
  };

 
  return (
    <Box className="alboms"  container justifyContent="center">
      
      <Grid className="print-header-box">
        <div>
          <Print ref={{ frontComponentRef }} />
        </div>
      
        
      </Grid>

      <Grid item xs={11} md={6} className="right-box">
        <div>
          <Grid>
            {selectedCard == null && (
              <>
                <Box
                  sx={{
                    width: 400,
                    height: 230,
                    margin: "auto",
                    marginTop: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#ECECEC",
                    "&:hover": {
                      backgroundColor: "#D5D5D5",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                />
              </>
            )}
          </Grid>

          <Grid>
            {selectedCard == null && (
              <>
                <Box
                  sx={{
                    width: 400,
                    height: 230,
                    margin: "auto",
                    marginTop: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#ECECEC",
                    "&:hover": {
                      backgroundColor: "#D5D5D5",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                />
              </>
            )}
          </Grid>
        </div>

        <Grid className="cards-box">
          {<Card1 card={cards[0]} cardData={cardData} width="300px" />}
          {<Card2 card={cards[1]} cardData={cardData} />}
          {<Card3 card3={cards[2]} cardData={cardData} />}
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Alboms;
