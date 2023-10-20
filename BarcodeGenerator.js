import React, { useState } from "react";
import Barcode from "react-barcode";
const BarcodeGenerator = ({barCode}) => {
  
  return (
    <div >
      <div >
       <Barcode value={barCode} />
      </div>
    </div>
  );
};

export default BarcodeGenerator;
