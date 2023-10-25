"use client";
import Link from "next/link";
import { Carousel, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { notification } from "antd";
import apiClient from "@/utils/apiClientConfig";
function Carousel2() {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/QuanLyPhim/LayDanhSachBanner");
        setBannerData(response.data.content);
      } catch (error) {
        // Xử lý lỗi ở đây
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    notification.destroy();
    notification.open({
      description: (
        <div className="popup bottom-left show">
          <Link style={{ display: "flex" }} href={"/khuyen-mai"}>
            <img
              style={{ width: "100%" }}
              src="https://citigym.com.vn/storage/uploads/minhdh/1080-1080.jpg"
              alt="Spin - Homepage"
            />
          </Link>
        </div>
      ),
      duration: 10,
      placement: "topLeft",
    });
  }, []);
  return (
    <div className="slider-wrapper slick-initialized slick-slider slick-dotted">
      <Carousel data-bs-theme="light">
        {bannerData.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <Link href={"/khuyen-mai"}>
                <Image
                  style={{
                    width: "100%",
                    height:"600px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt="Spin"
                  src={item.hinhAnh}
                />
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Carousel2;
