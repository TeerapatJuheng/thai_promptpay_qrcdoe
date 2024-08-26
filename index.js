const express = require('express');
const bodyParser = require('body-parser');
const qrcode = require('qrcode'); // Assuming you're using qrcode package

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/generateQR', (req, res) => {
    const { amount } = req.body;
    
    // Generate QR code URL or data
    qrcode.toDataURL(`Amount: ${amount}`, (err, url) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to generate QR code' });
        }
        res.json({ Result: url });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
