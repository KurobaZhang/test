module.exports = ->
  couponListTemplate = Handlebars.templates["common/templates/coupon_list"]

  ###
    获取优惠券列表
  ###
  $.ajax
    url: "/api/business"
    type: "GET"
    success: (data)->
      $(".coupons").append(couponListTemplate({data: data}))


  ###
    领取优惠券
  ###
  $(document).on "click", ".js-order", ->
    businessId = $(@).data("id")
    $.ajax
      url: "/api/buyer/apply_business"
      type: "POST"
      data: {businessId: businessId}
      success: (data)->
        Essage.show {
          message: "优惠领取成功"
          status: 'success'
        },2000

