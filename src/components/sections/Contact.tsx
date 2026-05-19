import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_s6faqac",
        "template_updf5xk",
        form.current,
        "whWvX9fJWL5x8SBy9"
      )
      .then(
        () => {
          alert("Message sent!");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-primary-white py-32 px-4 md:px-12 -mx-[16.7%] relative border-t-8 border-black"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        <div className="font-DelaGothicOne text-4xl md:text-8xl xl:text-9xl leading-tight text-center xl:text-left">
        
          <h1 className="mt-16 xl:text-right">Let's</h1>
          <h1 className="xl:text-right">talk!</h1>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-2xl mx-auto font-Archivo font-black text-xl"
        >
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full border-4 border-black bg-white px-4 py-3 mb-10 text-xl font-bold outline-none"
          />

          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border-4 border-black bg-white px-4 py-3 mb-10 text-xl font-bold outline-none"
          />

          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full h-[300px] border-4 border-black bg-white px-4 py-3 mb-10 text-xl font-bold outline-none resize-none"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-yellow-400 border-4 border-black px-12 py-3 rounded-sm font-black text-xl shadow-[6px_6px_0px_rgba(0,0,0,1)]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;