import Box from "@mui/material/Box";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Textarea from "@mui/joy/Textarea";
import { TextField } from "@mui/material";

const koraci = ["Prvi korak", "Drugi korak", "Treći korak"];

const PrviKorak = ({ page, setPage, data, setData }) => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={0} alternativeLabel>
          {koraci.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box
        sx={{
          py: 2,
          display: "grid",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}>
        <TextField
          id="standard-basic"
          label="Ime"
          variant="standard"
          required
          value={data.ime}
        />
        <TextField
          id="standard-basic"
          label="Prezime"
          variant="standard"
          required
          value={data.prezime}
        />
        <TextField
          id="standard-basic"
          label="E-mail"
          variant="standard"
          required
          value={data.email}
        />
      </Box>
    </>
  );
};

export default PrviKorak;
