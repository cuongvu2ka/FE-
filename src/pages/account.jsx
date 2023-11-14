import React from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <script src="js/login.js"></script>
      <div class="body">
        <div class="containerr" id="containerr">
          <div class="form-containerr sign-up">
            <form action="">
              <h1>Đăng Ký</h1>
              <div class="social-icons">
                <a href="#" class="icon">
                  <i class="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span> Sử dụng Email để đăng ký </span>
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
            </form>
          </div>

          <div class="form-containerr sign-in">
            <form action="">
              <h1>Đăng Nhập</h1>
              <div class="social-icons">
                <a href="#" class="icon">
                  <i class="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span> Đăng nhập bằng Email </span>
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <a href="#"> Quên Mật Khẩu</a>
            </form>
          </div>
          <div class="toggle-containerr">
            <div class="toggle">
              <div class="toggle-panel toggle-left">
                <h1>Xin Chào!</h1>
                <p>Nhập thông tin để đăng nhập</p>
                <button class="hidden" id="login">
                  Đăng Nhập
                </button>
              </div>
              <div class="toggle-panel toggle-right">
                <h1>Xin Chào!</h1>
                <p>Đăng Kí tài khoản</p>
                <button class="hidden" id="register">
                  Đăng Ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
