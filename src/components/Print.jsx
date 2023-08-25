import React, { forwardRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Typography, Box, Grid, Button } from "@mui/material";

const Print = forwardRef((cards, ref) => {
  const generatePDF = async () => {
    const node = document.querySelector(".first-card-blog");
    const w = document.querySelector(".first-card-blog")?.offsetWidth;
    const h = document.querySelector(".first-card-blog")?.offsetHeight;
    const canvas = await html2canvas(node, { scale: 5 });
    const pdf = new jsPDF("l", "px", [w, h - 5], false);
    const imgData = canvas.toDataURL("image/jpeg");
    pdf.addImage(imgData, "JPEG", 0, 0, w, h);
    pdf.save("vcard.pdf");
  };
  const handlePrintBack = async () => {
    const node = document.querySelector(".second-card-blog");
    const w = document.querySelector(".second-card-blog")?.offsetWidth;
    const h = document.querySelector(".second-card-blog")?.offsetHeight;
    const canvas = await html2canvas(node, { scale: 5 });
    const pdf = new jsPDF("l", "px", [w, h - 5], false);
    const imgData = canvas.toDataURL("image/jpeg");
    pdf.addImage(imgData, "JPEG", 0, 0, w, h);
    pdf.save("vcard.pdf");
  };

  return (
    <>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          backgroundColor: "rgb(230 199 185 / 21%)",
          paddingBlock: "10px",
          flexDirection: "column",
        }}
      >
        <Grid item className="right-header">
          <Typography
            className="print-header-text"
            component="h2"
            sx={{
              color: "#c83e04",
              letterSpacing: "1px",
              fontWeight: "900",
              paddingBlock: "5px",
              marginBlock: "5px",
              "@media (max-width:600px)": {
                fontSize: 10,
              },
            }}
          >
            Choose business card template designed for you
          </Typography>
        </Grid>
        <Grid>
          <Grid className="print-buttons"
          sx={{
            display:'flex',
            justifyContent:'space-around ',
           
          }}
          >
            <Box>
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  generatePDF();
                }}
                style={{
                  color: "#fff",
                  background: "#c83e04",
                  paddingBlock: "5px",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "900",
                }}
              >
                Print Front
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                size="small"
                onClick={() => handlePrintBack()}
                style={{
                  color: "#fff",
                  background: "#c83e04",
                  paddingBlock: "5px",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "900",
                }}
              >
                Print Back
              </Button>
            </Box>
          </Grid>

          {/* <Grid >
         
        </Grid> */}
        </Grid>
      </Grid>
    </>
  );
});

export default Print;
