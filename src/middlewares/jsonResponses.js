module.exports = () => function (req, res, next) {
  res.jsonOk = function (response, message = null) {
    const data = { data: response };
    if (message) {
      data.message = message;
    }
    return res.status(200).json(data);
  }
  res.jsonError = function (message = "Bad request",status = 500,extra = {}){
    return res.status(status).json({success:false, error:true, message, ...extra});
  }
  next();
};
