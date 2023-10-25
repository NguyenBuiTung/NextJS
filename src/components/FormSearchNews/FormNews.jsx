"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { Button, Form, Pagination, Tab, Tabs } from "react-bootstrap";
function FormNews() {
    const [key, setKey] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 7; // Tổng số trang
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
      console.log(page);
      // Xử lý khi người dùng thay đổi trang
      // Thay đổi currentPage và lấy dữ liệu mới từ trang đó
    };
  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Tim kiếm bài viết"
          className="me-2"
          aria-label="Tim kiếm bài viết"
        />
        <Button variant="outline-success">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </Form>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="all" title="TẤT CẢ">
          <div className="card-list list-view-mobile">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="stripe-vector">
                    <img
                      alt="Tập luyện tại hệ thống CITIGYM"
                      src="https://citigym.com.vn/themes/citigym/images/svg/stripe-1-grey.svg"
                    />
                  </div>
                  <Link
                    className="d-block item-img ratio-4-3"
                    href={"/tin-tuc/lich-tap-gym-7-ngay-tai-nha-tang-co-bap-cho-nguoi-ban-ron"}
                  >
                    <img
                      src="https://citigym.com.vn/storage/uploads/hoanghh-seo/lich-tap-gym-7-ngay-tai-nha-tang-co-bap-cho-nguoi-ban-ron-1-1.jpg"
                      className="content"
                      alt="LỊCH TẬP GYM 7 NGÀY TẠI NHÀ TĂNG CƠ BẮP CHO NGƯỜI BẬN RỘN"
                    />
                  </Link>
                  <div className="item-body">
                    <div className="category">Tập luyện</div>
                    <Link
                      href={"/tin-tuc/lich-tap-gym-7-ngay-tai-nha-tang-co-bap-cho-nguoi-ban-ron"}
                      className="title"
                    >
                      LỊCH TẬP GYM 7 NGÀY TẠI NHÀ TĂNG CƠ BẮP CHO NGƯỜI ...
                    </Link>
                    <div className="date">19-10-2023</div>
                    <div className="description">
                      Cân đối thời gian tập luyện và công việc hằng ngày rất khó
                      với những người bận rộn. Để có một kết quả tốt đòi hỏi bạn
                      phải kiên trì và có lộ trình phù hợp. Bài ...
                    </div>
                  </div>
                </div>
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
                    <Pagination.Item
                      onClick={() => handlePageChange(totalPages)}
                    >
                      {totalPages}
                    </Pagination.Item>
                  </>
                )}

                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </div>
        </Tab>
        <Tab.Content eventKey="blog" title="BLOG">
          Tab content for Profile
        </Tab.Content>
        <Tab eventKey="voucher" title="KHUYẾN MÃI">
          Tab content for Contact
        </Tab>
        <Tab eventKey="losingweight" title="GIẢM CÂN">
          Tab content for Contact
        </Tab>
        <Tab eventKey="memberstory" title="CÂU CHUYỆN HỘI VIÊN">
          Tab content for Contact
        </Tab>
        <Tab eventKey="practice" title="TẬP LUYỆN">
          Tab content for Contact
        </Tab>
        <Tab eventKey="nutrition" title="CHẾ ĐỘ DINH DƯỠNG">
          Tab content for Contact
        </Tab>
        <Tab eventKey="event" title="SỰ KIỆN">
          Tab content for Contact
        </Tab>
        <Tab eventKey="news" title="TIN TỨC">
          Tab content for Contact
        </Tab>
        <Tab eventKey="citygym" title="CITYGYM">
          Tab content for Contact
        </Tab>
      </Tabs>
    </>
  );
}

export default FormNews;
