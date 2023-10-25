
import {
  faFacebookSquare,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBusinessTime,
  faLocationDot,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
function Footer() {
  return (
    <footer className="section-footer wow" style={{ visibility: "visible" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 m-b-md-2">
            <div className="footer-title">CITIGYM</div>
            <div className="footer-block">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li>
                      <span>
                        <FontAwesomeIcon
                          style={{ marginRight: 10 }}
                          icon={faPhone}
                        />
                        <a href="tel:1900633638">1900 633 638</a>
                      </span>
                      <span>
                        <FontAwesomeIcon
                          style={{ marginRight: 10,fontSize: 23 }}
                          icon={faLocationDot}
                        />
                        2Bis Nguyễn Thị Minh Khai, Phường Đa Kao, Ho Chi Minh
                        City, Vietnam
                      </span>
                      <span>
                        <FontAwesomeIcon
                          style={{ marginRight: 10,fontSize: 13 }}
                          icon={faBusinessTime}
                        />
                        Thứ Hai - Thứ Sáu: 6:00 đến 23:00 và Thứ Bảy - Chủ Nhật:
                        8:00 đến 22:00
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-b-md-2">
            <div className="footer-title"></div>
            <div className="footer-block">
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <span>
                        <i />
                        <Link href={"#"}>
                          Phương thức thanh toán
                        </Link>
                      </span>
                      <span>
                        <i />
                        <Link href={"#"}>Dịch Vụ</Link>
                      </span>
                      <span>
                        <i />
                        <Link href={"#"}>
                          Chính sách giá
                        </Link>
                      </span>
                      <span>
                        <i />
                        <Link href={"#"}>
                          Chính sách bảo mật
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <span>
                        <i />
                        <Link href={"#"}>
                          Tuyển Dụng
                        </Link>
                      </span>
                      <span>
                        <i />
                        <Link href={"#"}>Tin Tức</Link>
                      </span>
                      <span>
                        <i />
                        <Link href={"#"}>
                          Liên hệ
                        </Link>
                      </span>
                      <span>
                        <i/>
                        <Link href={"#"}>Câu lạc bộ</Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-5">
            <div className="footer-title">Mạng xã hội</div>
            <div className="footer-social-link">
              <ul>
                <li>
                  <Link href={"#"}>
                    <FontAwesomeIcon
                      style={{ marginRight: 12 }}
                      icon={faFacebookSquare}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <FontAwesomeIcon
                      style={{ marginRight: 12 }}
                      icon={faSquareInstagram}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          Copyright 2023 @ CITIGYM. All Right Reserved
        </div>
      </div>
    </footer>
  );
}
export default Footer;
