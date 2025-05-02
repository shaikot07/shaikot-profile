import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <div>
      <section className="flex items-center justify-center mt-10">
        <div className="backdrop-blur-md bg-[#15EBD1]/10 rounded-2xl w-full max-w-7xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-6">
          {/* Left Side - Icon and Title */}
          <div className="flex flex-col items-center justify-center text-black px-6">
            <FaGraduationCap className="w-20 h-20 mb-4 text-white" />
            <h2 className="text-4xl font-bold tracking-wide text-white">Education</h2>
          </div>

          {/* Right Side - Text Info */}
          <div className="bg-slate-900/60 text-white flex flex-col justify-center px-4 py-4 space-y-4 ">
            <div className=" border border-[#11f5d4]/20 rounded-2xl p-4 shadow-xl text-white space-y-2 text-center">
              <h3 className="text-1xl font-bold text-pink-100">
                Diploma in Computer Science & Technology
              </h3>
              <p className="text-sm text-pink-200 italic">
              Kurigram Polytechnic Institute &middot; 2018 – 2023
              </p>
              <p className="text-base text-pink-100 leading-relaxed">
                A 4-year technical diploma covering programming fundamentals,
                data structures, algorithms, web development, networking, and
                practical training with real-world lab work and projects.
              </p>
            </div>
            <div className="text-center border border-[#11f5d4]/20 rounded-2xl py-2 space-y-2 px-2 p-4">
              <h3 className="text-1xl font-bold text-purple-100">
                Complete Web Development
              </h3>
              <p className="text-sm text-purple-200 italic">
                Programming Hero – Completed · Black Belt Achiever
              </p>
              <p className="text-base text-purple-100 leading-relaxed">
                Mastered HTML, CSS, JavaScript, React, Node.js, Express.js, and
                MongoDB. Built real-world full-stack projects with
                authentication and deployment.
              </p>
            </div>
            <div className="text-center border border-[#11f5d4]/20 rounded-2xl py-2 space-y-2 p-4">
              <h3 className="text-1xl font-bold text-indigo-100">
                Next Level Web Development
              </h3>
              <p className="text-sm text-indigo-200 italic">
                Programming Hero – Completed
              </p>
              <p className="text-base text-indigo-100 leading-relaxed">
                Advanced topics including Next.js, TypeScript, Redux, Mongoose,
                performance optimization, Stripe integration, and
                production-grade architecture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
