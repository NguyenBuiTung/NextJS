"use client";

import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="modal-body p-x-3 p-y-3 modal-csg">
        <div className="row">
          <div className="col-md-12">
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
                className="form-control"
                placeholder="Họ tên"
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
              <ul className="list-unstyled ml-1 mt-1" />
            </div>
          </div>
          <div className="col-md-12">
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
                type="number"
                className="form-control"
                placeholder="Số điện thoại"
              />
              {errors.tel && <p>{errors.tel.message}</p>}
              <ul className="list-unstyled ml-1 mt-1" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <select
                {...register("subject", {
                  required: "Vui lòng chọn câu lạc bộ bạn muốn tham gia",
                })}
                className="form-control"
                name="subject"
              >
                <option value="">Câu lạc bộ bạn muốn tham gia</option>
                <option value="CITIGYM THÀNH THÁI QUẬN 10">
                  CITIGYM THÀNH THÁI QUẬN 10
                </option>
                {/* Add other options here */}
              </select>
              {errors.subject && <p>{errors.subject.message}</p>}
              <ul className="list-unstyled ml-1 mt-1" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <select
                {...register("content", {
                  required: "Vui lòng chọn thời gian bạn muốn tư vấn",
                })}
                className="form-control"
                name="content"
                placeholder="Giờ nào chúng tôi có thể gọi bạn?"
              >
                <option value="">Giờ nào chúng tôi có thể gọi bạn?</option>
                <option value="9am-12pm">9am-12pm</option>
                {/* Add other options here */}
              </select>
              {errors.content && <p>{errors.content.message}</p>}
              <ul className="list-unstyled ml-1 mt-1" />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-brand">
          Đăng ký ngay
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
