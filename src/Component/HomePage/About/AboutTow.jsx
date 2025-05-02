import SectionTitle from "../../../helping_component/SectionTitle";
import myImg from "../../../assets/img/me.jpg"; // Adjust the path as necessary
const AboutTow = () => {
  return (
    <div className="mt-10" id='about'>
      <SectionTitle
        title={"About me"}
        subtitle={"Inspired by Innovation, Empowered by Imagination"}
      ></SectionTitle>
      <div className="max-w-6xl mx-auto p-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* <!-- Left: Image --> */}
          <div className="flex justify-center items-center">
            <img
              src={myImg}
              alt="Schael Marceus Portrait"
              className="w-1/2 h-auto rounded-xl shadow-md"
            />
          </div>

          {/* <!-- Right: Text Block --> */}
          <div className="">
            <p>
              Hi, I&apos;m <strong>Saiful Islam Shaikot</strong>, a passionate
              Full-Stack Developer specializing in the{" "}
              <strong>MERN stack</strong>—MongoDB, Express.js, React.js, and
              Node.js— along with modern tools like <strong>Next.js</strong> and{" "}
              <strong>TypeScript</strong>.
            </p>
            <br />
            <p>
              I love building scalable, high-performance web applications that
              offer great user experiences. Whether it&apos;s crafting seamless
              front-end interfaces or building efficient back-end APIs, I bring
              both creativity and technical precision to every project. I&apos;m
              particularly comfortable working with server-side rendering, API
              routes, and full-stack implementations using Next.js.
            </p>
            <br />
            <p>
              Always eager to grow, I stay up to date with the latest in web
              technologies and best practices. I thrive in collaborative
              environments and enjoy solving real-world problems through clean,
              maintainable code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTow;
