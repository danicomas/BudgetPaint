var canvasView = Backbone.View.extend({
	    el: $('.container'),
		    initialize: function(){
		      _.bindAll(this, 'render');

		      //$(window).resize( this.resizeCanvas );
		      var view = this;
		     	$(window).on("resize", function(e) {
				  	view.resizeCanvas();
				});

		       this.render();
		    },
		    events : {
	          "click #resetCanvas" : "resetCanvas",
	          "click #increaseLineWeight" : "increaseLineWeight"
	        },
		    render: function(){
		    	var view = this;

				$.get($.ajaxSettings.url + 'templates/canvasViewTemplate.html', function(result) {
					$(view.el).append(_.template(result));

					view.$('.picker-text').attr("data-color", view.model.attributes.color);

					view.$('.picker-text').colorpicker({
					}).on('changeColor.colorpicker', function(event){
						view.model.attributes.color =  event.color.toHex();
						$(this).css("background-color", view.model.attributes.color);
						view.draw();
					});

					view.resizeCanvas();

					view.$('.picker-text').colorpicker('setValue', view.model.attributes.color);
				});
		    },
		    resetCanvas : function () {
				this.model.attributes.lineWidth = this.model.defaults.lineWidth;
				this.model.attributes.color = this.model.defaults.color;
				this.draw();
				this.$('.picker-text').colorpicker('setValue', this.model.attributes.color);
			},
			increaseLineWeight : function(){
				++this.model.attributes.lineWidth;
				this.draw();	
			},
			draw: function() {
				var canvas = this.$("#canvas");

	    		var context=canvas[0].getContext("2d");
				context.fillStyle= this.model.attributes.color;
				context.lineWidth = this.model.attributes.lineWidth;
				var h=parseInt(canvas[0].height);
			  	var w=parseInt(canvas[0].width);
				context.fillRect(0,0,w - this.model.attributes.lineWidth,h - this.model.attributes.lineWidth);
				context.strokeRect(this.model.attributes.lineWidth / 2, this.model.attributes.lineWidth / 2, w - this.model.attributes.lineWidth, h - this.model.attributes.lineWidth);
	    	},
		    resizeCanvas: function() { 
		    	var canvas = this.$("#canvas");
		    	var container = this.$(canvas).parent();

		        canvas.attr('width', $(container).width() );
		        canvas.attr('height', $(container).height());

		        this.model.attributes.color = this.$('.picker-text').data('colorpicker').color.toHex();

		        this.draw();
		    }
		  });