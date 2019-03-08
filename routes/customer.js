const express = require('express')
const account = require('../services/customer')
const router = new express.Router()
const logger = require('../config/logger-config')

router.get("/:AccountId/:CustomerId/relationship", async (req, res, next) => {
  const options = {
    accountId : req.params.AccountId,
    customerId : req.params.CustomerId
  }

  logger.info("accountId: " + options.accountId)
  logger.info("customerId: " + options.customerId)

  try {
    const result = await account.getCustomerRelationshipByAccountIdAndCustomerId(options)
    logger.info("getCustomerRelationshipByAccountIdAndCustomerId function call completed")
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
          status: err.status,
          error: err.error
        })
  }
})

module.exports = router
