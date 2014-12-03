Handlebars.registerPartial("header", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<header id=\"topHead\" class=\"navbar navbar-fixed-top\" role=\"navigation\">\n	<div class=\"container\">\n		<div class=\"navbar-header\">\n			<div class=\"options-left\">\n				<a href=\"\" id=\"btn-list\">\n					<div class=\"btn-left categories-icon\" type=\"button\">\n						<i class=\"fa fa-list custom\"></i>\n					</div>\n				</a>\n			</div>\n			<div class=\"options-right\" type=\"button\">\n				<!-- Mobile -->\n				<div class=\"mobile\">\n					<a data-toggle=\"dropdown\" href=\"#\" id=\"social\"><i class=\"fa fa-ellipsis-v custom\"></i></a>\n					<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n						<!-- /Perfil ó Editar perfil -->\n						<li><a href=\"\">Empezar de nuevo</a></li>\n						<li><a href=\"\">Configuración</a></li>\n						<li><a href=\"\">Ayuda</a></li>\n					</ul>\n				</div>\n			</div>\n			<div class=\"navbar-center\">\n				Mapbox\n			</div>\n		</div>\n	</div>\n	<div class=\"shadow\"></div>\n</header>\n";
},"useData":true}));

this["JST"] = this["JST"] || {};

