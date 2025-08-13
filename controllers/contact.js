exports.contactForm = (req, res) => {
    console.log(req.body);
    const { name, email, message } = req.body;


    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    console.log("Contact form submitted: ", { name, email, message });
    res.status(200).json({ success: true, message: "Message received" });
};
