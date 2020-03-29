const { celebrate, Joi, Segments } = require('celebrate')

const authorizationRequired = () =>
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  })

const idReqParamNumeric = () =>
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  })

const pageQueryParamNumeric = () =>
  celebrate({
    [Segments.QUERY]: Joi.object().keys({ page: Joi.number() })
  })

module.exports = {
  authorizationRequired,
  idReqParamNumeric,
  pageQueryParamNumeric
}
