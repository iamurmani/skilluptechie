const sendResponse = (statusCode,errorMessage,result,res) => {
    res.status(statusCode).json({
        errorMessage,result
    });
  };
  
  module.exports = { sendResponse };
  