import React from 'react'

const SectionContactLeft = ({ contactIcons }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-5 lg:w-1/2 xl:w-[45%] md:items-start text-xl 2xl:text-3xl">
            <div className="flex flex-col gap-5">
                <h2 className="Hero-FadeIn-l heroSubHead text-[var(--secondary)] mb-[-20px] text-left text-[0.8em] font-bold">
                    Yousuf — MERN Stack Developer
                </h2>
                <h1 className="font-bold Hero-FadeIn-l heroHead text-5xl">
                    Contact Me
                </h1>
            </div>

            <p className="Hero-FadeIn-l heroPara text-[0.7em]">
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
            <div className="grid w-full col-auto row-auto gap-1 px-2 py-2 bg-white border border-gray-300 rounded">
                <h1 className="flex items-center justify-center col-span-2 p-3 text-2xl font-bold rounded text-[1em]">
                    Connect With Me
                </h1>

                {/* LinkedIn */}
                <a
                    className="p-3 bg-[var(--light)] font-semibold col-span-2 flex items-center justify-center border border-gray-400 rounded text-[0.8em]"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/myousufkha"
                >
                    <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d={contactIcons.linkedIn} />
                    </svg>
                    Let's Connect
                </a>

                {/* Instagram */}
                <a
                    className="p-3 bg-[var(--light)] font-semibold col-span-1 flex items-center justify-center border rounded text-[0.8em] border-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/it.yousuf_?igsh=Z2xwNmYwZWppcnRq"
                >
                    <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d={contactIcons.instagram} />
                    </svg>
                    Instagram
                </a>

                {/* Facebook */}
                <a
                    className="p-3 bg-[var(--light)] font-semibold col-span-1 flex items-center justify-center border rounded text-[0.8em] border-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://facebook.com/yourprofile"
                >
                    <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d={contactIcons.facebook} />
                    </svg>
                    Facebook
                </a>

                {/* WhatsApp */}
                <a
                    className="p-3 bg-[var(--light)] font-semibold col-span-1 flex items-center justify-center border rounded text-[0.8em] border-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/3132980452"
                >
                    <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d={contactIcons.whatsapp} />
                    </svg>
                    Whatsapp
                </a>

                {/* GitHub */}
                <a
                    className="p-3 bg-[var(--light)] font-semibold col-span-1 flex items-center justify-center border rounded text-[0.8em] border-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Muhammad-Yousuf-k/"
                >
                    <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d={contactIcons.github} />
                    </svg>
                    Github
                </a>

                {/* Placeholder Button */}
                <button className="p-3 bg-[var(--light)] font-semibold col-span-2 flex items-center justify-center border rounded text-[0.8em] border-gray-400">
                    unknown
                </button>
            </div>
        </div>
    )
}

export default SectionContactLeft