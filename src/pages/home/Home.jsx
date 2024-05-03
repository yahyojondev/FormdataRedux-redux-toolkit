import React from "react";
import Categories from "../../components/categories/Categories";
import Banner from "../../components/banner/Banner";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBook } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FcReadingEbook } from "react-icons/fc";
import { FaWpforms } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
import { BsClipboardDataFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { GrUserSettings } from "react-icons/gr";
import { TfiCup } from "react-icons/tfi";
import { PiStudentBold } from "react-icons/pi";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* <h2>Home</h2> */}
      {/* <Categories /> */}
      {/* <Banner /> */}
      <div className="dashboard__left">
        <div className="dashboard__title">
          <AiOutlineDashboard />
          <h4>Dashboard</h4>
        </div>
        <hr />
        <div className="dashboard__content">
          <p className="dashboard__content__title">Talaba</p>
          <ul className=" dashborad__list">
            <li className="dashboard__item">
              <FaBook />
              <NavLink>Fan Tanlovi</NavLink>
            </li>
            <li className="dashboard__item">
              <FcReadingEbook />
              <NavLink>Mening fanlarim</NavLink>
            </li>
            <li className="dashboard__item">
              <FaWpforms />
              <NavLink> Dars jadvali</NavLink>
            </li>
            <li className="dashboard__item">
              <FaCalculator />
              <NavLink>Qayta o'qish</NavLink>
            </li>
            <li className="dashboard__item">
              <FaCircleQuestion />
              <NavLink>Yakuniy</NavLink>
            </li>
            <li className="dashboard__item">
              <IoIosListBox />
              <NavLink> individual shaxsiy reja</NavLink>
            </li>
            <li className="dashboard__item">
              <BsClipboardDataFill />
              <NavLink>Ma'lumot</NavLink>
            </li>
            <li className="dashboard__item">
              <ImStatsDots />
              <NavLink>So'rovnoma</NavLink>
            </li>
            <li className="dashboard__item">
              <GrUserSettings />
              <NavLink>Talaba xizmatlari</NavLink>
            </li>
            <li className="dashboard__item">
              <TfiCup />
              <NavLink>Testlar</NavLink>
            </li>
            <li className="dashboard__item">
              <PiStudentBold />
              <NavLink>Diplom ishi</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
