import {
  RxRocket,
  RxDesktop,
  RxReader,
  RxPencil2,
  // RxArrowTopRight ⛔ removed
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = ({ services }) => {
  const iconMap = [RxRocket, RxDesktop, RxReader, RxPencil2];

  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[260px] sm:h-[340px]"
    >
      {services.map((item, i) => {
        const Icon = iconMap[i % iconMap.length];
        return (
          <SwiperSlide key={i}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* Icon */}
              <div className="text-4xl text-accent mb-4">
                <Icon aria-hidden />
              </div>

              {/* Title & Description */}
              <div>
                <div className="mb-2 text-lg font-semibold">{item.title}</div>
                <p className="max-w-[350px] leading-normal text-white/80 text-sm">
                  {item.description}
                </p>
              </div>

              {/* ❌ Removed arrow */}
              {/* <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div> */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
