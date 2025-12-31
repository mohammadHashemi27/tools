import { FaPaintBrush, FaCode, FaRocket } from "react-icons/fa";

export const MainSec3 = () => {
  return (
    <div className="relative overflow-hidden bg-stone-50 dark:bg-slate-900 py-28 px-6 sm:px-12 transition-colors duration-500">
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          What We Do
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          We craft high-quality digital experiences with modern technologies and
          clean design principles.
        </p>
      </div>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Card */}
        {[
          {
            icon: <FaPaintBrush />,
            title: "UI / UX Design",
            text: "Elegant, intuitive interfaces designed to convert and engage users.",
          },
          {
            icon: <FaCode />,
            title: "Front-End Development",
            text: "Fast, scalable and maintainable React & Tailwind solutions.",
          },
          {
            icon: <FaRocket />,
            title: "Launch & Growth",
            text: "Performance-optimized products ready to scale your business.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group rounded-3xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-6 text-4xl text-teal-600 dark:text-teal-400 group-hover:scale-110 transition">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};
