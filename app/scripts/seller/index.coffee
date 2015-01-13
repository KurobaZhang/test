module.exports = ->

  ###
    获取店铺信息
  ###
  $.ajax
    url: "/api/shop/shop_detail"
    type: "GET"
    success: (data) ->
      $("input[name=shopName]").val(data.shopName)
      $("input[name=telephone]").val(data.telephone)
      $("input[name=phone]").val(data.phone)
      $("input[name=address]").val(data.address)
      $("input[name=id]").val(data.id)
      $("input[name=imageUrl]").val(data.imageUrl).siblings("input[name=exFileName]").val(data.imageUrl).siblings("#image-url").attr("src", data.imageUrl)

  ###
    修改用户信息
  ###
  $("#seller-profile-form").on "submit", (evt)->
    evt.preventDefault()
    $.ajax
      url: "/api/shop"
      type: "PUT"
      contentType: "application/json"
      data: JSON.stringify($("#seller-profile-form").serializeObject())
      success: (data)->
        Essage.show {
          message: "店铺信息修改成功"
          status: 'success'
        },2000
