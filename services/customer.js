const logger = require("../config/logger-config")

module.exports.getCustomerRelationshipByAccountIdAndCustomerId = async (options) => {
  try {
    data = require('../mocks/customer/relationship-accountId-customerId/get/' + options.customerId + '.json')
    return {
      status: 200,
      data: data
    }
  } catch (err) {
    logger.error("ERROR No account found")
  }
}
