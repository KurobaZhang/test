require "extras/ajax"
require "extras/handlebars"
module.exports = ->
  ceilingTemplate = Handlebars.templates["common/templates/ceiling"]
  userSidebarTemplate = Handlebars.templates["common/templates/user_sidebar"]
  sellerSidebarTemplate = Handlebars.templates["common/templates/seller_sidebar"]
  ceilingType =
    "/index": 1
    "/user/index": 2
    "/user/settle": 2
    "/user/orders": 2
    "/user/password": 2
    "/seller/index": 3
    "/seller/coupons": 3
    "/seller/orders": 3

  ###
    若有吊顶外部div则渲染吊顶组件
  ###
  if $(".ceiling-outer").length > 0
    ceilingType = ceilingType[window.location.pathname]
    $(".ceiling-outer").append(ceilingTemplate({ceilingType}))
    $.ajax
      url: "/api/users/detail_info"
      type: "GET"
      success: (data)->
        $(".user-name").text(data.nickName)
        $(".ceiling .seller-nav").removeClass("hide") if data.type is 2
        $(".ceiling").data("user", data)

  ###
    若有用户侧边栏外部div则渲染
  ###
  if $(".user-sidebar").length > 0
    $(".user-sidebar").append(userSidebarTemplate())

  ###
    若有商家侧边栏外部div则渲染商家侧边栏
  ###
  if $(".seller-sidebar").length > 0
    $(".seller-sidebar").append(sellerSidebarTemplate())

  ###
    上传图片
  ###
  $(document).on "click", "input[name=file]", (evt)->
    _this = @
    imageInput = $(_this).parent().siblings("input.imageUrl")
    exFileName = $("input[name=exFileName]").val() || ""
    $(@).fileupload
      url: "/api/image"
      type: "POST"
      formData: {exFileName1: exFileName}
      sequentialUploads: true
      dataType: "html"
      success: (data)=>
        $(imageInput).val(data).siblings("img").attr("src", data)
