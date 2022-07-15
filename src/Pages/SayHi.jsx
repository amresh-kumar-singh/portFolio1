import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import React, { useEffect, useState } from "react";
import MyContainer from "../Components/MyContainer";
import Input from "../Components/Input";
import "../Components/input.css";
import axiosInstance from "../config/axiosInstance";
import MyAlert from "../Components/MyAlert";

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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleName = (e) => {
    setError("");
    const temp = e.target.value.replace(
      /\w\S*/g,
      (word) => word[0].toUpperCase() + word.substr(1)
    );
    setData({ ...data, name: temp });
  };
  const handleEmail = (e) => {
    setError("");
    setData({ ...data, email: e.target.value });
  };
  const handlePhone = (e) => {
    setError("");
    setData({ ...data, phone: e.target.value });
  };
  const handleMessage = (e) => {
    setError("");
    if (e.target.value.length > 250) {
      setError("Max Message length is 250 Characters only");
      return;
    }
    setData({ ...data, message: e.target.value });
  };
  const handleCompany = (e) => {
    setError("");
    setData({ ...data, company: e.target.value });
  };

  const handleSubmit = async () => {
    setError("");
    if (!ValidateEmail(data.email)) {
      setError("Enter Valid Email Please...");
      return;
    }
    try {
      setLoading(true);
      const res = await axiosInstance.post(`/message`, {
        data: data,
      });
      if (res.status === 204) {
        setOpen(true);
        setData(initialData);
      }
    } catch (error) {
      setError(error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    error && setOpen(true);
  }, [error]);

  return (
    <Box
      className={myClass + " sayhi"}
      height="100vh"
      position="relative"
      display="flex"
      alignItems="center"
    >
      {open && <MyAlert error={error} setOpen={setOpen} open={open} />}
      <Typography className="title" variant="h2" sx={{ flex: 1 }}>
        Say Hi
      </Typography>
      <MyContainer
        maxWidth="md"
        id="SayHi"
        sx={{
          background: {
            xs: "rgba(255,255,255,0.5)",
            sm: "rgba(255,255,255,0.7)",
          },
          height: { xs: "100%", sm: "75%" },
        }}
      >
        <Stack
          className="say-hi-card1 pb10"
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
              className="hire-me"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "80%",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: { md: "2.15rem", xs: "1.75rem" } }}
              >
                Hire Me
              </Typography>
              <Typography variant="caption">or</Typography>
              <Typography variant="subtitle1" width="auto">
                Just say Hi
              </Typography>
            </CardContent>
            <CardActions className="thank-you">Thank You</CardActions>
          </Card>
        </Stack>
        <Stack className="say-hi-card2" width="70%" spacing={{ xs: 2, sm: 4 }}>
          <Stack
            spacing={2}
            sx={{ flex: 1 }}
            direction={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "center", sm: "space-between" }}
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
              placeholder="Enter Mobile/Phone No"
              handleChange={handlePhone}
            />
          </Stack>

          <Stack
            spacing={2}
            className="input2"
            sx={{
              flex: 1,
              marginRight: "2%",
            }}
            direction={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "center", sm: "space-between" }}
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
          <Stack sx={{ flex: 1, marginLeft: "2%" }} className="input2">
            <TextareaAutosize
              aria-label="Message textarea"
              minRows={5}
              value={data.message}
              placeholder="Type Your Message"
              style={{
                width: "auto",
                height: "auto",
                resize: "none",
                borderRadius: "3px",
              }}
              onChange={handleMessage}
              required
            />
          </Stack>
          <Button
            variant="contained"
            className="input2"
            sx={{
              backgroundImage: "linear-gradient(#8614f8 0, #760be0 100%)",
              color: "white",
            }}
            onClick={handleSubmit}
            disabled={!data.message || !data.email || !data.name}
          >
            {loading || !data.message || !data.email || !data.name || error
              ? loading
                ? "Sending Message.."
                : "Disabled"
              : "Submit"}
          </Button>
        </Stack>
      </MyContainer>
    </Box>
  );
};

export default SayHi;
