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
//         <input type="hidden" name="_next" value="http://localhost:5173/" />
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



import { useState } from "react";


const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        setIsError(false);
        form.reset();  // Optional: reset the form after successful submission
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setIsSuccess(false);
      setIsError(true);
      form.reset(); // Optional: reset the form after error
    }
  };

  return (
    <div className="" id="contact">
     

      {/* Success/Error message display */}
      {isSuccess && <p className="text-green-500">Your message has been sent successfully!</p>}
      {isError && <p className="text-green-500">Your message has been sent successfully!</p>}

      <form
        action="https://formspree.io/f/xldbjrwd"  // <-- Replace with your Formspree ID
        method="POST"
        className="space-y-4 my-6"
        onSubmit={handleSubmit}
      >
        {/* Optional: Honeypot to prevent spam */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        {/* Form Fields */}
        <div className="space-y-2">
          <label className="text-slate-300 font-semibold" htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="my-inp" placeholder="Name" required />
        </div>

        <div className="space-y-2">
          <label className="text-slate-300 font-semibold" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="my-inp" placeholder="Your email" required />
        </div>

        <div className="space-y-2">
          <label className="text-slate-300 font-semibold" htmlFor="message">Message</label>
          <textarea id="message" name="message" className="my-inp w-full h-[200px]" placeholder="Your message" required></textarea>
        </div>

        <button type="submit" className="cmn-btn-one">Send</button>
      </form>
    </div>
  );
};

export default Contact;
