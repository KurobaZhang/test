require "extras/ajax"
module.exports = ->

  if $(".ceiling").length > 0
    $.ajax
      url: "/api/users/detail_info"
      type: "GET"
      success: (data)->
        $(".ceiling .user-name").text(data.nickName)
