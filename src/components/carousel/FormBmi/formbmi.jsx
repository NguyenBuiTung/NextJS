"use client";
import { useForm } from "react-hook-form";
function FormBmi(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const calculateBMI = (weight, height, gender, age) => {
    const heightInMeter = height / 100;
    let bmi = weight / (heightInMeter * heightInMeter);
    // Điều chỉnh kết quả dựa trên giới tính
    if (gender === "nam") {
      bmi += 0.5;
    } else if (gender === "nữ") {
      bmi -= 0.5;
    }

    // Điều chỉnh kết quả dựa trên tuổi
    if (age < 18) {
      bmi -= 1;
    } else if (age >= 50) {
      bmi += 1;
    }

    return bmi.toFixed(2); // Làm tròn chỉ số BMI đến 2 chữ số thập phân
  };
  const onSubmit = async (data) => {
    const { weight, height, Sex, age } = data;
    const bmi = calculateBMI(weight, height, Sex, age);
    // Xử lý kết quả BMI theo ý muốn, ví dụ:
    if (data) {
      await props.handleBmi(true, bmi);

      scrollToElement();
    }
  };
  const scrollToElement = () => {
    const element = document.getElementById("showFormBmi");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <form className="form-bmi" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              {...register("height", {
                required: "Vui lòng nhập chiều cao",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Chỉ được nhập số",
                },
              })}
              type="text"
              className="form-control"
              name="height"
              placeholder="Chiều cao / cm"
            />
            {errors.height && <p>{errors.height.message}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              {...register("weight", {
                required: "Vui lòng nhập cân nặng",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Chỉ được nhập số",
                },
              })}
              type="text"
              className="form-control"
              name="weight"
              placeholder="Cân nặng / kg"
            />
            {errors.weight && <p>{errors.weight.message}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              {...register("age", {
                required: "Vui lòng nhập tuổi",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Chỉ được nhập số",
                },
              })}
              type="text"
              className="form-control"
              name="age"
              placeholder="Tuổi"
            />
            {errors.age && <p>{errors.age.message}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <select
              {...register("gender", {
                required: "Vui lòng chọn giới tính",
              })}
              className="form-control"
              name="gender"
            >
              <option value="">Giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            {errors.gender && <p>{errors.gender.message}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              {...register("name", {
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
              className="form-control"
              name="name"
              placeholder="Họ và tên"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              {...register("phone", {
                required: "Vui lòng nhập số điện thoại",
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: "Số điện thoại không hợp lệ",
                },
              })}
              type="text"
              className="form-control"
              name="phone"
              placeholder="Số điện thoại"
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-brand">
            Nhận kết quả
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormBmi;
