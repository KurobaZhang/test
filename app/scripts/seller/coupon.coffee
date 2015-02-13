module.exports = ->
  couponTemplate = Handlebars.templates["common/templates/edit_coupon"]
  couponTrTemplate = Handlebars.templates["common/templates/coupon_list_table"]

  $.ajax
    url: "/api/business"
    type: "GET"
    success: (data)->
      $("#coupon-table tbody").append(couponTrTemplate({data: data}))

  $("#add-coupon").on "click", ->
    $couponTemplate = $(couponTemplate())
    $couponTemplate.modal('toggle')

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
