import { ChevronRight } from "lucide-react";
export default function Contact() {
  return (
    <section className=" text-white py-12 px-[3%] font-poppins">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Form Section */}
        <div>
          <h2 className="text-[55px] font-bold">Contact</h2>
          <p className="text-teal-400 font-semibold mt-2 uppercase text-[14px] tracking-widest">
            Let&apos;s Talk
          </p>

          <form className="mt-10 flex flex-col gap-6">
            {/* Full Name */}
            <div>
              <label className="block uppercase text-[12px] font-bold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="ej.: Ahsan Javaid"
                className="w-full bg-transparent border border-gray-500 rounded-full py-3 px-5 outline-none focus:border-teal-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block uppercase text-[12px] text-sm font-bold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full bg-transparent border border-gray-500 rounded-full py-3 px-5 outline-none focus:border-teal-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[12px] uppercase text-sm font-bold mb-2">
                Message *
              </label>
              <textarea
                placeholder="To Write"
                className="w-full bg-transparent border border-gray-500 rounded-2xl py-3 px-5 outline-none focus:border-teal-400 h-28"
              ></textarea>
            </div>

            {/* Send Button */}
            <button className="font-poppins group  bold bg-transparent border rounded-full px-[25px] py-[25px] w-[192px] border-[#52575E] text-[12px] text-white font-bold hover:border-[#5DD5C4] transition flex items-center justify-center gap-2">
                SEND MESSAGE <ChevronRight className="w-4 h-4 group-hover:text-[#5DD5C4] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Right Info Card */}
        <div className=" rounded-2xl p-8 border mt-[176px] border-[#3F4349] w-[97%]">
          <h3 className="text-[24px] font-bold">Ahsan Javaid</h3>
          <p className="text-teal-400 text-[11px] font-semibold">
            Frappe Developer & Full Stack Engineer
          </p>

          <div className="mt-6 space-y-3 text-[14px]">
            <p>
              <span className="text-teal-400 font-bold">AGE: </span> 25
            </p>
            <p>
              <span className="text-teal-400 font-bold">RESIDENCE: </span> Pakistan
            </p>
            <p>
              <span className="text-teal-400 font-bold">FREELANCE: </span> Available
            </p>
            <p>
              <span className="text-teal-400 font-bold">ADDRESS: </span> Lahore
            </p>
            <p>
              <span className="text-teal-400 font-bold">PHONE: </span> +92 3138619329
            </p>
            <p>
              <span className="text-teal-400 font-bold">E-MAIL: </span> ehsanjavaid321@gmail.com
            </p>
          </div>

          <p className="mt-6 font-signature text-2xl italic">Ahsan Javaid</p>
        </div>
      </div>
    </section>
  );
}
