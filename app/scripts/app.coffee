require "extras/ajax"
require "extras/handlebars"
module.exports = ->
  ceilingTemplate = Handlebars.templates["common/templates/ceiling"]
  userIndexTemplate = Handlebars.templates["common/templates/user_sidebar"]

  ###
    若有吊顶外部div则渲染吊顶组件
  ###
  if $(".ceiling-outer").length > 0
    $.ajax
      url: "/api/users/detail_info"
      type: "GET"
      success: (data)->
        $(".ceiling-outer").append(ceilingTemplate({data: data}))

  ###
    若有用户侧边栏外部div则渲染
  ###
  if $(".user-sidebar").length > 0
    $(".user-sidebar").append(userIndexTemplate)
