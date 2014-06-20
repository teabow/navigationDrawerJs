window.app = window.app || {};

window.app.menuComponent = {
	init: function (title, data) {
		var self = this;
		var dest = $('nav.sliderMenu ul');
		var sliderHeaderTitle = $('nav.sliderMenu header span');
		var sliderList = $('nav.sliderMenu ul');
		var tmp = '';
		for (var i = 0; i < data.length; i++) {
			tmp += '<li data-id="' + data[i].id + '">' + data[i].label + '</li>';	
		}
		dest.html(tmp);

		sliderHeaderTitle.html(title);
		sliderList.height($(window).height() - $('nav.sliderMenu header').height() - 20);
		sliderList.css('left', 0 - sliderList.width());
		setTimeout(function () {
			sliderList.css('-moz-transition', 'left 0.5s');
			sliderList.css('transition', 'left 0.5s');
		}, 100);
		$('nav.sliderMenu header img').on('click', function () {
			self.toggle();
		});
		$('nav.sliderMenu ul li').on('click', function (e) {
			$(document).trigger('menuItem:selected', {id: $(e.currentTarget).attr('data-id'), label: $(e.currentTarget).html()});
		});
	},
	toggle: function () {
		var sliderList = $('nav.sliderMenu ul');
		var sliderIcon = $('nav.sliderMenu header img');
		var dim = $('.dim');
		if (sliderList.hasClass('closed')) {
			sliderList.removeClass('closed').addClass('opened');
			sliderIcon.removeClass('closed').addClass('opened');
			dim.show();
			sliderList.css('left', '-2px');
		}
		else {
			sliderList.removeClass('opened').addClass('closed');
			sliderIcon.removeClass('opened').addClass('closed');
			dim.hide();
			sliderList.css('left', 0 - sliderList.width());
		}
	}
};
