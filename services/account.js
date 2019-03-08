const logger = require("../config/logger-config")

module.exports.getAccountAccountId = async (options) => {
  try {
    data = require('../mocks/account/account-accountId/get/' + options.accountId + '.json')
    return {
      status: 200,
      data: data
    }
  } catch (err) {
    logger.error("ERROR No account found")
  }
}

module.exports.getCreditLimitByAccountId = async (options) => {
  try {
    data = require('../mocks/account/creditlimit-accountId/get/' + options.accountId + '.json')
    return {
      status: 200,
      data: data
    }
  } catch (err) {
    logger.error("ERROR No account found")
  }
}
