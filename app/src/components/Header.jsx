import React, { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";

const Header = () => {
  // const user = JSON.parse(localStorage.getItem("username"));
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("Guest");


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("username"));
    if (storedUser) {
      setUsername(storedUser.username);
    }
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      const formattedDate = now.toLocaleDateString("en-GB", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-3 flex justify-between items-center max-lg:w-screen ">
      <div className="flex gap-3">
        <img src="/admin.png" alt="" className="w-10 h-10" />
        <div>
          <h2 className="font-bold text-semibold">{username}</h2>
          <p className="text-sm text-black">Admin</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="place-items-end">
        <p className="font-bold">{time}</p>
        <p className="text-sm">{date}</p>
        </div>
        <img src="/line.png" alt="" />
        <IoSettingsSharp className="mt-2 text-4xl"/>
      </div>
    </div>
  );
};

export default Header;
