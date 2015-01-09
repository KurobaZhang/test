require "extras/ajax"
require "extras/handlebars"
module.exports = ->
  ceilingTemplate = Handlebars.templates["common/templates/ceiling"]
  userIndexTemplate = Handlebars.templates["common/templates/user_sidebar"]

  if $(".ceiling-outer").length > 0
    $.ajax
      url: "/api/users/detail_info"
      type: "GET"
      success: (data)->
        $(".ceiling-outer").append(ceilingTemplate({data: data}))


  if $(".user-sidebar").length > 0
    $(".user-sidebar").append(userIndexTemplate)
