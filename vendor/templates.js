(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates["common/templates/buyer_order"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <tr>\n   <td>";
  if (helper = helpers.businessName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.businessName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n   <td>";
  if (helper = helpers.shopName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shopName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n   <td>";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), 0, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), 1, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "-2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), "-2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n   <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.createdAt), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.createdAt), options)))
    + "</td>\n   <td>";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), 0, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "-2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), "-2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), 1, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n  </tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "初始";
  }

function program4(depth0,data) {
  
  
  return "使用成功";
  }

function program6(depth0,data) {
  
  
  return "失败";
  }

function program8(depth0,data) {
  
  
  return "等待商家审批";
  }

function program10(depth0,data) {
  
  
  return "审批不通过";
  }

function program12(depth0,data) {
  
  
  return "交易完成";
  }

  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
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
templates["common/templates/coupon_list"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"coupon\" name=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "pp", depth0, options)))
    + "\">\n    <div class=\"coupon-image\">\n      <img src=\"";
  if (helper = helpers.mainImage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mainImage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" width=\"285\" alt=\"\" />\n    </div>\n    <div class=\"coupon-info\">\n      <ul>\n        <li>";
  if (helper = helpers.discountInfo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.discountInfo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n        <li>管理员 <span class=\"shop-name\">";
  if (helper = helpers.shopName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shopName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        <li class=\"last\">发布于 "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.createdAt), "day", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.createdAt), "day", options)))
    + " <button type=\"button\" class=\"btn btn-info js-order\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">申请</button></li>\n      </ul>\n    </div>\n  </div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["common/templates/coupon_list_table"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <tr>\n    <td><img src=\"";
  if (helper = helpers.mainImage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mainImage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" width=\"60\" height=\"60\" alt=\"\"> ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.discountInfo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.discountInfo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td class=\"coupon-status\">";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), 0, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), 1, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "-1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), "-1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n    <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.createdAt), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.createdAt), options)))
    + "</td>\n    <td class=\"coupon-operator\">\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), 0, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "-1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), "-1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <button class=\"btn btn-danger js-delete-coupon\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">删除</button>\n    </td>\n  </tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "未上架";
  }

function program4(depth0,data) {
  
  
  return "上架";
  }

function program6(depth0,data) {
  
  
  return "下架";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<button class=\"btn btn-primary js-change-status\" data-status=\"1\" data-origin-status=\"0\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">上架</button>";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<button class=\"btn btn-primary js-change-status\" data-status=\"-1\" data-origin-status=\"1\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">下架</button>";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<button class=\"btn btn-primary js-change-status\" data-status=\"1\" data-origin-status=\"-1\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">上架</button>";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["common/templates/edit_coupon"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"modal\" id=\"couponModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">优惠活动定义</h4>\n      </div>\n      <form class=\"form-horizontal modal-form coupon-form\" role=\"form\" id=\"coupon-form\">\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"inputEmail3\" class=\"col-sm-4 control-label\">名字</label>\n            <div class=\"col-sm-8\">\n              \n              <input type=\"text\" class=\"form-control\" name=\"name\" id=\"coupon-name\" placeholder=\"请输入名字\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">优惠内容</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control\" name=\"discountInfo\" placeholder=\"请输入券优惠内容\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">活动图片</label>\n            <div class=\"col-sm-8\">\n              <img src=\"\" alt=\"\" id=\"image-url\" width=\"100\" height=\"100\">\n              <input type=\"hidden\" class=\"exFileName\" />\n              <input type=\"hidden\" class=\"form-control imageUrl\" name=\"mainImage\">\n              <button class=\"file-input-wrapper btn btn-warning\" type=\"button\">\n                <span>上传</span><input type=\"file\" name=\"file\" style=\"left: -196.5px; top: 10px;\" multiple>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-primary\">确定</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
  return buffer;
  });
templates["common/templates/seller_order"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <tr>\n    <td>";
  if (helper = helpers.businessName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.businessName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.buyerName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.buyerName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), 0, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), 1, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "-2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), "-2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n    <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.createdAt), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.createdAt), options)))
    + "</td>\n    <td>\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), 0, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </td>\n  </tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "待审批";
  }

function program4(depth0,data) {
  
  
  return "审批通过";
  }

function program6(depth0,data) {
  
  
  return "审批不通过";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <button class=\"btn btn-primary js-confirm\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-status=\"1\">审核通过</button>\n        <button class=\"btn btn-danger js-confirm\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-status=\"-2\">审核不通过</button>\n      ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
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
  buffer += "\"><a href=\"/seller/coupons\">优惠券管理</a></li>\n    <li class=\"";
  stack1 = (helper = helpers.equalsPath || (depth0 && depth0.equalsPath),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "/seller/orders", options) : helperMissing.call(depth0, "equalsPath", "/seller/orders", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"/seller/orders\">订单管理</a></li>\n  </ul>\n</div>\n";
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
  
  
  return "\n    <p class=\"bg-info\" style=\"margin: 20px 20px 0 0;\">运营正在审核您的申请，请耐心等待</p>\n  ";
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
  
  
  return "\n      <p class=\"bg-info\" style=\"margin: 20px 20px 0 0;\">您的申请已经过运营审核通过</p>\n    ";
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
