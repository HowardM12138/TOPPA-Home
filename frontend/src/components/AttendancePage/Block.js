import { Typography, Button, Grid, OutlinedInput } from "@mui/material";
import StatusBox from "./StatusBox";
import { useRef, useState, useEffect } from "react";
import { getUser } from "../UserSession";

const FirstTitleBlock = {
  mb: 2,
  padding: 2,
};
const SecondGridContainer = {
  bgcolor: "#9BF4C9",
  mx: 1,
  mb: 2,
  borderRadius: 3,
  padding: 2,
};
const ThirdGridContainer = {
  bgcolor: "#9BF4C9",
  mx: 1,
  mb: 2,
  borderRadius: 3,
  padding: 2,
};
const Title = {
  fontWeight: "bold",
  textAlign: "center",
  fontSize: 30,
  fontStyle: "italic",
};
const EventTitle = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 24,
};
const Wrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  my: 1,
};
const Input = {
  maxWidth: 250,
  maxHeight: 40,
  borderRadius: 3,
  bgcolor: "white",
  boxShadow: 3,
};
const Submit = {
  borderRadius: 3,
  bgcolor: "#1F9F4B",
  boxShadow: 3,
};

export default function AttendBlock(props) {
  const InputRef = useRef(null);
  const [Params, setParams] = useState([]);
  const [input, setInput] = useState(null);
  const onChange = (event) => {
    const newInput = event.target.value;
    setInput(newInput);
  };
  //用<Input>的onChange property加useState把输入值event.target.value赋值给state，输入值默认是一个string

  const Blockrefresh = () => {
    fetch("http://localhost:5002/Attendance/Blockrefresh", {
      //Header很重要，不然后端req.body会undefined显示为{}
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: getUser().name,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setParams(response[0][props.TodayEvent]);
        //response是a list of one member object, Params是an object，每一个field value pair都是一个活动的attendance
        //对于Params这个react objects，get key的方式是Object.keys(Params)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      Blockrefresh();
    }, 500);
  }, [Params]);

  const Click = () => {
    //几个错误：一定是fetch给后端的网址，port不一样。一定是http不是http's'，不然会出现SSL_PROTOCAL_ERROR
    fetch("http://localhost:5002/Attendance/AddSecretWord", {
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      //Header很重要，不然后端req.body会undefined显示为{}
      method: "POST",
      body: JSON.stringify({
        secretword: input,
        name: getUser().name,
        week: props.PastDate,
        event: props.TodayEvent,
      }),
      //javascript object变成JSON，就是把javascript object变成一个text上多了引号，JSON是req规定的传输数据的格式
    }).then((result) => {
      console.log(result);
      window.location.reload();
    });
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={FirstTitleBlock}>
        <Typography variant="h4" sx={Title}>
          {props.title}
        </Typography>
      </Grid>

      <Grid container item xs={12} sx={SecondGridContainer}>
        <Grid item xs={12} sx={Wrapper}>
          <Typography variant="h6" sx={EventTitle}>
            {props.PastDate} {props.TodayEvent}
          </Typography>
        </Grid>

        <Grid item xs={8} sx={Wrapper}>
          <OutlinedInput
            placeholder="Attendance Word"
            sx={Input}
            name="secretword"
            onChange={onChange}
            inputRef={InputRef}
          />
        </Grid>
        <Grid item xs={4} sx={Wrapper}>
          <Button variant="contained" sx={Submit} onClick={Click}>
            Submit
          </Button>
        </Grid>
      </Grid>

      <Grid container item xs={12} sx={ThirdGridContainer}>
        <Grid item container>
          {Params &&
            Object.keys(Params).map((title) => {
              return (
                <Grid item xs={12}>
                  <StatusBox title={title} status={Params[title]} />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
}
