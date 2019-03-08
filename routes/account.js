const express = require('express')
const account = require('../services/account')
const router = new express.Router()
const logger = require('../config/logger-config')

router.get("/:AccountId", async (req, res, next) => {
  const options = {
    accountId : req.params.AccountId
  }

  logger.info("accountId: " + options.accountId)

  try {
    const result = await account.getAccountAccountId(options)
    logger.info("getAccountAccountId function call completed")
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

router.get("/:AccountId/creditlimit", async (req, res, next) => {
  const options = {
    accountId : req.params.AccountId
  }

  logger.info("accountId: " + options.accountId)

  try {
    const result = await account.getCreditLimitByAccountId(options)
    logger.info("getCreditLimitByAccountId function call completed")
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

module.exports = router
