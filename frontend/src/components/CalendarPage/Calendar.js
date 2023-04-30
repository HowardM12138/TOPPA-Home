import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import { getUser } from "../UserSession";

//npm package出现tree dependency problems时，在install的时候加 --legacy-peer-deps
//google calendar的public url可以在calendar的setting中找到

export default function Calendar() {
  const [Url, setUrl] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5002/Calendar/getUrl", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: getUser().name,
      }),
    })
      .then((result) => result.text())
      .then((result) => setUrl(result))
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <NavBar />
      {Url && (
        <ReactEmbeddedGoogleCalendar
          publicUrl={Url}
          height="740px"
          width="100%"
        />
      )}
    </div>
  );
}
