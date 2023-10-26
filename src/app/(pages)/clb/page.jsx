"use client";
import ContactForm from "@/components/contactForm/ContactForm";
import Loading from "@/components/loading/Loading";
import apiClient from "@/utils/apiClientConfig";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

function page() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(); // Sử dụng state để lưu tổng số trang
  const itemsPerPage = 6;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const [selectedValue, setSelectedValue] = useState("GP01"); // Giá trị được chọn từ select
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await apiClient.get(
          `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${selectedValue}&soTrang=${currentPage}&soPhanTuTrenTrang=${itemsPerPage}`
        );
        setLoading(false)
        setData(response.data.content);
        setTotalPages(
          Math.ceil(response.data.content.totalCount / itemsPerPage)
        ); // Tính toán tổng số trang dựa trên tổng số phần tử
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    fetchData();
  }, [currentPage, selectedValue]);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedValue]);
  return (
    <div className="main-wrapper-clb">
      <div className="main-breadcrumb" style={{ opacity: 1 }}>
        <div
          className="breadcrumb-bg"
          style={{
            backgroundImage:
              'url("https://citigym.com.vn/storage/uploads/untitled-5-9.jpg")',
          }}
        >
          <div className="container" id="breadcrumb-banner">
            <img
              alt="Hình đăng ký tham quan CLB"
              className="breadcrumb-stripe"
              src="/themes/citigym/images/svg/stripe-breadcumb.svg"
            />
            <div className="title">Câu lạc bộ</div>
          </div>
        </div>
      </div>
      <section className="section section-club-list">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-title">Tập luyện ở câu lạc bộ gần bạn</div>
            <h1 className="sub-description-title mx-auto seo-desc mb-5">
              Hệ thống phòng tập gym và yoga của CITIGYM có mặt khắp các quận
              TPHCM. <br /> Lựa chọn phòng tập gần bạn nhất để có thể tập luyện
              dễ dàng và tiết kiệm thời gian.
            </h1>
            <div>
              <div className="row justify-content-center align-items-center">
                <div className="form-group col-md-4 mb-0">
                  <select
                    className="form-control control-light"
                    value={selectedValue}
                    onChange={handleSelectChange}
                  >
                    <option value="GP01">Quận 10</option>
                    <option value="GP02">Quận Phú Nhuận</option>
                    <option value="GP03">Quận 4</option>
                    <option value="GP04">Quận 7</option>
                    <option value="GP05">Quận Gò Vấp</option>
                    <option value="GP06">Quận 1</option>
                    <option value="GP07">Quận 9</option>
                    <option value="GP08">Quận Bình Thạnh</option>
                    <option value="GP09">Thành phố Phan Thiết</option>
                    <option value="GP10">Quận 2</option>
                    <option value="GP11">Quận Tân Phú</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-list">
            <div className="row">
              {loading ? (
                <Loading />
              ) : (
                data?.items?.map((item, index) => {
                  return (
                    <div key={index} className="col-md-4">
                      <div className="item">
                        <div className="stripe-vector">
                          <img
                            alt="Hình đăng ký tham quan CLB"
                            src="https://citigym.com.vn/themes/citigym/images/svg/stripe-1-grey.svg"
                          />
                        </div>
                        <Link
                          href="https://citigym.com.vn/clb/phong-tap-gym-quan-10"
                          className="item-img ratio-4-3 d-block"
                        >
                          <img alt src={item.hinhAnh} className="content" />
                        </Link>
                        <div className="item-body">
                          <Link
                            href="https://citigym.com.vn/clb/phong-tap-gym-quan-10"
                            className="title"
                          >
                            Citigym Thành Thái
                          </Link>
                          <div className="icon-list">
                            <FontAwesomeIcon icon={faLocationDot} /> 52 Thành
                            Thái, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                          </div>
                          <div className="icon-list">
                            <FontAwesomeIcon icon={faPhone} />
                            <a href="tel:1900633638">1900633638</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <Pagination style={{ justifyContent: "center" }}>
              <Pagination.First onClick={() => handlePageChange(1)} />
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />

              {currentPage > 3 && (
                <>
                  <Pagination.Item onClick={() => handlePageChange(1)}>
                    1
                  </Pagination.Item>
                  <Pagination.Ellipsis />
                </>
              )}

              {currentPage === 1 ? (
                <>
                  <Pagination.Item active>{currentPage}</Pagination.Item>
                  {totalPages > 1 && (
                    <Pagination.Item onClick={() => handlePageChange(2)}>
                      2
                    </Pagination.Item>
                  )}
                </>
              ) : currentPage === totalPages ? (
                <>
                  {totalPages > 1 && (
                    <Pagination.Item
                      onClick={() => handlePageChange(totalPages - 1)}
                    >
                      {totalPages - 1}
                    </Pagination.Item>
                  )}
                  <Pagination.Item active>{currentPage}</Pagination.Item>
                </>
              ) : (
                <>
                  <Pagination.Item
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    {currentPage - 1}
                  </Pagination.Item>
                  <Pagination.Item active>{currentPage}</Pagination.Item>
                  <Pagination.Item
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    {currentPage + 1}
                  </Pagination.Item>
                </>
              )}
              {currentPage < totalPages - 2 && (
                <>
                  <Pagination.Ellipsis />
                  <Pagination.Item onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                  </Pagination.Item>
                </>
              )}

              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages <= 1}
              />
              <Pagination.Last
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages || totalPages <= 1}
              />
            </Pagination>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}

export default page;