this["JST"]["app/templates/box-content.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\n";
},"3":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "				<div class=\"modal-body clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.itemsId : depth0), {"name":"each","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</div>\n				<div class=\"modal-footer\">\n					<button id=\"checkItems\" type=\"button\" class=\"btn btn-go btn-check\" data-box-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\">Comprobar <i class=\"fa fa-caret-right\"></i></button>\n				</div>\n";
},"4":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = helpers['with'].call(depth0, ((helpers.getItem || (depth0 && depth0.getItem) || helperMissing).call(depth0, depth0, {"name":"getItem","hash":{},"data":data})), {"name":"with","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", buffer = "";
  stack1 = helpers['with'].call(depth0, ((helpers.getCategory || (depth0 && depth0.getCategory) || helperMissing).call(depth0, (depths[2] != null ? depths[2].categoryId : depths[2]), {"name":"getCategory","hash":{},"data":data})), {"name":"with","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "							<div data-box-item-id=\""
    + escapeExpression(lambda((depth0 != null ? depth0._id : depth0), depth0))
    + "\" class=\"item item-"
    + escapeExpression(lambda((depth0 != null ? depth0.color : depth0), depth0))
    + " ";
  stack1 = helpers['with'].call(depth0, ((helpers.getCategory || (depth0 && depth0.getCategory) || helperMissing).call(depth0, (depths[2] != null ? depths[2].categoryId : depths[2]), {"name":"getCategory","hash":{},"data":data})), {"name":"with","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n								<div class=\"innerWrapper\">\n									<div class=\"picture\"><span class=\"v-align\"></span><img src=\""
    + escapeExpression(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"picture","hash":{},"data":data}) : helper)))
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.resHeight : depth0), {"name":"if","hash":{},"fn":this.program(14, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" alt=\"\"></div>\n									<div class=\"name\"><p>"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</p></div>\n									<div class=\"item-badge\">\n										<i class=\"fa\"></i>\n									</div>\n								</div>\n";
  stack1 = helpers['with'].call(depth0, ((helpers.getCategory || (depth0 && depth0.getCategory) || helperMissing).call(depth0, (depths[2] != null ? depths[2].categoryId : depths[2]), {"name":"getCategory","hash":{},"data":data})), {"name":"with","hash":{},"fn":this.program(16, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "							</div>\n";
  stack1 = helpers['with'].call(depth0, ((helpers.getCategory || (depth0 && depth0.getCategory) || helperMissing).call(depth0, (depths[2] != null ? depths[2].categoryId : depths[2]), {"name":"getCategory","hash":{},"data":data})), {"name":"with","hash":{},"fn":this.program(19, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = "								";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.special : depth0)) != null ? stack1.edit : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"7":function(depth0,helpers,partials,data) {
  return "<div class=\"item-container\">";
  },"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.special : depth0)) != null ? stack1.edit : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.special : depth0)) != null ? stack1.group : stack1), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  return "edit";
  },"12":function(depth0,helpers,partials,data) {
  return "group";
  },"14":function(depth0,helpers,partials,data) {
  return "resHeight";
  },"16":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.special : depth0)) != null ? stack1.edit : stack1), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"17":function(depth0,helpers,partials,data) {
  return "										<div class=\"innerBack\">\n											<textarea class=\"edit-text\"></textarea>\n										</div>\n";
  },"19":function(depth0,helpers,partials,data) {
  var stack1, buffer = "								";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.special : depth0)) != null ? stack1.edit : stack1), {"name":"if","hash":{},"fn":this.program(20, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " \n";
},"20":function(depth0,helpers,partials,data) {
  return "</div>";
  },"22":function(depth0,helpers,partials,data) {
  return "				<div class=\"modal-body\">\n					<div class=\"empty-msg\">¡Aún no has insertado ninguna tarjeta, ánimo tu puedes!</div>\n				</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<div class=\"modal fade\" id=\"boxContent\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"boxContentLabel\" aria-hidden=\"true\">\n	<div class=\"modal-dialog\">\n		<div class=\"modal-content\">\n			<div class=\"modal-header\">\n				<button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n				<h4 class=\"modal-title\" id=\"boxContentLabel\">\n";
  stack1 = helpers['with'].call(depth0, ((helpers.getCategory || (depth0 && depth0.getCategory) || helperMissing).call(depth0, (depth0 != null ? depth0.categoryId : depth0), {"name":"getCategory","hash":{},"data":data})), {"name":"with","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "				</h4>\n			</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.itemsId : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.program(22, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n	</div>\n</div>\n";
},"useData":true,"useDepths":true});



this["JST"]["app/templates/boxes.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<div id=\"box"
    + escapeExpression(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"box ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.closed : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.closed : depth0), {"name":"unless","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.itemsId : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		<div class=\"front\">\n			<div class=\"box-details\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.categoryId : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n		</div>\n	</div>\n";
},"2":function(depth0,helpers,partials,data) {
  return "closed";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = helpers['with'].call(depth0, ((helpers.getCategory || (depth0 && depth0.getCategory) || helperMissing).call(depth0, (depth0 != null ? depth0.categoryId : depth0), {"name":"getCategory","hash":{},"data":data})), {"name":"with","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<div class=\"box-score\">\n					"
    + escapeExpression(lambda((depth0 != null ? depth0.score : depth0), depth0))
    + " puntos\n				</div>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "		<div class=\"filesWrapper\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.itemsId : depth0), {"name":"each","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n";
},"8":function(depth0,helpers,partials,data) {
  return "			<div class=\"box-file\">\n				<div class=\"file\"></div>\n				<div class=\"file-front\"></div>\n			</div>\n";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.closed : depth0), {"name":"unless","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					<div class=\"box-lock\">\n						<i class=\"fa fa-lock fa-2x\"></i>\n					</div>\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = helpers['with'].call(depth0, ((helpers.getCategory || (depth0 && depth0.getCategory) || helperMissing).call(depth0, (depth0 != null ? depth0.categoryId : depth0), {"name":"getCategory","hash":{},"data":data})), {"name":"with","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "							<div class=\"category category"
    + escapeExpression(lambda((depth0 != null ? depth0.score : depth0), depth0))
    + "\">\n								<div class=\"innerWrapper\">\n								"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\n								</div>\n							</div>\n";
},"14":function(depth0,helpers,partials,data) {
  return "					<div class=\"box-lock\">\n						<i class=\"fa fa-unlock-alt fa-2x\"></i>\n					</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.boxes : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});



this["JST"]["app/templates/home.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.header, '', 'header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<nav id='menu-ui' class='menu-ui'></nav>\n<div id='map'></div>\n";
},"usePartial":true,"useData":true});



this["JST"]["app/templates/results.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.unusedItems : depth0), {"name":"unless","hash":{},"fn":this.program(2, data, depths),"inverse":this.program(19, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n			<h2>Ronda: "
    + escapeExpression(((helper = (helper = helpers.roundNumber || (depth0 != null ? depth0.roundNumber : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"roundNumber","hash":{},"data":data}) : helper)))
    + "</h2>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.boxes : depth0), {"name":"each","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"3":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n";
  stack1 = helpers['with'].call(depth0, ((helpers.getCategory || (depth0 && depth0.getCategory) || helperMissing).call(depth0, (depth0 != null ? depth0.categoryId : depth0), {"name":"getCategory","hash":{},"data":data})), {"name":"with","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.result : depth0), {"name":"with","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"4":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<h4>"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\n";
},"6":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "					<p>Puntuación obtenida: "
    + escapeExpression(((helper = (helper = helpers.boxScore || (depth0 != null ? depth0.boxScore : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boxScore","hash":{},"data":data}) : helper)))
    + "</p>\n\n					<div class=\"result-items clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					</div>\n";
},"7":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n";
  stack1 = helpers['with'].call(depth0, ((helpers.getItem || (depth0 && depth0.getItem) || helperMissing).call(depth0, (depth0 != null ? depth0._id : depth0), {"name":"getItem","hash":{},"data":data})), {"name":"with","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"8":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "								<div class=\"item item-"
    + escapeExpression(lambda((depth0 != null ? depth0.color : depth0), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].right : depths[1]), {"name":"if","hash":{},"fn":this.program(9, data, depths),"inverse":this.program(11, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n									<div class=\"innerWrapper\">\n										<div class=\"picture\"><span class=\"v-align\"></span><img src=\""
    + escapeExpression(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"picture","hash":{},"data":data}) : helper)))
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.resHeight : depth0), {"name":"if","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" alt=\"\"></div>\n										<div class=\"name\"><p>"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</p></div>\n									</div>\n									<div class=\"item-badge\">\n										<i class=\"fa ";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].right : depths[1]), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.program(17, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"></i>\n									</div>\n								</div>\n";
},"9":function(depth0,helpers,partials,data) {
  return "correct";
  },"11":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"13":function(depth0,helpers,partials,data) {
  return "resHeight";
  },"15":function(depth0,helpers,partials,data) {
  return "fa-check";
  },"17":function(depth0,helpers,partials,data) {
  return "fa-times";
  },"19":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n			<h2>Items sin usar:</h2>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.unusedItems : depth0), {"name":"each","hash":{},"fn":this.program(20, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"20":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n";
  stack1 = helpers['with'].call(depth0, ((helpers.getItem || (depth0 && depth0.getItem) || helperMissing).call(depth0, depth0, {"name":"getItem","hash":{},"data":data})), {"name":"with","hash":{},"fn":this.program(21, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"21":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "					<div class=\"item item-"
    + escapeExpression(lambda((depth0 != null ? depth0.color : depth0), depth0))
    + "\">\n						<div class=\"innerWrapper\">\n							<div class=\"picture\"><span class=\"v-align\"></span><img src=\""
    + escapeExpression(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"picture","hash":{},"data":data}) : helper)))
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.resHeight : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" alt=\"\"></div>\n							<div class=\"name\"><p>"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</p></div>\n						</div>\n					</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.header, '', 'header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n<div class=\"container results\">\n\n	<h1>Resultados</h1>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.results : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});