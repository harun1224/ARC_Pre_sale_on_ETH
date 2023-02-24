import React, { useEffect, useState } from "react";
import "./Home_land.css";
import play from "../Assets/play.svg";
import Connect_wallet from "../Connect_wallet/Connect_wallet";
import Countdown from "react-countdown";

import eth from "../Assets/eth.svg";
import Buy_tokens from "../Buy_tokens/Buy_tokens";
import usd from "../Assets/usd.svg";
import metamask from "../Assets/metamask.png";
import { loadWeb3 } from "../apis/api";
import dog from "../Assets/bgDog.PNG";
import {
  contractabi,
  ico_contract,
  USDCabi,
  USDC_contract,
  USDTabi,
  USDT_contract,
} from "../../Contracts/contract";
import V16 from "../Assets/ARC.png";
import WARC from "../Assets/WARC.png";
import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";
import { disconnectWallet } from "../../store/actions/logout";
import WalletModal from "../wallet_modal/WalletModal";
import { App, Button, Space } from "antd";

function Home_land() {
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );

  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [usdt, setUSDT] = useState("--");
  const [usdc, setusdc] = useState("--");

  const [ETH, setETH] = useState("--");
  const [TokenPercentce, setTokenPercent] = useState("--");
  const [checSale, setchecSale] = React.useState("--");
  const [modalShow_USDT2, setModalShow_USDT2] = React.useState(false);

  const [contset, setcontset] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const [BtTxt, setBtTxt] = useState("Connect");
  const [comingText, setcomingText] = useState({
    text: "Buy WARC",
    btnColor: "linear-gradient(90deg, #6E3187 0%, #b671d1 100%) ",
  });
  const [BalanceEth, setBalanceEth] = useState(0);

  const dispatch = useDispatch();

  const getaccount = async () => {
    const webSupply = new Web3("https://rpc.ankr.com/eth_goerli");
    // let acc = await loadWeb3();
    if (acc == "No Wallet") {
      // toast.error('please install metamask')
      setBtTxt("please install metamask");
    } else if (acc == "Wrong Network") {
      // toast.error('Wrong Network')
      setBtTxt("Wrong Network");
    } else {
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);

      setBtTxt(myAcc);
      setcontset(true);

      let ICOContractOf = new web3.eth.Contract(contractabi, ico_contract);
      let USTContractOf = new web3.eth.Contract(USDTabi, USDT_contract);
      let USDCContractOf = new web3.eth.Contract(USDCabi, USDC_contract);
      let sale = await ICOContractOf.methods.WL_Acces().call();
      let P_sale = await ICOContractOf.methods.presaleStatus().call();

      if (sale == true && P_sale == false) {
        setchecSale("WL Early Access");
      } else if (sale == false && P_sale == true) {
        setchecSale("Public Sale");
      } else {
        setchecSale("Undefine");
      }

      let getUSDTValue = await USTContractOf.methods
        .balanceOf(ico_contract)
        .call();

      let gettokenValue = await USDCContractOf.methods
        .balanceOf(ico_contract)
        .call();

      let arcSold = await ICOContractOf.methods.ARC_Sold().call();
      arcSold = web3.utils.fromWei(arcSold.toString());
      let tokenpercentag = (arcSold / 833300000) * 100;
      let tokenpercentag1 = tokenpercentag;

      setTokenPercent(parseFloat(tokenpercentag1).toFixed(2));

      // web3.eth.getBalance(ico_contract.toString(), function (err, result) {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     setBalanceEth(web3.utils.fromWei(result, "ether"));
      //     let tokenpercentag = (web3.utils.fromWei(result, "ether") / 833300000) * 100;

      //     let tokenpercentag1 = 100.0 - tokenpercentag;
      //     setTokenPercent(parseFloat(tokenpercentag1).toFixed(2));
      //   }
      // });

      let USDTvalue = (getUSDTValue / 1000000).toString();
      // let USDTvalue = web3.utils.fromWei(getUSDTValue);
      USDTvalue = parseFloat(USDTvalue).toFixed(2);
      console.log("tokenvalue", gettokenValue);
      let tokenvalue = gettokenValue / 1000000;

      tokenvalue = parseFloat(tokenvalue).toFixed(2);
      setusdc(tokenvalue);
      setUSDT(USDTvalue);
      // console.log(USDTvalue, "USDTValue");

      let ETHBalance = await web3.eth.getBalance(ico_contract.toString());
      let ETHValue = web3.utils.fromWei(ETHBalance);
      ETHValue = parseFloat(ETHValue).toFixed(2);
      // console.log(ETHValue, "ETHBalance");
      setETH(ETHValue);
    }
  };

  const showModal = () => {
    setModalShow5(true);
  };
  const closeModal = () => {
    setModalShow5(false);
  };

  useEffect(() => {
    // alert(acc)
    if (acc != null) {
      setcontset(true);
      setBtTxt(acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4));
      getaccount();
      closeModal();
    }
  }, [acc]);
  const diconnectWallet = async () => {
    if (providerType == 1) {
      await provider.disconnect();
    }
    dispatch(disconnectWallet());
    setBtTxt("Connect");
    setcontset(false);
  };

  const ComingSoon = () => {
    setcomingText({
      text: "Coming Soon",
      btnColor: "linear-gradient(180.14deg,#1A084D .12%,#6e3187 99.87%)",
    });
  };

  const Completionist = () => {
    return (
      <>
        <div className="text_days fs-5 ">Presale ended!</div>
      </>
    );
  };
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="text_days fs-5 ">
          {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
          remaining until presale ends
          {/* {days} D {hours} H {minutes} M {seconds} S */}
        </div>
      );
    }
  };

  return (
    <div className="main_home_land_bg">
      <WalletModal show={modalShow5} onHide={closeModal} />
      <App>
        <div className="container ">
          <div className="text-left" style={{ textAlign: "end" }}>
            {BtTxt == "Connect" ? (
              <></>
            ) : (
              <>
                <button className="wallet_button_header text-white me-3">
                  {BtTxt}
                </button>
                <button
                  className="wallet_button_header text-white"
                  onClick={() => diconnectWallet()}
                >
                  DisConnect
                </button>
              </>
            )}
          </div>
          <div className="row">
            <div className="col-md-7 left_connent text-start">
              <h1 className="main_home_heading1 text-white">
                Welcome to the Pre-Sale of
                <br />
                Arc Coin on Archie Chain
              </h1>
              <p className="home_land_para1  text-white">
                Buy ARC with USDC and USDT on Ethereum Chain. WL Partners, please proceed with your choice of tokens to
                buy. You have 2 Hours from the Pre-Sale opening
                before general buyers. After your transaction completed, please
                make sure you refer to the pdf to add the Archie Chain network
                to show your coin in your wallet.
              </p>
             
            </div>

            <div
              className="col-md-5 right_coonent mt-5 mt-md-0"
              style={{ marginTop: "" }}
            >
              <div className="right_content_card">
                <h4 className="card_heading_span pt-3">Presale ending soon</h4>
                <div className="text_days fs-5 ">
                  <Countdown
                    date={
                      Date.now() + (parseInt("1677671622") * 1000 - Date.now())
                    }
                    renderer={renderer}
                  />
                </div>
                <div className="progress_bar_nav mt-3">
                  <h4 className="progress_number">{TokenPercentce}% SOLD</h4>
                  <div className="lower_pro d-flex">
                    <div
                      className="upper_pro"
                      style={{ "--width": `${TokenPercentce}%` }}
                    ></div>
                  </div>

                  <div className="usdt_contntet text-white text-bold">
                    <span>
                      Sale Type : {checSale} <br />
                      {usdc} USDC / {usdt} USDT
                    </span>
                  </div>

                  <div className="box_text text-white">
                    <span>
                      Public Exchange launch goes live on Wednesday 1st March
                      2023.
                    </span>
                  </div>

                  {contset == true ? (
                    <>
                      <div className="d-flex justify-content-center my-4">
                        <button
                          _ngcontent-bhd-c59=""
                          class="btn btn-eth crypto-btn my-1 py-2 px-1 w-80 my-2"
                          onClick={() => setModalShow1(true)}
                        >
                          <img _ngcontent-bhd-c59="" src={V16} height="40" />
                          <span _ngcontent-bhd-c59="">Buy ARC With USDC</span>
                        </button>

                        <Buy_tokens
                          connect="Convert ARC With USDC"
                          modalShow1={modalShow1}
                          onHide={() => setModalShow1(false)}
                          ethdata="true"
                          setModalShow1={setModalShow1}
                        />
                      </div>
                      <div className="d-flex justify-content-center my-4">
                        <button
                          _ngcontent-bhd-c59=""
                          class="btn btn-eth crypto-btn my-1 py-2 px-1 w-80 my-2"
                          onClick={() => setModalShow2(true)}
                        >
                          <img _ngcontent-bhd-c59="" src={V16} height="40" />
                          <span _ngcontent-bhd-c59="">Buy ARC With USDT</span>
                        </button>

                        <Buy_tokens
                          connect="Convert to ARC"
                          modalShow2={modalShow2}
                          onHide={() => setModalShow2(false)}
                          ethdata="false"
                          setModalShow2={setModalShow2}
                        />
                      </div>
                      {/* <div className="d-flex justify-content-center my-4">
                        <button
                          _ngcontent-bhd-c59=""
                          class="btn btn-eth crypto-btn my-1 py-2 px-1 w-80 my-2"
                          style={{ background: comingText.btnColor }}
                          onClick={() => ComingSoon()}
                        >
                          <img _ngcontent-bhd-c59="" src={WARC} height="40" />
                          <span _ngcontent-bhd-c59="">{comingText.text}</span>
                        </button>

                        <Buy_tokens
                          connect="Convert to USDC"
                          show={modalShow2}
                          onHide={() => setModalShow2(false)}
                          ethdata="false"
                        />
                      </div> */}
                      <div className="new_btn text-white">
                        <p>
                          {" "}
                          <a
                            href="https://www.youtube.com/watch?v=B8CbDQQyBV8"
                            className="text-white"
                          >
                            {" "}
                            How to Buy{" "}
                          </a>
                        </p>
                        <p>
                          {" "}
                          <a
                            href="https://www.youtube.com/watch?v=B8CbDQQyBV8"
                            className="text-white"
                          >
                            {" "}
                            New to Crypto?
                          </a>{" "}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="d-flex justify-content-center my-4">
                        <button
                          _ngcontent-bhd-c59=""
                          class="btn btn-eth crypto-btn my-1 py-2 px-1 w-80 my-2"
                          onClick={() => showModal()}
                        >
                          <img
                            _ngcontent-bhd-c59=""
                            src={metamask}
                            height="40"
                          />
                          <span _ngcontent-bhd-c59="">Connect wallet</span>
                        </button>
                      </div>
                      <div className="new_btn text-white">
                        <p>
                          {" "}
                          <a
                            href="https://www.youtube.com/watch?v=B8CbDQQyBV8"
                            className="text-white"
                          >
                            {" "}
                            How to Buy{" "}
                          </a>
                        </p>
                        <p>
                          {" "}
                          <a
                            href="https://www.youtube.com/watch?v=B8CbDQQyBV8"
                            className="text-white"
                          >
                            {" "}
                            New to Crypto?
                          </a>{" "}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </App>
    </div>
  );
}

export default Home_land;
