import Layout from "../components/Layout"

export default function Contact() {
    return (
        <>
            <Layout>
                <div className="flex flex-col justify-center sm:items-start mt-5 w-full md:w-2/3 pl-8">
                    <span className="mt-2 font-fira text-xs text-center text-light-inactive dark:text-dark-inactive">{"📨 Reach out and let’s chat. In Santa Barbara, CA? Let’s grab a coffee!"}</span>
                    <div className="mt-8 w-full flex flex-col space-y-4 pr-5">
                        <input type="email" placeholder="email" required className="font-fira text-sm bg-transparent border-slate-600 border rounded p-2 focus:outline-none focus-within:bg-[#35404E] hover:bg-[#35404E] duration-100 transition-bg" />

                        <textarea required placeholder="👋" className="bg-transparent font-fira leading-6 border-slate-600 border rounded p-2 focus:outline-none h-80 focus-within:bg-[#35404E] hover:bg-[#35404E] duration-100 transition-bg" />
                        <button onClick={() => alert("Sorry, not accepting emails currently.")} className="flex space-x-2 w-full rounded bg-transparent border-slate-600 border p-3 text-center items-center justify-center sm:justify-start
                        hover:bg-[#35404E] duration-200 transition-bg hover:cursor-not-allowed">
                            <img src="/icons/send-message.svg" className="w-4"/>
                            <span className="text-xs">Send Message</span>
                        </button>
                    </div>
                </div>
            </Layout>
        </>
    )
}