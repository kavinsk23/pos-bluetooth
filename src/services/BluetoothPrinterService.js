class BluetoothPrinterService {
    async connectToPrinter() {
      try {
        if (!navigator.bluetooth) {
          console.error('Web Bluetooth API is not available in this browser!');
          return;
        }
  
        const device = await navigator.bluetooth.requestDevice({
          filters: [{ namePrefix: 'Printer' }],
          optionalServices: ['battery_service']
        });
  
        if (!device.gatt) {
          throw new Error("GATT not supported on this device.");
        }
  
        const server = await device.gatt.connect();
        const service = await server.getPrimaryService('battery_service');
        const characteristic = await service.getCharacteristic('battery_level');
  
        const encoder = new TextEncoder();
        const data = encoder.encode('Hello, Printer!');
        await characteristic.writeValue(data);
  
        console.log('Printed successfully!');
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
  
  export default BluetoothPrinterService;
  