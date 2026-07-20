import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Sertifikat.css";
import SertifikatCard from "./SertifikatCard";
import sertifikatData from "../data/Sertifikat";

function Sertifikat() {

    return (

        <section id="sertifikat" className="sertifikat">
            <h2>Certificates</h2>

        <Swiper

            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            breakpoints={{
                320:{
                    slidesPerView:1,
                },

                768:{
                    slidesPerView:2,
                },

                1024:{
                    slidesPerView:3,
                }

            }}

        >
            {sertifikatData.map((sertifikat)=>(
                <SwiperSlide key={sertifikat.id}>
                    <SertifikatCard
                        sertifikat={sertifikat}
                    />
                </SwiperSlide>

            ))}

        </Swiper>

        </section>

    );

}

export default Sertifikat;