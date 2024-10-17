import React from "react";
import ProductCard from "./Product";
import { StrengthEquipment } from "../constants"; // Import the CardioEquipment array
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Define the props interface (optional)
interface ProductSectionProps {
    sectionId?: string;  // The section id to scroll to
  }

// Functional component with typed props
const StrengthProductSection: React.FC<ProductSectionProps> = ({sectionId}) => {
    return (
        <section id={sectionId} className="relative flex flex-col gap-8 w-full justify-center items-center px-12 lg:px-48 py-8 bg-ivoryWhite">
          <h2 className="text-charcoalBlack text-2xl lg:text-5xl font-bold text-center uppercase"><span className="text-blue-500">Transform </span>Strength Training with <span className="text-blue-500">Premium</span> Equipment</h2>
          <p className="mt-2 text-xl lg:px-48 text-center text-charcoalBlack">Upgrade your gym with innovative strength machines engineered for superior performance, safety, and long-lasting use.</p>
          <div className="relative w-full h-auto">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1} // Set to 1 for mobile, adjust dynamically for larger screens
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                    // Adjust slides per view based on screen size
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    }}
                    modules={[Navigation, Pagination, Autoplay]} // Add additional features if needed
                    className="mySwiper h-[500px] lg:h-[450px]"
                >
                    {/* Render each item as a SwiperSlide */}
                    {StrengthEquipment.map((equipment, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard
                        name={equipment.name}
                        image={equipment.image}
                        description={equipment.description}
                        category="strength" // Replace or remove as needed
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
      );
    };

export default StrengthProductSection;

