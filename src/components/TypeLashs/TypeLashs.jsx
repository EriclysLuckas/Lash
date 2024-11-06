import styleTypeLashs from "../TypeLashs/TypeLashs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';

import TypesLashsJson from "../TypeLashs/TypeLashs.json";

//modules swiper
import { EffectFade, Autoplay,Pagination  } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function TypeLashs() {


  return (
    <section className={styleTypeLashs.SectionTypeLashs} id = "tipos" >
      <h1>Tipos de Designs</h1>

      <div className={styleTypeLashs.TypeLash}>



        <Swiper className={styleTypeLashs.swiper}
          modules={[EffectFade, Autoplay, Pagination]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          effect="fade"
          loop={true}
          slidesPerView={1}
          spaceBetween={50}
          pagination={{
            clickable: true, 
          }}
        
        >

          {TypesLashsJson.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styleTypeLashs.slideBackground} />
              <p className={styleTypeLashs.titleSlide}>{item.name} <img src={item.min} alt="" /></p>
              <figure className={styleTypeLashs.figureSlider}>
                <img src={item.img} alt="slide" />
                <img src={item.img} alt="slide" className={styleTypeLashs.imgBackground} />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>


     
      </div>


    </section>



  )

}