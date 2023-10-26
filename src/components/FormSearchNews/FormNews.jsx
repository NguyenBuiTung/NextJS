"use client";
import apiClient from "@/utils/apiClientConfig";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Form, Pagination, Tab, Tabs } from "react-bootstrap";
import ItemCard from "./ItemCard";
function FormNews() {
  const [data, setData] = useState([]); // Dữ liệu lấy về từ API
  const [key, setKey] = useState("GP01");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(); // Sử dụng state để lưu tổng số trang
  const itemsPerPage = 6;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await apiClient.get(
          `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${key}&soTrang=${currentPage}&soPhanTuTrenTrang=${itemsPerPage}`
        );
        setData(reponse.data.content);
        setTotalPages(
          Math.ceil(reponse.data.content.totalCount / itemsPerPage)
        ); // Tính toán tổng số trang dựa trên tổng số phần tử
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage, key]);
  useEffect(() => {
    setCurrentPage(1);
  }, [key]);
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
        <Tab eventKey="GP01" title="TẤT CẢ">
          <div className="card-list list-view-mobile">
            <div className="row">
              {data?.items?.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ItemCard item={item} />
                  </div>
                );
              })}

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
        <Tab.Content eventKey="GP11" title="BLOG">
          <div className="card-list list-view-mobile">
            <div className="row">
              {data?.items?.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ItemCard item={item} />
                  </div>
                );
              })}

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
        </Tab.Content>
        <Tab eventKey="GP12" title="KHUYẾN MÃI">
          <div className="card-list list-view-mobile">
            <div className="row">
              {data?.items?.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ItemCard item={item} />
                  </div>
                );
              })}

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
        <Tab eventKey="GP13" title="GIẢM CÂN">
          <div className="card-list list-view-mobile">
            <div className="row">
              {data?.items?.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ItemCard item={item} />
                  </div>
                );
              })}

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
        <Tab eventKey="GP14" title="CÂU CHUYỆN HỘI VIÊN">
          <div className="card-list list-view-mobile">
            <div className="row">
              {data?.items?.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ItemCard item={item} />
                  </div>
                );
              })}

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
        <Tab eventKey="GP15" title="TẬP LUYỆN">
          <div className="card-list list-view-mobile">
            <div className="row">
              {data?.items?.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ItemCard item={item} />
                  </div>
                );
              })}

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
        <Tab eventKey="GP16" title="CHẾ ĐỘ DINH DƯỠNG">
          <div className="card-list list-view-mobile">
            <div className="row">
              {data?.items?.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ItemCard item={item} />
                  </div>
                );
              })}

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
        <Tab eventKey="GP17" title="SỰ KIỆN">
          <div className="card-list list-view-mobile">
            <div className="row">
              {data?.items?.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ItemCard item={item} />
                  </div>
                );
              })}

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
        <Tab eventKey="GP09" title="TIN TỨC">
          <div className="card-list list-view-mobile">
            <div className="row">
              {data?.items?.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ItemCard item={item} />
                  </div>
                );
              })}
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
        <Tab eventKey="GP10" title="CITYGYM">
          <div className="card-list list-view-mobile">
            <div className="row">
              {data?.items?.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ItemCard item={item} />
                  </div>
                );
              })}

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
      </Tabs>
    </>
  );
}

export default FormNews;
