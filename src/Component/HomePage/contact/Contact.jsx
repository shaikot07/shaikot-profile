// import { ToastContainer, toast } from "react-toastify";
// import { useForm } from 'react-hook-form';
// import Section_title from "../../../helping_component/SectionTitle";





// const Contact = () => {


//       const { register, handleSubmit,  formState: { errors } } = useForm();
//       const handleSubmitFunc = form => {
//             console.log(form);
//             toast.success('Message sent successfully!', {
//                   position: "top-right",
//                   autoClose: 2000,
//                   hideProgressBar: false,
//                   closeOnClick: true,
//                   pauseOnHover: true,
//                   draggable: true,
//                   progress: undefined,
//                   theme: "dark",
//             });
//       }
//       // console.log(watch("name")) //get name outside onSubmit form
//       return (

//             <div className="my-container py-14" id="contact">
//                   <Section_title title={'Reach Out'}subtitle={'Where Your Voice Matters'}></Section_title>
//                   <form onSubmit={handleSubmit(handleSubmitFunc)} className='space-y-4 my-6'>
//                         <div className='space-y-2'>
//                               <label className='text-slate-300 font-semibold' htmlFor="name">Name</label>
//                               <input type="text" id='name' className='my-inp' {...register("name", { required: true })} placeholder='Name' />
//                               {errors.name && <span className='text-red-500'>This field is required</span>}
//                         </div>

//                         <div className='space-y-2'>
//                               <label className='text-slate-300 font-semibold' htmlFor="email">Email</label>
//                               <input type="email" id='email' className='my-inp' {...register("email", { required: true })} placeholder='Your email' />
//                               {errors.email && <span className='text-red-500'>This field is required</span>}
//                         </div>

//                         <div className='space-y-2'>
//                               <label className='text-slate-300 font-semibold' htmlFor="message">Message</label>
//                               <textarea type="text" id='message' className='my-inp w-full h-[200px]' {...register("message", { required: true })} placeholder='Your message' />
//                               {errors.message && <span className='text-red-500'>*This field is required</span>}
//                         </div>
//                         <button type='submit' className='cmn-btn-one'>Send</button>
//                   </form>
//                   <ToastContainer
//                         position="top-right"
//                         autoClose={2000}
//                         hideProgressBar={false}
//                         newestOnTop={false}
//                         closeOnClick
//                         rtl={false}
//                         pauseOnFocusLoss
//                         draggable
//                         pauseOnHover
//                         theme="dark"
//                   />
//                   {/* Same as */}
//                   <ToastContainer />
//             </div>
//       );
// };

// export default Contact;






// import Section_title from "../../../helping_component/SectionTitle";

// const Contact = () => {
//   return (
//     <div className="my-container py-14" id="contact">
//       <Section_title title={"Reach Out"} subtitle={"Where Your Voice Matters"} />

//       <form 
//         action="https://formsubmit.co/saifulislamshaikat007@gmail.com" 
//         method="POST" 
//         className="space-y-4 my-6"
//       >
//         {/* Optional: Redirect to a thank-you page after submission */}
//         <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />
//         <input type="hidden" name="_captcha" value="false" />

//         <div className="space-y-2">
//           <label className="text-slate-300 font-semibold" htmlFor="name">Name</label>
//           <input type="text" id="name" name="name" className="my-inp" placeholder="Name" required />
//         </div>

//         <div className="space-y-2">
//           <label className="text-slate-300 font-semibold" htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" className="my-inp" placeholder="Your email" required />
//         </div>

//         <div className="space-y-2">
//           <label className="text-slate-300 font-semibold" htmlFor="message">Message</label>
//           <textarea id="message" name="message" className="my-inp w-full h-[200px]" placeholder="Your message" required></textarea>
//         </div>

//         <button type="submit" className="cmn-btn-one">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;



import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Section_title from "../../../helping_component/SectionTitle";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://formsubmit.co/saifulislamshaikat007@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (res.ok) {
      toast.success("Thanks for your message!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send. Try again!");
    }
  };

  return (
    <div className="my-container py-14" id="contact">
      <Section_title title={"Reach Out"} subtitle={"Where Your Voice Matters"} />

      <form onSubmit={handleSubmit} className="space-y-4 my-6">
        <div className="space-y-2">
          <label className="text-slate-300 font-semibold" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="my-inp"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-slate-300 font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="my-inp"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
          />
        </div>

        <div className="space-y-2">
          <label className="text-slate-300 font-semibold" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="my-inp w-full h-[200px]"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message"
          />
        </div>

        <button type="submit" className="cmn-btn-one">Send</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Contact;
