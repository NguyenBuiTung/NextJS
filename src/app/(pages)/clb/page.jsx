import getData from "@/api/getData";
import ContactForm from "@/components/contactForm/ContactForm";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

async function page() {
  const data =await getData()
  return (
    <div className="main-wrapper-clb">
      <a href>
        <div className="main-breadcrumb" style={{ opacity: 1 }}>
          <div
            className="breadcrumb-bg"
            data-desktop-src="background-image: url('https://citigym.com.vn/storage/uploads/untitled-5-9.jpg');"
            data-mobile-src="background-image: url('https://citigym.com.vn/storage/uploads/untitled-6-3-375x440.jpg');"
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
      </a>
      <section className="section section-club-list">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-title">Tập luyện ở câu lạc bộ gần bạn</div>
            <h1 className="sub-description-title mx-auto seo-desc mb-5">
              Hệ thống phòng tập gym và yoga của CITIGYM có mặt khắp các quận
              TPHCM. <br /> Lựa chọn phòng tập gần bạn nhất để có thể tập luyện
              dễ dàng và tiết kiệm thời gian.
            </h1>
            <form
              id="filter"
              action="https://citigym.com.vn/clb"
              method="GET"
              encType="multipart/form-data"
            >
              <div className="row justify-content-center align-items-center">
                <div className="form-group col-md-4 mb-0">
                  <select
                    className="form-control control-light"
                    data-filter-control="filter-form"
                    name="district_slug"
                  >
                    <option selected="selected" value>
                      Chọn quận gần bạn
                    </option>
                    <option value={10}>Quận 10</option>
                    <option value="phu-nhuan">Quận Phú Nhuận</option>
                    <option value={4}>Quận 4</option>
                    <option value={7}>Quận 7</option>
                    <option value="go-vap">Quận Gò Vấp</option>
                    <option value={1}>Quận 1</option>
                    <option value={9}>Quận 9</option>
                    <option value="binh-thanh">Quận Bình Thạnh</option>
                    <option value="phan-thiet">Thành phố Phan Thiết</option>
                    <option value={2}>Quận 2</option>
                    <option value="tan-phu">Quận Tân Phú</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="card-list">
            <div className="row">
            {data.content.map((item,index)=>{
              return(
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
                    <img
                      alt
                      src={item.hinhAnh}
                      className="content"
                    />
                  </Link>
                  <div className="item-body">
                    <Link
                      href="https://citigym.com.vn/clb/phong-tap-gym-quan-10"
                      className="title"
                    >
                      Citigym Thành Thái
                    </Link>
                    <div className="icon-list">
                    <FontAwesomeIcon icon={faLocationDot} /> 52 Thành Thái,
                      Phường 12, Quận 10, Thành phố Hồ Chí Minh
                    </div>
                    <div className="icon-list">
                    <FontAwesomeIcon icon={faPhone} />
                      <a href="tel:1900633638">1900633638</a>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
            
            
           
              
            </div>
          </div>
        </div>
      </section>
      <ContactForm  />
    </div>
  );
}

export default page;
