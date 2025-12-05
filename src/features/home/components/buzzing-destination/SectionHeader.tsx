import Image from "next/image";

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <h2 className="font-sans text-[18px] font-bold leading-[1.3] text-textHex-black">
        {title}
      </h2>

      <button
        type="button"
        className="flex h-7 w-[30px] rotate-90 items-center justify-center px-[9px] py-[11px] cursor-pointer"
      >
        {/* use whatever arrow asset you have here */}
        <Image
          src="/images/home/expand-more.svg"
          alt="More"
          width={18}
          height={18}
          className="-rotate-90 w-4 h-3"
        />
      </button>
    </div>
  );
}
