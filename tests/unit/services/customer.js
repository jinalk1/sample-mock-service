const chai = require('chai')
const assertArrays = require('chai-arrays')
const expect = chai.expect
chai.use(assertArrays)

const testService = require('../../../services/customer')

describe('Get customer relationship TSYS mock API', function () {

  describe('Get /customer/:AccountId/:CustomerId/relationship', function () {

    describe('When there is a stub file present which matches the customerId provided', function () {

      it('should return an HTTP status of 200', async () => {
        var options = {"accountId": "0001", "customerId": "123456"}
        var result = await testService.getCustomerRelationshipByAccountIdAndCustomerId(options)

        expect(result.status).to.equal(200)
      })

      it('should not return an empty object', async () => {
        var options = {"accountId": "0001", "customerId": "123456"}
        var result = await testService.getCustomerRelationshipByAccountIdAndCustomerId(options)

        expect(Object.keys(result.data.identifiers)).is.not.empty
      })
    })
  })
})
