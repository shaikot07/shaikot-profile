import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllProject = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);


  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#1F756A] border-t-transparent rounded-full animate-spin"></div>
          <div>
            <p className="text-white text-lg font-medium">
              Please Wait Loading projects...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-14">
      {data.map((project) => (
        <div
          key={project?._id}
          className="w-full bg-slate-800 text-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-200"
        >
          {/* Image */}
          <img
            src={project?.projectImg || "/default.jpg"}
            alt={project?.projectName}
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
          />

          {/* Content */}
          <div className="flex-1 p-5 space-y-3 overflow-y-auto max-h-64 scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-700">
            <h2 className="text-2xl font-semibold">{project?.projectName}</h2>
            <p className="text-sm text-slate-300 leading-relaxed tracking-wide max-h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-700 pr-2">
              {project?.projectOverview}
            </p>
          </div>

          {/* Button */}
          <div className="p-4">
            <Link to={`/project/${project?._id}`}>
              <button className="w-full cmn-btn-one font-medium py-2 rounded-lg transition duration-200">
                View Project
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProject;
