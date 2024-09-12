import emailjs from "@emailjs/browser";
import { useRef } from "react";
const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
    console.log("User ID:", import.meta.env.VITE_PUBLIC_KEY);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(`Failed...`, error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <h2
        id="contactus"
        className="font-extrabold text-3xl mb-20 pt-20 text-center text-white uppercase"
      >
        Contact Us
      </h2>
      <div className="container mx-auto bg-black rounded-lg shadow-lg max-w-full min-h-[480px] min-w-[370px]">
        <div className="flex">
          <div className="flex flex-1 h-[460px] bg-black justify-center items-center">
            <div className="w-4/5 h-4/5 text-center">
              <form ref={form} onSubmit={sendEmail}>
                <h2 className="text-2xl mb-4 hidden md:block">
                  Please Fill in the Information
                </h2>
                <p className="text-left text-xs mb-4 text-white">* Required</p>
                <input
                  type="text"
                  placeholder="Name *"
                  name="user_name"
                  className="w-full bg-gray-200 p-3 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  name="user_email"
                  className="w-full bg-gray-200 p-3 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <textarea
                  rows="4"
                  placeholder="Message"
                  name="message"
                  className="w-full bg-gray-200 p-3 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full transition transform hover:opacity-70"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
