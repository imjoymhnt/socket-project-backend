const ButtonClick = require("../model/buttonClick");

// ################################## Create Button Click Count #################################### 🚀🚀
exports.createButtonClick = (req, res) => {
  const buttonClickCount = new ButtonClick(req.body);
  buttonClickCount.save((err, data) => {
    if (err || !data) {
      return res.status(400).json({
        success: false,
        err: err.message,
      });
    }
    return res.status(201).json({
      success: true,
      data,
    });
  });
};
