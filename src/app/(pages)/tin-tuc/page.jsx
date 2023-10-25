import FormNews from "@/components/FormSearchNews/FormNews";
import ContactForm from "@/components/contactForm/ContactForm";
import Link from "next/link";

function page() {
  return (
    <div className="main-wrapper">
      <Link href="#">
        <div className="main-breadcrumb" style={{ opacity: 1 }}>
          <div
            className="breadcrumb-bg"
            style={{
              backgroundImage:
                'url("https://citigym.com.vn/storage/uploads/vietdh/citygym1159.jpg")',
            }}
          >
            <div className="container" id="breadcrumb-banner">
              <img
                className="breadcrumb-stripe"
                alt="Tin tức CITIGYM"
                src="https://citigym.com.vn/themes/citigym/images/svg/stripe-breadcumb.svg"
              />
              <div className="title-bg">Tin tức</div>
              <div className="title">Tin tức</div>
            </div>
          </div>
        </div>
      </Link>
      <section className="section blog-list">
        <div className="container">
          <FormNews />
        </div>
      </section>
      <ContactForm />
    </div>
  );
}

export default page;
