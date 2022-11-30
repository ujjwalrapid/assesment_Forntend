import Web3 from "web3";
import { abi } from "./abi";
import { Contract_address } from "./address";

const web3 = new Web3(Web3.givenProvider);

const Contract = new web3.eth.Contract(
    abi,
    Contract_address
  );

  export const transactionHash=async(setHashEvent:any,value:any)=>{
    const address=localStorage.getItem("address");
    console.log("localStorage.getItem()",address)
    await Contract.methods.approve(address,value).send({from:address}).on("transactionHash", (e) => {
        setHashEvent(e);
      })
  }