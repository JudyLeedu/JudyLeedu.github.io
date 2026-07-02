import Image from "next/image";

export function Hero() {
  return (
    <header className="mb-16 flex flex-col">
      <div className="flex items-center gap-6 mb-6">
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

      <div className="pl-0">
        <h2 className="text-[26px] font-bold font-heading text-slate-900 tracking-tight leading-none mb-4">
          <span className="text-klein">8-Year</span> Platform PM & AI Builder
        </h2>
        <p className="font-sans text-[15px] font-normal leading-[1.8] text-[#777777] max-w-lg">
          Turning ideas into code, and code into products.<br />
          <span className="font-medium text-klein">I think, I build, I ship.</span>
        </p>
      </div>
    </header>
  );
}