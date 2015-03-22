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
      $("input[name=imageUrl]").val(data.imageUrl).siblings(".exFileName").val(data.imageUrl).siblings("#image-url").attr("src", data.imageUrl)

  ###
    修改用户信息
  ###
  $("#seller-profile-form").on "submit", (evt)->
    evt.preventDefault()
    shopWithExFileName = {}
    shopWithExFileName.shop = $("#seller-profile-form").serializeObject()
    shopWithExFileName.exFileName = if shopWithExFileName.shop.imageUrl is $(".exFileName").val() then "" else $(".exFileName").val()
    $.ajax
      url: "/api/shop"
      type: "PUT"
      contentType: "application/json"
      data: JSON.stringify(shopWithExFileName)
      success: (data)->
        Essage.show {
          message: "店铺信息修改成功"
          status: 'success'
        },2000

