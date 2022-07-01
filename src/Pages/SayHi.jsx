import {
  Stack,
  Typography,
  Box,
  TextareaAutosize,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useEffect, useState } from "react";
import MyContainer from "../Components/MyContainer";
import Input from "../Components/Input";
import "../Components/input.css";
const initialData = {
  name: "",
  phone: "",
  company: "",
  email: "",
  message: "",
};
function ValidateEmail(mail) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

const SayHi = ({ myClass }) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState("");

  const handleName = (e) => {
    setData({ ...data, name: e.target.value });
  };
  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };
  const handlePhone = (e) => {
    setData({ ...data, phone: e.target.value });
  };
  const handleMessage = (e) => {
    if (e.target.value.length > 250) {
      setError("Max Message length is 250 Characters only");
      return;
    }
    setData({ ...data, message: e.target.value });
  };
  const handleCompany = (e) => {
    setData({ ...data, company: e.target.value });
  };

  const handleSubmit = () => {
    if (!ValidateEmail(data.email)) {
      setError("Enter Valid Email Please...");
      return;
    }
    console.log({ ...data });
    setData(initialData);
  };
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <Box
      className={myClass}
      height="100vh"
      position="relative"
      display="flex"
      alignItems="center"
    >
      <Typography className="title" variant="h2" sx={{ flex: 1 }}>
        Say Hi
      </Typography>
      <MyContainer
        maxWidth="md"
        id="SayHi"
        sx={{
          background: "rgba(255,255,255,0.7)",
          height: "80%",
        }}
      >
        <Stack
          width="30%"
          height="50%"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            sx={{
              width: "80%",
              minHeight: "80%",
              background: "#EC87C0",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "80%",
              }}
            >
              <Typography variant="h4">Hire Me</Typography>
              <Typography variant="caption">or</Typography>
              <Typography variant="subtitle1" width="auto">
                Just say Hi
              </Typography>
            </CardContent>
            <CardActions>Thank You</CardActions>
          </Card>
        </Stack>
        <Stack width="70%" spacing={4}>
          <Stack
            spacing={2}
            sx={{ flex: 1, marginRight: "2%" }}
            direction="row"
            justifyContent="space-between"
          >
            <Input
              value={data.name}
              type="text"
              label="Name"
              placeholder="Enter Your Name"
              handleChange={handleName}
              required={true}
            />
            <Input
              value={data.phone}
              type="tel"
              label="Mobile No."
              placeholder="Enter Mobile/Phone no"
              handleChange={handlePhone}
            />
          </Stack>

          <Stack
            spacing={2}
            sx={{ flex: 1, marginRight: "2%" }}
            direction="row"
            justifyContent="space-between"
          >
            <Input
              type="email"
              value={data.email}
              label="Email Id"
              placeholder="Enter Your Email"
              handleChange={handleEmail}
              required={true}
            />
            <Input
              value={data.company}
              type="text"
              label="Company"
              placeholder="Enter Company Name"
              handleChange={handleCompany}
            />
          </Stack>
          <Stack sx={{ flex: 1, marginLeft: "2%" }}>
            <TextareaAutosize
              aria-label="Message textarea"
              minRows={5}
              value={data.message}
              placeholder="Type Your Message"
              style={{ width: "auto", height: "auto", resize: "none" }}
              onChange={handleMessage}
              required
            />
          </Stack>
          <Button
            variant="contained"
            sx={{
              backgroundImage: "linear-gradient(#8614f8 0, #760be0 100%)",
              color: "white",
            }}
            onClick={handleSubmit}
            disabled={!data.message || !data.email || !data.name}
          >
            {!data.message || !data.email || !data.name ? "Disabled" : "Submit"}
          </Button>
        </Stack>
      </MyContainer>
    </Box>
  );
};

export default SayHi;
