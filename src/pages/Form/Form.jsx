import React, { useContext, useState, useRef, forwardRef } from "react";
//Assets
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Form.css";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { fields } from "../../components/constants";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Store from "../../components/context/store";
import Card2 from "../../components/Cards/Card2/Card2";
import Card3 from "../../components/Cards/Card3/Card3";
import Card1 from "../../components/Cards/Card1/Card1";
import { useFormik } from "formik";
import Print from "../../components/Print";
import { validationSchema } from "../../validation/Validation";
import { useNavigate } from "react-router-dom";

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

  const firstRef = useRef();
  const navigate = useNavigate();
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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      companyName: "",
      slogan: "",
      description: "",
      address: "",
      phoneNumber: "",
      email: "",
      website: "",
      title: "",
    },
    validate(values) {
      const errors = {};

      if (!values.email) {
        errors.email = "Email field is required!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Email must be valid!";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log("ds");
      console.log(JSON.stringify(values));
      localStorage.setItem("dataKey", JSON.stringify(values));
      setCardData(values);
      navigate("/Alboms");
    },
    validationSchema: validationSchema,
  });

  const handleChange = (e) => {
    let id = e.target.value;
    setSelectedCard(id);
  };
  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return (
    <>
      <div>
        <Grid container className="visaPageBox">
          <Grid item xs={11} md={6} className="left-box">
            <h1
              className="left-header"
              style={{ color: "#1e73e3", marginBottom: "20px" }}
            >
              Add your information
            </h1>
            <Box
              onSubmit={formik.handleSubmit}
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              {fields.map((field, i) => (
                <TextField
                  name={field.name}
                  size={field.size}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  variant="standard"
                  placeholder={field.placeholder}
                  type={field.type}
                  key={i}
                  ref={firstRef}
                  error={
                    formik.touched[field.name] &&
                    Boolean(formik.errors[field.name])
                  }
                  helperText={
                    formik.touched[field.name] && formik.errors[field.name]
                  }
                />
              ))}

              <Box>
                <input type="file" name="logo" />
              </Box>
              <Button
                style={{ marginTop: "20px", marginBottom: "20px" }}
                size="large"
                id="choose-button"
                type="submit"
                variant="outlined"
                sx={{
                  width: "350px",
                  height: "45px",
                  color: "#995D81",
                  display: "block",
                  borderRadius: "20px",
                  fontWeight: "900",
                  mt: 5,
                  m: "auto",
                  transition: ".3s linear",
                  "&:hover": {
                    bgcolor: "#1e73e3",
                    color: "white",
                  },
                }}
              >
                Generate Your Business card
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Form;
