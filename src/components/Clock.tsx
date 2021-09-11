import React, { useState } from "react";
import styled from "styled-components";

export const Clock = (): JSX.Element => {
  const [today, setToday] = useState("");
  const [time, setTime] = useState("");

  const clock = () => {
    // 現在の日時・時刻の情報を取得
    const d = new Date();

    // 年を取得
    let year: number | string = d.getFullYear();
    // 月を取得
    let month: number | string = d.getMonth() + 1;
    // 日を取得
    let date: number | string = d.getDate();
    // 曜日を取得
    let dayNum: number | string = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    // 時を取得
    let hour: number | string = d.getHours();
    // 分を取得
    let min: number | string = d.getMinutes();
    // 秒を取得
    let sec: number | string = d.getSeconds();

    // 1桁の場合は0を足して2桁に
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // 日付・時刻の文字列を作成
    setToday(`${year}.${month}.${date} ${day}`);
    setTime(`${hour}:${min}:${sec}`);
  };

  setInterval(clock, 1000);

  return (
    <Style>
      <div className="clock">
        <p className="clock-date">{today}</p>
        <p className="clock-time">{time}</p>
      </div>
    </Style>
  );
};

const Style = styled.div`
  .clock {
    font-family: "Share Tech Mono", monospace;
    color: #ffffff;
    text-shadow: 0 0 20px #ffffff;
    text-align: center;

    .clock-date {
      font-size: 15px;
    }

    .clock-time {
      margin: 5px 0 0;
      font-size: 30px;
    }
  }
`;
