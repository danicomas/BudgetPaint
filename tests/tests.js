$.ajaxSettings.url = 'base/public/';

describe("Canvas View", function() { 
  describe("Change color", function() {
    var spyEvent;
       
	$("body").append("<div class='container'></div>");
	
	var model = new canvasModel({})
    new canvasView({model: model, el: $('.container')});
	   
    beforeEach(function() {
	
		 
    });
	
	afterEach(function () {
    });
       
    it ("should change the color of the canvas", function(done) {
		  setTimeout(function () {		
		  $('.picker-text').colorpicker('setValue', "#344444");
		
		  expect($('.picker-text').data('colorpicker').color.toHex()).toBe("#344444");

		  var canvas = $("#canvas");
		  var context=canvas[0].getContext("2d");

		  expect(context.fillStyle).toBe("#344444");
		
			done();
		}, 500);
    });
    it ("should add border to the canvas", function(done) {
		setTimeout(function () {
		  spyEvent = spyOnEvent('#increaseLineWeight', 'click');
		  $('#increaseLineWeight').trigger( "click" );
		  expect(spyEvent).toHaveBeenTriggered();

		  expect(model.attributes.lineWidth).toBe(11);

		  var canvas = document.createElement("canvas");
		  canvas.width = $("#canvas").width();
		  canvas.height = $("#canvas").height();
		  var context=canvas.getContext("2d");
		  context.fillStyle= model.attributes.color;
		  context.lineWidth = model.attributes.lineWidth;
		  var h=parseInt(canvas.height);
		  var w=parseInt(canvas.width);
		  context.fillRect(0,0,w - model.attributes.lineWidth,h - model.attributes.lineWidth);
		  context.strokeRect(model.attributes.lineWidth / 2, model.attributes.lineWidth / 2, w - model.attributes.lineWidth, h - model.attributes.lineWidth);

		  var dataURL = canvas.toDataURL();
		  expect(dataURL).toBe($("#canvas")[0].toDataURL());
		  done();
		}, 500);
    });
    it ("reset Canvas", function(done) {
		setTimeout(function () {
		  spyEvent = spyOnEvent('#resetCanvas', 'click');
		  $('#resetCanvas').trigger( "click" );
		  expect(spyEvent).toHaveBeenTriggered();

		  expect(model.attributes.lineWidth).toBe(10);

		  var canvas = document.createElement("canvas");
		  canvas.width = $("#canvas").width();
		  canvas.height = $("#canvas").height();
		  var context=canvas.getContext("2d");
		  context.fillStyle= model.defaults.color;
		  context.lineWidth = model.defaults.lineWidth;
		  var h=parseInt(canvas.height);
		  var w=parseInt(canvas.width);
		  context.fillRect(0,0,w - model.defaults.lineWidth,h - model.defaults.lineWidth);
		  context.strokeRect(model.defaults.lineWidth / 2, model.defaults.lineWidth / 2, w - model.defaults.lineWidth, h - model.defaults.lineWidth);

		  var dataURL = canvas.toDataURL();
		  expect(dataURL).toBe($("#canvas")[0].toDataURL());
		  done();
	  }, 500);
    });
  });
});