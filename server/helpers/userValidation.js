/* eslint-disable no-unused-vars */
import Joi from 'joi';

const SignUpschema = Joi.object().keys({
  firstName: Joi.string()
    .regex(/^[a-zA-Z]{3,30}$/)
    .required().error(err => ({ message: 'Invalid firstName' })),
  lastName: Joi.string()
    .regex(/^[a-zA-Z]{3,30}$/)
    .required().error(err => ({ message: 'Invalid lastName' })),
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required(),
  gender: Joi.string()
    .valid('male', 'female')
    .required(),
  jRole: Joi.string()
    .regex(/^[a-zA-Z]{3,200}$/)
    .required().error(err => ({ message: 'Invalid jobRole' })),
  address: Joi.string()
    .regex(/^[a-zA-Z0-9 !@#$%^&*()_+./]{3,3000}$/)
    .required().error(err => ({ message: 'Invalid address' })),
  isAdmin: Joi.string(),
  department: Joi.string()
    .regex(/^[a-zA-Z]{2,30}$/)
    .required().error(err => ({ message: 'Invalid department' })),
});

const Loginschema = Joi.object().keys({
  email: Joi.string().email().trim().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9 !@#$%^&*()_+./]{3,3000}$/).required(),
});

export default {
  SignUpschema,
  Loginschema,
};
