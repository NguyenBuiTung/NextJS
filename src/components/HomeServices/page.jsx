import getData from "@/api/getData";
import Link from "next/link";
export default async function ServicesHome() {
  const data = await getData();
  // console.log(data.content);
  return (
    <div className="container-fluid">
      <div className="text-center">
        <div className="section-title">Các dịch vụ của chúng tôi</div>
        <h1 className="sub-description mx-auto seo-desc">
          Luyện tập tại CITIGYM sẽ giúp bạn đạt được mục tiêu sức khỏe và hình
          thể.
        </h1>
      </div>
      <div className="services-wrapper">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {data.content.map((item, index) => {
            if (index < 4) {
              return (
                <div key={index}>
                  <Link href={`/dich-vu/${item.biDanh}`} className="item">
                    <div className="item-img">
                      <img
                        className="img-mobile"
                        src={item.hinhAnh}
                        alt="Personal Trainer"
                      />
                    </div>
                    <div className="content-overlay">
                      <div className="content">
                        <div className="title">{item.tenPhim}</div>
                      </div>
                    </div>
                    <div className="stripe-vector-1">
                      <img
                        alt="Personal Trainer"
                        src="https://citigym.com.vn/themes/citigym/images/svg/stripe.svg"
                      />
                    </div>
                    <div className="stripe-vector-2">
                      <img
                        alt="Personal Trainer"
                        src="https://citigym.com.vn/themes/citigym/images/svg/stripe.svg"
                      />
                    </div>
                  </Link>
                </div>
              );
            } else {
              return null; // Trả về null cho các phần tử có index lớn hơn hoặc bằng 4
            }
          })}
        </div>
      </div>
    </div>
  );
}
