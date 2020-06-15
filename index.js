exports.senEmail = (req, res) => {
    const allowedOrigins = ['http://localhost:8001', 'https://www.arvaheaters.com'];
    const origin = req.headers.origin;
    console.log(origin)
    if (allowedOrigins.indexOf(origin) !== -1) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Headers', 'Accept,Content-Type,Content-Length,Accept-Encoding,X-CSRF-Token,Authorization');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    }
    if (req.method === 'OPTIONS') return res.status(200).json({
        code: 200
    });

    if (req.method !== 'POST') {
        return res.status(405).json(getResponseJSON('Only POST requests are accepted!', 405));
    }
    if (req.body === undefined) return res.status(400).json(getResponseJSON('Bad request!', 400));
    const email = req.body.email;
    if(email === undefined) return res.status(400).json(getResponseJSON('Bad request!', 400));
    console.log(email)
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const fs = require("fs");
    pathToAttachment = `${__dirname}/brochure.pdf`;
    attachment = fs.readFileSync(pathToAttachment).toString("base64");
    const msg = {
        to: email,
        from: 'arvaheaters@gmail.com',
        subject: 'Arva Heaters Products Catalogue',
        text: 'Please see attached product catalogue.',
        attachments: [
            {
                content: attachment,
                filename: "arva_heaters_product_catalogue.pdf",
                type: "application/pdf",
                disposition: "attachment"
            }
        ]
    };
    sgMail.send(msg);
    let message = 'Success!';
    res.status(200).json({
        message,
        code: 200
    });
};