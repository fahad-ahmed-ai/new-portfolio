import Image from "next/image";

const Bulb = () => {
  return (
<div className="absolute -left-36 -bottom-12 rotate-12 z-10 w-[200px] xl:w-[260px] select-none pointer-events-none">
  <Image
    src="/bulb.png"
    alt="bulb"
    width={260}
    height={200}
    className="w-full h-full relative mix-blend-color-dodge animate-pulse"
  />
</div>

  );
};

export default Bulb;
