const path = require('path');

exports.resume = (req, res) => {
    const filePath = path.join(process.cwd(), '/public', 'TUAZON_David_Wilfred_Resume.pdf');

    res.type('application/pdf');
    
    res.sendFile(filePath);
};