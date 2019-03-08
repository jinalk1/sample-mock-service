const chai = require('chai')
const assertArrays = require('chai-arrays')
const expect = chai.expect
chai.use(assertArrays)

const testService = require('../../../services/account')

describe('Get account TSYS mock API', function () {

  describe('Get /account/:AccountId', function () {

    describe('When there is a stub file present which matches the accountId provided', function () {

      it('should return an HTTP status of 200', async () => {
        var options = {"accountId": "0001"}
        var result = await testService.getAccountAccountId(options)

        expect(result.status).to.equal(200)
      })

      it('should not return an empty object', async () => {
        var options = {"accountId": "0001"}
        var result = await testService.getAccountAccountId(options)

        expect(Object.keys(result.data.identifiers)).is.not.empty
      })
    })
  })

  describe("Get /account/:AccountId/creditlimit", function () {

    describe("When there is a stub file present which matches the accountId provided", function () {

      it("should return an HTTP ststaus of 200", async () => {
        var options = {"accountId": "0001"}
        var result = await testService.getCreditLimitByAccountId(options)

        expect(result.status).to.equal(200)
      })

      it('should not return an empty object', async () => {
        var options = {"accountId": "0001"}
        var result = await testService.getCreditLimitByAccountId(options)

        expect(Object.keys(result.data.identifiers)).is.not.empty
      })
    })
  })
})
