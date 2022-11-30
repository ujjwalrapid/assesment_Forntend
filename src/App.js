// import WalletConnect from "./WalletConnect/WalletConnect"

import WalletConnect from "./WalletConnect/WalletConnect";
import BigNumber from "bignumber.js";
import { alloanceForApprove, transactionHash } from "./blockchain/methods";
import { useState } from "react";
function App() {
  const [hashEvent,setHashEvent]=useState()
  // const ans=new BigNumber().plus(2,4).times(2).dividedBy(times(4**2).plus(minus(2,4))).toString();
  
  const ethtowei= new BigNumber(1).times(10**18).toString();
  const weiToEth= new BigNumber(1000000000000000000).dividedBy(10**18).toFixed(2);
  return (
    <>
       {/* <WalletConnect/> */}
       <WalletConnect/>
       <h1>Eth To Wie(1Eth)={ethtowei}</h1>
       <h1>Wie To Eth(1000000000000000000)={weiToEth}</h1>
       <h1>a=2,b=4</h1>
       <h1>Bignumber calculation:-(a+b)^2/(b^2 + (a-b))</h1>
       <h3>Ans={}</h3>
       <button onClick={()=>transactionHash(setHashEvent,100)}>approve for 100</button>
       <h6>Transaction Hash For Approve={hashEvent}</h6>
       <button onClick={()=>alloanceForApprove()}>Check allowance</button>
      </>
  );
}

export default App;
