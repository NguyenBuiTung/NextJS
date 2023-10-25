import getData from "@/api/getData";
import ContactForm from "@/components/contactForm/ContactForm";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

async function page() {
  const data = await getData();
  console.log(data.content);
  return (
    <div className="main-wrapper-dichvu">
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
      <section className="section section-service-services no-bg">
        <div className="container-fluid">
          <div className="text-center">
            <div className="section-title">Các dịch vụ của chúng tôi </div>
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
              {data.content.map((item, index) => {
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
                } else {
                  return null; // Trả về null cho các phần tử có index lớn hơn hoặc bằng 6
                }
              })}
            </div>
          </div>
        </div>
        <div className="container tag-inline tag-col-2 nav nav-tabs m-t-64px m-b-24px m-t-md-0">
          <div className="tab-content">
            <div className="tab-pane show active" id="categories-list-1">
              <div className="card-list list-view-mobile" id="services_list">
                <div className="row m-b-1">
                  {data.content.map((item, index) => {
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
                            <div className="category">{item.tenPhim}</div>
                            <Link
                              href={`/dich-vu/${item.biDanh}/${item.maPhim}`}
                              className="title"
                            >
                              {item.tenPhim}
                            </Link>
                            <div className="icon-list">
                              <FontAwesomeIcon icon={faClock} />{" "}
                              {item.ngayKhoiChieu}
                            </div>
                            <p className="m-t-24px mb-0 description">
                              {item.moTa.length > 200
                                ? item.moTa.substr(0, 180) + "..."
                                : item.moTa}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
