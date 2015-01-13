module.exports = ->
  settleTemplate = Handlebars.templates["common/templates/settle"]
  ###
    获取当前用户申请状态
  ###
  $.ajax
    url: "/api/shop/shop_detail"
    type: "GET"
    success: (data)->
      $(".user-container").append(settleTemplate({data: data}))
      $("#settle-form").on "submit", submitForm

  ###
    提交商家入驻申请
  ###
  submitForm = (evt)->
    evt.preventDefault()
    shop = JSON.stringify($("#settle-form").serializeObject())
    $.ajax
      url: "/api/shop/apply"
      type: "POST"
      contentType: "application/json"
      data: shop
      success: (data)->
        console.log data

