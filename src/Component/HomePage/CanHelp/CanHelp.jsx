import Contact from "../contact/Contact";
import Section_title from "../../../helping_component/SectionTitle";
const CanHelp = () => {
  return (
    <div>
      <section className="py-6  mb-16 mt-10" id="contact">
        <Section_title
          title={"Reach Out"}
          subtitle={"Where Your Voice Matters"}
        />
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
          {/* <!-- Left Side Text --> */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Can I Help You?
            </h2>
            <p className="text-white mb-4">
              Looking to establish your online presence in today’s
              tech-empowered era? Harness the potential of technology at your
              fingertips!
            </p>
            <p className="text-white mb-4">
              Proficient in <strong>React</strong>, <strong>Next.js</strong>,{" "}
              <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, I
              specialize in crafting immersive frontend experiences. Leveraging{" "}
              <strong>Firebase</strong> ensures smooth user authentication. With{" "}
              <strong>Express.js</strong> and <strong>Node.js</strong>, I
              engineer resilient backend solutions, while seamless{" "}
              <strong>MongoDB</strong> integration enables efficient database
              management.
            </p>
            <p className="text-white mb-4">
              Let’s transform your concepts into reality using state-of-the-art
              technology.
            </p>
            <p className="text-white font-medium">
              Why delay? Take the plunge and connect with me to witness the
              enchantment firsthand. Together, we’ll breathe life into your
              vision within the digital landscape!
            </p>
          </div>

          {/* <!-- Right Side Form --> */}
          <div>
            {/* <!-- Place your form component here --> */}
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CanHelp;
