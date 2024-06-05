const sendResponse = (statusCode,errorMessage,result,res) => {
    res.status(statusCode).json({
        errorMessage,result,statusCode
    });
  };
  
  module.exports = { sendResponse };
  