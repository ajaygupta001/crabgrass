import React, { useContext, useEffect, useState } from "react";
import useScanDetection from "use-scan-detection";
import productContext from "../Context/appContext";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const BarcodeScanner = () => {
  // const { barCodeScan, setBarCodeScan } = useContext(productContext);
  // const [barCodeScan,setBarCodeScan]=useState('No Barcode Scanner');

  // useScanDetection({
  //   onComplete: setBarCodeScan,
  //   minLength:3,

  // })
  return (
    <>
      {/* <p>{barCodeScan}</p> */}
    </>
  );
};

export default BarcodeScanner;
