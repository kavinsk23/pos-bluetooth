import React from 'react';
import BluetoothPrinterService from '../services/BluetoothPrinterService';

const PrintBill = () => {
  const bluetoothPrinterService = new BluetoothPrinterService();

  const printBill = () => {
    bluetoothPrinterService.connectToPrinter();
  };

  return (
    <div>
      <button onClick={printBill}>Print Bill</button>
    </div>
  );
};

export default PrintBill;
