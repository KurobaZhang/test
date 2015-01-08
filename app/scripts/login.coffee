module.exports = ->

  $("#login-form").on "submit", (evt)->
    evt.preventDefault()
    $.ajax
      url: "/api/users/login"
      type: "POST"
      data: $("#login-form").serialize()
      success: (data)->
        window.location.href = "/index"

