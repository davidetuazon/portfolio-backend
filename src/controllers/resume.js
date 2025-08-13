const path = require('path');

exports.resume = (req, res) => {
    const filePath = path.join(__dirname, '../public', 'Resume_David_Tuazon.pdf');

    res.type('application/pdf');

    res.sendFile(filePath);
};