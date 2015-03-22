module.exports = ->
  sellerOrderTemplate = Handlebars.templates["common/templates/seller_order"]

  ###
    获取订单列表
  ###
  $.ajax
    url: "/api/seller/order"
    type: "GET"
    success: (data)->
      $("#seller-order-table tbody").append(sellerOrderTemplate({data: data}))

  ###
    审核通过或不通过订单
  ###
  $(document).on "click", ".js-confirm", ->
    orderId = $(@).data("id")
    status = $(@).data("status")
    if status is 1
      url = "/api/seller/order/#{orderId}/confirm"
    else if status is -2
      url = "/api/seller/order/#{orderId}/refuse"
    $.ajax
      url: url
      type: "PUT"
      success: (data)->
        window.location.reload()
