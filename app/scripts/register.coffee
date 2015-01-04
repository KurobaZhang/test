module.exports = ->

  $("#register-form").on "submit", (evt)->
    evt.preventDefault()
    $.ajax
      url: "/api/users/signup"
      type: "POST"
      data: $("#register-form").serialize()
      success: (data)->
        console.log data
