import { ToastContainer, toast } from "react-toastify";
import { useForm } from 'react-hook-form';
import Section_title from "../../../helping_component/section_title";




const Contact = () => {


      const { register, handleSubmit, watch, formState: { errors } } = useForm();
      const handleSubmitFunc = form => {
            console.log(form);
            toast.success('Message sent successfully!', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
            });
      }
      // console.log(watch("name")) //get name outside onSubmit form
      return (

            <div className="my-container py-14" id="contact">
                  <Section_title title={'Reach Out'}
                        subtitle={'Where Your Voice Matters'}></Section_title>
                  <form onSubmit={handleSubmit(handleSubmitFunc)} className='space-y-4 my-6'>
                        <div className='space-y-2'>
                              <label className='text-slate-300 font-semibold' htmlFor="name">Name</label>
                              <input type="text" id='name' className='my-inp' {...register("name", { required: true })} placeholder='Name' />
                              {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>

                        <div className='space-y-2'>
                              <label className='text-slate-300 font-semibold' htmlFor="email">Email</label>
                              <input type="email" id='email' className='my-inp' {...register("email", { required: true })} placeholder='Your email' />
                              {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>

                        <div className='space-y-2'>
                              <label className='text-slate-300 font-semibold' htmlFor="message">Message</label>
                              <textarea type="text" id='message' className='my-inp w-full h-[200px]' {...register("message", { required: true })} placeholder='Your message' />
                              {errors.message && <span className='text-red-500'>*This field is required</span>}
                        </div>
                        <button type='submit' className='cmn-btn-one'>Send</button>
                  </form>
                  <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                  />
                  {/* Same as */}
                  <ToastContainer />
            </div>
      );
};

export default Contact;