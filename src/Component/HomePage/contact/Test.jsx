import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Section_title from '../../../helping_component/section_title';
import Swal from 'sweetalert2';

const Test = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e);
        emailjs.sendForm('service_w1ylpqe', 'template_8pxe57h', form.current, 'EP3hBlHhMwS79VTB2')
            //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Message send successfully",
                    showConfirmButton: false,
                    timer: 1500
                  })
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div className="my-container py-14" id="contact">
            <Section_title title={'Reach Out'}
                subtitle={'Where Your Voice Matters'}></Section_title>
            <form ref={form} onSubmit={sendEmail} className='space-y-4 my-6'>
                <div className='space-y-2'>
                    <label className='text-slate-300 font-semibold'>Name</label>
                    <input className='my-inp' type="text" name="user_name" placeholder='Your name' />
                </div>
                <div className='space-y-2'>
                    <label className='text-slate-300 font-semibold'>Email</label>
                    <input className='my-inp' type="email" name="user_email" placeholder='Your email' required />
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