import React, { useContext, useState, useRef, forwardRef } from "react";
//Assets
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Form.css";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Store from "../../components/context/store";
import Card2 from "../../components/Cards/Card2/Card2";
import Card3 from "../../components/Cards/Card3/Card3";
import Card1 from "../../components/Cards/Card1/Card1";
import Print from '../../components/Print'
function Form() {
  const {
    cardData,
    setCardData,
    selectedCard,
    setSelectedCard,
    cards,
    fileDataURL,
    setFileDataURL,
    setName,
    setFontSize,
    setDisplay,
    selectedFile,
    setSelectedFile,
    setSlogan,
   setFlexDirection,
    
  } = useContext(Store);
  const [animateCard1, setAnimateCard1] = useState(false);
 
  // const [selectData, setSelectData] = useState([]);
  const firstRef = useRef();
  // const card1Ref = useRef();
  const frontComponentRef = useRef();

  // Array(100).fill(null).map
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
  const [message, setMessage] = useState("");
  const templateBox = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if( e.target.companyName.value.length>=4){
      setFlexDirection(true)
     } 
    const file = e.target.logo.files[0];

    if (file) {
      const blobURL = URL.createObjectURL(file);
      setFileDataURL(blobURL);
    }
    
    // if()

    const cardInformation = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      companyName: e.target.companyName.value,
      companySlogan: e.target.companySlogan.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      website: e.target.website.value,
      description: e.target.description.value,
      position: e.target.position.value,
    };


    if (  e.target.name.value.length >= 10) {
      setName(e.target.name.value);
      // setFlexDirection(true)
    } else {
      setFontSize(15); 
     
    }
   
    
    //   setFontSize(5)
    //   setName(name);
    //  }else {
    //   setFontSize(9);
    //   // Truncate the input value to the first 10 characters
    //    setName(name.substring(0, 10));
    // }

    


    //  if(cardInformation.surname.length>10){
    // fontSize:(fontSize+'px').replace(/[^0-9.]/,"")
      
    //  }
    //  if(cardInformation.companySlogan.length>10){
    //   setFontSize(3)
    //  }
    
  


    //  setCardData([...cardData,cardInformation]) keohne datalari saxlamaq shertile
    // yeni dtalari yazdirmaq istedikde spread metodu 

    setCardData(cardInformation); //2ci metod
    setAnimateCard1(true);
    setTimeout(() => {
      setAnimateCard1(false);
    }, 2000);
  };

  const fieldInfo = [
    {
      name: "name",
      size: "small",
      variant: "outlined",
      placeholder: "Name",
      ref: { firstRef },
    },
    {
      name: "surname",
      size: "small",
      variant: "outlined",
      placeholder: "Surname",
      ref: { firstRef },
    },
    {
      name: "position",
      size: "small",
      variant: "outlined",
      placeholder: "Position",
      ref: { firstRef },
    },
    {
      name: "companyName",
      size: "small",
      variant: "outlined",
      placeholder: "Company name",
      ref: { firstRef },
    },
    {
      name: "companySlogan",
      size: "small",
      variant: "outlined",
      placeholder: "Slogan",
      ref: { firstRef },
    },
    {
      name: "description",
      size: "small",
      variant: "outlined",
      placeholder: "Description",
      ref: { firstRef },
    },
    {
      name: "address",
      size: "small",
      variant: "outlined",
      placeholder: "Address",
      ref: { firstRef },
    },
    {
      name: "phone",
      size: "small",
      variant: "outlined",
      placeholder: "Phone",
      ref: { firstRef },
      autoComplete: "current-phone",
    },
    {
      name: "email",
      size: "small",
      variant: "outlined",
      placeholder: "Email",
      ref: { firstRef },
      autoComplete: "current-email",
      type: "email",
    },
    {
      name: "website",
      size: "small",
      variant: "outlined",
      placeholder: "Website",
      ref: { firstRef },
      autoComplete: "Website",
    },
  ];

  const handleChange = (e) => {
    let id = e.target.value;
    setSelectedCard(id);
  };



  return (
    <>
      <div >
        <Grid container className="visaPageBox">
          <Grid item xs={11} md={6} className="left-box">
            <h2
              className="left-header"
              style={{ color: "#208E2B", marginBottom: "20px" }}
            >
              Add your information
            </h2>
            <Box
              onSubmit={handleSubmit}
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              {fieldInfo.map((field,i) => (
                <TextField
                  name={field.name}
                  size={field.size}
                  variant={field.variant}
                  placeholder={field.placeholder}
                  type={field.type}
                  key={i}
                  // inputProps={{ maxLength:10}}
                 
                />
              ))}

              
              <Box>
                <input type="file" name="logo" />
              </Box>

              <Button
                style={{ marginTop: "20px" }}
                size="large"
                id="choose-button"
                type="submit"
                variant="contained"
                sx={{
                  width: "250px",
                  height: "45px",
                  bgcolor: "#208E2B",
                  display: "block",
                  borderRadius: "20px",
                  mt: 5,
                  m: "auto",
                  transition: ".3s linear",
                  "&:hover": {
                    bgcolor: "brown",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>

          <Grid item xs={11} md={6} className="right-box">
            <div className="right-header">
              <h2 style={{ color: "#208E2B", marginBottom: "20px" }}>
                Choose business card{" "}
              </h2>
            </div>
            <div>
              
              <Select
                size="small"
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                label="Choose select"
                onChange={handleChange}
                sx={{ m: 1, minWidth: 400 }}
              >
                <MenuItem selected value={null}>
                  <em>None</em>
                </MenuItem>
                {cardList.map((item, index) => {
                  return (
                    <MenuItem key={Math.random()} value={index}>
                      {item.projectName}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>

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

            <Grid ref={frontComponentRef}>
              {selectedCard == 0 && (
                <Card1
                  card={cards[0]}
                  cardData={cardData}
                  width="300px"
                  animateCard1={animateCard1}
                  
                />
              )}
              {selectedCard === 1 && (
                <Card2 card={cards[1]} cardData={cardData} />
              )}
              {selectedCard === 2 && (
                <Card3 card3={cards[2]} cardData={cardData} />
              )}
            </Grid>
            <div>
              <Print cards={cards}  ref={{ frontComponentRef }} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Form;
