import Section_title from "../../../helping_component/section_title";
import me from '../../../assets/img/me.jpg'

const About = () => {
      return (
            <div className='py-10 my-container relative min-h-[80vh]' id='about'>
            <Section_title title={'About me'} subtitle={'Inspired by Innovation, Empowered by Imagination'}></Section_title>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-10'>
                <div className='px-8'>
                    <div className='text-center'>
                        <h2 className='font-bold inline-block text-3xl mb-6 relative before:h-px before:w-10 before:bg-[#15EBD1] before:absolute before:-left-16 before:top-5  after:h-px after:w-10 after:bg-[#15EBD1] after:absolute after:-right-16 after:top-5'>A few words about me</h2>
                    </div>
                    <p className='text-slate-300 leading-8'>Hello, I'm Saiful Islam Shaikot,a passionate  web developer based in Rangpur, Bangladesh. With a strong focus on  JavaScript, I take pleasure in crafting innovative web applications.
                        <br />
                        <br />
                        My quest for knowledge is unending, and I eagerly seize opportunities to delve into and master emerging technologies. My purpose is to elevate the realm of technology.
                        <br />
                        <br />

                        I have completed diploma with CSE I'm on the lookout for thrilling opportunities that resonate with my skills and passions. Let's connect and embark on a shared journey towards technological excellence!</p>
                </div>
                <div className='px-8'>
                <div className='text-center'>
                        <h2 className='font-bold inline-block text-3xl mb-6 relative before:h-px before:w-10 before:bg-[#15EBD1] before:absolute before:-left-16 before:top-5  after:h-px after:w-10 after:bg-[#15EBD1] after:absolute after:-right-16 after:top-5'>Can I help you?</h2>
                    </div>
                    <p className='text-slate-300 leading-8'>
                         Looking to Establish Your Online Presence in Today's Tech-Empowered Era? Harness the Potential of Technology at Your Fingertips!
                        <br />
                        <br />
                        Proficient in React, Tailwind, and Bootstrap, I specialize in crafting immersive frontend experiences. Leveraging Firebase ensures a smooth user authentication process. Employing Express JS, I engineer resilient backend solutions, and seamless MongoDB integration facilitates efficient database management. Let's transform your concepts into reality using state-of-the-art technology.
                        <br />
                        <br />
                        Why delay? Take the plunge and connect with me to witness the enchantment firsthand. Together, we'll breathe life into your vision within the digital landscape!
                    </p>
                </div>
            </div>

            <img src={me} alt="" className='opacity-10 mx-auto absolute top-80 left-1/2 -translate-x-1/2 rounded-full h-96 pointer-events-none' />
        </div>
      );
};

export default About;