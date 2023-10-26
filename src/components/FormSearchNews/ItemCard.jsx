import Link from "next/link";

function ItemCard({item}) {
    return (
        <div className="item">
          <div className="stripe-vector">
            <img
              alt="Tập luyện tại hệ thống CITIGYM"
              src="https://citigym.com.vn/themes/citigym/images/svg/stripe-1-grey.svg"
            />
          </div>
          <Link
            className="d-block item-img ratio-4-3"
            href={
              "/tin-tuc/lich-tap-gym-7-ngay-tai-nha-tang-co-bap-cho-nguoi-ban-ron"
            }
          >
            <img
              src={item.hinhAnh}
              className="content"
              alt="LỊCH TẬP GYM 7 NGÀY TẠI NHÀ TĂNG CƠ BẮP CHO NGƯỜI BẬN RỘN"
            />
          </Link>
          <div className="item-body">
            <div className="category">{item.maPhim}</div>
            <Link
              href={
                "/tin-tuc/lich-tap-gym-7-ngay-tai-nha-tang-co-bap-cho-nguoi-ban-ron"
              }
              className="title"
            >
             {item.tenPhim}
            </Link>
            <div className="date">{item.ngayKhoiChieu}</div>
            <div className="description">{item.moTa}</div>
          </div>
        </div>
    );
}

export default ItemCard;