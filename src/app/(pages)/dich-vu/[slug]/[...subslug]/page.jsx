import ContactForm from "@/components/contactForm/ContactForm";
import { faClock, faMuseum } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function page() {
  return (
    <div className="main-wrapper">
      <nav className="breadcrumb-text wow fadeInDown">
        <div className="container">
          <div className="breadcrumb-title">BodyPump</div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dịch vụ</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Group X</a>
            </li>
            <li className="breadcrumb-item active">BodyPump</li>
          </ol>
        </div>
      </nav>
      <section className="section section-service-detail-slider wow fadeInLeft">
        <div className="slider-wrapper slider-gallery slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div className="slick-track">
              <div
                className="item slick-slide slick-current slick-active"
                aria-hidden="false"
              >
                <div className="item-img">
                  <img
                    alt
                    src="https://citigym.com.vn/storage/uploads/untitled-7-5-1905x834.jpg"
                    className="content"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-overlay container">
          <div className="content">
            <div className="title">BodyPump</div>
          </div>
        </div>
      </section>
      <section className="section section-service-detail-info">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 content-text m-b-md-5 wow fadeInLeft">
              <div
                className="feature-title"
                style={{
                  backgroundImage:
                    "url(https://citigym.com.vn/themes/citigym/images/services/sports-couple-doing-battle-ropes-cross-fitness-3PJLG75.jpg)",
                }}
              >
                BodyPump
              </div>
              <p>
                BodyPump là 1 bộ môn tập cho toàn bộ nhóm cơ trên cơ thể kết hợp
                với tạ và âm nhạc. Sử dụng tạ nhẹ đến trung bình qua những động
                tác lặp lại nhiều lần, không cần tạ quá nặng mà chỉ cần tạ vừa
                sức nhưng bộ môn này vẫn tác động cực kì hiệu quả đến cơ thể.
                BodyPump là bài tập toàn thân, giúp cơ thể thon gọn, săn chắc và
                cân đối một cách nhanh chóng.
              </p>
            </div>
            <div
              className="col-lg-6 content-bg stripe-section wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div className="stripe-vector-1">
                <img
                  alt="Hình đăng ký tham quan CLB"
                  src="https://citigym.com.vn/themes/citigym/images/svg/stripe-section-left-grey.svg"
                />
              </div>
              <div className="stripe-vector-2">
                <img
                  alt="Hình đăng ký tham quan CLB"
                  src="https://citigym.com.vn/themes/citigym/images/svg/stripe-section-right-grey.svg"
                />
              </div>
              <img
                alt
                src="https://citigym.com.vn/storage/uploads/af1i9380-removebg-1.jpg"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-service-detail-feature wow fadeInRight"
        style={{ visibility: "visible", animationName: "fadeInRight" }}
      >
        <div className="container">
          <div className="text-center">
            <h2 className="section-title" />
          </div>
          <div className="row introduce_service">
            <div
              className="col-lg-3 col-md-6"
              style={{}}
              aria-hidden="true"
              tabIndex={0}
            >
              <div className="item">
                <div className="item-img">
                  <img
                    src="https://citigym.com.vn/themes/citigym/images/features/feature-2.jpg"
                    alt="Hình đăng ký tham quan CLB"
                    className="content"
                  />
                </div>
                <div className="content-overlay">
                  <div className="content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="title">Thời lượng</div>
                    <b className="h2">60 phút</b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              style={{}}
              aria-hidden="true"
              tabIndex={0}
            >
              <div className="item">
                <div className="item-img">
                  <img
                    src="https://citigym.com.vn/themes/citigym/images/features/feature-2.jpg"
                    alt="Hình đăng ký tham quan CLB"
                    className="content"
                  />
                </div>
                <div className="content-overlay">
                  <div className="content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="title">Thời lượng</div>
                    <b className="h2">60 phút</b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              style={{}}
              aria-hidden="true"
              tabIndex={0}
            >
              <div className="item">
                <div className="item-img">
                  <img
                    src="https://citigym.com.vn/themes/citigym/images/features/feature-2.jpg"
                    alt="Hình đăng ký tham quan CLB"
                    className="content"
                  />
                </div>
                <div className="content-overlay">
                  <div className="content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="title">Thời lượng</div>
                    <b className="h2">60 phút</b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              style={{}}
              aria-hidden="true"
              tabIndex={0}
            >
              <div className="item">
                <div className="item-img">
                  <img
                    src="https://citigym.com.vn/themes/citigym/images/features/feature-2.jpg"
                    alt="Hình đăng ký tham quan CLB"
                    className="content"
                  />
                </div>
                <div className="content-overlay">
                  <div className="content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="title">Thời lượng</div>
                    <b className="h2">60 phút</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-service-detail-feature-1 wow fadeInRight"
        style={{
          backgroundImage:
            'url("https://citigym.com.vn/themes/citigym/images/banners/banner-3.jpg")',
          visibility: "visible",
          animationName: "fadeInRight",
        }}
      >
        <div className="container">
          <div className="text-center">
            <h3 className="section-title" />
            <div className="sub-description mx-auto">
              Tập BodyPump giúp đốt mỡ, làm thon gọn và săn chắc cơ thể, bảo vệ
              xương và tăng cường sức khỏe. Học viên không những khỏe mạnh mà
              còn được giải tỏa stress dưới nền nhạc sôi động của lớp học. Mỗi
              bài tập thường kéo dài 4-5 phút theo bài nhạc.
            </div>
          </div>
          <div className="row benefit_course">
            <div
              className="col-lg-3 col-md-6"
              style={{}}
              aria-hidden="true"
              tabIndex={0}
            >
              <div className="item">
                <div className="content-overlay">
                  <div className="content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faMuseum} />
                    </div>
                    <div className="title">Tăng cường sức mạnh</div>
                    <div className="sub-description mx-auto" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              style={{}}
              aria-hidden="true"
              tabIndex={0}
            >
              <div className="item">
                <div className="content-overlay">
                  <div className="content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faMuseum} />
                    </div>
                    <div className="title">Tăng cường sức mạnh</div>
                    <div className="sub-description mx-auto" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              style={{}}
              aria-hidden="true"
              tabIndex={0}
            >
              <div className="item">
                <div className="content-overlay">
                  <div className="content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faMuseum} />
                    </div>
                    <div className="title">Tăng cường sức mạnh</div>
                    <div className="sub-description mx-auto" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              style={{}}
              aria-hidden="true"
              tabIndex={0}
            >
              <div className="item">
                <div className="content-overlay">
                  <div className="content">
                    <div className="icon">
                      <FontAwesomeIcon icon={faMuseum} />
                    </div>
                    <div className="title">Tăng cường sức mạnh</div>
                    <div className="sub-description mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <ContactForm/>
    </div>
  );
}

export default page;
