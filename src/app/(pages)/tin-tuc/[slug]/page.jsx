import ContactForm from "@/components/contactForm/ContactForm";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function page() {
  return (
    <div className="main-wrapper">
      <div className="main-breadcrumb" style={{ opacity: 1 }}>
          <div
            className="breadcrumb-bg"
            style={{
              backgroundImage: 'url("https://citigym.com.vn/storage/uploads/citigym-ntmk/thu-ngay-8-bai-tap-vai-thinh-hanh-giup-vai-to-san-chac-thumb.jpg")',
            }}
          ></div>
        </div>
      <section className="section section-news-detail m-t-64px">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 content-text pr-lg-5 m-b-md-3">
              <nav className="breadcrumb-text pt-0 p-b-12px">
                <ol className="breadcrumb m-b-12px">
                  <li className="breadcrumb-item">
                    <a href="https://citigym.com.vn/tin-tuc">Tin tức</a>
                  </li>
                  <li className="breadcrumb-item active breadcrumb-item-mobile">
                    <a href="https://citigym.com.vn/tin-tuc/search?cat=blog">
                      Blog
                    </a>
                  </li>
                </ol>
                <h1 className="breadcrumb-title mb-0 breadcrumb-title-mobile">
                  MẠNH THỂ CHẤT, YÊU HẾT NẤC !
                </h1>
              </nav>
              <div className="text-grey1">
              <FontAwesomeIcon icon={faCalendarDays} />
                <span className="font-weight-400 title-s1">06-02-2020</span>
              </div>
              <div className="m-y-10px">
                <div
                  className="fb-like fb_iframe_widget"
                  data-href="https://citigym.com.vn/uu-dai-vang-tu-citigym-nhan-dip-valentine.html"
                  data-width="300px"
                  data-layout="standard"
                  data-action="like"
                  data-size="small"
                  data-show-faces="true"
                  data-share="true"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="action=like&app_id=&container_width=717&href=https%3A%2F%2Fcitigym.com.vn%2Fuu-dai-vang-tu-citigym-nhan-dip-valentine.html&layout=standard&locale=vi_VN&sdk=joey&share=true&show_faces=true&size=small&width=300px"
                >
                  <span
                    style={{ verticalAlign: "bottom", width: 300, height: 20 }}
                  >
                    <iframe
                      height="1000px"
                      data-testid="fb:like Facebook Social Plugin"
                      title="fb:like Facebook Social Plugin"
                      frameBorder={0}
                      allowTransparency="true"
                      allowFullScreen="true"
                      scrolling="no"
                      allow="encrypted-media"
                      src="https://www.facebook.com/v3.3/plugins/like.php?action=like&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df23ba308e290b64%26domain%3Dcitigym.com.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fcitigym.com.vn%252Ff347dab95f6b158%26relation%3Dparent.parent&container_width=717&href=https%3A%2F%2Fcitigym.com.vn%2Fuu-dai-vang-tu-citigym-nhan-dip-valentine.html&layout=standard&locale=vi_VN&sdk=joey&share=true&show_faces=true&size=small&width=300px"
                      style={{
                        border: "none",
                        visibility: "visible",
                        width: 300,
                        height: 20,
                      }}
                      className
                    />
                  </span>
                </div>
              </div>
              <div className="paragraph m-y-32px content blog-content">
                Ngày lễ mà các cặp đôi mong chờ nhất năm đang rất cận
                kề.&nbsp;Nhân dịp Valentine này, Citigym sẽ dành tặng cho bạn và
                người ấy gói ưu đãi cực chất để kích thích năng lượng yêu
                thương. Giữa tâm bão dịch Corona đang bùng phát thì món
                quà&nbsp;sức khoẻ là điều&nbsp;vô cùng ý nghĩa.&nbsp;Tích cực
                vận động để bồi dưỡng cho mình một sức khoẻ thật tốt,&nbsp;sẵn
                sàng&nbsp;để thổi bùng ngọn lửa tình yêu&nbsp;nhé.
                <p>
                  <span style={{ fontSize: 14 }}>
                    <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                      Ngày lễ mà các cặp đôi mong chờ nhất năm đang rất cận
                      kề.&nbsp;Nhân dịp Valentine này, Citigym sẽ dành tặng cho
                      bạn và người ấy gói ưu đãi cực chất để kích thích năng
                      lượng yêu thương. Giữa tâm bão dịch Corona đang bùng phát
                      thì món quà&nbsp;sức khoẻ là điều&nbsp;vô cùng ý
                      nghĩa.&nbsp;Tích cực vận động để bồi dưỡng cho mình một
                      sức khoẻ thật tốt,&nbsp;sẵn sàng&nbsp;để thổi bùng ngọn
                      lửa tình yêu&nbsp;nhé.
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "center" }}>
                  <img alt="600x315" src="/storage/uploads/600x315.jpg" />
                </p>
                <p>
                  <span style={{ fontSize: 16 }}>
                    <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                      <strong>Chi tiết ưu đãi:</strong>
                    </span>
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: 16 }}>
                    <strong>
                      <span
                        style={{ fontFamily: "Arial,Helvetica,sans-serif" }}
                      >
                        GÓI TẬP CLASSIC COUPLE &amp; PASSPORT COUPLE
                      </span>
                    </strong>
                  </span>
                  <br />
                  <span style={{ fontSize: 14 }}>
                    <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                      <em>(Đối tượng: Áp dụng tất cả khách hàng /&nbsp;</em>
                    </span>
                    <em>
                      <span
                        style={{ fontFamily: "Arial,Helvetica,sans-serif" }}
                      >
                        Thời hạn: 1 năm tập luyện dành cho 2 người.)
                      </span>
                    </em>
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: 16 }}>
                    <strong>
                      <span
                        style={{ fontFamily: "Arial,Helvetica,sans-serif" }}
                      >
                        Giá bán:
                      </span>
                    </strong>
                  </span>
                </p>
                <ul>
                  <li>
                    <span style={{ fontSize: 14 }}>
                      <span
                        style={{ fontFamily: "Arial,Helvetica,sans-serif" }}
                      >
                        Classic Couple: 15.000.000VND
                      </span>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: 14 }}>
                      <span
                        style={{ fontFamily: "Arial,Helvetica,sans-serif" }}
                      >
                        Passport Couple: 20.000.000VND
                        <br />(
                      </span>
                      <var>
                        <span
                          style={{ fontFamily: "Arial,Helvetica,sans-serif" }}
                        >
                          Điều kiện áp dụng: Cặp đôi check-in cùng nhau tại
                          Citigym và chụp hình&nbsp;với Prop hoặc&nbsp;Booth
                          Citigym, đăng lên trang cá nhân&nbsp;của cả hai ở chế
                          độ công khai,&nbsp;kèm hashtag #Citigym #Valentine.)
                        </span>
                      </var>
                    </span>
                  </li>
                </ul>
                <p>
                  <span style={{ fontSize: 14 }}>
                    <strong>Thời gian khuyến mãi</strong>: 04/02/2020 -
                    20/02/2020.
                  </span>
                </p>
                <p style={{ textAlign: "center" }}>
                  <img
                    alt="_KEI6822 600x400"
                    src="/storage/uploads/kei6822-600x400.png"
                  />
                </p>
                <p>
                  <span style={{ fontSize: 14 }}>
                    <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                      Đến với Citigym để trải nghiệm môi trường&nbsp;tập luyện
                      đẳng cấp, trang thiết bị hiện đại và&nbsp;đội ngũ HLV
                      chuyên nghiệp. Đặc biệt không gian&nbsp;vô cùng thoáng
                      đãng&nbsp;và rộng rãi, thiết kế tỉ mỉ&nbsp;và bố trí nhiều
                      cây xanh. Giữa tâm điểm mùa&nbsp;cúm Corona nên Citigym
                      chú trọng hết sức việc vệ sinh phòng tập. Không
                      gian,&nbsp;trang thiết bị&nbsp;đều được dọn dẹp và khử
                      trùng mỗi ngày. Bạn còn được trang bị khẩu trang và nước
                      rửa tay miễn phí khi check-in.&nbsp;Đây sẽ là nơi vô cùng
                      lí tưởng để chàng và nàng cùng nhau&nbsp;chăm sóc&nbsp;sức
                      khoẻ và&nbsp;vun đắp yêu thương.&nbsp;
                    </span>
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: 14 }}>
                    <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                      Đăng ký ngay Gói Couple Valentine tại các&nbsp;CLB Citigym
                      hoặc tại:&nbsp;
                      <a href="https://bitly.com.vn/fXxGQ">Ưu đãi Valentine</a>
                    </span>
                    <br />
                    <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                      Gọi 1900 633 638 để được tư vấn chi tiết.
                    </span>
                  </span>
                </p>
              </div>
              <div className="flex-center-y m-y-32px">
                <div className="title-s1 h6 mb-0 m-r-12px">Tags</div>
                <div className="font-size-14"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-wrapper">
                <div className="sidebar-title">Tin tức liên quan</div>
                <div className="sidebar-body">
                <div className="list-view">
                    <Link
                      href="https://citigym.com.vn/thu-ngay-8-bai-tap-vai-thinh-hanh-vai-to-san-chac.html"
                      className="item-img ratio-4-3"
                    >
                      <img
                        alt="Thử ngay 8 bài tập vai thịnh hành vai to săn chắc"
                        src="https://citigym.com.vn/storage/uploads/citigym-ntmk/thu-ngay-8-bai-tap-vai-thinh-hanh-giup-vai-to-san-chac-thumb-1.jpg"
                        className="content"
                      />
                    </Link>
                    <div className="item-content">
                      <Link
                        href="https://citigym.com.vn/thu-ngay-8-bai-tap-vai-thinh-hanh-vai-to-san-chac.html"
                        className="title"
                      >
                        Thử ngay 8 bài tập vai thịnh hành vai to săn ...
                      </Link>
                      <div className="date">
                       <FontAwesomeIcon icon={faCalendarDays}/> 20-10-2023
                      </div>
                    </div>
                  </div>
                <div className="list-view">
                    <Link
                      href="https://citigym.com.vn/thu-ngay-8-bai-tap-vai-thinh-hanh-vai-to-san-chac.html"
                      className="item-img ratio-4-3"
                    >
                      <img
                        alt="Thử ngay 8 bài tập vai thịnh hành vai to săn chắc"
                        src="https://citigym.com.vn/storage/uploads/citigym-ntmk/thu-ngay-8-bai-tap-vai-thinh-hanh-giup-vai-to-san-chac-thumb-1.jpg"
                        className="content"
                      />
                    </Link>
                    <div className="item-content">
                      <Link
                        href="https://citigym.com.vn/thu-ngay-8-bai-tap-vai-thinh-hanh-vai-to-san-chac.html"
                        className="title"
                      >
                        Thử ngay 8 bài tập vai thịnh hành vai to săn ...
                      </Link>
                      <div className="date">
                       <FontAwesomeIcon icon={faCalendarDays}/> 20-10-2023
                      </div>
                    </div>
                  </div>
                <div className="list-view">
                    <Link
                      href="https://citigym.com.vn/thu-ngay-8-bai-tap-vai-thinh-hanh-vai-to-san-chac.html"
                      className="item-img ratio-4-3"
                    >
                      <img
                        alt="Thử ngay 8 bài tập vai thịnh hành vai to săn chắc"
                        src="https://citigym.com.vn/storage/uploads/citigym-ntmk/thu-ngay-8-bai-tap-vai-thinh-hanh-giup-vai-to-san-chac-thumb-1.jpg"
                        className="content"
                      />
                    </Link>
                    <div className="item-content">
                      <Link
                        href="https://citigym.com.vn/thu-ngay-8-bai-tap-vai-thinh-hanh-vai-to-san-chac.html"
                        className="title"
                      >
                        Thử ngay 8 bài tập vai thịnh hành vai to săn ...
                      </Link>
                      <div className="date">
                       <FontAwesomeIcon icon={faCalendarDays}/> 20-10-2023
                      </div>
                    </div>
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
