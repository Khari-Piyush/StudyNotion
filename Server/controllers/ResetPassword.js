const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
// The crypto module in Node.js is an essential tool for implementing security features in your Express.js applications. It allows you to hash data, generate random tokens, create HMACs, and perform encryption and decryption, all of which are vital for maintaining data security and integrity.
const crypto = require("crypto");


// Link create karega jo ki humare mail par jaayegi front end ki
exports.resetPasswordToken = async (req, res) => {
	try {
		// get email from req body
		const email = req.body.email;
		// chech user for this email, validation
		const user = await User.findOne({ email: email });
		// if user not found
		if (!user) {
			return res.json({
				success: false,
				message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
			});
		}
		// generates a 40-character long hexadecimal string that can be used as a unique token
		// Password reset tokens.
		const token = crypto.randomUUID();
		// const token = crypto.randomBytes(20).toString("hex");

		const updatedDetails = await User.findOneAndUpdate(
			{ email: email },
			{
				token: token,
				resetPasswordExpires: Date.now() + 5*60*1000,
			},
			// updated document return hoga repsonse mai
			{ new: true }
		);
		console.log("DETAILS", updatedDetails);

		// create url
		const url = `http://localhost:3000/update-password/${token}`;

		// send mail containing the url
		await mailSender(
			email,
			"Password Reset",
			`Your Link for email verification is ${url}. Please click this url to reset your password.`
		);
		//return response
		res.json({
			success: true,
			message:
				"Email Sent Successfully, Please Check Your Email to Continue Further",
		});
	} catch (error) {
		return res.json({
			error: error.message,
			success: false,
			message: `Some Error in Sending the Reset Message`,
		});
	}
};

exports.resetPassword = async (req, res) => {
	try {
		// data fetch
		const { password, confirmPassword, token } = req.body;

		// validation
		if (confirmPassword !== password) {
			return res.json({
				success: false,
				message: "Password and Confirm Password Does not Match",
			});
		}
		// get user details from db using token
		// token ka use karke user ki entry nikaalunga
		const userDetails = await User.findOne({ token: token });
		// if no entry invalid token
		if (!userDetails) {
			return res.json({
				success: false,
				message: "Token is Invalid",
			});
		}
		// token time check
		if (!(userDetails.resetPasswordExpires > Date.now())) {
			return res.status(403).json({
				success: false,
				message: `Token is Expired, Please Regenerate Your Token`,
			});
		}
		// hash password
		const encryptedPassword = await bcrypt.hash(password, 10);
		await User.findOneAndUpdate(
			{ token: token },
			{ password: encryptedPassword },
			{ new: true }
		);
		// return response
		res.json({
			success: true,
			message: `Password Reset Successful`,
		});
	} catch (error) {
		return res.json({
			error: error.message,
			success: false,
			message: `Some Error in Updating the Password`,
		});
	}
};