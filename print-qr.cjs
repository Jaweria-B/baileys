// print-qr.cjs
const qrcode = require('qrcode-terminal');

const qr = process.argv[2];
if (!qr) {
  console.error('Usage: node print-qr.cjs "<QR_STRING>"');
  process.exit(1);
}

qrcode.generate(qr, { small: true });
