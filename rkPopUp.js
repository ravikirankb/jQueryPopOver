
(function ($) {
	$.fn.alertMessage = function (options) {
		var overlay = $('<div id="overlay"></div>'); //set backgroud black when popup is open
		var alertOverlay = $('<div id="overlayAlert"></div>');
		var __okbutton = $(".p-confirm");
		var __cancelbutton = $(".p-cancel");
		var __closebutton = $(".p-close");

		var defaults = $.extend({
			type: "info",
			text: "",
			defaultFocus: "cancel",
			showConfirmationButton: false,
			onConfirmation: function () { },
			onCancel: function () { },
			onClose: function () { }
		}, options);

		switch (defaults.type) {
			case "info":
				$('.p-alert-img').attr('src', '../images/alert-green.png');
				$(".alert_wrapper").css("display", "block");
				break;
			case "warning":
				$('.p-alert-img').attr('src', '../images/alert-yellow.png');
				$(".alert_wrapper").css("display", "block");
				break;
			case "success":
				$('.p-alert-img').attr('src', '../images/alert-green.png');
				$(".alert_wrapper").css("display", "block");
				break;
			case "error":
				$('.p-alert-img').attr('src', '../images/alert-red.png');
				$(".alert_wrapper").css("display", "block");
				break;
			default:
				$('.p-alert-img').attr('src', '../images/alert-green.png');
				$(".alert_wrapper").css("display", "block");
				break;
		}

		$("#alert-content").html(defaults.text);

		/// Sets the default focus to either cancel or confirm
		if (defaults.defaultFocus == "cancel" && defaults.showConfirmationButton) {
			__cancelbutton.focus();
		}
		else {
			__okbutton.focus();
		}

		/// Invoke confirmation click handler
		__okbutton.on("click", function () {
			defaults.onConfirmation.call(this);
			CloseOverLay();
		});

		/// Invoke cancel click handler
		__cancelbutton.on("click", function () {
			defaults.onCancel.call(this);
			CloseOverLay();
		});

		///Invoke close click handler
		__closebutton.on("click", function () {
			defaults.onClose.call(this);
			CloseOverLay();
		});

		function CloseOverLay() {
			$('#confirmAlert').hide();
			alertOverlay.hide();
			removeHandlers();
		}

		function removeHandlers() {
			__cancelbutton.off();
			__okbutton.off();
			__closebutton.off();
		}

		alertOverlay.show();
		alertOverlay.appendTo(document.body);
	}

})(jQuery);
