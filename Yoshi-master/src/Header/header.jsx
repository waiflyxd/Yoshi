import "./header.css";
import HeaderMenu from "./Header_menu/headerMenu";
import HeaderButton from "./Header_button/headerButton";
import React, { useState } from "react";
export default function Header() {
  const [visibility, setVisibility] = useState("none");
  const [menuColor, setMenuColor] = useState("black");
  return (
    <>
      <header class="header-main">
        <div class="header-info">
          <HeaderButton
            setVisibility={setVisibility}
            visibility={visibility}
            menuColor={menuColor}
            setMenuColor={setMenuColor}
          />
          <HeaderMenu visibility={visibility} />
          <div class="header-logo">
            <img src="./photo/logo1.png" class="header-logo_img" alt="logo" />
          </div>
          <div class="header_right-menu">
            <div class="header-search">
              <img
                src="./photo/searh.png"
                class="header_search-img"
                alt="img"
              />
            </div>
            <div class="header-profile">
              <img
                src="./photo/profile.png"
                class="header_profile-img"
                alt="img"
              />
            </div>
            <div class="header-cart">
              <img src="./photo/cart.png" class="header_cart-img" alt="img" />
            </div>
            <div class="header-heart">
              <img src="./photo/heart.png" class="header_heart-img" alt="img" />
            </div>
          </div>
        </div>

        <div class="header_info-down">
          <div class="header_text">
            <p class="header_down-text">NEW ARRIVALS</p>
            <p class="header_down-text">BRANDS/COLLECTIONS</p>
            <p class="header_down-text">MEN</p>
            <p class="header_down-text">WOMAN</p>
            <p class="header_down-text">GIFTS</p>
            <p class="header_down-text">BEST SELLERS</p>
            <p class="header_down-text">NEWS</p>
          </div>
        </div>
      </header>
    </>
  );
}
