// // import { useEffect } from 'react';
// // import Script from 'next/script';

// // export default function SignUpForm() {
// //   useEffect(() => {
// //     // This will run after the component mounts
// //     if (window.convertkit && window.convertkit.createForm) {
// //       window.convertkit.createForm('5627422', {
// //         // Your ConvertKit form options here
// //       });
// //     }
// //   }, []);

// //   return (
// //     <>
// //       <Script
// //         src="https://f.convertkit.com/ckjs/ck.5.js"
// //         strategy="afterInteractive"
// //       />
// //       <form
// //         action="https://app.convertkit.com/forms/5627422/subscriptions"
// //         className="seva-form formkit-form"
// //         method="post"
// //         data-sv-form="5627422"
// //         data-uid="ee334d71e1"
// //         data-format="inline"
// //         data-version="5"
// //         data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
// //       >
// //         <div data-style="clean">
// //           <ul
// //             className="formkit-alert formkit-alert-error"
// //             data-element="errors"
// //             data-group="alert"
// //           ></ul>
// //           <div
// //             data-element="fields"
// //             data-stacked="false"
// //             className="seva-fields formkit-fields"
// //           >
// //             <div className="formkit-field">
// //               <input
// //                 className="formkit-input"
// //                 name="email_address"
// //                 aria-label="Email Address"
// //                 placeholder="Email Address"
// //                 required
// //                 type="email"
// //               />
// //             </div>
// //             <button data-element="submit" className="formkit-submit formkit-submit">
// //               <div className="formkit-spinner">
// //                 <div></div>
// //                 <div></div>
// //                 <div></div>
// //               </div>
// //               <span className="">Subscribe</span>
// //             </button>
// //           </div>
// //         </div>
// //       </form>
// //     </>
// //   );
// // }

// import React, { useEffect } from 'react';
// import './signupform.css'; 

// const formStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   maxWidth: '300px',
//   margin: '0 auto',
//   flex: 1,
//   padding: '0.625rem 0',
//   outline: 'none',
//   border: '1px solid #a3a3a3',
//   borderRadius: '0.5rem',
//   paddingLeft: '1.25rem',
//   boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
// };


// const ConvertKitForm = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <form
//       style={formStyle}
//       action="https://my-biopik.ck.page/26f6bc2e32"
//       className="seva-form formkit-form"
//       method="post"
//       data-sv-form="6739907"
//       data-uid="26f6bc2e32"
//       data-format="inline"
//       data-version="5"
//       data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"welcome onboard! We see your email in the waitlist.\n we will send a notification as soon as My Biopik is ready for you to experience.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
//       min-width="400 500 600 700 800"
//     >
//       <div data-style="clean">
//         <ul
//           className="formkit-alert formkit-alert-error"
//           data-element="errors"
//           data-group="alert"
//         ></ul>
//         <div
//           data-element="fields"
//           data-stacked="false"
//           className="seva-fields formkit-fields"
//         >
//           <div className="formkit-field">
//             <input
//               className="formkit-input input-style"
//               name="email_address"
//               aria-label="Email Address"
//               placeholder="Email Address"
//               required=""
//               type="email"
//             />
//           </div>
        

//           <button data-element="submit" className="formkit-submit formkit-submit">
//             <div className="formkit-spinner">
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>
//             <span className="">sign me up, babe!</span>
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ConvertKitForm;

import React, { useEffect } from 'react';
import './signupform.css';
import { TbArrowsJoin2 } from "react-icons/tb";
import { useForm } from 'react-hook-form';

const ConvertKitForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit = (data) => {
    // Your form submission logic here
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="seva-form formkit-form"
      data-sv-form="6739907"
      data-uid="26f6bc2e32"
      data-format="inline"
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"welcome onboard! We see your email in the waitlist.\n we will send a notification as soon as My Biopik is ready for you to experience.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
    >
      <div className="formkit-fields">
        <div className="formkit-field">
          <input
            {...register('email', { required: 'Email is required' })}
            className="formkit-input"
            name="email_address"
            aria-label="Email"
            placeholder="email address here"
            type="email"
          />
        </div>
      </div>
      <button type="submit" className="formkit-submit">
        <TbArrowsJoin2 />
        <span>sign me up, babe</span>
      </button>

      {errors.email && (
        <p className="error-message">
          <svg className="error-icon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M233.34,190.09L145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z"></path>
          </svg>
          oops! you forgot entering the email, buddy!
        </p>
      )}
    </form>
  );
};

export default ConvertKitForm;
