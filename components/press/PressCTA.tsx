import Image from "next/image";
import { Mail, ArrowUpRight, Megaphone } from "lucide-react";

const PressCTA = () => {
  return (
    <div className="relative md:w-[80%] w-[90%]  mx-auto overflow-hidden rounded-3xl border lg:-mt-20 -mt-16 border-[#e5e7eb] bg-white p-6 md:p-8 shadow-[0_8px_40px_rgba(0,111,245,0.08)]">
      <div className="flex items-center justify-between gap-6">
        <div className="max-w-xl">
          <h3 className="text-lg md:text-xl font-semibold text-[#0f172a]">For Requests and inquiries</h3>
          <p className="mt-2 text-sm md:text-base text-[#64748b]">
            Reach out to us via email below for any additional media enquiries
          </p>
          <a
            href="mailto:hello@nextswitch.org"
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-sm ring-1 ring-black/5 transition hover:ring-[#006FF5]/30"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e6f0ff] text-[#006FF5]">
              <Mail className="h-5 w-5" />
            </span>
            <span className="text-sm md:text-base font-semibold text-[#0b2847]">
              hello@nextswitch.org
            </span>
            <ArrowUpRight className="h-5 w-5 text-[#006FF5]" />
          </a>
        </div>
       
      </div>

      <Image
        src="/pictures/Group.svg"
        alt=""
        aria-hidden="true"
        width={180}
        height={180}
        className="pointer-events-none absolute right-24 top-1/2 -translate-y-1/2 hidden md:block"
        priority
      />
    </div>
  );
};

export default PressCTA
