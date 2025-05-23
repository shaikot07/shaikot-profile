import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTopP = window.scrollY < 100;
      setIsTop(isTopP);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  const menu = (
    <>
      <li>
        {" "}
        <Link
          className="rounded-none text-slate-50 font-bold border-b-0 hover:!text-[#15EBD1] hover:border-[#15EBD1] hover:border-b-2 transition duration-300 focus:!text-white"
          to={"/"}
        >
          Home
        </Link>{" "}
      </li>
      <li>
        <a
          className="rounded-none text-slate-50 font-bold hover:!text-[#15EBD1]  hover:border-[#15EBD1] hover:border-b-2 transition duration-300"
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="rounded-none text-slate-50 font-bold hover:!text-[#15EBD1]  hover:border-[#15EBD1] hover:border-b-2 transition duration-300"
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          className="rounded-none text-slate-50 font-bold hover:!text-[#15EBD1]  hover:border-[#15EBD1] hover:border-b-2 transition duration-300"
          href="#projects"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          className="rounded-none text-slate-50 font-bold hover:!text-[#15EBD1]  hover:border-[#15EBD1] hover:border-b-2 transition duration-300"
          href="#contact"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          className="rounded-none text-slate-50 font-bold hover:!text-[#15EBD1]  hover:border-[#15EBD1] hover:border-b-2 transition duration-300"
          href="#contact"
        >
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div className="max-w-6xl  mx-auto ">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="fixed inset-x-0 z-40"
      >
        <div
          className={`navbar shadow-lg transition ${
            isTop ? "bg-[#02182315]" : "bg-[#0218238d]"
          }`}
        >
          <div className="navbar-start">
            <div className={`dropdown ${menuOpen ? "dropdown-open" : ""} `}>
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden "
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow border rounded-box w-52 z-50"
              >
                {menu}
              </ul>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Link className="text-xl" to={"/"}>
                <img
                  src="https://i.ibb.co/tPB8G91/logo.png"
                  className="w-10 h-auto"
                  alt=""
                />
              </Link>
              {/* <Link to='/'>LOGO</Link> */}
            </motion.div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menu}</ul>
          </div>

          <div className="navbar-end ">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Link
                to={
                  "https://drive.google.com/uc?export=download&id=10IzzNt-KaTGUlNrw-PgZdZOt1yMJv0S0"
                }
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.9 }}
                  className={"cmn-btn-one"}
                >
                  {" "}
                  Resume{" "}
                </motion.button>{" "}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
