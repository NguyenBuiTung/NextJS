"use client";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section
      className="section section-sign-up-form stripe-section mb-0 fadeIn"
      style={{
        backgroundImage:
          'url("https://citigym.com.vn/themes/citigym/images/clubs/11.jpg")',
      }}
    >
      <div className="stripe-vector-1">
        <img
          alt="Tập luyện tại hệ thống CITIGYM"
          src="https://citigym.com.vn/themes/citigym/images/svg/stripe-section-left.svg"
        />
      </div>
      <div className="stripe-vector-2">
        <img
          alt="Tập luyện tại hệ thống CITIGYM"
          src="https://citigym.com.vn/themes/citigym/images/svg/stripe-section-right.svg"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center position-relative">
          <div className="col-md-8">
            <div className="text-center">
              <div className="section-title light">
                Đăng ký tham quan câu lạc bộ
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      {...register("firstName", {
                        required: "Vui lòng nhập họ và tên",
                        maxLength: {
                          value: 20,
                          message: "Họ và tên không được vượt quá 20 ký tự",
                        },
                        pattern: {
                          value: /^[A-Za-z\sÀ-ỹ]+$/i,
                          message: "Chỉ được nhập chữ và khoảng trắng",
                        },
                      })}
                      type="text"
                      className="form-control control-light"
                      placeholder="Họ và tên"
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                    <ul className="list-unstyled ml-1 mt-1"></ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      {...register("tel", {
                        required: "Vui lòng nhập số điện thoại",
                        maxLength: {
                          value: 20,
                          message: "Số điện thoại không được vượt quá 20 ký tự",
                        },
                        pattern: {
                          value: /^[0-9]{10,11}$/,
                          message: "Số điện thoại không hợp lệ",
                        },
                      })}
                      type="text"
                      className="form-control control-light"
                      placeholder="Số điện thoại"
                    />
                    {errors.tel && <p>{errors.tel.message}</p>}
                    <ul className="list-unstyled ml-1 mt-1"></ul>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <select
                      {...register("subject", {
                        required: "Vui lòng chọn câu lạc bộ bạn muốn tham gia",
                      })}
                      className="form-control control-light"
                    >
                      <option value="">Câu lạc bộ bạn muốn tham gia</option>
                      <option value="Citigym Thành Thái">
                        Citigym Thành Thái
                      </option>
                      <option value="Citigym Phổ Quang">
                        Citigym Phổ Quang
                      </option>
                      <option value="Citigym Bến Vân Đồn">
                        Citigym Bến Vân Đồn
                      </option>
                      <option value="Citigym Vạn Hạnh Mall">
                        Citigym Vạn Hạnh Mall
                      </option>
                      <option value="Citigym Sunrise">Citigym Sunrise</option>
                      <option value="Citigym Quang Trung">
                        Citigym Quang Trung
                      </option>
                      <option value="Citigym Lê Văn Việt">
                        Citigym Lê Văn Việt
                      </option>
                      <option value="Citigym Điện Biên Phủ">
                        Citigym Điện Biên Phủ
                      </option>
                      <option value="Citigym Trường Chinh">
                        Citigym Trường Chinh
                      </option>
                      <option value="Citigym Nguyễn Thị Minh Khai">
                        Citigym Nguyễn Thị Minh Khai
                      </option>
                    </select>
                    {errors.subject && <p>{errors.subject.message}</p>}
                    <ul className="list-unstyled ml-1 mt-1"></ul>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <select
                      {...register("content", {
                        required: "Vui lòng chọn thời gian bạn muốn tư vấn",
                      })}
                      className="form-control control-light"
                    >
                      <option value="">
                        Giờ nào chúng tôi có thể gọi bạn?
                      </option>
                      <option value="9:00 AM - 12:00 PM">
                        9:00 AM - 12:00 PM
                      </option>
                      <option value="12:00 PM - 2:00 PM">
                        12:00 PM - 2:00 PM
                      </option>
                      <option value="2:00 PM - 5:00 PM">
                        2:00 PM - 5:00 PM
                      </option>
                      <option value="5:00 PM - 10:00 PM">
                        5:00 PM - 10:00 PM
                      </option>
                    </select>
                    {errors.content && <p>{errors.content.message}</p>}
                    <ul className="list-unstyled ml-1 mt-1"></ul>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit" className="btnSubmit btn btn-brand">
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
