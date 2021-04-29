import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { fetchWeather } from "../../../api/weatherApi";
import TimeWidget from "../../../components/time__widget/TimeWidget";
import "./HomePageMain.css";
const HomePageMain = () => {
  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <div className="home__page__main">
      <div className="home__page__main__top">
        <div className="home__page__main__time">
          <TimeWidget />
        </div>
        <div className="home__page__main__wether">Weather</div>
      </div>
      <div className="home__page__main__middle">
        <div className="home__page__main__time">Gsearch</div>
      </div>
      <div className="home__page__main__bottom">
        <div className="home__page__main__app">App1</div>
        <div className="home__page__main__app">App1</div>
        <div className="home__page__main__app">App1</div>
        <div className="home__page__main__app">App1</div>
        <div className="home__page__main__app">App1</div>
        <div className="home__page__main__app">App1</div>
        <div className="home__page__main__app">App1</div>
        <div className="home__page__main__app">App1</div>
      </div>
    </div>
  );
};

export default HomePageMain;
