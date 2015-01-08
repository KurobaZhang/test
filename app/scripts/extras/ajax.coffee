$.ajaxSetup
  cache: false
  error: (jqXHR, textStatus, errorThrown) ->
    if jqXHR.status is 401
      window.location.href = "/login"
    else

