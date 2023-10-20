import { useState } from "react";
import "./App.css";
import productContext from "./Context/appContext";
import Routing from "./pages/Routing";
import BarcodeScanner from "./barcode/BarcodeScanner";

function App() {
  const [showLog, setShowLog] = useState(false);
  const [billCart, setBillCart] = useState([]);
  const [returnBillCart,setReturnBilllCart]=useState([]);
  return (
    <>
      <productContext.Provider
        value={{
          showLog: showLog,
          setShowLog: setShowLog,
          billCart: billCart,
          setBillCart: setBillCart,
          returnBillCart:returnBillCart,
          setReturnBilllCart:setReturnBilllCart
        }}
      >
        <Routing />
        <BarcodeScanner />
      </productContext.Provider>
    </>
  );
}

export default App;
