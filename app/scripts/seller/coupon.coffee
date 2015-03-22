module.exports = ->
  couponTemplate = Handlebars.templates["common/templates/edit_coupon"]
  couponTrTemplate = Handlebars.templates["common/templates/coupon_list_table"]

  #获取券列表
  $.ajax
    url: "/api/seller/business"
    type: "GET"
    success: (data)->
      $("#coupon-table tbody").append(couponTrTemplate({data: data}))

  #弹出添加券
  $("#add-coupon").on "click", ->
    $couponTemplate = $(couponTemplate())
    $couponTemplate.modal('toggle')

  #改变状态
  $(document).on "click", ".js-change-status", ->
    couponId = $(@).data("id")
    status = $(@).data("status")
    originStatus = $(@).data("originStatus")
    data = {id: couponId, status: status}
    $.ajax
      url: "/api/business"
      type: "PUT"
      data: JSON.stringify(data)
      contentType: "application/json"
      success: (data)=>
        thisTr = $(@).closest("tr")
        switch parseInt(originStatus)
          when 1
            $(".coupon-status", thisTr).html("下架")
            $(".coupon-operator .js-change-status", thisTr).data("status", "1").data("originStatus", "-1").text("上架")
          when -1,0
            $(".coupon-status", thisTr).html("上架")
            $(".coupon-operator .js-change-status", thisTr).data("status", "-1").data("originStatus", "1").text("下架")

  #删除券
  $(document).on "click", ".js-delete-coupon", ->
    couponId = $(@).data("id")
    $.ajax
      url: "/api/business?businessId=#{couponId}"
      type: "DELETE"
      success: ()->
        $(@).closest("tr").remove()

  #提交券定义表单
  $(document).on "submit", "#coupon-form", (evt)->
    evt.preventDefault()
    business = $(@).serializeObject()
    $.ajax
      url: "/api/business"
      type: "POST"
      contentType: "application/json"
      data: JSON.stringify(business)
      success: (data)->
        console.log data

