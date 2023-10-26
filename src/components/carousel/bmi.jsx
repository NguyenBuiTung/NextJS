"use client";
import { useState } from "react";
import FormBmi from "./FormBmi/formbmi";
import ShowFormBmi from "./FormBmi/showFormBmi";

function HomeBmi() {
  const [showBmi, setShowBmi] = useState(false);
  const [bmi, setBmi] = useState();
  const handleBmi = (value,bmi) => {
    setShowBmi(value);
    setBmi(bmi);
  };
  return (
    <>
      <section className="section section-home-bmi pt-64">
        <div className="container">
          <div className="bmi-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6 background-image m-b-md-5">
                <div className="stripe-vector">
                  <img
                    src="https://citigym.com.vn/themes/citigym/images/svg/stripe-grey.svg"
                    alt="Tập luyện tại hệ thống CITIGYM"
                  />
                </div>
                <img
                  alt="Tập Gym, Yoga, Group X tại hệ thống CLB CITIGYM"
                  className="img-mobile item-image img-home-bmi"
                  src="https://citigym.com.vn/themes/citigym/images/transparent-bg/bmi-text.png"
                />
              </div>
              <div className="col-lg-6 bmi-content z-3">
                <div className="section-title">
                  Tính BMI (Chỉ số khối cơ thể)
                </div>
                <h3 className="seo-desc">
                  Đo chỉ số BMI tại CITIGYM để đánh giá mức độ béo, gầy hay cân
                  nặng lý tưởng của bạn
                </h3>
                <p className="form-group">
                  CITIGYM hỗ trợ hội viên đo chỉ số BMI trước và trong quá trình
                  tập luyện để hội viên có thể theo dõi được kết quả tập luyện.
                  BMI là chỉ số khối cơ thể (Body Mass Index), được các bác sĩ
                  và chuyên gia sức khỏe dùng để xác định một người có bị béo
                  phì, thừa cân hay quá gầy. Hãy để lại thông tin để CITIGYM có
                  thể giúp bạn phân tích sức khỏe và đưa ra những tư vấn phù hợp
                  với thể trạng của bạn.
                </p>
                <FormBmi handleBmi={handleBmi} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {showBmi ? <ShowFormBmi bmi={bmi} /> : null}
    </>
  );
}

export default HomeBmi;
