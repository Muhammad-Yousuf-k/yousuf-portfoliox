import React from 'react'

const SectionContactRight = ({ contactIcons }) => {
    return (
        <div className="relative flex items-center w-full h-full p-5 xl:w-[45%] lg:w-1/2 md:flex text-xl">
            <div className="w-full h-[70%] flex flex-col bg-white p-2 sm:p-5 border border-gray-300 rounded gap-5">
                <h1 className="font-medium Hero-FadeIn-l heroHead text-[1.7em]">
                    Get in Touch
                </h1>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="border border-gray-300 w-full h-[85%] flex flex-col justify-center gap-10 p-2 sm:p-5 rounded bg-[var(--light)]"
                >
                    {/* Name Input */}
                    <div>
                        <label className=" font-medium text-[0.8em]">Full Name</label>
                        <div className="border border-gray-400 mt-1 rounded flex w-full items-center justify-start pl-2 gap-2 bg-[var(--light)]">
                            <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d={contactIcons.fullName} />
                            </svg>
                            <input
                                className="w-full h-12 pl-3 text-[0.7em] border-0 rounded-r-xl"
                                type="text"
                                placeholder="Full Name"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div>
                        <label className=" font-medium text-[0.8em]">Enter Your Email</label>
                        <div className="border border-gray-400 mt-1 rounded flex w-full items-center justify-start pl-2 gap-2 bg-[var(--light)]">
                            <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d={contactIcons.email} />
                            </svg>
                            <input
                                className="w-full h-12 pl-3 text-[0.7em] border-0  rounded-r-xl"
                                type="email"
                                placeholder="Enter Your Email"
                            />
                        </div>
                    </div>

                    {/* Message Input */}

                    <div className="border border-gray-400 rounded flex w-full items-start justify-start pl-2 gap-2 bg-[var(--light)]">
                        <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d={contactIcons.message} />
                        </svg>
                        <textarea
                            className="w-full pt-3 pl-3 text-[0.7em] rounded-r-xl h-30"
                            placeholder="How Can I Help You"
                        ></textarea>
                    </div>

                    <button className="bg-[var(--secondary)] hover:bg-[var(--primary)] active:scale-95 text-[var(--light)] text-[0.8em] px-6 py-3 rounded">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SectionContactRight