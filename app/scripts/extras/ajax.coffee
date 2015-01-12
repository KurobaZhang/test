$.ajaxSetup
  cache: false
  error: (jqXHR, textStatus, errorThrown) ->
    if jqXHR.status is 401
      window.location.href = "/login"
    else
      Essage.show {
        message: jqXHR.responseText || "未知故障"
        status: 'error'
      },2000

