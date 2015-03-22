module.exports = ->
  $.ajax
    url: "/api/users/detail_info"
    type: "GET"
    success: (data)->
      $("#user-name").val(data.nickName)
      $("#real-name").val(data.realName)
      $("#user-phone").val(data.phone)
      $("#user-id").val(data.id)

  #提交用户
  $("#user-profile-form").on "submit", (evt)->
    evt.preventDefault()
    $.ajax
      url: "/api/users/detail_info"
      type: "PUT"
      contentType: "application/json"
      data: JSON.stringify($("#user-profile-form").serializeObject())
      success: (data)->
        Essage.show {
          message: "个人信息修改成功"
          status: 'success'
        },2000
