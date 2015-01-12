module.exports = ->

  ###
    注册
  ###
  $("#register-form").on "submit", (evt)->
    evt.preventDefault()
    $.ajax
      url: "/api/users/signup"
      type: "POST"
      data: $("#register-form").serialize()
      success: (data)->
        window.location.href = "/index"
