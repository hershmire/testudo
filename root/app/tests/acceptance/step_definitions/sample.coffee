googleStepDefs = ->
  @World = require('../support/world.coffee').World

  @Given "I am on Google", (callback) ->
    @browser
      .get('http://www.audiusa.com')
      .nodeify(callback)

  @When "I search for", (callback) ->
    @browser
      .elementByClassName('searchInput')
      .clear()
      .type('a6\uE007')
      .waitForElementById('images')
      .click()
      .nodeify(callback)

  @Then "I see a link to", (callback) ->
    @browser
      .waitForElementByCssSelector('#image-results .results-label')
      .text()
      .should.become("Images for 'a6'")
      .fin =>
        @browser.quit()
      .done -> callback()

module.exports = googleStepDefs


