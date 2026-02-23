import useData from "../hooks/useData";

const ContactSection = () => {
  const { contactIcons } = useData();
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center w-full overflow-hidden lg:flex-row"
    >
      {/* Left Info Section */}
      <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-5 lg:w-1/2 xl:w-1/3 md:items-start">
        <div className="flex flex-col gap-5">
          <h2 className="Hero-FadeIn-l heroSubHead text-[var(--secondary)] text-left text-xl md:text-xl sm:text-3xl font-bold">
            Yousuf — MERN Stack Developer
          </h2>
          <h1 className="text-6xl font-bold Hero-FadeIn-l heroHead lg:text-8xl md:text-7xl sm:text-8xl">
            Contact Me
          </h1>
        </div>

        <p className="Hero-FadeIn-l heroPara">
          Hi there! I’m Yousuf, a passionate MERN Stack Full Stack Developer.
          I specialize in building efficient and scalable web applications,
          solving complex problems, and turning ideas into functional,
          user-friendly solutions. <br />
          <span className="font-bold">I’d love to connect with you!</span> <br />
          <span>
            Your information is only used to reply to your message. No data is
            stored or shared.
          </span>
        </p>

        {/* Social Links */}
        <div className="grid w-full col-auto row-auto gap-1 p-1 bg-white border rounded">
          <h1 className="flex items-center justify-center col-span-2 p-3 text-2xl font-bold rounded">
            Connect With Me
          </h1>

          {/* LinkedIn */}
          <a
            className="p-3 bg-[var(--light)] font-semibold col-span-2 flex items-center justify-center border rounded"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/myousufkha"
          >
            <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d={contactIcons.linkedIn} />
            </svg>
            Let's Connect
          </a>

          {/* Instagram */}
          <a
            className="p-3 bg-[var(--light)] font-semibold col-span-1 flex items-center justify-center border rounded"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/it.yousuf_?igsh=Z2xwNmYwZWppcnRq"
          >
            <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d={contactIcons.instagram} />
            </svg>
            Instagram
          </a>

          {/* Facebook */}
          <a
            className="p-3 bg-[var(--light)] font-semibold col-span-1 flex items-center justify-center border rounded"
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com/yourprofile"
          >
            <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d={contactIcons.facebook} />
            </svg>
            Facebook
          </a>

          {/* WhatsApp */}
          <a
            className="p-3 bg-[var(--light)] font-semibold col-span-1 flex items-center justify-center border rounded"
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/3132980452"
          >
            <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d={contactIcons.whatsapp} />
            </svg>
            Whatsapp
          </a>

          {/* GitHub */}
          <a
            className="p-3 bg-[var(--light)] font-semibold col-span-1 flex items-center justify-center border rounded"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Muhammad-Yousuf-k/"
          >
            <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d={contactIcons.github} />
            </svg>
            Github
          </a>

          {/* Placeholder Button */}
          <button className="p-3 bg-[var(--light)] font-semibold col-span-2 flex items-center justify-center border rounded">
            unknown
          </button>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="relative flex items-center w-full h-full p-5 xl:w-1/3 lg:w-1/2 md:flex">
        <div className="w-full h-[70%] flex flex-col bg-white p-5 border rounded gap-5">
          <h1 className="text-4xl font-medium Hero-FadeIn-l heroHead lg:text-6xl md:text-5xl sm:text-6xl">
            Get in Touch
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border w-full h-[85%] flex flex-col justify-center gap-10 p-5 rounded bg-[var(--light)]"
          >
            {/* Name Input */}
            <div>
              <label className="text-xl font-medium">Full Name</label>
              <div className="border rounded flex w-full items-center justify-start pl-2 gap-2 bg-[var(--light)]">
                <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d={contactIcons.fullName} />
                </svg>
                <input
                  className="w-full h-12 pl-3 border-0 rounded-r-xl"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="text-xl font-medium">Enter Your Email</label>
              <div className="border rounded flex w-full items-center justify-start pl-2 gap-2 bg-[var(--light)]">
                <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d={contactIcons.email} />
                </svg>
                <input
                  className="w-full h-12 pl-3 border-0 rounded-r-xl"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="border rounded flex w-full items-start justify-start pl-2 gap-2 bg-[var(--light)]">
              <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d={contactIcons.message} />
              </svg>
              <textarea
                className="w-full pt-3 pl-3 rounded-r-xl h-30"
                placeholder="How Can I Help You"
              ></textarea>
            </div>

            <button className="bg-[var(--secondary)] hover:bg-[var(--primary)] active:scale-95 text-[var(--light)] text-1xl px-6 py-3 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;