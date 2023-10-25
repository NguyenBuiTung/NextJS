"use client";
import RegisterForm from "@/components/FormModal/registerForm";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Modal, Tab, Table, Tabs } from "react-bootstrap";

function page() {
  const [key, setKey] = useState("classsic");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="main-wrapper">
      <a href="#">
        <div className="main-breadcrumb" style={{ opacity: 1 }}>
          <div
            className="breadcrumb-bg"
            data-desktop-src="background-image: url('https://citigym.com.vn/storage/uploads/vietdh/gia-dt.jpg');"
            data-mobile-src="background-image: url('https://citigym.com.vn/storage/uploads/vietdh/gia-mb-375x440.jpg');"
            style={{
              backgroundImage:
                'url("https://citigym.com.vn/storage/uploads/vietdh/gia-dt.jpg")',
            }}
          >
            <div className="container" id="breadcrumb-banner">
              <img
                alt="Chi tiết giá tập gym yoga tại TPHCM"
                className="breadcrumb-stripe"
                src="/themes/citigym/images/svg/stripe-breadcumb.svg"
              />
            </div>
          </div>
        </div>
      </a>
      <section className="section section-pricing-detail mb-0">
        <div className="container">
          <div className="row m-pricing-detail">
            <div className="col-lg-7 content-text m-b-md-3">
              <span className="detail-enterprise-js d-none ">
                <ul className="tag-inline tag-col-3 nav nav-tabs m-b-24px m-t-md-3 d-block text-center"></ul>
                <div className="tab-content"></div>
              </span>
              <span className="detail-personal-js">
                <div className="tab-content">
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                  >
                    <Tab eventKey="classsic" title="Classsic">
                      <div
                        className="tab-pane fade active show"
                        id="package-personal-list-1"
                      >
                        <div className="row align-items-center">
                          <div className="col-md-6 item-selection-wrapper">
                            <div className="item-selection nav nav-tabs border-bottom-0">
                              <a
                                className="item-month"
                                href="#package-classic-3"
                                data-toggle="tab"
                              >
                                <div className="title">15</div> tháng{" "}
                              </a>
                              <a
                                className="item-month "
                                href="#package-classic-2"
                                data-toggle="tab"
                              >
                                <div className="title">6</div> tháng{" "}
                              </a>
                              <a
                                className="item-month active"
                                href="#package-classic-1"
                                data-toggle="tab"
                              >
                                <div className="title">3</div> tháng{" "}
                              </a>
                              <a
                                className="item-month "
                                href="#package-classic-0"
                                data-toggle="tab"
                              >
                                <div className="title">1</div> tháng{" "}
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 item-content-wrapper">
                            <div className="item-content tab-content p-y-12px">
                              <ul
                                className="tab-pane fade"
                                id="package-classic-3"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    15 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    10,800,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    720,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    24,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    onClick={() => console.log("first")}
                                    className="btn btn-brand btn-sm"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                              <ul
                                className="tab-pane fade "
                                id="package-classic-2"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    6 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    7,830,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    1,305,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    43,500 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    onClick={handleShow}
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                              <ul
                                className="tab-pane fade active show"
                                id="package-classic-1"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    3 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    4,910,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    1,636,667 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    54,556 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    onClick={handleShow}
                                    className="btn btn-brand btn-sm"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                              <ul
                                className="tab-pane fade "
                                id="package-classic-0"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    1 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    2,315,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    2,315,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    77,167 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="classic-plus" title="Classic-plus">
                      <div
                        className="tab-pane fade active show"
                        id="package-personal-list-16"
                      >
                        <div className="row align-items-center">
                          <div className="col-md-6 item-selection-wrapper">
                            <div className="item-selection nav nav-tabs border-bottom-0">
                              <a
                                className="item-month active"
                                href="#package-classic-plus-0"
                                data-toggle="tab"
                              >
                                <div className="title">22</div> tháng{" "}
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 item-content-wrapper">
                            <div className="item-content tab-content p-y-12px">
                              <ul
                                className="tab-pane fade active show"
                                id="package-classic-plus-0"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    22 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    16,300,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    740,909 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    24,697 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="citipassport" title="Citipassport">
                      <div
                        className="tab-pane fade active show"
                        id="package-personal-list-2"
                      >
                        <div className="row align-items-center">
                          <div className="col-md-6 item-selection-wrapper">
                            <div className="item-selection nav nav-tabs border-bottom-0">
                              <a
                                className="item-month active"
                                href="#package-citipassport-1"
                                data-toggle="tab"
                              >
                                <div className="title">36</div> tháng{" "}
                              </a>
                              <a
                                className="item-month "
                                href="#package-citipassport-0"
                                data-toggle="tab"
                              >
                                <div className="title">21</div> tháng{" "}
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 item-content-wrapper">
                            <div className="item-content tab-content p-y-12px">
                              <ul
                                className="tab-pane fade active show"
                                id="package-citipassport-1"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    36 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    27,100,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    752,778 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    25,093 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                              <ul
                                className="tab-pane fade "
                                id="package-citipassport-0"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    21 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    17,860,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    850,476 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    28,349 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="royal" title="Royal">
                      <div
                        className="tab-pane fade active show"
                        id="package-personal-list-31"
                      >
                        <div className="row align-items-center">
                          <div className="col-md-6 item-selection-wrapper">
                            <div className="item-selection nav nav-tabs border-bottom-0">
                              <a
                                className="item-month active"
                                href="#package-royal-0"
                                data-toggle="tab"
                              >
                                <div className="title">48</div> tháng{" "}
                              </a>
                              <a
                                className="item-month "
                                href="#package-royal-1"
                                data-toggle="tab"
                              >
                                <div className="title">30</div> tháng{" "}
                              </a>
                              <a
                                className="item-month "
                                href="#package-royal-2"
                                data-toggle="tab"
                              >
                                <div className="title">12</div> tháng{" "}
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 item-content-wrapper">
                            <div className="item-content tab-content p-y-12px">
                              <ul
                                className="tab-pane fade active show"
                                id="package-royal-0"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    48 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    36,130,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    752,708 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    25,090 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                              <ul
                                className="tab-pane fade "
                                id="package-royal-1"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    30 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    25,740,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    858,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    28,600 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                              <ul
                                className="tab-pane fade "
                                id="package-royal-2"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    12 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    17,700,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    1,475,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    49,167 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="signature" title="Signature">
                      <div
                        className="tab-pane fade active show"
                        id="package-personal-list-29"
                      >
                        <div className="row align-items-center">
                          <div className="col-md-6 item-selection-wrapper">
                            <div className="item-selection nav nav-tabs border-bottom-0">
                              <a
                                className="item-month active"
                                href="#package-signature-1"
                                data-toggle="tab"
                              >
                                <div className="title">60</div> tháng{" "}
                              </a>
                              <a
                                className="item-month "
                                href="#package-signature-3"
                                data-toggle="tab"
                              >
                                <div className="title">36</div> tháng{" "}
                              </a>
                              <a
                                className="item-month "
                                href="#package-signature-0"
                                data-toggle="tab"
                              >
                                <div className="title">24</div> tháng{" "}
                              </a>
                              <a
                                className="item-month "
                                href="#package-signature-2"
                                data-toggle="tab"
                              >
                                <div className="title">12</div> tháng{" "}
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 item-content-wrapper">
                            <div className="item-content tab-content p-y-12px">
                              <ul
                                className="tab-pane fade active show"
                                id="package-signature-1"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    60 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    149,395,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    2,489,917 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    82,997 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                              <ul
                                className="tab-pane fade "
                                id="package-signature-3"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    36 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    120,000,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    3,333,333 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    111,111 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                              <ul
                                className="tab-pane fade "
                                id="package-signature-0"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    24 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    89,240,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    3,718,333 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    123,944 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                              <ul
                                className="tab-pane fade "
                                id="package-signature-2"
                              >
                                <li>
                                  <div className="label-text">
                                    Thời gian tập luyện:
                                  </div>
                                  <div className="label-title text-space">
                                    12 tháng
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Tổng chi phí:
                                  </div>
                                  <div className="label-title text-space">
                                    51,313,000 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / tháng
                                  </div>
                                  <div className="label-title text-space">
                                    4,276,083 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <div className="label-text">
                                    Chi phí / ngày:
                                  </div>
                                  <div className="label-title text-space">
                                    142,536 VNĐ
                                  </div>
                                </li>
                                <li>
                                  <button
                                    type="submit"
                                    className="btn btn-brand btn-sm"
                                    data-toggle="modal"
                                    data-target=".modal-sign-up"
                                  >
                                    Đăng ký ngay
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </span>
            </div>
            <div className="col-lg-5 content-bg stripe-section">
              <div className="stripe-vector-1">
                <img
                  alt="Chi tiết giá tập gym yoga tại TPHCM"
                  src="https://citigym.com.vn/themes/citigym/images/svg/stripe-section-left-grey.svg"
                />
              </div>
              <div className="stripe-vector-2">
                <img
                  alt="Chi tiết giá tập gym yoga tại TPHCM"
                  src="https://citigym.com.vn/themes/citigym/images/svg/stripe-section-right-grey.svg"
                />
              </div>
              <div className="content-img text-center">
                <img
                  alt="Chi tiết giá tập gym yoga tại TPHCM"
                  src="https://citigym.com.vn/themes/citigym/images/citigym-expert/expert-2.png"
                  className="content"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-pricing-table stripe-section mb-0"
        style={{
          backgroundImage:
            "url(https://citigym.com.vn/themes/citigym/images/clubs/2-2.jpg)",
        }}
      >
        <div className="stripe-vector-1">
          <img
            alt="Chi tiết giá tập gym yoga tại TPHCM"
            src="https://citigym.com.vn/themes/citigym/images/svg/stripe-section-left.svg"
          />
        </div>
        <div className="stripe-vector-2">
          <img
            alt="Chi tiết giá tập gym yoga tại TPHCM"
            src="https://citigym.com.vn/themes/citigym/images/svg/stripe-section-right.svg"
          />
        </div>
        <div className="container">
          <Table className="table pricing-table table-responsive detail-enterprise-js d-none">
            <thead>
              <tr>
                <th className="border-top-0" />
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
          <Table
            striped
            bordered
            hover
            variant="light"
            className="table pricing-table table-responsive detail-personal-js"
          >
            <thead>
              <tr>
                <th className="border-top-0" />
                <th>
                  <span className="title" data-short-title="Classic">
                    Classic
                  </span>
                  <br />
                </th>
                <th>
                  <span className="title" data-short-title="Classic-Plus">
                    Classic-Plus
                  </span>
                  <br />
                </th>
                <th>
                  <span className="title" data-short-title="Citipassport">
                    Citipassport
                  </span>
                  <br />
                </th>
                <th>
                  <span className="title" data-short-title="Royal">
                    Royal
                  </span>
                  <br />
                </th>
                <th>
                  <span className="title" data-short-title="Signature">
                    Signature
                  </span>
                  <br />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tập luyện tại 01 CLB đã chọn.</td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>Tham gia Yoga và Group X tại 01 CLB đã chọn.</td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>
                  Tự do tập luyện tại tất cả câu lạc bộ trong hệ thống CITIGYM.
                </td>
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>Không giới hạn thời gian luyện tập</td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>
                  Tham gia tất cả các lớp Yoga và Group X tại tất cả các CLB
                  trong hệ thống CITIGYM
                </td>
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>
                  1 buổi định hướng luyện tập riêng biệt và tư vấn dinh dưỡng
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>
                  Được sử dụng dịch vụ thư giãn sau luyện tập (sauna và
                  steambath)
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>Nước uống miễn phí</td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>Dịch vụ khăn tập thể thao cao cấp.</td>
                <td />
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>
                  Hệ thống khóa từ thông minh, bảo mật tối ưu Esmart Locker
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>
                  Được dẫn theo 1 người thân đi tập cùng (người đi cùng được
                  phục vụ như quyền lợi thẻ classic)
                </td>
                <td />
                <td />
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  Được dẫn theo 2 người thân đi tập cùng (người đi cùng được
                  phục vụ như quyền lợi thẻ Citipassport)
                </td>
                <td />
                <td />
                <td />
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>Bộ đồ dùng tắm gội - vệ sinh cao cấp.</td>
                <td />
                <td />
                <td />
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>
                  Được tặng 01 ly nước trái cây hoặc ly sinh tố dinh dưỡng;
                </td>
                <td />
                <td />
                <td />
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>
                  01 lần chuyển nhượng cho người thân trong gia đình (Cha, Mẹ,
                  Vợ, Chồng, Con, Anh Chị Em ruột, Con nuôi…) không thu phí
                </td>
                <td />
                <td />
                <td />
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>
                  Được ưu tiên đặt chỗ các lớp Yoga và GroupX trước 48 tiếng
                  (hôm nay và ngày mai)
                </td>
                <td />
                <td />
                <td />
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>
                  Được tặng gói tập luyện với HLV, giới hạn 6 buổi/tháng, 30
                  phút/buổi. Tặng 6 tháng và tối đa 36 buổi đối với gói
                  Signature 12 tháng - Tặng 1 năm và tối đa 72 buổi đối với gói
                  Signature 24 tháng - Tặng 18 tháng và tối đa 108 đối với gói
                  Signature 36 tháng - Tặng 2 năm và tối đa 144 buổi đối với gói
                  Signature 60 tháng.
                </td>
                <td />
                <td />
                <td />
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>Lối vào check-in ưu tiên cho hội viên Signature</td>
                <td />
                <td />
                <td />
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>
                  Phục vụ thảm tập Yoga có logo Signature khi tham gia lớp
                </td>
                <td />
                <td />
                <td />
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
              <tr>
                <td>
                  Sử dụng khu vực VIP Lounge dành riêng cho hội viên Signature
                  (Không áp dụng cho Khách đi kèm)
                </td>
                <td />
                <td />
                <td />
                <td />
                <td className="highlight">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title title-s1">
              Đăng ký tham quan câu lạc bộ
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default page;
