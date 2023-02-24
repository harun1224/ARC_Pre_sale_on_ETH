import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Header_Dashboard from "../Header_DashBoard/Header_Dashboard";
import "./DashBoard.css";

export default function DashBoard() {
  return (
    <div>
      <Header_Dashboard />
      <div className="container">
        <div className=" left_connent text-start">
          <h1 className="main_home_heading text-white">
            Welcome to the Pre-Sale of <br /> Arc Coin on Archie Chain
          </h1>
          <p className="home_land_para text-white">
            Buy ARC with USDC and USDT on Ethereum Chain or BUSD and USDC on Binance
            Chain. WL Partners, please proceed with your choice of tokens to buy
            (Eth or BSC) you have 2 Hours from the Pre-Sale opening before
            general buyers. After your transaction completed, please make sure
            you refer to the pdf to add the Archie Chain network to show your
            coin in your wallet.
          </p>
        </div>

        <div className="row container mt-5 ">
          <div className="col-lg-6 col-md-6 btn_center">
            <Link to="/Ico_Eth">
              <div class="btn btn-1">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                USDC (ERC20)
              </div>
            </Link>
          </div>

          <div className="col-lg-6 col-md-6 btn_center1">
            <Link to="/ICO_BSC">
              <div class="btn btn-1">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                BUSD (BEP20)
              </div>
            </Link>
          </div>
        </div>

        <div className="row container mt-3 ">
          {/* <div className="col-lg-3"></div> */}
          <div className="col-lg-6 col-md-6 btn_center">
            <Link to="/Ico_Eth">
              <div class="btn btn-1">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                USDC (ERC20)
              </div>
            </Link>
          </div>

          <div className="col-lg-6 col-md-6 btn_center1">
            <Link to="/ICO_BSC">
              <div class="btn btn-1">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                BUSD (BEP20)
              </div>
            </Link>
          </div>
        </div>
        <div className="p-3 d-flex secon_btn ">
          <p>
            <p className="text-white">24 HRS VOICE CHAT</p>
            <a href="https://t.me/+LuabdnK0i6ozNWIx" target="_blank">
              <button className="btn_loyal">
                https://t.me/+LuabdnK0i6ozNWIx
              </button>
            </a>
          </p>
          <p>
            <p className="text-white">EXCLUSIVE PRE-SALE</p>
            <a href="https://t.me/+Ny8Zaw1FeaQwZWM5" target="_blank">
              <button className="  btn_loyal">
                https://t.me/+Ny8Zaw1FeaQwZWM5
              </button>
            </a>
          </p>
        </div>

        <div className="d-flex justify-content-center text-white f-1">
          <p>
            www.archiecoin.io <br />
            info@archieneko.com
          </p>
        </div>
      </div>
    </div>
  );
}

// how to view pdf in react js
