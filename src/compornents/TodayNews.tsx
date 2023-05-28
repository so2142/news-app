// 

import React from "react";
import TodayDate from "./todaydate";
import Weather from "./weather";

const TodayNews = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="title">
                    <div className="todaynews">
                        <h2>今日のニュース</h2>
                        <TodayDate />
                        <div className="weather">
                            <Weather />
                        </div>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    );
};

export default TodayNews;