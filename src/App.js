import { useEffect, useState } from "react";

import "./App.css";
import ringIcon from "./assets/images/ring.jpg";
import infoIcon from "./assets/images/info.jpg";
import namesIcon from "./assets/images/names.jpg";
import calendarIcon from "./assets/images/calendar.jpg";
import { ReactComponent as Arrows } from "./assets/icons/arrows.svg";
import Map from "./Map";

const getDate = () => {
  const weddingDate = new Date(2022, 10, 26);
  const today = new Date();

  const days = weddingDate.getDate() - today.getDate() - 1;
  let hours = 24 - today.getHours() - 1;
  let minutes = 60 - today.getMinutes() - 1;
  let seconds = 60 - today.getSeconds();

  if (minutes === 60) {
    hours += 1;
    minutes = 0;
  }

  if (seconds === 60) {
    minutes += 1;
    seconds = 0;
  }

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const App = () => {
  const [date, setDate] = useState(getDate);

  useEffect(() => {
    const id = setInterval(() => {
      setDate(getDate());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="wrapper">
      <img className="icon" src={ringIcon} alt="" />
      <div className="namesWrapper">
        <Arrows className="arrow" />
        <img className="icon" src={namesIcon} alt="" />
        <div className="countdownWrapper">
          <div className="timer">
            <div>
              <div className="digits">{date.days}</div>
              <div>дней</div>
            </div>
            <div>
              <div className="digits">{date.hours}</div>
              <div>часов</div>
            </div>
            <div>
              <div className="digits">{date.minutes}</div>
              <div>минут</div>
            </div>
            <div>
              <div className="digits">{date.seconds}</div>
              <div>секунд</div>
            </div>
          </div>
        </div>
      </div>
      <img className="icon" src={infoIcon} alt="" />

      <img
        style={{ marginBottom: 10 }}
        className="icon"
        src={calendarIcon}
        alt=""
      />

      <Map
        title="Церковь Святой Рипсиме 15:20"
        subtitle="Вагаршапат, улица Месропа Маштоца"
        center={[40.167022928468754, 44.30953092642682]}
      />

      <br />

      <Map
        title="Ресторан Нор Двин 17:30"
        subtitle="Вагаршапат"
        center={[40.17710679147047, 44.29075788740535]}
      />
    </div>
  );
};

export default App;
