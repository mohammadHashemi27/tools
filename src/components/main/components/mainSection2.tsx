import { CgWebsite } from "react-icons/cg";

export const Main2 = () => {
  return (
    <section className="relative overflow-hidden bg-stone-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 px-6 sm:px-12 transition-colors duration-500">
      {/* Background Effects */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-teal-300/20 dark:bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        {/* Icon */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-2xl"></div>
          <CgWebsite className="relative text-[150px] text-teal-600 dark:text-teal-400" />
        </div>

        {/* Text */}
        <div className="text-right">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            We build websites that <br />
            <span className="text-teal-600 dark:text-teal-400">
              turn ideas into products
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
            We design and develop modern, fast and scalable websites using clean
            code and best practices to deliver premium digital experiences.
          </p>

          <div className="flex justify-end gap-4">
            <button className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 dark:bg-teal-500">
              Get Started
            </button>
            <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-100 transition-all duration-300 dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-white">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
