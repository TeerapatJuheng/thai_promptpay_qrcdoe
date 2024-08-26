const express = require('express');
const bodyParser = require('body-parser');
const promptpay = require('promptpay-qr');

const app = express();
const port = 3000; // Change to a different port

app.use(bodyParser.json());

app.post('/generateQR', (req, res) => {
    const { amount } = req.body;
    
    if (!amount || isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: 'Invalid amount' });
    }

    const accountNumber = '0615927954';
    const qrCodeImage = promptpay(accountNumber, amount);

    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Disposition': 'inline; filename="promptpay-qr.png"'
    });
    res.end(qrCodeImage);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
