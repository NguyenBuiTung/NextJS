"use client";
import apiClient from "@/utils/apiClientConfig";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";

function HomeMember() {
  const [story, setStoryData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(
          "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        );
        setStoryData(response.data.content);
      } catch (error) {
        // Xử lý lỗi ở đây
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="text-center">
          <div className="section-title light">Câu chuyện hội viên </div>
          <h2 className="sub-description mx-auto seo-desc">
            CITIGYM dùng toàn bộ nỗ lực để giúp bạn yêu cơ thể mình hơn, đều đặn
            mỗi ngày.
          </h2>
        </div>
        <div className="news-wrapper">
          <Slider {...settings}>
            {story.map((item, index) => {
              return (
                <div key={index} className="tung" aria-hidden="false">
                  <Link
                    href={
                      "/tin-tuc/dien-vien-huy-khanh-dot-kich-phong-tap-citigym-bat-mi-tips-co-body-6-mui-than-toc"
                    }
                    className="item-tung"
                  >
                    <img
                      alt="   Tập Gym, Yoga, Group X tại hệ thống CLB CITIGYM"
                      src={item.hinhAnh}
                      className="img-tung"
                    />
                    <div className="stripe-vector-1">
                      <img
                        alt="Tập Gym, Yoga, Group X tại hệ thống CLB CITIGYM"
                        src="https://citigym.com.vn/themes/citigym/images/svg/stripe.svg"
                      />
                    </div>
                    <div className="stripe-vector-2">
                      <img
                        alt="Tập Gym, Yoga, Group X tại hệ thống CLB CITIGYM"
                        src="https://citigym.com.vn/themes/citigym/images/svg/stripe.svg"
                      />
                    </div>
                  </Link>
                  <div className="item-description">
                    <span>
                    {item.moTa.length > 200 ? item.moTa.substr(0, 180) + "..." : item.moTa}
                    </span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HomeMember;
