import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaTools,
  FaCode,
  FaCogs,
  FaWrench,
  FaLaptopCode,
  FaServer,
  FaAmazon,
  FaGithub,
  FaLinkedin,
  FaCcAmazonPay,
} from "react-icons/fa";
import { ImSpotify } from "react-icons/im";
import { SiNetflix } from "react-icons/si";

export const MainSection = () => {
  const headings = [
    " powerful  ",
    " modern  ",
    "   online",
    " scalable  ",
    " ideas   ",
  ];

  const icons = [FaTools, FaCode, FaCogs, FaWrench, FaLaptopCode, FaServer];

  // تایپ افکت
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = headings[textIndex];
    let timeout: number | undefined;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70); // سرعت تایپ
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500); // مکث بعد از تایپ کامل
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40); // سرعت پاک شدن
    } else if (isDeleting && charIndex === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % headings.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, headings]);

  const ToolIcon = icons[textIndex];

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen py-16 px-5 sm:px-10 lg:px-20 transition-colors duration-500">
      {/* بخش خوش‌آمدگویی */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* متن */}
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-900 dark:text-white font-extrabold mb-4">
              {/* متن ثابت */}
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Explore modern features
              </span>

              {/* خط عمودی متحرک */}
              <span className="hidden sm:block w-[2px] h-8 sm:h-10 bg-teal-500 animate-pulse"></span>

              {/* متن داینامیک */}
              <span className="text-teal-500 dark:text-teal-400 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-0">
                {displayText}
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl mb-6">
              We help you explore modern features and create digital solutions
              that stand out in today’s competitive world.
            </p>

            <button className="px-6 py-3 bg-teal-100 rounded-md dark:bg-slate-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-gray-900 dark:text-white">
              Book a consultation
            </button>
          </div>

          {/* آیکون داینامیک */}
          <ToolIcon className="text-8xl sm:text-9xl text-teal-500 dark:text-teal-400 shrink-0 transition-all duration-700 ease-in-out" />
        </div>

        {/* برندها */}
        <section className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            FaAmazon,
            SiNetflix,
            FaLinkedin,
            ImSpotify,
            FaGithub,
            FaCcAmazonPay,
          ].map((Icon, i) => (
            <button
              key={i}
              className="flex items-center justify-center rounded-xl p-4 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Icon className="text-4xl" />
            </button>
          ))}
        </section>
      </section>

      {/* بخش ویژگی‌ها */}
      <section className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
          Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }, (_, i) => (
            <a
              key={i}
              href="#"
              className="bg-teal-100 dark:bg-slate-700 rounded-2xl p-6 sm:p-8 block shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">Feature {i + 1}</h3>

              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4">
                A brief description of feature {i + 1} goes here.
              </p>

              <p className="group inline-flex items-center gap-2 text-sm font-medium cursor-pointer text-teal-500 hover:text-teal-600 transition-colors duration-300">
                <span className="relative">
                  Learn more
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
