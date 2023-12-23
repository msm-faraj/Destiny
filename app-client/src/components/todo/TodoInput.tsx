import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TodoInput() {
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
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="New todo"
        />
      </div>
    </Box>
  );
}
