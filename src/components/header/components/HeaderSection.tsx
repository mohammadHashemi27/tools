import { useState, useEffect } from "react";
import { FaTelegramPlane, FaLinkedin, FaInstagram } from "react-icons/fa";

import { SiPeakdesign } from "react-icons/si";

export const HeaderSection = () => {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "Blog", "Contact"];

  // دارک مود روی html
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // تشخیص اسکرول
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* هدر */}
      <div
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-700
          ${
            scrolled
              ? "bg-gray-100/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md py-4"
              : "bg-gradient-to-t from-teal-100 to-teal-50 dark:from-slate-900 dark:to-slate-800 py-12"
          }
        `}
      >
        <div
          className={`relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-8 sm:px-12 transition-all duration-700 ${
            scrolled ? "scale-95" : "scale-100"
          }`}
        >
          {/* لوگو */}
          <h1
            className={`text-4xl sm:text-5xl font-bold transition-all duration-700 ${
              scrolled
                ? "text-gray-900 dark:text-white"
                : "text-gray-900 dark:text-white animate-pulse"
            }`}
          >
            <section className="flex ">
              Design <SiPeakdesign />
            </section>
          </h1>

          {/* ناوبری */}
          <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-4 sm:mt-0">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="relative group text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:text-teal-500 dark:hover:text-teal-400"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              className="bg-teal-400 dark:bg-teal-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => setDark(!dark)}
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>

          {/* آیکون‌های متحرک */}
          {!scrolled && (
            <>
              <FaInstagram className="absolute top-10 left-10 text-pink-500 text-4xl opacity-30 animate-bounce-slow" />
              <FaTelegramPlane className="absolute top-1/3 right-20 text-blue-400 text-5xl opacity-25 animate-pulse-slow" />
              <FaLinkedin className="absolute bottom-20 left-1/4 text-blue-700 text-6xl opacity-20 animate-bounce-slower" />
            </>
          )}
        </div>
      </div>

      {/* انیمیشن سفارشی */}
      <style>{`
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%,100% { opacity:0.25; } 50% { opacity:0.7; } }
        .animate-bounce-slow { animation: bounce 4s infinite; }
        .animate-bounce-slower { animation: bounce 6s infinite; }
        .animate-pulse-slow { animation: pulse 3s infinite; }
      `}</style>

      {/* spacer */}
      <div className="h-[100vh] sm:h-[100vh]"></div>
    </div>
  );
};
