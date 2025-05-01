import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import SectionTitle from '../../../helping_component/SectionTitle';

const Test = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e);
        alert("Form submitted");
        emailjs.sendForm('service_9l2jgia', 'template_o0ho9hg', form.current, 'SClpYehcmihwlVrE7')
            //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: "top-end", 
                    icon: "success",
                    title: "Message send successfully",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    form.current.reset(); // Reset the form after success message
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Error sending message",
                    text: error.text || "Something went wrong. Please try again!",
                    showConfirmButton: true
                });
            });
    };

    return (

        <div className="my-container overflow-x-hidden py-14" id="contact">
            <SectionTitle title={'Reach Out'}
                subtitle={'Where Your Voice Matters'}></SectionTitle>
            <form ref={form} onSubmit={sendEmail} className='space-y-4 my-6'>
                <div className='space-y-2'>
                    <label className='text-slate-300 font-semibold'>Name</label>
                    <input className='my-inp' type="text" name="name" placeholder='Your name' />
                </div>
                <div className='space-y-2'>
                    <label className='text-slate-300 font-semibold'>Email</label>
                    <input className='my-inp' type="email" name="email" placeholder='Your email' required />
                </div>
                <div className='space-y-2'>
                    <label className='text-slate-300 font-semibold'>Message</label>
                    <textarea className='my-inp' name="message" placeholder='Your message' required />
                </div>
                <button type='submit' className='cmn-btn-one'>Send</button>
            </form>

        </div>

    );
};

export default Test;