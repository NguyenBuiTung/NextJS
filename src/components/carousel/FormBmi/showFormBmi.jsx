import Link from "next/link";

function ShowFormBmi({bmi}) {
  return (
    <section
      className="section section-home-services font-w-300 font-17 mb-0 animate__animated animate__lightSpeedInLeft"
      id="showFormBmi"
      style={{
        backgroundImage:
          "url(https://citigym.com.vn/themes/citigym/images/banners/service-banner.jpg)",
      }}
    >
      <div className="container">
        <div className="row row-reverse">
          <div className="col-lg-6 col-md-5 order-md-1 order-2">
            <div className="qodef-section-title-holder">
              <div className="section-title"> Biểu đồ BMI</div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>BMI</th>
                  <th>Tình trạng cân nặng </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dưới 18.5</td>
                  <td>Thiếu cân </td>
                </tr>
                <tr>
                  <td>18.5 - 24.9</td>
                  <td> Bình thường</td>
                </tr>
                <tr>
                  <td>25.0 - 29.9</td>
                  <td>Dư cân</td>
                </tr>
                <tr>
                  <td>30.0 - Trên</td>
                  <td>Béo phì</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-6 col-md-6 order-md-1  order-1">
            <div className="qodef-section-title-holder">
              <div className="section-title">Kết quả BMI:{bmi}</div>
            </div>
            <div className="qodef-section-subtitle-holder">
              <div className="qodef-section-subtitle">
                <p></p>
              </div>
              <div className="img_bmi mt-3">
                <a href="https://citigym.com.vn/do-inbody-buoc-dau-tien-khong-the-bo-qua-khi-muon-cai-thien-co-the.html">
                  <img
                    src="https://citigym.com.vn/storage/uploads/bmi.jpg"
                    alt="gym"
                  />
                </a>
              </div>
              <div className="button_home mt-4 text-center">
                <Link href={"/"} className="btn btn-brand">
                  Về Trang chủ
                </Link>
              </div>
            </div>
          </div>
          <div className="qodef-grid-col-12">
            <div className="qodef-bmic-notifications">
              <span className="qodef-bmic-icon-holder">
                <span />
              </span>
              <span className="qodef-bmic-notification-text" />
              <a href="#" className="qodef-bmic-notification-close" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowFormBmi;
