import React from "react";

const Notifications = () => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            <span className="pink-text">User X</span>
            <span> created Project.</span>
            <div className="grey-text">21 May 2021,03:00 PM</div>

            <span className="pink-text">User Y</span>
            <span> logged in.</span>
            <div className="grey-text">21 May 2021,03:00 PM</div>
          </ul>

          <p>* These are the dummy notifications.</p>
        </div>
      </div>
    </div>
  );
};
export default Notifications;
