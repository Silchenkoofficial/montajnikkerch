import React from "react";
import "./Schedule.scss";

const ScheduleContent = ({ onClose, days, today }) => {
  return (
    <div className="schedule__content df aic jcc">
      <div
        className="schedule__content--overlay"
        id="schedule__overlay"
        onClick={onClose}
      ></div>
      <div className="schedule__body" id="schedule__body">
        <div className="schedule__title df aic jcsb">
          <p>График работы</p>
          <div className="schedule__close cur" onClick={onClose}>
            <span></span>
          </div>
        </div>
        <ul className="schedule__list">
          {days.map((day, index) => (
            <li
              className="df aic jcsb schedule__text"
              style={{
                fontWeight: index + 1 === today ? "bold" : "500",
                color: index + 1 === today ? "#ff0000" : "#959595",
              }}
            >
              <p>{day.day}</p>
              <p>{day.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Schedule() {
  const [isScheduleShown, setIsScheduleShown] = React.useState(false);
  const days = [
    {
      day: "Понедельник",
      time: "08:00 - 18:00",
    },
    {
      day: "Вторник",
      time: "08:00 - 18:00",
    },
    {
      day: "Среда",
      time: "08:00 - 18:00",
    },
    {
      day: "Четверг",
      time: "08:00 - 18:00",
    },
    {
      day: "Пятница",
      time: "08:00 - 18:00",
    },
    {
      day: "Суббота",
      time: "08:00 - 18:00",
    },
    {
      day: "Воскресенье",
      time: "09:00 - 17:00",
    },
  ];
  const today = new Date().getDay();

  return (
    <div className="">
      <div
        className="schedule cur"
        onClick={() => {
          setTimeout(() => {
            const scheduleOverlay =
              document.getElementById("schedule__overlay");
            scheduleOverlay.classList.toggle("opened");
            const scheduleBody = document.getElementById("schedule__body");
            scheduleBody.classList.toggle("opened");
          }, 10);
          setTimeout(() => {
            setIsScheduleShown(true);
          }, 0);
        }}
      >
        {days[today - 1]?.day}: {days[today - 1]?.time}&nbsp;
        <i className="fas fa-chevron-down"></i>
      </div>
      {isScheduleShown && (
        <ScheduleContent
          days={days}
          today={today}
          onClose={() => {
            setTimeout(() => {
              const scheduleOverlay =
                document.getElementById("schedule__overlay");
              scheduleOverlay.classList.toggle("opened");
              const scheduleBody = document.getElementById("schedule__body");
              scheduleBody.classList.toggle("opened");
            }, 0);
            setTimeout(() => {
              setIsScheduleShown(false);
            }, 200);
          }}
        />
      )}
    </div>
  );
}

export default Schedule;
