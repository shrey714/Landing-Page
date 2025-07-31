import Image from "next/image";

export const LogoFooter = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-[#3b82f6]/50 blur-xl dark:bg-[#3b82f6]/20 dark:blur-xl"></div>
      <Image
        alt="Logo"
        src="/Logo.svg"
        width={80}
        height={80}
        className="aspect-square drop-shadow-md size-20"
        priority
      />
    </div>
  );
};
