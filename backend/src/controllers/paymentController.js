import paymentService from "../services/paymentService.js";

const createIntent = async (req, res, next) => {
  try {
    const result = await paymentService.createIntent(req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  createIntent
};