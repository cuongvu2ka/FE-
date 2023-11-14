import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div class="header-bottom mb-0 header-sticky stick d-none d-lg-block d-xl-block">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="hb-menu">
                <nav>
                  <ul>
                    <li class="dropdown-holder">
                      <Link to="/">
                        {" "}
                        <a>Trang Chủ</a>
                      </Link>
                    </li>
                    <li class="megamenu-holder">
                      <a href="shop-left-sidebar.html">Shop</a>
                    </li>
                    <li class="dropdown-holder"></li>
                    <li class="megamenu-static-holder">
                      <ul class="megamenu hb-megamenu">
                        <li></li>
                        <li>
                          <a href="index.html">Other Pages</a>
                          <ul>
                            <li>
                              <a href="login-register.html">My Account</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="shopping-cart.html">Shopping Cart</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="index.html">Other Pages 2</a>
                          <ul>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                            <li>
                              <Link to={"/about"}>
                                <a>About Us</a>
                              </Link>
                            </li>
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="404.html">404 Error</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li style={{ marginLeft: "-70px" }}>
                      <Link to={"/about"}>
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li style={{ marginLeft: "-20px" }}>
                      <Link to={"/contact"}>
                        <a>Liên Hệ</a>
                      </Link>
                    </li>
                    <li style={{ marginLeft: "-20px" }}>
                      <Link to={"/account"}>
                        <a>Tài khoản</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
