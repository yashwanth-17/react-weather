import Axios from "axios";
import { useState } from "react";
import "./App.css";
import "./AppMedia.css";
import cloud1 from "./images/cloud1.png";
import cloud2 from "./images/cloud2.png";
import cloud3 from "./images/cloud3.png";
import cloud4 from "./images/cloud4.png";
import cloud5 from "./images/cloud5.png";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const apiKey = "caf296e0ce821b81e46d2df84c527bc6";
  const printData = () => {
    if (city.trim() !== "")
      Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then((res) => {
          const { data } = res;
          setData(data);
          document.getElementById("input").value =
            data.name + (data.sys.country ? ", " + data.sys.country : "");
          document.getElementById("App").style.background =
            data.weather[0].icon[2] === "n"
              ? "linear-gradient(160deg, #000000 0%, #505050 100%)"
              : "linear-gradient(160deg, #0093e9 0%, #80d0c7 100%)";
        })
        .catch((e) => console.log(e));
  };
  function calcTime(offset) {
    var d = new Date();
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 1000 * offset);
    return nd.toDateString() + " " + nd.toLocaleTimeString();
  }
  function calcStaticTime(time, offset) {
    var d = new Date(0);
    d.setSeconds(time);
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 1000 * offset);
    return nd.toLocaleTimeString();
  }
  return (
    <div id="App">
      <div id="clouds">
        {[cloud1, cloud2, cloud3, cloud4, cloud5].map((cloud, i) => (
          <img id={"i" + (i + 1)} src={cloud} alt="" key={i} />
        ))}
      </div>
      <div id="content">
        <input
          spellCheck="false"
          autoComplete="off"
          id="input"
          onChange={(e) => setCity(e.target.value)}
          placeholder="enter city name..."
        />
        <button id="btn" onClick={printData}>
          checkout
        </button>
        {data !== null ? (
          <div id="desccont">
            <div id="tempcont">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt=""
              />
              <p id="temp">{data.main.temp}°C</p>
            </div>
            <p id="desc">{data.weather[0].main}</p>
            <p id="time">{calcTime(data.timezone)}</p>
            <section id="maxmincont">
              <section>
                <p>Min</p>
                <p>{data.main.temp_min}°C</p>
              </section>
              <section>
                <p>Max</p>
                <p>{data.main.temp_max}°C</p>
              </section>
            </section>
            <section id="maxmincont">
              <section>
                <p>Sunrise</p>
                <p>{calcStaticTime(data.sys.sunrise, data.timezone)}</p>
              </section>
              <section>
                <p>Sunset</p>
                <p>{calcStaticTime(data.sys.sunset, data.timezone)}</p>
              </section>
            </section>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
