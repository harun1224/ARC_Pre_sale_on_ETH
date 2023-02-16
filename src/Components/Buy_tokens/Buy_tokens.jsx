import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { loadWeb3 } from "../apis/api";
import eth from "../Assets/eth.svg";
import dt from "../Assets/dt.svg";
import d2d from "../Assets/bdinulogo.png";
import { RxCross1 } from "react-icons/rx";
// import { Button, Modal } from "antd";
import { AiFillWarning, AiOutlineCheck } from "react-icons/ai";



import {
  contractabi,
  ico_contract,
  WARC_Contract,
  WARC_ABI,
  USDTabi,
  USDT_contract,
} from "../../Contracts/contract";
import { toast } from "react-toastify";
import usd from "../Assets/usd.svg";

import V16 from "../Assets/ARC.png";
import WARC from "../Assets/WARC.png";
import { useSelector } from "react-redux";
import axios from "axios";

function Buy_tokens(props, connect) {
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );


  const [isModalOpen, setIsModalOpen] = useState(false);

  const [GetEthValue, setGetEthValue] = useState(0);
  const [GetEthIput, setGetEthIput] = useState(0);
  const [GetUSDTValue, setGetUSDTValue] = useState(0);
  const [GetUSDTIput, setGetUSDTIput] = useState(0);
  const [Spinner, setSpinner] = useState(false);
  const [Error, setError] = useState("");
  const [BalanceEth, setBalanceEth] = useState(0);
  const [getRes, setgetRes] = useState("")

  const BuyARCWithUSDC = async (data) => {
    try {
      // const web3 = window.web3;
      let accounts;
      accounts = await web3.eth.getAccounts();
      let ICO_ContractOf = new web3.eth.Contract(contractabi, ico_contract);
      let TokenContractOf = new web3.eth.Contract(USDTabi, USDT_contract);

      let value = data*1000000;
      let getValue = await ICO_ContractOf.methods
        .getARCvalue(value.toString())
        .call();
      setGetEthIput(data);
      value = web3.utils.fromWei(getValue.toString());

      let BalanceOf = await TokenContractOf.methods
        .balanceOf(ico_contract)
        .call();

      let User_Token_Balance = await TokenContractOf.methods
        .balanceOf(acc)
        .call();
      BalanceOf = web3.utils.fromWei(BalanceOf.toString());

      web3.eth.getBalance(ico_contract.toString(), function (err, result) {
        if (err) {
          console.log(err);
        } else {
          setBalanceEth(web3.utils.fromWei(result, "ether"));
          console.log("data", web3.utils.fromWei(result, "ether"));

          setGetEthValue(value);
          console.log(value);
          if (User_Token_Balance < Number(data)) {
            setError(
              "Oops! It looks like you don't have enough USDC. Please reduce the amount of USDC and try again."
            );
            setGetEthValue(value);
          }

          // else if (web3.utils.fromWei(result, "ether") < Number(value)) {
          //   setError(
          //     "Oops! It looks like contract don't have enough ARC. Please reduce the amount of USDC and try again."
          //   );
          //   setGetEthValue(value);
          // } else {
          //   setGetEthValue(value);
          //   setError("");
          // }
        }
      });

      // if (BalanceOf > value) {
      //   setError("Oops! It looks like contract don't have enough Token to pay for that transaction. Please reduce the amount of ETH and try again.")
      // } else if(BalanceEth < data) {
      //   setError("Oops! It looks like you don't have enough ETH to pay for that transaction. Please reduce the amount of ETH and try again.")
      //   setGetEthValue(value);

      // }
      // else{
      //   setGetEthValue(value);
      //   setError("")

      // }
    } catch (e) {
      console.log("Error While BuyWith Eth", e);
    }
  };

  const buyARC = async () => {
    try {
      console.log("GetEthValue",GetEthValue);
      setSpinner(true);
      // let acc = await loadWeb3();
      // const web3 = window.web3;
      let ICO_ContractOf = new web3.eth.Contract(contractabi, ico_contract);
      let USDT_ContractOf = new web3.eth.Contract(USDTabi, USDT_contract);

      let value = GetEthIput;

      await USDT_ContractOf.methods.approve(ico_contract, value.toString()).send({
        from: acc,
      });
      toast.success("Approved Successfully! 🎉");
      await ICO_ContractOf.methods.BuyARCWithUSDC(value).send({
        from: acc,
      });
      toast.success("Amount Deposited! 🎉");

      let res = await axios.post("https://ico.archiecoin.online/send_token", {
        toaddress: acc,
        amount: web3.utils.toWei(GetEthValue.toString()),
      });
      console.log("res", res.data);
      if(res.data.successs==true){
        setgetRes(res.data.hash)
        toast.success(res.data.msg)
        props.setModalShow1(false)
        setIsModalOpen(true)
      }

      setSpinner(false);
    } catch (e) {
      console.log("Error While Convert To ether", e);
      setSpinner(false);
    }
  };

  const buyWARCwithUSDT = async (data) => {
    try {
      const web3 = window.web3;
      let ICO_ContractOf = new web3.eth.Contract(contractabi, ico_contract);
      let TokenContractOf = new web3.eth.Contract(WARC_ABI, WARC_Contract);
      let USDTContractOf = new web3.eth.Contract(USDTabi, USDT_contract);

      let value = web3.utils.toWei(data.toString());
      let getValue = await ICO_ContractOf.methods.getWARCvalue(value).call();
      setGetEthIput(data);
      value = web3.utils.fromWei(getValue.toString());

      let BalanceOf = await TokenContractOf.methods
        .balanceOf(ico_contract)
        .call();
      BalanceOf = web3.utils.fromWei(BalanceOf.toString());

      // let accounts;
      // accounts = await web3.eth.getAccounts();

      // let value = data * 1000000;

      // let getValue = await ICO_ContractOf.methods.getTokenUSDT(value).call();

      // console.log("getValue", getValue);
      // setGetUSDTIput(data);
      // value = web3.utils.fromWei(getValue.toString());

      // let BalanceOfToken = await TokenContractOf.methods
      //   .balanceOf(ico_contract)
      //   .call();
      // BalanceOfToken = web3.utils.fromWei(BalanceOfToken.toString());

      // let BalanceOfUSDT = await USDTContractOf.methods
      //   .balanceOf(accounts.toString())
      //   .call();

      // BalanceOfUSDT = (BalanceOfUSDT / 1000000).toString();
      // console.log("USDT BAlane", data);
      setGetUSDTValue(value);

      // if (BalanceOfUSDT > data) {
      //   setGetUSDTValue(value);
      // } else if (BalanceOfToken > value) {
      //   setGetUSDTValue(value);
      //   setError(
      //     "Oops! It looks like contract don't have enough Token to pay for that transaction. Please reduce the amount of USDT and try again."
      //   );
      // } else {
      //   setGetUSDTValue(value);
      //   setError(
      //     "Oops! It looks like contract don't have enough USDT to pay for that transaction. Please reduce the amount of USDT and try again."
      //   );
      // }
    } catch (e) {
      console.log("Error While Buy WITh USDC", e);
    }
  };

  const convertToUSDT = async () => {
    try {
      setSpinner(true);
      // let acc = await loadWeb3();
      const web3 = window.web3;
      let ICO_ContractOf = new web3.eth.Contract(contractabi, ico_contract);
      let USDT_ContractOf = new web3.eth.Contract(USDTabi, USDT_contract);

      let value = web3.utils.toWei(GetEthIput.toString());

      await USDT_ContractOf.methods.approve(ico_contract, value).send({
        from: acc,
      });
      toast.success("Approved Successfully! 🎉");
      await ICO_ContractOf.methods.BuyWARCWithUSDT(value).send({
        from: acc,
      });

      setSpinner(false);
      toast.success("Purchase Successful! 🎉");
    } catch (e) {
      console.log("Error While Convert To ether", e);
      setSpinner(false);
    }
  };

  return (
    <div>
      {props.ethdata == "true" ? (
        <>
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header className="connect_to_wallet_bgh" closeButton>
              <Modal.Title id="contained-modal-title-vcenter text-center text-white">
                <span className="text-white EXCHANGE">EXCHANGE</span>
                {/* <RxCross1/> */}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="selleing_input">
                <label htmlFor="selling" className="labal_heading fw-bold">
                  Selling
                </label>
                <div className="seeling_tokens">
                  <input
                    type="text"
                    className="selling_input"
                    onChange={(e) => BuyARCWithUSDC(e.target.value)}
                  />
                  <span className="input_img ">
                    {" "}
                    <img src={usd} alt="" />
                    <span className="ms-1 fw-bold EXCHANGE">USDC</span>
                  </span>
                </div>
              </div>
              <div className="selleing_input mt-4">
                <label htmlFor="selling" className="labal_heading fw-bold">
                  Buying
                </label>
                <div className="seeling_tokens">
                  <input
                    type="text"
                    className="selling_input"
                    value={GetEthValue}
                  />
                  <span className="input_img ">
                    {" "}
                    <img src={V16} className="dt2 mt-2" alt="" />
                    <span className="ms-1 fw-bold EXCHANGE mt-2">ARC</span>
                  </span>
                </div>
                <span className="text-danger EXCHANGE">{Error}</span>
              </div>
              <button
                onClick={() => buyARC()}
                className=" convert_to_eth iso_btn mt-4"
                // disabled={Error !== "" ? true : false}
                style={{
                  cursor: Error !== "" ? "not-allowed" : "pointer",
                }}
              >
                {Spinner ? (
                  <>
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </>
                ) : (
                  <>Convert ARC</>
                )}
              </button>
            </Modal.Body>
          </Modal>


          <Modal
            show={isModalOpen}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            
            <Modal.Body className="bg_model">
            <div className="d-flex justify-content-center">
              <p className="success_model_icon">
                <AiOutlineCheck className="icon_check" />
              </p>
            </div>
            <p className="success_model text-center">
              Thank you for Buying ARC Coin
            </p>
            <p className="scond_text_success text-center">
             Here is Your Transaction Hash <a  target="_blank" href={`https://testnet.archiescan.io/tx/${getRes}`}>
              Click Here for Transaction Hash
             </a>
            </p>
            <div className="d-flex justify-content-end">
              <button className="contBtn " onClick={()=>setIsModalOpen(false)}>OK</button>
            </div>
            </Modal.Body>
          </Modal>

          
        </>
      ) : (
        <>
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header className="connect_to_wallet_bgh" closeButton>
              <Modal.Title id="contained-modal-title-vcenter text-center text-white">
                <span className="text-white EXCHANGE">EXCHANGE</span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="selleing_input">
                <label
                  htmlFor="selling"
                  className="labal_heading fw-bold  text-white"
                >
                  Selling
                </label>
                <div className="seeling_tokens">
                  <input
                    type="text"
                    className="selling_input"
                    onChange={(e) => buyWARCwithUSDT(e.target.value)}
                  />
                  <span className="input_img ">
                    {" "}
                    <img src={usd} alt="" />
                    <span className="ms-1 fw-bold EXCHANGE">USDC</span>
                  </span>
                </div>
              </div>
              <div className="selleing_input mt-4">
                <label
                  htmlFor="selling"
                  className="labal_heading fw-bold text-white"
                >
                  Buying
                </label>
                <div className="seeling_tokens">
                  <input
                    type="text"
                    className="selling_input"
                    value={GetUSDTValue}
                  />
                  <span className="input_img ">
                    {" "}
                    <img src={WARC} className="dt2 mt-2" alt="" />
                    <span className="ms-1 fw-bold EXCHANGE mt-2">WARC</span>
                  </span>
                </div>
                <span className="text-danger EXCHANGE">{Error}</span>
              </div>
            </Modal.Body>
            <Modal.Footer className=" py-2 d-block">
              {/* <Button onClick={props.onHide}>Close</Button> */}
              <div className="d-flex justify-content-center">
                <button
                  onClick={() => convertToUSDT()}
                  className=" convert_to_eth iso_btn"
                >
                  {Spinner ? (
                    <>
                      <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </>
                  ) : (
                    <>{props.connect}</>
                  )}
                </button>
              </div>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Buy_tokens;
