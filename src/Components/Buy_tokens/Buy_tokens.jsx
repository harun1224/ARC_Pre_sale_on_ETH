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
  USDCabi,
  USDC_contract,
  USDTabi,
  USDT_contract,
} from "../../Contracts/contract";
import { toast } from "react-toastify";
import usdt from "../Assets/usd.svg";
import usdc from "../Assets/usdc.png";

import V16 from "../Assets/ARC.png";
import WARC from "../Assets/WARC.png";
import { useSelector } from "react-redux";
import axios from "axios";


function Buy_tokens(props, { ethdata }) {
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
  const [getRes, setgetRes] = useState("");

  const BuyARCWithUSDC = async (data) => {
    try {
      // const web3 = window.web3;
      let accounts;
      accounts = await web3.eth.getAccounts();
      let ICO_ContractOf = new web3.eth.Contract(contractabi, ico_contract);
      let TokenContractOf = new web3.eth.Contract(USDCabi, USDC_contract);

      let value = data * 1000000;
      let getValue = await ICO_ContractOf.methods
        .getARCvalueperUSDC(value.toString())
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
      console.log("GetEthValue", GetEthValue);
      setSpinner(true);
      // let acc = await loadWeb3();
      // const web3 = window.web3;
      let ICO_ContractOf = new web3.eth.Contract(contractabi, ico_contract);
      let USDC_ContractOf = new web3.eth.Contract(USDCabi, USDC_contract);

      let value = GetEthIput*1000000;

      await USDC_ContractOf.methods
        .approve(ico_contract, value.toString())
        .send({
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
      if (res.data.successs == true) {
        setgetRes(res.data.hash);
        toast.success(res.data.msg);
        props.setModalShow1(false);
        setIsModalOpen(true);
      }

      setSpinner(false);
    } catch (e) {
      console.log("Error While Convert To ether", e);
      setSpinner(false);
    }
  };

  const buyWARCwithUSDT = async (data) => {
    try {
      // const web3 = window.web3;
      let accounts;
      accounts = await web3.eth.getAccounts();
      let ICO_ContractOf = new web3.eth.Contract(contractabi, ico_contract);
      let TokenContractOf = new web3.eth.Contract(USDTabi, USDT_contract);

      let value = data * 1000000;
      let getValue = await ICO_ContractOf.methods
        .getARCvalueperUSDT(value.toString())
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

  const convertToUSDT = async () => {
    try {
      setSpinner(true);
      // let acc = await loadWeb3();
      const web3 = window.web3;
      let ICO_ContractOf = new web3.eth.Contract(contractabi, ico_contract);
      let USDT_ContractOf = new web3.eth.Contract(USDTabi, USDT_contract);

      let value = GetEthIput*1000000;

      await USDT_ContractOf.methods.approve(ico_contract, value).send({
        from: acc,
      });
      toast.success("Approved Successfully! 🎉");
      await ICO_ContractOf.methods.BuyARCWithUSDT(value).send({
        from: acc,
      });

      toast.success("Purchase Successful! 🎉");
      
      let res = await axios.post("https://ico.archiecoin.online/send_token", {
        toaddress: acc,
        amount: web3.utils.toWei(GetEthValue.toString()),
      });
      console.log("res", res.data);
      if (res.data.successs == true) {
        setgetRes(res.data.hash);
        toast.success(res.data.msg);
        props.setModalShow2(false);
        setIsModalOpen(true);
      }

    
      setSpinner(false);
    } catch (e) {
      console.log("Error While Convert To ether", e);
      setSpinner(false);
    }
  };

  return (
    <div>
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
            Here is Your Transaction Hash{" "}
            <a
              target="_blank"
              href={`https://testnet.archiescan.io/tx/${getRes}`}
            >
              Click Here for Transaction Hash
            </a>
          </p>
          <div className="d-flex justify-content-end">
            <button className="contBtn " onClick={() => setIsModalOpen(false)}>
              OK
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={props.modalShow1}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="connect_to_wallet_bgh" >
          <Modal.Title id="contained-modal-title-vcenter  text-center text-white ">
            <div className="d-flex">
            <div className="text-white EXCHANGE">EXCHANGE</div>
            <RxCross1 className="title_model"  onClick={()=>props.onHide()}/>
            </div>
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
                className="selling_input w-100"
                onChange={(e) => BuyARCWithUSDC(e.target.value)}
              />
              <span className="input_img usdc_img ">
                <img src={usdc} alt="" width="50%" />
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
              <>Convert to ARC</>
            )}
          </button>
        </Modal.Body>
      </Modal>

      
      <Modal
        show={props.modalShow2}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="connect_to_wallet_bgh" >
          <Modal.Title id="contained-modal-title-vcenter text-center text-white d-flex">
            <div className="d-flex">

            <span className="text-white EXCHANGE">EXCHANGE</span>
            <RxCross1 className="title_model"  onClick={()=>props.onHide()}/>
            </div>
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
                <img src={usdt} alt="" />
                <span className="ms-1 fw-bold EXCHANGE">USDT</span>
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
                <>Convert to ARC</>
              )}
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Buy_tokens;
