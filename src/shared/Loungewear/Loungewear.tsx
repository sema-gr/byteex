import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import "./Loungewear.style.css";

export function Loungewear() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    const images = [
        "/static/image/women.jpg",
        "/static/image/blackWomen.jpg",
        "/static/image/blackWomen.jpg",
        "/static/image/blackWomen.jpg",
        "/static/image/blackWomen.jpg",
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1080);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (thumbsSwiper && !thumbsSwiper.destroyed) {
            thumbsSwiper.slideTo(0, 0, false);
        }
    }, [thumbsSwiper]);

    return (
        <div className="loungewear-container">
            <div className="loungewear-company">
                <p className="loungewear-company-text">as seen in</p>
                <div className="loungewear-company-logos">
                    {isMobile ? (
                        <Swiper
                            modules={[Pagination, FreeMode]}
                            pagination={{ clickable: true }}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                        >
                            <SwiperSlide>
                                <img src="/static/image/Artboard3 1.png" alt="Brand 1" width={100} height={16} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/static/image/Artboard6 1.png" alt="Brand 2" width={72} height={34} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/static/image/Artboard4 1.png" alt="Brand 3" width={145} height={29} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/static/image/Artboard2 1.png" alt="Brand 4" width={100} height={22} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/static/image/Artboard5 1.png" alt="Brand 5" width={100} height={34} />
                            </SwiperSlide>
                        </Swiper>
                    ) : (
                        <>
                            <img src="/static/image/Artboard3 1.png" alt="Brand 1" width={178} height={22} />
                            <img src="/static/image/Artboard6 1.png" alt="Brand 2" width={111} height={52} />
                            <img src="/static/image/Artboard4 1.png" alt="Brand 3" width={271} height={53} />
                            <img src="/static/image/Artboard2 1.png" alt="Brand 4" width={194} height={37} />
                            <img src="/static/image/Artboard5 1.png" alt="Brand 5" width={192} height={58} />
                        </>
                    )}
                </div>
            </div>
            {isMobile ? <>
                <div className="loungewear-products">

                    <div className="loungewear-products-info">
                        <h2 className="loungewear-products-title">Loungewear you can be proud of.</h2>
                    </div>

                    <div className="loungewear-products-slider">
                        <Swiper
                            initialSlide={0}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[Navigation, Thumbs]}
                            speed={500}
                            onInit={(s: any) => s.slideTo(0, 0, false)}
                            className="main-slider"
                        >
                            {images.map((src, i) => (
                                <SwiperSlide key={i}>
                                    <img src={src} alt={`Slide ${i}`} width={isMobile ? 303 : 433} height={isMobile ? 453 : 648} />
                                </SwiperSlide>
                            ))}

                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </Swiper>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={4}
                            slidesPerView="auto"
                            freeMode={true}
                            watchSlidesProgress={true}
                            loop={false}
                            centeredSlides={false}
                            modules={[Thumbs]}
                            className="thumbs-slider"
                        >
                            {images.map((src, i) => (
                                <SwiperSlide key={i} style={{ width: '31px' }}>
                                    <img
                                        src={src}
                                        alt={`Thumbnail ${i}`}
                                        style={{ width: "100%", height: "32px", cursor: "pointer" }}
                                    />
                                </SwiperSlide>
                            ))}
                            <p style={{ color: "#6C6C6C", fontSize: "13px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif", }}>White Robe</p>
                        </Swiper>
                    </div>

                    <div className="loungewear-products-subtitle">
                        <svg width="42" height="42" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15.5" cy="15.5" r="15.5" fill="#F9F0E5" />
                            <path d="M11.3472 11.2403C11.3472 11.0091 11.5401 10.8217 11.7782 10.8217H21.855C21.9806 10.8217 22.1 10.875 22.1819 10.9675C22.2638 11.0601 22.3 11.1828 22.2811 11.3035L21.8506 14.0461C21.818 14.2533 21.6343 14.4018 21.425 14.4018C21.4034 14.4018 21.3815 14.4002 21.3595 14.3969C21.1241 14.3621 20.9624 14.1485 20.9983 13.9199L21.3532 11.659H11.7782C11.5401 11.659 11.3472 11.4715 11.3472 11.2403ZM14.6196 18.3779H10.7997L9.20705 9.34797C9.17161 9.14696 8.99221 9 8.7822 9H6.43103C6.19296 9 6 9.18743 6 9.41868C6 9.64993 6.19296 9.83735 6.43103 9.83735H8.41875L10.0114 18.8673C10.0473 19.0713 10.2296 19.2154 10.4357 19.2154C10.4598 19.2153 10.4844 19.2134 10.509 19.2093C10.5107 19.2089 10.5124 19.2087 10.5141 19.2083C10.5395 19.2129 10.5657 19.2152 10.5924 19.2152H14.6196C14.8577 19.2152 15.0506 19.0278 15.0506 18.7965C15.0506 18.5653 14.8577 18.3779 14.6196 18.3779ZM13.7865 21.3407V22.0837C13.7865 22.782 13.2016 23.3502 12.4826 23.3502C11.7636 23.3502 11.1787 22.782 11.1787 22.0837V21.3407C11.1787 20.6423 11.7636 20.0742 12.4825 20.0742C13.2015 20.0742 13.7865 20.6423 13.7865 21.3407ZM12.9244 21.3407C12.9244 21.1041 12.7262 20.9116 12.4826 20.9116H12.4825C12.239 20.9116 12.0408 21.1041 12.0408 21.3407V22.0837C12.0408 22.3203 12.239 22.5128 12.4825 22.5128C12.7262 22.5128 12.9244 22.3203 12.9244 22.0837V21.3407ZM24.9404 17.4357C24.6861 19.4206 23.6512 21.1904 22.0264 22.4192C20.659 23.4533 19.0115 24 17.3059 24C16.9848 24 16.6617 23.9806 16.3379 23.9414C16.0671 23.9086 15.7941 23.8611 15.5263 23.8003C15.3465 23.7595 15.2135 23.6121 15.1954 23.4336C15.1395 22.8812 15.147 22.3206 15.2179 21.7677C15.7431 17.6703 19.6023 14.7516 23.8205 15.2619C24.0916 15.2947 24.3646 15.3422 24.6321 15.403C24.8118 15.4438 24.9448 15.5912 24.9629 15.7695C25.019 16.3217 25.0114 16.8823 24.9404 17.4357ZM24.1286 16.1557C23.9906 16.1306 23.8519 16.1096 23.7138 16.0929C19.9677 15.6399 16.5398 18.232 16.0733 21.8712C16.0467 22.0788 16.0302 22.2875 16.0236 22.4963L19.9669 19.1406C20.1458 18.9882 20.4182 19.0056 20.5751 19.1796C20.7319 19.3535 20.714 19.6181 20.5349 19.7704L16.5909 23.1267C18.3556 23.3036 20.0924 22.8204 21.4967 21.7584C22.9398 20.667 23.859 19.0951 24.0849 17.3322C24.1351 16.9416 24.1497 16.5471 24.1286 16.1557Z" fill="#01005B" stroke="#01005B" stroke-width="0.3" />
                        </svg>

                        <div className="loungewear-products-subtitle-item">
                            <p style={{ color: "#01005B", fontSize: "22px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif" }}>Ethically sourced.</p>
                            <p style={{ color: "#6C6C6C", fontSize: "15px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif", width: "497px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                        </div>
                    </div>

                    <div className="loungewear-products-subtitle">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="21" fill="#F9F0E5" />
                            <path d="M31.6772 29.8173C31.2798 29.4699 30.6744 29.5075 30.3243 29.9018C28.7161 31.7091 26.928 31.0519 26.0955 30.5778C27.8126 19.7576 23.9291 17.7438 18.5887 14.9742C16.3418 13.81 13.797 12.4863 11.2237 10.2377C10.973 10.0171 10.6277 9.94669 10.3108 10.0406C9.99388 10.1345 9.74791 10.3879 9.66277 10.7072C8.26735 15.9741 9.09041 21.0955 11.99 25.1231C14.8376 29.0803 19.3455 31.4979 24.6954 31.9532C25.4569 32.4836 26.6348 33 27.9403 33C29.1843 33 30.5419 32.5306 31.7623 31.1599C32.1076 30.7656 32.0745 30.1647 31.6772 29.8173ZM13.551 24.0153C11.2568 20.8326 10.4385 16.8566 11.1859 12.6787C13.4895 14.4766 15.708 15.6267 17.6994 16.6594C22.5715 19.1849 25.4096 20.6589 24.3974 28.8738L21.9235 25.8789L22.4438 22.8088C22.5289 22.2925 22.1789 21.7996 21.6539 21.7151C21.1335 21.6306 20.6369 21.978 20.5517 22.4943L20.3105 23.9261L16.9804 19.8937L15.1167 17.0866C14.8282 16.6453 14.2322 16.5233 13.7875 16.8143C13.3476 17.1007 13.2246 17.6921 13.5132 18.1287L15.4005 20.9781C15.4194 21.0063 15.4384 21.0344 15.462 21.0579L16.427 22.2268L15.7316 22.2362C15.2018 22.2455 14.7809 22.6774 14.7856 23.1985C14.795 23.7195 15.2208 24.1373 15.7458 24.1373C15.7505 24.1373 15.7553 24.1373 15.76 24.1373L17.9832 24.1045L22.6283 29.7328C18.8346 28.9348 15.6654 26.9538 13.551 24.0153Z" fill="#01005B" />
                        </svg>

                        <div className="loungewear-products-subtitle-item">
                            <p style={{ color: "#01005B", fontSize: "22px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif" }}>Responsibly made.</p>
                            <p style={{ color: "#6C6C6C", fontSize: "15px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif", width: "497px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                        </div>
                    </div>

                    <div className="loungewear-products-subtitle">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="21" fill="#F9F0E5" />
                            <path d="M21 8V34" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.9998 27.9998C17.1298 27.9998 13.9998 24.8698 13.9998 20.9998C13.9998 17.1298 17.1298 13.9998 20.9998 13.9998" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.8098 11.8105L13.9298 13.9305" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 21H11" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.8098 30.1901L13.9298 28.0701" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 17.5498C22.2 15.4298 24.48 13.9998 27.09 13.9998C27.25 13.9998 27.4 14.0098 27.56 14.0198C25.89 14.8998 24.76 16.6498 24.76 18.6598C24.76 21.5598 27.11 23.9098 30.01 23.9098C31.61 23.9098 33.04 23.1898 34 22.0598C33.48 25.4298 30.59 27.9998 27.09 27.9998C24.48 27.9998 22.2 26.5698 21 24.4498" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className="loungewear-products-subtitle-item">
                            <p style={{ color: "#01005B", fontSize: "22px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif" }}>Made for living in.</p>
                            <p style={{ color: "#6C6C6C", fontSize: "15px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif", width: "497px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                        </div>
                    </div>

                    <div className="loungewear-products-subtitle">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="21" fill="#F9F0E5" />
                            <path d="M12.009 16.5696C14.1442 14.7453 15.8308 13.3029 20.4079 15.8763C22.6066 17.112 24.38 17.579 25.8552 17.5766C28.4402 17.5766 30.1158 16.1463 31.5641 14.9095C31.8127 14.6943 31.9673 14.3912 31.9951 14.0645C32.0229 13.7378 31.9218 13.4131 31.7132 13.1594C31.6114 13.0348 31.4856 12.9319 31.3431 12.8566C31.2007 12.7813 31.0445 12.7352 30.8838 12.721C30.7232 12.7068 30.5613 12.7249 30.4077 12.7741C30.2542 12.8232 30.1121 12.9026 29.9899 13.0073C27.856 14.8341 26.1681 16.2765 21.591 13.7006C15.5436 10.3037 12.7106 12.724 10.4348 14.6699C10.1864 14.8852 10.0321 15.1884 10.0045 15.5151C9.97685 15.8418 10.0782 16.1663 10.287 16.42C10.3888 16.5443 10.5147 16.647 10.6571 16.7221C10.7995 16.7971 10.9557 16.843 11.1162 16.8569C11.2768 16.8709 11.4385 16.8526 11.5919 16.8033C11.7452 16.7539 11.8871 16.6744 12.009 16.5696ZM29.9899 19.2184C27.856 21.0427 26.1681 22.4876 21.591 19.9117C15.5436 16.5124 12.7106 18.9338 10.4348 20.8785C10.1864 21.0939 10.0321 21.3971 10.0045 21.7238C9.97685 22.0505 10.0782 22.375 10.287 22.6286C10.3886 22.7531 10.5143 22.8561 10.6567 22.9313C10.799 23.0066 10.9551 23.0527 11.1157 23.0669C11.2763 23.081 11.4381 23.063 11.5915 23.0139C11.745 22.9647 11.8869 22.8854 12.009 22.7807C14.1442 20.9552 15.8308 19.5128 20.4079 22.085C22.6066 23.3231 24.38 23.7877 25.8552 23.7877C28.4402 23.7877 30.1158 22.3574 31.5641 21.1181C31.8129 20.9033 31.9676 20.6004 31.9955 20.2738C32.0233 19.9472 31.922 19.6227 31.7132 19.3692C31.6114 19.2447 31.4856 19.1417 31.3431 19.0664C31.2006 18.9911 31.0443 18.9451 30.8836 18.931C30.7229 18.917 30.561 18.9352 30.4075 18.9845C30.2539 19.0339 30.1119 19.1134 29.9899 19.2184ZM29.9899 25.4283C27.856 27.255 26.1681 28.6975 21.591 26.124C15.5436 22.7247 12.7106 25.145 10.4348 27.0909C10.1864 27.3062 10.0321 27.6094 10.0045 27.9361C9.97685 28.2628 10.0782 28.5873 10.287 28.841C10.3887 28.9654 10.5145 29.0683 10.657 29.1434C10.7994 29.2186 10.9556 29.2645 11.1162 29.2784C11.2768 29.2924 11.4386 29.2741 11.592 29.2247C11.7453 29.1752 11.8872 29.0956 12.009 28.9906C14.1442 27.1663 15.8308 25.7251 20.4079 28.2973C22.6066 29.533 24.38 30 25.8552 30C28.4402 30 30.1158 28.5673 31.5641 27.3305C31.8127 27.1153 31.9673 26.8122 31.9951 26.4855C32.0229 26.1588 31.9218 25.8341 31.7132 25.5803C31.6113 25.456 31.4854 25.3531 31.343 25.2779C31.2005 25.2028 31.0444 25.1567 30.8838 25.1425C30.7232 25.1284 30.5613 25.1464 30.4078 25.1954C30.2543 25.2445 30.1122 25.3237 29.9899 25.4283Z" fill="#01005B" />
                        </svg>

                        <div className="loungewear-products-subtitle-item">
                            <p style={{ color: "#01005B", fontSize: "22px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif" }}>Unimaginably comfortable.</p>
                            <p style={{ color: "#6C6C6C", fontSize: "15px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif", width: "497px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                        </div>
                    </div>
                </div>
            </> :
                <div className="loungewear-products">
                    <div className="loungewear-products-info">
                        <h2 className="loungewear-products-title">Loungewear you can be proud of.</h2>

                        <div className="loungewear-products-subtitle">
                            <svg width="42" height="42" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15.5" cy="15.5" r="15.5" fill="#F9F0E5" />
                                <path d="M11.3472 11.2403C11.3472 11.0091 11.5401 10.8217 11.7782 10.8217H21.855C21.9806 10.8217 22.1 10.875 22.1819 10.9675C22.2638 11.0601 22.3 11.1828 22.2811 11.3035L21.8506 14.0461C21.818 14.2533 21.6343 14.4018 21.425 14.4018C21.4034 14.4018 21.3815 14.4002 21.3595 14.3969C21.1241 14.3621 20.9624 14.1485 20.9983 13.9199L21.3532 11.659H11.7782C11.5401 11.659 11.3472 11.4715 11.3472 11.2403ZM14.6196 18.3779H10.7997L9.20705 9.34797C9.17161 9.14696 8.99221 9 8.7822 9H6.43103C6.19296 9 6 9.18743 6 9.41868C6 9.64993 6.19296 9.83735 6.43103 9.83735H8.41875L10.0114 18.8673C10.0473 19.0713 10.2296 19.2154 10.4357 19.2154C10.4598 19.2153 10.4844 19.2134 10.509 19.2093C10.5107 19.2089 10.5124 19.2087 10.5141 19.2083C10.5395 19.2129 10.5657 19.2152 10.5924 19.2152H14.6196C14.8577 19.2152 15.0506 19.0278 15.0506 18.7965C15.0506 18.5653 14.8577 18.3779 14.6196 18.3779ZM13.7865 21.3407V22.0837C13.7865 22.782 13.2016 23.3502 12.4826 23.3502C11.7636 23.3502 11.1787 22.782 11.1787 22.0837V21.3407C11.1787 20.6423 11.7636 20.0742 12.4825 20.0742C13.2015 20.0742 13.7865 20.6423 13.7865 21.3407ZM12.9244 21.3407C12.9244 21.1041 12.7262 20.9116 12.4826 20.9116H12.4825C12.239 20.9116 12.0408 21.1041 12.0408 21.3407V22.0837C12.0408 22.3203 12.239 22.5128 12.4825 22.5128C12.7262 22.5128 12.9244 22.3203 12.9244 22.0837V21.3407ZM24.9404 17.4357C24.6861 19.4206 23.6512 21.1904 22.0264 22.4192C20.659 23.4533 19.0115 24 17.3059 24C16.9848 24 16.6617 23.9806 16.3379 23.9414C16.0671 23.9086 15.7941 23.8611 15.5263 23.8003C15.3465 23.7595 15.2135 23.6121 15.1954 23.4336C15.1395 22.8812 15.147 22.3206 15.2179 21.7677C15.7431 17.6703 19.6023 14.7516 23.8205 15.2619C24.0916 15.2947 24.3646 15.3422 24.6321 15.403C24.8118 15.4438 24.9448 15.5912 24.9629 15.7695C25.019 16.3217 25.0114 16.8823 24.9404 17.4357ZM24.1286 16.1557C23.9906 16.1306 23.8519 16.1096 23.7138 16.0929C19.9677 15.6399 16.5398 18.232 16.0733 21.8712C16.0467 22.0788 16.0302 22.2875 16.0236 22.4963L19.9669 19.1406C20.1458 18.9882 20.4182 19.0056 20.5751 19.1796C20.7319 19.3535 20.714 19.6181 20.5349 19.7704L16.5909 23.1267C18.3556 23.3036 20.0924 22.8204 21.4967 21.7584C22.9398 20.667 23.859 19.0951 24.0849 17.3322C24.1351 16.9416 24.1497 16.5471 24.1286 16.1557Z" fill="#01005B" stroke="#01005B" stroke-width="0.3" />
                            </svg>

                            <div className="loungewear-products-subtitle-item">
                                <p style={{ color: "#01005B", fontSize: "22px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif" }}>Ethically sourced.</p>
                                <p style={{ color: "#6C6C6C", fontSize: "15px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif", width: "497px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                            </div>
                        </div>

                        <div className="loungewear-products-subtitle">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21" cy="21" r="21" fill="#F9F0E5" />
                                <path d="M31.6772 29.8173C31.2798 29.4699 30.6744 29.5075 30.3243 29.9018C28.7161 31.7091 26.928 31.0519 26.0955 30.5778C27.8126 19.7576 23.9291 17.7438 18.5887 14.9742C16.3418 13.81 13.797 12.4863 11.2237 10.2377C10.973 10.0171 10.6277 9.94669 10.3108 10.0406C9.99388 10.1345 9.74791 10.3879 9.66277 10.7072C8.26735 15.9741 9.09041 21.0955 11.99 25.1231C14.8376 29.0803 19.3455 31.4979 24.6954 31.9532C25.4569 32.4836 26.6348 33 27.9403 33C29.1843 33 30.5419 32.5306 31.7623 31.1599C32.1076 30.7656 32.0745 30.1647 31.6772 29.8173ZM13.551 24.0153C11.2568 20.8326 10.4385 16.8566 11.1859 12.6787C13.4895 14.4766 15.708 15.6267 17.6994 16.6594C22.5715 19.1849 25.4096 20.6589 24.3974 28.8738L21.9235 25.8789L22.4438 22.8088C22.5289 22.2925 22.1789 21.7996 21.6539 21.7151C21.1335 21.6306 20.6369 21.978 20.5517 22.4943L20.3105 23.9261L16.9804 19.8937L15.1167 17.0866C14.8282 16.6453 14.2322 16.5233 13.7875 16.8143C13.3476 17.1007 13.2246 17.6921 13.5132 18.1287L15.4005 20.9781C15.4194 21.0063 15.4384 21.0344 15.462 21.0579L16.427 22.2268L15.7316 22.2362C15.2018 22.2455 14.7809 22.6774 14.7856 23.1985C14.795 23.7195 15.2208 24.1373 15.7458 24.1373C15.7505 24.1373 15.7553 24.1373 15.76 24.1373L17.9832 24.1045L22.6283 29.7328C18.8346 28.9348 15.6654 26.9538 13.551 24.0153Z" fill="#01005B" />
                            </svg>

                            <div className="loungewear-products-subtitle-item">
                                <p style={{ color: "#01005B", fontSize: "22px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif" }}>Responsibly made.</p>
                                <p style={{ color: "#6C6C6C", fontSize: "15px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif", width: "497px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                            </div>
                        </div>

                        <div className="loungewear-products-subtitle">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21" cy="21" r="21" fill="#F9F0E5" />
                                <path d="M21 8V34" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.9998 27.9998C17.1298 27.9998 13.9998 24.8698 13.9998 20.9998C13.9998 17.1298 17.1298 13.9998 20.9998 13.9998" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.8098 11.8105L13.9298 13.9305" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 21H11" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.8098 30.1901L13.9298 28.0701" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 17.5498C22.2 15.4298 24.48 13.9998 27.09 13.9998C27.25 13.9998 27.4 14.0098 27.56 14.0198C25.89 14.8998 24.76 16.6498 24.76 18.6598C24.76 21.5598 27.11 23.9098 30.01 23.9098C31.61 23.9098 33.04 23.1898 34 22.0598C33.48 25.4298 30.59 27.9998 27.09 27.9998C24.48 27.9998 22.2 26.5698 21 24.4498" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <div className="loungewear-products-subtitle-item">
                                <p style={{ color: "#01005B", fontSize: "22px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif" }}>Made for living in.</p>
                                <p style={{ color: "#6C6C6C", fontSize: "15px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif", width: "497px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                            </div>
                        </div>

                        <div className="loungewear-products-subtitle">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21" cy="21" r="21" fill="#F9F0E5" />
                                <path d="M12.009 16.5696C14.1442 14.7453 15.8308 13.3029 20.4079 15.8763C22.6066 17.112 24.38 17.579 25.8552 17.5766C28.4402 17.5766 30.1158 16.1463 31.5641 14.9095C31.8127 14.6943 31.9673 14.3912 31.9951 14.0645C32.0229 13.7378 31.9218 13.4131 31.7132 13.1594C31.6114 13.0348 31.4856 12.9319 31.3431 12.8566C31.2007 12.7813 31.0445 12.7352 30.8838 12.721C30.7232 12.7068 30.5613 12.7249 30.4077 12.7741C30.2542 12.8232 30.1121 12.9026 29.9899 13.0073C27.856 14.8341 26.1681 16.2765 21.591 13.7006C15.5436 10.3037 12.7106 12.724 10.4348 14.6699C10.1864 14.8852 10.0321 15.1884 10.0045 15.5151C9.97685 15.8418 10.0782 16.1663 10.287 16.42C10.3888 16.5443 10.5147 16.647 10.6571 16.7221C10.7995 16.7971 10.9557 16.843 11.1162 16.8569C11.2768 16.8709 11.4385 16.8526 11.5919 16.8033C11.7452 16.7539 11.8871 16.6744 12.009 16.5696ZM29.9899 19.2184C27.856 21.0427 26.1681 22.4876 21.591 19.9117C15.5436 16.5124 12.7106 18.9338 10.4348 20.8785C10.1864 21.0939 10.0321 21.3971 10.0045 21.7238C9.97685 22.0505 10.0782 22.375 10.287 22.6286C10.3886 22.7531 10.5143 22.8561 10.6567 22.9313C10.799 23.0066 10.9551 23.0527 11.1157 23.0669C11.2763 23.081 11.4381 23.063 11.5915 23.0139C11.745 22.9647 11.8869 22.8854 12.009 22.7807C14.1442 20.9552 15.8308 19.5128 20.4079 22.085C22.6066 23.3231 24.38 23.7877 25.8552 23.7877C28.4402 23.7877 30.1158 22.3574 31.5641 21.1181C31.8129 20.9033 31.9676 20.6004 31.9955 20.2738C32.0233 19.9472 31.922 19.6227 31.7132 19.3692C31.6114 19.2447 31.4856 19.1417 31.3431 19.0664C31.2006 18.9911 31.0443 18.9451 30.8836 18.931C30.7229 18.917 30.561 18.9352 30.4075 18.9845C30.2539 19.0339 30.1119 19.1134 29.9899 19.2184ZM29.9899 25.4283C27.856 27.255 26.1681 28.6975 21.591 26.124C15.5436 22.7247 12.7106 25.145 10.4348 27.0909C10.1864 27.3062 10.0321 27.6094 10.0045 27.9361C9.97685 28.2628 10.0782 28.5873 10.287 28.841C10.3887 28.9654 10.5145 29.0683 10.657 29.1434C10.7994 29.2186 10.9556 29.2645 11.1162 29.2784C11.2768 29.2924 11.4386 29.2741 11.592 29.2247C11.7453 29.1752 11.8872 29.0956 12.009 28.9906C14.1442 27.1663 15.8308 25.7251 20.4079 28.2973C22.6066 29.533 24.38 30 25.8552 30C28.4402 30 30.1158 28.5673 31.5641 27.3305C31.8127 27.1153 31.9673 26.8122 31.9951 26.4855C32.0229 26.1588 31.9218 25.8341 31.7132 25.5803C31.6113 25.456 31.4854 25.3531 31.343 25.2779C31.2005 25.2028 31.0444 25.1567 30.8838 25.1425C30.7232 25.1284 30.5613 25.1464 30.4078 25.1954C30.2543 25.2445 30.1122 25.3237 29.9899 25.4283Z" fill="#01005B" />
                            </svg>

                            <div className="loungewear-products-subtitle-item">
                                <p style={{ color: "#01005B", fontSize: "22px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif" }}>Unimaginably comfortable.</p>
                                <p style={{ color: "#6C6C6C", fontSize: "15px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif", width: "497px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                            </div>
                        </div>
                    </div>

                    <div className="loungewear-products-slider">
                        <Swiper
                            initialSlide={0}
                            navigation
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[Navigation, Thumbs]}
                            speed={500}
                            onInit={(s: any) => s.slideTo(0, 0, false)}
                            className="main-slider"
                        >
                            {images.map((src, i) => (
                                <SwiperSlide key={i}>
                                    {isMobile ? <img src={src} alt={`Slide ${i}`} width={303} height={453} /> :
                                        <img src={src} alt={`Slide ${i}`} width={433} height={648} />}
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={4}
                            slidesPerView="auto"
                            freeMode={true}
                            watchSlidesProgress={true}
                            loop={false}
                            centeredSlides={false}
                            modules={[Thumbs]}
                            className="thumbs-slider"
                        >
                            {images.map((src, i) => (
                                <SwiperSlide key={i} style={{ width: '31px' }}>
                                    <img
                                        src={src}
                                        alt={`Thumbnail ${i}`}
                                        style={{ width: "100%", height: "32px", cursor: "pointer" }}
                                    />
                                </SwiperSlide>
                            ))}
                            <p style={{ color: "#6C6C6C", fontSize: "13px", fontWeight: 400, fontFamily: "Sofia Pro, sans-serif", }}>White Robe</p>
                        </Swiper>
                    </div>
                </div>
            }
        </div>
    )
}