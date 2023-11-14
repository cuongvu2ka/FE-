import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
            <div class="contact-page-side-content">
              <h3 class="contact-page-title">Liên Hệ Với chúng tôi</h3>
              <p class="contact-page-message mb-25">Tại Hồ Chí Minh City</p>
              <div class="single-contact-block">
                <h4>
                  <i class="fa fa-fax"></i> Địa Chỉ
                </h4>
                <p>Công Viên Phần Mềm Quang Trung Q.12</p>
              </div>
              <div class="single-contact-block">
                <h4>
                  <i class="fa fa-phone"></i> Số Điện Thoại
                </h4>
                <p>Mobile: (08) 123 456 789</p>
                <p>Hotline: 1009 678 456</p>
              </div>
              <div class="single-contact-block last-child">
                <h4>
                  <i class="fa fa-envelope-o"></i> Email
                </h4>
                <p>Radophone@shop.com</p>
                <p>support@hastech.company</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 order-2 order-lg-1">
            <div class="contact-form-content pt-sm-55 pt-xs-55">
              <h3 class="contact-page-title">Liên Hệ</h3>
              <div class="contact-form">
                <form
                  id="contact-form"
                  action="http://demo.hasthemes.com/limupa-v3/limupa/mail.php"
                  method="post"
                >
                  <div class="form-group">
                    <label>
                      Tên <span class="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      id="customername"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label>
                      Email <span class="required">*</span>
                    </label>
                    <input
                      type="email"
                      name="customerEmail"
                      id="customerEmail"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label>Chủ Đề </label>
                    <input
                      type="text"
                      name="contactSubject"
                      id="contactSubject"
                    />
                  </div>
                  <div class="form-group mb-30">
                    <label>Nội Dung</label>
                    <textarea
                      name="contactMessage"
                      id="contactMessage"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      value="submit"
                      id="submit"
                      class="li-btn-3"
                      name="submit"
                    >
                      Gửi
                    </button>
                  </div>
                </form>
              </div>
              <p class="form-messege"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
