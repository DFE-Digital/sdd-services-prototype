/**
 * Instantiate object used to store the methods registered as a
 * 'filter' (of the same name) within nunjucks. You can override
 * gov.uk core filters by creating filter methods of the same name.
 * @type {Object}
 */
var filters = {}

/* ------------------------------------------------------------------
  add your methods to the filters obj below this comment block:
  @example:

  filters.sayHi = function(name) {
      return 'Hi ' + name + '!'
  }

  Which in your templates would be used as:

  {{ 'Paul' | sayHi }} => 'Hi Paul'

  Notice the first argument of your filters method is whatever
  gets 'piped' via '|' to the filter.

  Filters can take additional arguments, for example:

  filters.sayHi = function(name,tone) {
    return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
  }

  Which would be used like this:

  {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
  {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

  For more on filters and how to write them see the Nunjucks
  documentation.

------------------------------------------------------------------ */
// features

filters.taskListStatus = function (data, completedFields, inProgressFields = []) {
  const flag = inProgressFields.some(field => data[field])

  if (data[completedFields]) {
    return 'Completed'
  } else if (flag) {
    return 'In Progress'
  } else {
    return 'Not Started'
  }
}

filters.taskListStatusClass = function (data, completedFields, inProgressFields = []) {
  const flag = inProgressFields.some(field => data[field])

  if (data[completedFields]) {
    return ''
  } else if (flag) {
    return 'govuk-tag--blue'
  } else {
    return 'govuk-tag--grey'
  }
}

/* ------------------------------------------------------------------
  keep the following line to return your filters to the app
------------------------------------------------------------------ */
exports.filters = filters
