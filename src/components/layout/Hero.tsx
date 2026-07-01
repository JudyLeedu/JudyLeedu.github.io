import Image from "next/image";

export function Hero() {
  return (
    <header className="mb-14 flex flex-col">
      <div className="flex items-center gap-6 mb-4">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden shrink-0 bg-blue-100 flex items-center justify-center relative">
          <Image
            src="/avatar.jpeg"
            alt="Judy Lee"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <h1 className="text-[46px] font-bold font-heading text-slate-900 tracking-tight leading-none m-0">
          Judy Lee
        </h1>
      </div>

      <div className="pl-2">
        <p className="font-sans text-[15px] font-normal leading-[1.5] text-[#555555]">
          Product Manager in gaming.<br />
          Builder by curiosity.<br />
          <span className="font-semibold mt-1 inline-block text-klein">
            I think, I build, I ship.
          </span>
        </p>
      </div>
    </header>
  );
}