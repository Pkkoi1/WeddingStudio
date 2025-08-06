const Joi = require('joi');

const validateRegister = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    fullName: Joi.string().min(2).required(),
    phone: Joi.string().optional()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }
  next();
};

const validateLogin = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }
  next();
};

const validateService = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required(),
    duration: Joi.number().min(1).optional(),
    images: Joi.array().items(Joi.string()).optional(),
    features: Joi.array().items(Joi.string()).optional(),
    category: Joi.string().valid('wedding', 'prewedding', 'engagement', 'portrait').required(),
    isActive: Joi.boolean().optional()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }
  next();
};

const validateBooking = (req, res, next) => {
  const schema = Joi.object({
    customerName: Joi.string().required(),
    customerEmail: Joi.string().email().required(),
    customerPhone: Joi.string().required(),
    service: Joi.string().required(),
    eventDate: Joi.date().min('now').required(),
    eventLocation: Joi.string().optional(),
    specialRequests: Joi.string().optional()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }
  next();
};

const validateContact = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().optional(),
    subject: Joi.string().optional(),
    message: Joi.string().min(10).required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }
  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  validateService,
  validateBooking,
  validateContact
};
