import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ExpenceInput() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-search" label="Amount" type="number" />
        <TextField id="outlined-search" label="Category" type="search" />
        <TextField id="outlined-search" label="Account" type="search" />
        <TextField id="outlined-search" label="Note" type="search" />
        <TextField id="outlined-search" label="Description" type="search" />
        <TextField id="outlined-search" label="Date" type="search" />
      </div>
    </Box>
  );
}
