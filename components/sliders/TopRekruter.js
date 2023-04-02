import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const data = [
    {
        img: "1.png",
        title: "Avy"
    },
    {
        img: "2.png",
        title: "Mark"
    },
    {
        img: "2.png",
        title: "Mark"
    }
];

const TopRekruterSlider = () => {
    return (
        <>
            <div className="swiper-container swiper-group-1 swiper-style-2">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    navigation={{
                        prevEl: ".swiper-button-prev-1",
                        nextEl: ".swiper-button-next-1"
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        575: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        767: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        991: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        1199: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        }
                    }}
                    className="swiper-wrapper pt-5"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide">
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    
                                </div>
                                
                            
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">
                                            <div className="image-left">
                                                <img alt="Jobscribes" src="/assets/imgs/brands/brand-4.png" />
                                            </div>
                                            <div className="text-info-right">
                                                <h4>NewSum</h4>
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <span className="font-xs color-text-mutted ml-10">
                                                    <span>(</span>
                                                    <span>68</span>
                                                    <span>)</span>
                                                </span>
                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">colombo</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    25<span> Open Jobs</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">
                                            <div className="image-left">
                                                <img alt="Jobscribes" src="/assets/imgs/brands/brand-5.png" />
                                            </div>
                                            <div className="text-info-right">
                                                <h4>PowerHome</h4>
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <span className="font-xs color-text-mutted ml-10">
                                                    <span>(</span>
                                                    <span>87</span>
                                                    <span>)</span>
                                                </span>
                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">colombo</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    34<span> Open Jobs</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">
                                            <div className="image-left">
                                                <img alt="Jobscribes" src="/assets/imgs/brands/brand-7.png" />
                                            </div>
                                            <div className="text-info-right">
                                                <h4>Greewood</h4>
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <span className="font-xs color-text-mutted ml-10">
                                                    <span>(</span>
                                                    <span>124</span>
                                                    <span>)</span>
                                                </span>
                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">colombo</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    78<span> Open Jobs</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">
                                            <div className="image-left">
                                                <img alt="Jobscribes" src="/assets/imgs/brands/brand-8.png" />
                                            </div>
                                            <div className="text-info-right">
                                                <h4>Kentucky</h4>
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <span className="font-xs color-text-mutted ml-10">
                                                    <span>(</span>
                                                    <span>54</span>
                                                    <span>)</span>
                                                </span>
                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">colombo</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    98<span> Open Jobs</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                               
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">
                                            <div className="image-left">
                                                <img alt="Jobscribes" src="/assets/imgs/brands/brand-10.png" />
                                            </div>
                                            <div className="text-info-right">
                                                <h4>Honda srilanka</h4>
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <span className="font-xs color-text-mutted ml-10">
                                                    <span>(</span>
                                                    <span>89</span>
                                                    <span>)</span>
                                                </span>
                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">colombo</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    34<span> Open Jobs</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">
                                            <div className="image-left">
                                                <img alt="Jobscribes" src="/assets/imgs/brands/brand-5.png" />
                                            </div>
                                            <div className="text-info-right">
                                                <h4>Toyota sri lanka </h4>
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <span className="font-xs color-text-mutted ml-10">
                                                    <span>(</span>
                                                    <span>34</span>
                                                    <span>)</span>
                                                </span>
                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">colombo</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    26<span> Open Jobs</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">
                                            <div className="image-left">
                                                <img alt="Jobscribes" src="/assets/imgs/brands/brand-3.png" />
                                            </div>
                                            <div className="text-info-right">
                                                <h4>Lexuxs</h4>
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <span className="font-xs color-text-mutted ml-10">
                                                    <span>(</span>
                                                    <span>27</span>
                                                    <span>)</span>
                                                </span>
                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">colombo</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    54<span> Open Jobs</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">
                                            <div className="image-left">
                                                <img alt="Jobscribes" src="/assets/imgs/brands/brand-2.png" />
                                            </div>
                                            <div className="text-info-right">
                                                <h4>Square</h4>
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <span className="font-xs color-text-mutted ml-10">
                                                    <span>(</span>
                                                    <span>16</span>
                                                    <span>)</span>
                                                </span>
                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">colombo</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    37<span> Open Jobs</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">
                                            <div className="image-left">
                                                <img alt="Jobscribes" src="/assets/imgs/brands/brand-8.png" />
                                            </div>
                                            <div className="text-info-right">
                                                <h4>Vista</h4>
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <img alt="Jobscribes" src="/assets/imgs/template/icons/star.svg" />
                                                <span className="font-xs color-text-mutted ml-10">
                                                    <span>(</span>
                                                    <span>97</span>
                                                    <span>)</span>
                                                </span>
                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">colombo</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    43<span> Open Jobs</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="swiper-button-next swiper-button-next-1" />
            <div className="swiper-button-prev swiper-button-prev-1" />
        </>
    );
};

export default TopRekruterSlider;
