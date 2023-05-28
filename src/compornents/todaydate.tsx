// todaydate.tsx

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);

const TodayDate = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const week = date.getDay();
    const dayList = ['日','月','火','水','木','金','土']
    const weeklabel = dayList[week];

    return (
        <div className="todaydate">
            {month}月{day}日{weeklabel}曜日
        </div>
    );
};

export default TodayDate;