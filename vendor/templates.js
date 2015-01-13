(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates["common/templates/ceiling"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "active";
  }

  buffer += "<nav class=\"navbar navbar-inverse ceiling\" role=\"navigation\">\n  <div class=\"main\">\n    <span class=\"user-info\"><span class=\"user-name\"></span> 您好， 欢迎来到余人自娱</span>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-select ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.ceilingType), 1, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.ceilingType), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"/index\">首页</a></li>\n      <li class=\"nav-select ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.ceilingType), 2, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.ceilingType), 2, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"/user/index\">用户中心</a></li>\n      <li class=\"nav-select seller-nav ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.ceilingType), 3, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.ceilingType), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " hide\"><a href=\"/seller/index\">商家中心</a></li>\n    </ul>\n  </div>\n</nav>\n";
  return buffer;
  });
templates["common/templates/coupon"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n  <div class=\"coupon\">\n\n  </div>\n";
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["common/templates/seller_sidebar"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "active";
  }

  buffer += "<div class=\"sidebar\">\n  <ul>\n    <li class=\"";
  stack1 = (helper = helpers.equalsPath || (depth0 && depth0.equalsPath),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "/seller/index", options) : helperMissing.call(depth0, "equalsPath", "/seller/index", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"/seller/index\">商家资料</a></li>\n    <li class=\"";
  stack1 = (helper = helpers.equalsPath || (depth0 && depth0.equalsPath),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "/seller/coupons", options) : helperMissing.call(depth0, "equalsPath", "/seller/coupons", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"/seller/coupons\">优惠券管理</a></li>\n  </ul>\n</div>\n";
  return buffer;
  });
templates["common/templates/settle"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.status), 0, options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.status), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n    <div class=\"settle-status\">运营正在审核您的申请，请耐心等待</div>\n\n  ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.status), 1, options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.status), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "\n      <div class=\"settle-status\">您的申请已经过运营审核通过</div>\n\n    ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.status), "-1", options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.status), "-1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.status), "-2", options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.status), "-2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <form class=\"form-horizontal user-form\" role=\"form\" id=\"settle-form\">\n        <h2>商家入驻申请</h2>\n        <br />\n        <div class=\"form-group\">\n          <label for=\"inputEmail3\" class=\"col-sm-4 control-label\">店铺名</label>\n          <div class=\"col-sm-8\">\n            <input type=\"hidden\" name=\"id\" id=\"user-id\" />\n            <input type=\"text\" class=\"form-control\" name=\"shopName\" id=\"user-name\" placeholder=\"请输入店铺名\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">固定电话</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" name=\"telephone\" id=\"real-name\" placeholder=\"请输入店铺固定电话\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">店铺手机</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"real-name\" placeholder=\"请输入店铺联系电话\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">店铺地址</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" name=\"address\" id=\"user-phone\" placeholder=\"输入店铺地址\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">店铺LOGO</label>\n          <div class=\"col-sm-8\">\n            <img src=\"\" alt=\"\" width=\"100\" height=\"100\">\n            <input type=\"hidden\" class=\"form-control\" name=\"imageUrl\">\n            <button class=\"file-input-wrapper btn btn-warning\">\n              <span>上传</span><input type=\"file\" name=\"file\" style=\"left: -196.5px; top: 10px;\">\n            </button>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-sm-offset-2 col-sm-8\">\n            <button type=\"submit\" class=\"btn btn-default btn-lg btn-primary\">提交申请</button>\n          </div>\n        </div>\n      </form>\n    ";
  return buffer;
  }
function program8(depth0,data) {
  
  
  return "店铺申请未通过";
  }

function program10(depth0,data) {
  
  
  return "店铺已冻结";
  }

function program12(depth0,data) {
  
  
  return "\n  <form class=\"form-horizontal user-form\" role=\"form\" id=\"settle-form\">\n    <h2>商家入驻申请</h2>\n    <br />\n    <div class=\"form-group\">\n      <label for=\"inputEmail3\" class=\"col-sm-4 control-label\">店铺名</label>\n      <div class=\"col-sm-8\">\n        <input type=\"hidden\" name=\"id\" id=\"user-id\" />\n        <input type=\"text\" class=\"form-control\" name=\"shopName\" id=\"user-name\" placeholder=\"请输入店铺名\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">固定电话</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" name=\"telephone\" id=\"real-name\" placeholder=\"请输入店铺固定电话\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">店铺手机</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"real-name\" placeholder=\"请输入店铺联系电话\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">店铺地址</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" name=\"address\" id=\"user-phone\" placeholder=\"输入店铺地址\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">店铺LOGO</label>\n      <div class=\"col-sm-8\">\n        <img src=\"\" alt=\"\" width=\"100\" height=\"100\">\n        <input type=\"hidden\" class=\"form-control\" name=\"imageUrl\">\n        <button class=\"file-input-wrapper btn btn-warning\">\n          <span>上传</span><input type=\"file\" name=\"file\" style=\"left: -196.5px; top: 10px;\">\n        </button>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-8\">\n        <button type=\"submit\" class=\"btn btn-default btn-lg btn-primary\">提交申请</button>\n      </div>\n    </div>\n  </form>\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.program(12, program12, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["common/templates/user_sidebar"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "active";
  }

  buffer += "<div class=\"sidebar\">\n  <ul>\n    <li class=\"";
  stack1 = (helper = helpers.equalsPath || (depth0 && depth0.equalsPath),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "/user/index", options) : helperMissing.call(depth0, "equalsPath", "/user/index", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"/user/index\">用户资料</a></li>\n    <li class=\"";
  stack1 = (helper = helpers.equalsPath || (depth0 && depth0.equalsPath),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "/user/settle", options) : helperMissing.call(depth0, "equalsPath", "/user/settle", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"/user/settle\">申请商家</a></li>\n    <li class=\"";
  stack1 = (helper = helpers.equalsPath || (depth0 && depth0.equalsPath),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "/user/orders", options) : helperMissing.call(depth0, "equalsPath", "/user/orders", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"/user/orders\">订单列表</a></li>\n    <li class=\"";
  stack1 = (helper = helpers.equalsPath || (depth0 && depth0.equalsPath),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "/user/password", options) : helperMissing.call(depth0, "equalsPath", "/user/password", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"/user/password\">修改密码</a></li>\n  </ul>\n</div>\n";
  return buffer;
  });

})();
