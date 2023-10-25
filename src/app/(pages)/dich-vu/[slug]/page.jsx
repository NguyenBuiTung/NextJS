"use client";
// import getDataSlug from "@/api/getDataSlug";
import ContactForm from "@/components/contactForm/ContactForm";
import apiClient from "@/utils/apiClientConfig";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
function page({ params }) {
  const [data, setData] = useState([]);
  const [dataDv, setDataDv] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(
          `/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`
        );
        setDataDv(response.data.content);
      } catch (error) {
        // Xử lý lỗi ở đây
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(
          `QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${params.slug}`
        );
        setData(response.data.content);
      } catch (error) {
        // Xử lý lỗi ở đây
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const productsPerPage = 3;
  const handleShowMore = () => {
    setVisibleProducts(
      (prevVisibleProducts) => prevVisibleProducts + productsPerPage
    );
  };
  return (
    <div className="main-wrapper-dichvu">
      <a href="#">
        <div className="main-breadcrumb" style={{ opacity: 1 }}>
          <div
            className="breadcrumb-bg"
            style={{
              backgroundImage:
                'url("https://citigym.com.vn/storage/uploads/vietdh/dichvu-dt.jpg")',
            }}
          >
            <div className="container" id="breadcrumb-banner" style={{}}>
              <img
                alt="Hình đăng ký tham quan CLB"
                className="breadcrumb-stripe"
                src="https://citigym.com.vn/themes/citigym/images/svg/stripe-breadcumb.svg"
              />
              <div className="title-bg">Find a Class</div>
              <div className="title">Dịch vụ</div>
            </div>
          </div>
        </div>
      </a>
      <section className="section section-service-services no-bg">
        <div className="container-fluid">
          <div className="text-center">
            <div className="section-title">{params.slug} </div>
            <h1 className="sub-description-title mx-auto seo-desc">
              Chương trình luyện tập yoga, gym, group X được thiết kế khoa học
              và phù hợp từ chuyên gia sẽ giúp bạn đạt được mục tiêu sức khỏe và
              hình thể.
            </h1>
            <div className="desc mx-auto sub-description"></div>
          </div>
        </div>
        <div className="container">
          <div className="services-wrapper">
            <div className="services-row">
              {dataDv.map((item, index) => {
                if (index < 6) {
                  return (
                    <div key={index} className="item  categories-list">
                      <Link href={`/dich-vu/${item.biDanh}`}>
                        <div className="item-img">
                          <img src={item.hinhAnh} alt />
                        </div>
                        <div className="content-overlay">
                          <div className="content">
                            <div className="title-service">{item.tenPhim}</div>
                          </div>
                        </div>
                        <div className="stripe-vector-1">
                          <img
                            alt="Hình đăng ký tham quan CLB"
                            src="https://citigym.com.vn/themes/citigym/images/svg/stripe.svg"
                          />
                        </div>
                        <div className="stripe-vector-2">
                          <img
                            alt="Hình đăng ký tham quan CLB"
                            src="https://citigym.com.vn/themes/citigym/images/svg/stripe-1.svg"
                          />
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <ul
            className="tag-inline tag-col-2 nav nav-tabs m-t-64px m-b-24px m-t-md-0"
            id="tags-list"
          ></ul>
        </div>
        <div className="container">
          <div className="tab-content">
            <div className="tab-pane show active" id="categories-list-1">
              <div className="card-list list-view-mobile" id="services_list">
                <div className="row m-b-1">
                  {data.slice(0, visibleProducts).map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="col-lg-4 col-md-6 service-detail"
                      >
                        <div className="item">
                          <div className="stripe-vector">
                            <img
                              alt="Hình đăng ký tham quan CLB"
                              src="https://citigym.com.vn/themes/citigym/images/svg/stripe-1-grey.svg"
                            />
                          </div>
                          <div className="item-img ratio-4-3">
                            <Link
                              href={`/dich-vu/${item.biDanh}/${item.maPhim}`}
                              className="content"
                            >
                              <img
                                alt="Kickfit"
                                src={item.hinhAnh}
                                className="content"
                              />
                            </Link>
                          </div>
                          <div className="item-body">
                            <div className="category">Personal Trainer</div>
                            <Link
                              href="https://citigym.com.vn/dich-vu/personal-trainer/kickfit"
                              className="title"
                            >
                              {item.tenPhim}
                            </Link>
                            <div className="icon-list">
                              <FontAwesomeIcon icon={faClock} />{" "}
                              {item.ngayKhoiChieu}
                            </div>
                            <p className="m-t-24px mb-0 description">
                              {item.moTa}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {visibleProducts < data.length && (
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-brand page-link"
                      onClick={handleShowMore}
                    >
                      Xem Thêm
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}

export default page;
