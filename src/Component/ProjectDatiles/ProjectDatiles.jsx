import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDatiles = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  console.log(project);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // load project data via id
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const expectedProject = data.find((d) => d._id === parseInt(id));
        setProject(expectedProject);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="h-16 w-16 rounded-full border-l-2 loading-spinner"></span>
      </div>
    );
  }
  return (
    <div className="pb-14 overflow-x-hidden">
      <div
        className="h-[70vh] flex items-center justify-center bg-slate-900 bg-blend-overlay bg-center bg-cover"
        style={{ backgroundImage: `url(${project.projectBanner})` }}
      >
        <div className="text-center font-semibold space-y-6 w-5/6 md:4/6 xl:w-3/6 mx-auto">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5, type: "spring", stiffness: 70 }}
          >
            <h2 className="cmn-title-one">{project.projectName}</h2>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.8, type: "spring", stiffness: 70 }}
            // transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p>
              This page contains the case study of{" "}
              <strong>{project.projectName}</strong> Website which includes the
              Project Overview, Tools Used and Live Links to the official
              product.
            </p>
          </motion.div>
          <div className="flex items-center justify-center gap-4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.9, type: "spring", stiffness: 70 }}
            >
              <Link to={project.liveLink} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.9 }}
                  className="cmn-btn-one !mt-6"
                >
                  {" "}
                  Live Link{" "}
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.9, type: "spring", stiffness: 70 }}
            >
              <Link to={project.clientRepo} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.9 }}
                  className="cmn-btn-one !mt-6"
                >
                  {" "}
                  Client Repo{" "}
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.9, type: "spring", stiffness: 70 }}
            >
              <Link to={project.serverRepo} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.9 }}
                  className="cmn-btn-one !mt-6"
                >
                  {" "}
                  Server Repo{" "}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="my-container space-y-20">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 115 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView={"visible"}
          // transition={{ duration: 0.6, delay: 0.3 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 70 }}
        >
          <img
            className="w-5/6 md:w-4/6 h-auto mx-auto mt-6"
            src={project.projectImg}
            alt=""
          />
        </motion.div>

        <div className="space-y-8">
          <h2 className="cmn-title-one">Project Overview</h2>
          {Array.isArray(project.projectOverview) && (
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              {project.projectOverview.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
        {Array.isArray(project.futurePlans) &&
          project.futurePlans.length > 0 && (
            <div className="space-y-8">
              <h2 className="cmn-title-one">Future plan</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                {project.futurePlans.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )}

        <div className="space-y-8 !mb-16">
          <h2 className="cmn-title-one">Tools Used</h2>
          {project.tools.map((p) => (
            <button className="btn btn-ghost mx-2 !text-white" disabled key={p}>
              {p}
            </button>
          ))}
        </div>

        <Link to={-1}>
          <button className="cmn-btn-one">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDatiles;
