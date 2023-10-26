"use client";
import apiClient from "@/utils/apiClientConfig";
import { useEffect, useState } from "react";
import ReactCompareImage from "react-compare-image";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "100px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "100px", zIndex: "1" }}
      onClick={onClick}
    />
  );
}
function HomeBeforeAfter() {
  const [before, setBefore] = useState([]);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(
          "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        );
        setBefore(response.data.content);
      } catch (error) {
        // Xử lý lỗi ở đây
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="before-after-wrapper">
        <div className="row align-items-center">
          <div className="col-lg-6 m-b-md-3">
            <div className="section-title">Before &amp; After </div>
            <h3 className="seo-desc">
              Tập luyện tại CITIGYM để có cơ hội thay đổi ngoại hình một cách
              ngoạn mục
            </h3>
            <p className="m-b-3">
              Việc luyện tập đều đặn tại CITIGYM và đúng kỹ thuật, cùng với một
              chế độ dinh dưỡng hợp lý sẽ giúp cải thiện vóc dáng một cách rõ
              rệt. Huấn luyện viên của Citigym thiết kế chương trình luyện tập
              dựa trên chỉ số cơ thể, tình trạng sức khỏe của bạn nhằm giúp bạn
              thấy rõ sự thay đổi ngoạn mục chỉ trong khoảng trung bình từ 6-8
              tuần.
            </p>
          </div>
          <div className="col-lg-6 comparison-slider-wrapper">
            <Slider {...settings}>
              {before.map((item, index) => {
                return (
                  <div key={index} className="fix-height">
                  <ReactCompareImage
                    leftImage={item.hinhAnh}
                    rightImage="https://citigym.com.vn/storage/uploads/s-after.jpg"
                  />
                  </div>

                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBeforeAfter;
