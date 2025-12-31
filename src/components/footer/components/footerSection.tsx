import { useEffect, useState } from "react";

export const FooterSection = () => {
  const words = ["Tailwind CSS", "React", "JavaScript", "Modern UI"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[textIndex];
    let timeout: number | undefined;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, words]);

  return (
    <footer className="bg-gradient-to-t from-teal-100 to-teal-50 dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-300 mt-24 transition-colors duration-500">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Top */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">
              My Website
            </h2>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              We build modern and clean web experiences using React &{" "}
              <span className="text-teal-500 dark:text-teal-400 font-semibold">
                {displayText}
                <span className="inline-block w-[2px] h-5 bg-teal-500 animate-pulse ml-1"></span>
              </span>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Blog", "About", "Contact"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer w-fit relative group hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Contact
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Email: info@example.com
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Phone: +98 900 000 0000
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-300/40 dark:bg-slate-700" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
          <p className="opacity-80">© 2025 My Website. All rights reserved.</p>
          <p className="text-xs opacity-70">
            Designed with ❤️ using{" "}
            <span className="font-semibold text-teal-500 dark:text-teal-400">
              {displayText}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
