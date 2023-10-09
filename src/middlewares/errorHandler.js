module.exports = () => function (err, req, res, next) {
		const status = err.status || 500;
		const message = err.message || err;
		console.error('ERROR ', err);
		res.status(status).json({ success: false, error: true, message });
};
