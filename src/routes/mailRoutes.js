const Mailer = require('../services/mailer');
const mailTemplate = require('../services/mailTemplate');

module.exports = app => {

	app.post("/api/send_email", async (req, res) => {
    console.log("send email")
     const mailer = new Mailer({
       subject: "text",
       recipients: [{email: "mikhailpro4@gmail.com"}]
     }, mailTemplate({body: "test"}));

     try {
      await mailer.send();
    } catch (err) {
      res.status(422).send(err);
    }
	});
};
