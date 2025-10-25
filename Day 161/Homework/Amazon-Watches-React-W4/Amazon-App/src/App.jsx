import React, { useState, useEffect } from "react";
import amazonLogo from "./assets/Amazon-logo.png";
import heartIcon from "./assets/heart.png";
import "./App.css";

function App() {
  const colors = [
    { id: 1, name: "black", color: "bg-[#1c1b1a]" },
    { id: 2, name: "red", color: "bg-[#cf4c32]" },
    { id: 3, name: "blue", color: "bg-[#585b8d]" },
    { id: 4, name: "purple", color: "bg-[#865c68]" },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [time, setTime] = useState("");
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="w-full bg-[#1A1A2E] flex justify-center py-4">
        <img src={amazonLogo} alt="Amazon" className="h-10" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-10 mt-10">
        <div className="flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            <div
              className={`${selectedColor.color} w-24 h-16 rounded-t-full`}
            ></div>

            <div className="relative flex justify-center items-center">
              <div
                className={`relative ${selectedColor.color} w-48 h-60 md:w-56 md:h-72 rounded-[24px] flex justify-center items-center border-[6px] border-gray-300 shadow-lg`}
              >
                <div className="absolute inset-[12%] bg-black rounded-xl flex justify-center items-center">
                  {showHeart ? (
                    <img
                      src={heartIcon}
                      alt="Heart Rate"
                      className="w-8 md:w-10 animate-pulse"
                    />
                  ) : (
                    <p className="text-white text-xl font-semibold tracking-tight">
                      {time}
                    </p>
                  )}
                </div>
              </div>

              <div className="absolute right-[-10px] top-[45%] w-3 h-10 bg-gray-400 rounded-r-md shadow-sm"></div>
            </div>

            <div
              className={`${selectedColor.color} w-24 h-16 rounded-b-full`}
            ></div>
          </div>
        </div>

        <div className="max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold">
            FitBit 19 -{" "}
            <span className="text-gray-800">The Smartest Watch</span>
          </h1>
          <p className="text-gray-500 mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperiores adipisci culpa rem? A, tenetur veritatis.
          </p>

          <h2 className="font-semibold mt-6">Select Color</h2>
          <div className="flex gap-4 mt-3">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-md border-2 border-gray-300 ${color.color} ${
                  selectedColor.name === color.name ? "ring-2 ring-yellow-400" : ""
                }`}
              ></button>
            ))}
          </div>

          <h2 className="font-semibold mt-6">Features</h2>
          <div className="flex gap-4 mt-3">
            <button
              className={`px-4 py-1 rounded-md font-medium ${
                !showHeart ? "bg-gray-200" : "bg-gray-100"
              }`}
              onClick={() => setShowHeart(false)}
            >
              Time
            </button>
            <button
              className={`px-4 py-1 rounded-md font-medium ${
                showHeart ? "bg-gray-200" : "bg-gray-100"
              }`}
              onClick={() => setShowHeart(true)}
            >
              Heart Rate
            </button>
          </div>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded-md transition">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
