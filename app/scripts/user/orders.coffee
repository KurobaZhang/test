module.exports = ->
  buyerOrderTemplate = Handlebars.templates["common/templates/buyer_order"]

  ###
    获取订单列表
  ###
  $.ajax
    url: "/api/buyer/order"
    type: "GET"
    success: (data)->
      $("#buyer-order-table tbody").append(buyerOrderTemplate({data: data}))

