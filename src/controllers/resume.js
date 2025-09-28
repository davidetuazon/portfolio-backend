const path = require('path');

exports.resume = (req, res) => {
    const filePath = path.join(process.cwd(), '/public', 'Resume_TUAZON_David_Wilfred.pdf');

    res.type('application/pdf');
    
    res.sendFile(filePath);
};