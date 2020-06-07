$(document).ready(function(){
    csrf = $('meta[name="csrf-token"]').attr('content');

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': csrf
        }
    });

	openMobMenu();
	openSubMenu();
	subMenu();

	hoverMenu();
	// modalWindow();
	accordion();
	tabs();
	mobMenu();
	modalTrip();
	konsultModal();
	modalMasterPlants();
	pagination();
	modalBook();
	koychModal();
	subscribeForm();
	consultationForm();
	feedbackForm()
	interviewForm();
	sliderBlog();
	productSlider();
	linkItem();
	anketaForm();
	contactForm();
	modalPlantsForm();
	// modalControl();
	modalKoychForm();
	modalBookForm();
	modalTripForm();
	mainSlider();
	healthCheckboxFilter();
	// psychologicalCheckboxFilter()
	checkRadio();
	scrollTop();
	setCountry();
	meetingBox();
    inputMask();
     disableBtnSearch();
	$('#book-success .modal-close').click(function(){
		$(this).parents('#book-success').fadeOut();
		$('body').removeClass('fixed');
	});

})

function disableBtnSearch(){
     var el = $('.form-search__btn')
    if(el < 1){
        return false;
    };

    if(window.matchMedia("(min-width: 767px)").matches){
        $('.form-search__btn').click(function(){
            var input = $(this).parents('.form-search').find('input')

            if (input.val() == "") {
                $(this).parents('.form-search').find('.form-search__btn').prop('disabled', true);
            }else{
                $(this).parents('.form-search').find('.form-search__btn').prop('disabled', false);
            }
        });
        $('.form-search input').click(function(){
             $(this).parents('.form-search').find('.form-search__btn').prop('disabled', false);
        })
    }
};

function checkRadio(){
    var box = $('.group-yes-no')
    if(box < 1){
        return false;
    };

    $('.group-yes-no input[type=radio]').on('change', function (e) {

       var inputYes = $(this).val()
       if (inputYes == '1') {
        $(this).parents('.group-yes-no').find('input[type=text]').prop('required', true)
        $(this).parents('.group-yes-no').find('.maestro-content__text').show()
        $(this).parents('.group-yes-no').find('.anketa-input-wrapper').show()

    }else{
       $(this).parents('.group-yes-no').find('input[type=text]').prop('required', false)
       $(this).parents('.group-yes-no').find('.maestro-content__text').hide()
       $(this).parents('.group-yes-no').find('.anketa-input-wrapper').hide()
   }
});
}

function meetingBox(){
    var box = $('.group-yes-no');

    if(box < 1){
        return false;
    };

	$('.group-yes-no input[name=meeting]').on('change', function (e) {
		var inputYes = $(this).val()

		if (inputYes == '1') {
			$('[data-type=fields').show()
		}else{
			$('[data-type=fields').hide()
		}
	});
};

function healthCheckboxFilter(){
    var box = $('.checkbox-group');

    if(box < 1){
        return false;
    };

	$('.checkbox-group input[type=checkbox]').on('change', function(e){
		var parentBox =  $(this).closest('.checkbox-group').attr('data-limit');
		var checkInput =  $(this).closest('.checkbox-group').find('input[type=checkbox]:checked');

		if(checkInput.length > parentBox){
			$(this).prop('checked', false);
		}
	});
};

function setCountry(){
    var inputs = $("input[type='tel']");

    if(inputs.length < 1){
        return false;
    };

    $.each(inputs, function(i, el){
        el = $(el);

        var prent_id = el.parents('form').attr('id');

        if(prent_id == 'contactsForm' || prent_id == 'fSettings'){
            return false;
        };

        el.val('');

        var iti = window.intlTelInput(el[0], {
            autoPlaceholder			: 'aggressive',
            dropdownContainer		: document.body,
            initialCountry			: 'ua',
            preferredCountries		: ['ru','ua','by','kz'],
            formatOnDisplay			: true,
            placeholderNumberType	: "MOBILE",
            separateDialCode		: true,
            utilsScript				: "/js/utils.js",

            initialCountry			: "auto",
			geoIpLookup				: function(success, failure){
				$.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp){
					console.log('geoIpLookup:');
					console.log(resp);

					var countryCode = (resp && resp.country) ? resp.country : "";

					console.log('countryCode:');
					console.log(countryCode);

					success(countryCode);
				});
			},
        });

        // el.on('blur', function(){
        //     el.removeClass("error");

        //     if(el.val().trim()){
        //         if(!iti.isValidNumber()){
        //             el.addClass("error");
        //         }
        //     }
        // });
    });
};

function mainSlider(){
    var el = $('.slider-items');

    if(!el.length){
        return false;
    };

    el.slick({
        infinite: true,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: $('.button-slider .prev'),
        nextArrow: $('.button-slider .next'),
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
};

function sliderBlog(){
    var el = $('.slider-blog');

    if(!el.length){
        return false;
    };

    el.slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: $('.prevArrows'),
        nextArrow: $('.nextArrows')

    });
};

function pagination(){
    var el = $('.pagination');

    if(!el.length){
        return false;
    };

    var lengthItem = $('.pagination-item').length;

    if(lengthItem > 4){
        $('.paginationArrowLeft').addClass('show')
    };

    el.slick({
        infinite: false,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: $('.paginationArrowLeft'),
        nextArrow: $('.paginationArrowRight'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
};

function productSlider(){
    var el = $('.product-slider');

    if(!el.length){
        return false;
    };

    el.slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: $('.productPrev'),
        nextArrow: $('.productNext'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
};

// Акардион
function accordion(){
    // (Optional) Active an item if it has the class "is-active"
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

    $(".accordion > .accordion-item").click(function(){
        // Cancel the siblings
        $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    });
};

// hoverMenu

function hoverMenu(){
    var atr;

    $(".header-menu ul li").mouseenter(function(event){
        atr = +event.target.getAttribute('data-number');

        $('.menu-subItem[data-id =\'' + atr + '\']').show();
        $('.header-menu ul li a[data-number =\'' + atr + '\']').addClass('active-item');
    });

    $(".header-menu ul li").mouseleave(function(event){
        $('.menu-subItem[data-id =\'' + atr + '\']').hide();
        $('.header-menu ul li a[data-number =\'' + atr + '\']').removeClass('active-item');
    });

    $(".menu-subItem").mouseleave(function(event){
        $('.menu-subItem').hide();
        $('.header-menu ul li a').removeClass('active-item');
    });
};

function linkItem(){
	var el = $('.links-subMenu-box a');

    if(!el.length){
        return false;
    };

    $(".links-subMenu-box a").click(function(e){
        var el = e.target.getAttribute('data-number');

        $('html, body').animate({
            scrollTop: $('.content-plants').find('div[data-element =\'' + el + '\']').offset().top - 75
        }, 1000);
    });
};

/*Tabs*/
function scrollTop(){
	var el = $('.arrow-box');

	if(!el.length){
		return false;
	};

	el.click(function(){
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 1000, 'linear');
	})
};

function tabs(){
    $('#nav').children('li').first().children('span').addClass('active').next().addClass('is-open').show();

    $('#nav').on('click', 'li > span', function(){
        if(!$(this).hasClass('active')){
            $('#nav .is-open').addClass('is-open').hide();
            // $(this).next().addClass('is-open').toggle();

            $('#nav').find('.active').removeClass('active');
            $(this).addClass('active');
        }else{
            // $('#nav .is-open').removeClass('is-open').hide();
            // $(this).removeClass('active');
        }
    });
};

function mobMenu(){
    // (Optional) Active an item if it has the class "is-active"
    $(".mobNavMenu > .menuitem.is-active").children(".mobMenuItemBox").slideDown();

    $(".mobNavMenu > .menuitem").click(function(){
        // Cancel the siblings
        $(this).siblings(".menuitem").removeClass("is-active").children(".mobMenuItemBox").slideUp();

        // Toggle the item
        $(this).toggleClass("is-active").children(".mobMenuItemBox").slideToggle("ease-out");
    });
};

function openMobMenu(){
    $(".open").click(function(event){
        $('.mobMenu').show();
        $('.open').hide();
        $('.close').show();
        $('body').addClass('hidden');
    });

    $(".close").click(function(event){
        $('.mobMenu').hide();
        $('.close').hide();
        $('.open').show();
        $('body').removeClass('hidden');
    });
};

function openSubMenu(){
    $(".subMenu").click(function(event){
        $('.subMenuWrapper').toggle();

        $('.subMenu').toggleClass('actMenu');
        $('body').toggleClass('backgroundBody');
        $('.title').toggleClass('closeMenu');
    });
};

function subMenu(){
	$(document).on('click', '.mobNavMenu a[role="button"], nav.header-menu a[role="button"]', function(e){
		e.preventDefault();

		return false;
	});

	$(document).on('click', '.mobMenuItemBox a, .menu-subItem a', function(e){
		e.preventDefault();

		var current = $(this),
			href = current.attr('href');

		console.log(href);
		console.log(window.location.href);

		if(href != window.location.href){
			window.location = href;
		}else{
			window.location.reload();
		}
	});
};

function modalTrip(){
    var modal = $('.modal-boxTrip');

    if(!modal.length){
        return false;
    };

    $('.open-konsult').click(function(e){
        e.preventDefault();

        $('.modal-boxTrip .modal-container').arcticmodal();
    })
};

function konsultModal(){
    var modal = $('.modal-konsult');

    if(!modal.length){
        return false;
    };

    $('.open-modalTrip').click(function(e){
		e.preventDefault();

        $('.modal-konsult .modal-container').arcticmodal();
	});
};

function koychModal(){
    var modal = $('.modal-koych');

    if(!modal.length){
        return false;
    };

    $('.open-koych').click(function(e){
        e.preventDefault();

        $('.modal-koych .modal-container').arcticmodal();
	});
};


function modalBook(){
    var modal = $('.modal-book');

    if(!modal.length){
        return false;
    };

    $('.open-modalBook').click(function(e){
        e.preventDefault();

        $('.modal-book .modal-container').arcticmodal();

    });
};

function modalMasterPlants(){
    var modal = $('.modal-MasterPlants');

    if(!modal.length){
        return false;
    };

    $('.open-MasterPlants').click(function(e){
        e.preventDefault();

        $('.modal-MasterPlants .modal-container').arcticmodal();
    });
};

function validateForm(form){
    var valid = form.validate().checkForm();

    if(!valid){
        form.find('button[type="submit"]').prop('disabled', 'disabled');
    };

    form.find('button[type="submit"]').prop('disabled', false);
};

function subscribeForm(){
    var form = jQuery('#subscribeForm');

    if(form.length < 1){
        return false;
    };

    var lock = false,
        action = form.attr('action'),
        btn = form.find('button[type="submit"]');

    form.validate({
        submitHandler	: function(e){
            if(!lock){
                $.ajax({
                    type		: "POST",
                    url			: action,
                    data		: form.serialize(),
                    dataType	: "json",
                    beforeSend	: function(request){
                        lock = true;
                        btn.attr('disabled', true);
                    },
                    success		: function(response){
                        lock = false;
                        btn.attr('disabled', false);

                        if (response.status){
                            form.trigger('reset');
                            $('#subscribeForm').append(`<p class='messageSubscribe'>${response.message}</p>`);

                            btn.hide();

                            setTimeout(function(){
                                $('.messageSubscribe').hide()
                                btn.show()
                            }, 4000);

                            return false;
                        } else {
							$('#subscribeForm').append(`<p class='messageSubscribe'>${response.message}</p>`);
							btn.hide();

							setTimeout(function(){
								$('.messageSubscribe').hide()
								btn.show();
							}, 4000);

                            if(response.errors){

                            }
                        }
                    },
                    error		: function(){
                        lock = false;
                        btn.attr('disabled', false);

						$('#subscribeForm').append(`<p class='messageSubscribe'>Произошла ошибка</p>`);
						btn.hide();

						setTimeout(function(){
							$('.messageSubscribe').hide()
							btn.show();
						}, 4000);
                    }
                });
            };

            return false;
        },
        onkeyup			: false,
        focusCleanup	: true,
        rules			: {
            email: {
                required: true,
                email: true
            },
        },
        messages		: {
            email: {
                required: 'Введите email',
                email: 'Введите корректный email',
            },
        }
    });

    form.on('blur keyup change', 'input', function(event){
        validateForm(form);
    });
};

function interviewForm(){
    var form = jQuery('.formQuestions');

    if(form.length < 1){
        return false;
    };

    var lock = false,
        action = form.attr('action'),
        btn = form.find('button[type="submit"]'),
        statusText = form.find('.form-status');

     form.validate({
        submitHandler	: function(e){
            if(!lock){
                  var phoneForm = form.find('input[name="phone"]'),
                      phone_iti = window.intlTelInputGlobals.getInstance(phoneForm[0]);

                var phone = phone_iti.getNumber().replace(/\D+/g, "");

                $.ajax({
                    type		: "POST",
                    url			: action,
                    data		: serializeformData(form, phone),
                    dataType	: "json",
                    beforeSend	: function(request){
                        lock = true;
                        btn.attr('disabled', true);
                    },
                    success		: function(response){
                        lock = false;
                        btn.attr('disabled', false);

                        if(response.status){
                            form.trigger('reset');

                            btn.hide();
                            statusText.text(response.message);
                            statusText.show();

                            setTimeout(function(){
                                statusText.hide();
                                btn.show();
                            }, 4000);

                            return false;
                        }else{
							btn.hide();
							statusText.text(response.message);
							statusText.show();

							setTimeout(function(){
								statusText.hide();
								btn.show();
							}, 4000);

                            if(response.errors){

                            };
                        };
                    },
                    error		: function(){
                        lock = false;
                        btn.attr('disabled', false);

						btn.hide();
						statusText.text('Произошла ошибка');
						statusText.show();

						setTimeout(function(){
							statusText.hide();
							btn.show();
						}, 4000);
                    }
                });
            };

            return false;
        },
        onkeyup			: false,
        focusCleanup	: true,
        rules			: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            phone: {
                required: true,
                minlength: 7,
                maxlength: 20
            },
        },
        messages		: {
            name: {
                required: 'Введите имя',
                minlength: 'Минимум 2 символа',
                maxlength: 'Максимум 50 символa',
            },
            phone: {
                required: 'Введите номер',
                minlength: 'Введите коректный номер',
                maxlength: 'Максимум 20 символа',
            },
        }
    });

    form.on('blur keyup change', 'input', function(event){
        validateForm(form);
    });
};

function contactForm(){
    var form = jQuery('.contactForm');

    if(form.length < 1){
        return false;
    };

    var lock = false,
        action = form.attr('action'),
        btn = form.find('button[type="submit"]'),
        statusText = form.find('.form-status');

    form.validate({
        submitHandler: function(e){
            if(!lock){
				var phoneForm = form.find('input[name="phone"]'),
					phone_iti = window.intlTelInputGlobals.getInstance(phoneForm[0]);

                var phone = phone_iti.getNumber().replace(/\D+/g, "");

                $.ajax({
                    type		: "POST",
                    url			: action,
                    data		: serializeformData(form, phone),
                    dataType	: "json",
                    beforeSend	: function(request){
                        lock = true;
                        btn.attr('disabled', true);
                    },
                    success		: function(response){
                        lock = false;
                        btn.attr('disabled', false);

                        if(response.status){
                            form.trigger('reset');

                            btn.hide();
                            statusText.text(response.message);
                            statusText.show();

                            setTimeout(function(){
                                statusText.hide();
                                btn.show();
                            }, 4000);

                            return false;
                        }else{
							btn.hide();
							statusText.text(response.errors);
							statusText.show();

							setTimeout(function(){
								statusText.hide();
								btn.show();
							}, 4000);

                            if(response.errors){

                            };
                        };
                    },
                    error		: function(){
                        lock = false;
                        btn.attr('disabled', false);

						btn.hide();
						statusText.text('Произошла ошибка');
						statusText.show();

						setTimeout(function(){
							statusText.hide();
							btn.show();
						}, 4000);
                    }
                });
            };

            return false;
        },
        onkeyup		: false,
        focusCleanup: true,
        rules		: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            phone: {
                required: true,
                minlength: 7,
                maxlength: 20
            },
        },
        messages	: {
            name: {
                required: 'Введите имя',
                minlength: 'Минимум 2 символа',
                maxlength: 'Максимум 50 символa',
            },
            phone: {
                required: 'Введите номер',
                minlength: 'Введите коректный номер',
                maxlength: 'Максимум 20 символа',
            },
        }
    });

    form.on('blur keyup change', 'input', function(event){
        validateForm(form);
    });
};

function serializeformData(form, phone){
	var form;
	var formData = form.serializeArray();
	var obj = {};

	for (var item of formData){
		var key = item.name;
		var val = item.value;

		obj[key] = val;
	};

	obj.phone = phone;
	return obj;
};

function consultationForm(){
    var form = jQuery('#formConsultant ');

    if(form.length < 1){
        return false;
    };

    var lock = false,
        action = form.attr('action'),
        btn = form.find('button[type="submit"]');

	form.validate({
        submitHandler	: function(e){
            if(!lock){
				var phoneForm = form.find('input[name="phone"]'),
					phone_iti = window.intlTelInputGlobals.getInstance(phoneForm[0]);

                var phone = phone_iti.getNumber().replace(/\D+/g, "");

                $.ajax({
                    type		: "POST",
                    url			: action,
                    data		: serializeformData(form, phone),
                    dataType	: "json",
                    beforeSend	: function(request){
                        lock = true;
                        btn.attr('disabled', true);
                    },
                    success		: function(response){
                        lock = false;
                        btn.attr('disabled', false);

                        if(response.status){
                            form.trigger('reset');
                            btn.hide();
                            form.append(`<p class='messageSubscribe'>${response.message}</p>`);

                            setTimeout(function(){
                                $('.messageSubscribe').hide();
                                btn.show();
                            }, 4000);

                            return false;
                        } else {
							btn.hide()
							form.append(`<p class='messageSubscribe'>${response.message}</p>`);

							setTimeout(function(){
								$('.messageSubscribe').hide();
								btn.show();
							}, 4000);

                            if (response.errors) {

                            }
                        }
                    },
                    error		: function(){
						lock = false;
						btn.attr('disabled', false);
						btn.hide();

						statusText.text('Произошла ошибка');
						statusText.show();

						setTimeout(function(){
							statusText.hide();
							btn.show();
						}, 4000);
                    }
                });
            };

            return false;
        },
        onkeyup			: false,
        focusCleanup	: true,
        rules			: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            phone: {
                required: true,
                minlength: 7,
                maxlength: 20
            },
            text: {
                required: true,
                minlength: 5,
                maxlength: 500
            },
        },
        messages		: {
            name: {
                required: 'Введите имя',
                minlength: 'Минимум 2 символа',
                maxlength: 'Максимум 50 символa',
            },
            phone: {
                required: 'Введите номер',
                minlength: 'Минимум 7 символа',
                maxlength: 'Максимум 20 символа',
            },
            text: {
                required: 'Введіть текст',
                minlength: 'Максимум 5 символа',
                maxlength: 'Максимум 500 символа',
            },
        }
    });

    form.on('blur keyup change', 'input', function(event){
        validateForm(form);
    });
};

function serializeAnketaForm(form,phoneForm, phoneFormExtra, phoneFormMeeting){
	var formData = form.serializeArray();
	var obj = {};

	for (var item of formData){
		var key = item.name;
		var val = item.value;

		obj[key] = val;
	};

	if(phoneForm.val() != '' && phoneForm.length > 0){
		var  phone_iti = window.intlTelInputGlobals.getInstance(phoneForm[0]);
		var phone = phone_iti.getNumber().replace(/\D+/g, "");

		obj.phone = phone;
	};

	if(phoneFormExtra.val() != '' && phoneFormExtra.length > 0){
		var phone_itiExtra = window.intlTelInputGlobals.getInstance(phoneFormExtra[0]);
		var phoneExtra = phone_itiExtra.getNumber().replace(/\D+/g, "");

		obj['extra[phone]'] = phoneExtra;
	};

	if(phoneFormMeeting.val() != '' && phoneFormMeeting.length > 0){
		var phone_itiMeeting = window.intlTelInputGlobals.getInstance(phoneFormMeeting[0]);
		var phoneMeeting = phone_itiExtra.getNumber().replace(/\D+/g, "");

		obj['meeting-fields[phone]'] = phoneFormMeeting;
	};

	return obj;
};

function removeErrorStatus(){
	$('.health-checkbox input').change(function(){
        $(this).parents('.health-checkbox').find('.checkboxError').remove();
	});
};

function inputCheck(){
	var inputCheck = $('.health-checkbox');
	var dataValue = $('.health-checkbox').data('required');

	var statusCheck;

	if(inputCheck.length){
		$.each(inputCheck, function(index, element){
			var elInput = $(element).find('input:checkbox:checked');

			if(elInput.length < 1){
				$(element).append(`<p class="checkboxError">${dataValue}</p>`);

				$('html').animate({
					scrollTop: $('.checkboxError').offset().top - 250
				}, 500);

				statusCheck = false;

				return false;
			} else {
				$('.checkboxError').hide();
			}
		});
	};

	return statusCheck;
};

function anketaForm(){
    var form = jQuery('#anketaForm');

    if(form.length < 1){
        return false;
    };

    var lock = false,
        action = form.attr('action'),
        btn = form.find('button[type="submit"]'),
        statusText = form.find('.form-status');

    var el = $('div[data-key=meeting-fields');
    var skypeMeeting = $('input[name="meeting-fields[skype]"]');
    var telMeeting = $('input[name="meeting-fields[phone]"]');

    var yearInp = $('#year-inp');

    try {
		form.validate({
			submitHandler: function(e){
				if(!lock){
					try {
						// Проверка meeting

						if(el.is(':visible')){
							var skypeMeetingVal = skypeMeeting.val() != '';
							var telMeetingVal = telMeeting.val() != '';
							var changeInput = $('div[data-key=meeting-fields').find(':input');

							$('div[data-key=meeting-fields] input').change(function(){
								if(skypeMeeting.val().length >= 4 || telMeeting.val().length >= 9){
									$('.errorMeeting').hide();
								}
							});

							if(!skypeMeetingVal && !telMeetingVal){
								$('.errorMeeting').text('Заполните одно из полей').show();

								$('html').animate({
									scrollTop: $('.errorMeeting').offset().top - 250
								}, 500);

								return false;
							} else {
								$('.errorMeeting').hide()
							}
						};

						// Проверка checkboч
						var statusCheck = inputCheck();

						removeErrorStatus();

						if(!statusCheck && typeof statusCheck !== "undefined"){
							return false;
						};

						var phoneForm = form.find('input[name="phone"]');
						var phoneFormExtra = form.find('input[name="extra[phone]"]');
						var phoneFormMeeting = form.find('input[name="meeting-fields[phone]');

						$.ajax({
							type: "POST",
							url: action,
							data: serializeAnketaForm(form, phoneForm, phoneFormExtra, phoneFormMeeting),
							dataType: "json",
							beforeSend: function(request){
								lock = true;
								btn.attr('disabled', true);
							},
							success: function(response){
								lock = false;
								btn.attr('disabled', false);

								if(response.status){
									form.trigger('reset');
									btn.hide();

									statusText.text(response.message);
									statusText.show();

									setTimeout(function(){
										statusText.hide();
										btn.show();
									}, 4000);

									return false;
								}else{
									btn.hide();
									statusText.text(response.message);
									statusText.show();

									setTimeout(function(){
										statusText.hide();
										btn.show();
									}, 4000);
								};
							},
							error: function(){
								lock = false;
								btn.attr('disabled', false);

								btn.hide();
								statusText.text('Произошла ошибка');
								statusText.show();

								setTimeout(function(){
									statusText.hide();
									btn.show();
								}, 4000);
							}
						});
					}catch (e){
						console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
					}
				};

				return false;
			},
			onkeyup		: false,
			focusCleanup: true,
			rules		: {
				name: {
					required: true,
					minlength: 2,
					maxlength: 50
				},
				phone: {
					required: true,
					minlength: 7,
					maxlength: 20
				},
				day: {
					required	: true,
					digits		: true,
					min			: 1,
					max			: 31
				},
				month: {
					required	: true,
					digits		: true,
					min			: 1,
					max			: 12
				},
				year: {
					required	: true,
					digits		: true,
					min			: parseInt(yearInp.attr('min')),
					max			: parseInt(yearInp.attr('max')),
				},
				"confirm[medicines]": {
					required: true,
				},
				"confirm[alcohol]": {
					required: true,
				},
				"confirm[honestly]": {
					required: true,
				},
				"confirm[read]": {
					required: true,
				},
				'extra[name]'		: {
					required	: false,
					minlength	: 2,
					maxlength	: 50
				},
				"extra[phone]"		: {
					required	: false,
					minlength	: 7,
					maxlength	: 20
				},
				"ceremonia-text"	: {
					required	: false,
					minlength	: 2,
					maxlength	: 250,
				},
				"plants-text"		: {
					required	: false,
					minlength	: 2,
					maxlength	: 250,
				},
				"operation-text"	: {
					required	: true,
					minlength	: 2,
					maxlength	: 250,
				},
				"health-status": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"psychological-medicines-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"anamnesis-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"alcohol-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"diagnosis-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"dependence-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"allergy-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"antidepressants-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"prescription-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"vitamins-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"diet-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"dangerous-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				intentions: {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"health-story-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"traumatic-incident-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"way-life": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				"meeting-text": {
					required: true,
					minlength: 2,
					maxlength: 250,
				},
				pregnant: {
					required: true,
				},
				ceremonia: {
					required: true,
				},
				plants: {
					required: true,
				},
				operation: {
					required: true,
				},
				'psychological-medicines': {
					required: true,
				},
				anamnesis: {
					required: true,
				},
				diagnosis: {
					required: true,
				},
				dependence: {
					required: true,
				},
				allergy: {
					required: true,
				},
				antidepressants: {
					required: true,
				},
				allergy: {
					required: true,
				},
				prescription: {
					required: true,
				},
				vitamins: {
					required: true,
				},
				diet: {
					required: true,
				},
				allergy: {
					required: true,
				},
				ration: {
					required: true,
				},
				'health-story': {
					required: true,
				},
				'traumatic-incident': {
					required: true,
				},
				meeting: {
					required: true,
				},
				dangerous: {
					required: true,
				},
				marriage: {
					required: true,
				},
				alcohol:{
					 required: true,
				}
			},
			messages	: {
				name: {
					required: 'Введите имя',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 50 символa',
				},
				phone: {
					required: 'Введите номер',
					minlength: 'Введите коректный номер',
					maxlength: 'Максимум 20 символа',
				},
				day: {
					required	: 'Введите день',
					digits		: 'Поле является числом',
					min			: 'Минимум 1',
					max			: 'Максимум 31',
				},
				month: {
					required	: 'Введите месяц',
					digits		: 'Поле является числом',
					min			: 'Минимум 1',
					max			: 'Максимум 12',
				},
				year: {
					required	: 'Введите год',
					digits		: 'Поле является числом',
					min			: 'Минимум '+parseInt(yearInp.attr('min')),
					max			: 'Максимум '+parseInt(yearInp.attr('max')),
				},
				'extra[name]': {
					required: 'Введите имя',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 50 символa',
				},
				"confirm[medicines]": {
					required: 'Подтвердите соглашение',
				},
				"confirm[alcohol]": {
					required: 'Подтвердите соглашение',
				},
				"confirm[honestly]": {
					required: 'Подтвердите соглашение',
				},
				"confirm[read]": {
					required: 'Подтвердите соглашение',
				},
				"extra[phone]": {
					required: 'Введите номер',
					minlength: 'Введите коректный номер',
					maxlength: 'Максимум 19 символа',
				},
				"ceremonia-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"plants-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"operation-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"health-status": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"psychological-medicines-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"anamnesis-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"alcohol-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"diagnosis-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"dependence-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"allergy-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"antidepressants-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"prescription-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"vitamins-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"diet-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"dangerous-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				intentions: {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"health-story-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"traumatic-incident-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"way-life": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				"meeting-text": {
					required: 'Введите текст',
					minlength: 'Минимум 2 символа',
					maxlength: 'Максимум 250 символа',
				},
				pregnant: {
					required: 'Введите один из вариантов',
				},
				ceremonia: {
					required: 'Введите один из вариантов',
				},
				plants: {
					required: 'Введите один из вариантов',
				},
				operation: {
					required: 'Введите один из вариантов',
				},
				'psychological-medicines': {
					required: 'Введите один из вариантов',
				},
				anamnesis: {
					required: 'Введите один из вариантов',
				},
				diagnosis: {
					required: 'Введите один из вариантов',
				},
				dependence: {
					required: 'Введите один из вариантов',
				},
				allergy: {
					required: 'Введите один из вариантов',
				},
				antidepressants: {
					required: 'Введите один из вариантов',
				},
				allergy: {
					required: 'Введите один из вариантов',
				},
				prescription: {
					required: 'Введите один из вариантов',
				},
				vitamins: {
					required: 'Введите один из вариантов',
				},
				diet: {
					required: 'Введите один из вариантов',
				},
				allergy: {
					required: 'Введите один из вариантов',
				},
				ration: {
					required: 'Введите один из вариантов',
				},
				'health-story': {
					required: 'Введите один из вариантов',
				},
				'traumatic-incident': {
					required: 'Введите один из вариантов',
				},
				meeting: {
					required: 'Введите один из вариантов',
				},
				dangerous: {
					required: 'Введите один из вариантов',
				},
				marriage: {
					required: 'Введите один из вариантов',
				},
				alcohol:{
					 required: 'Введите один из вариантов',
				}
			}
		});
    }catch (e){
		console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
	};

	form.on('change', 'input[type="checkbox"][data-main]', function(e){
		var current = $(this),
			main = current.attr('data-main') == '1';

		if(current.prop('checked')){
			if(main){
				var parent = current.parents('.anketa-input-group');

				parent.find('input[type="checkbox"][data-main="0"]').prop('checked', false).attr('disabled', true);
				parent.find('input[type="text"]').val('');
			}
		}else{
			if(main){
				var parent = current.parents('.anketa-input-group');

				parent.find('input[type="checkbox"][data-main="0"]').prop('checked', false).attr('disabled', false);
			}
		}
	});

    try {
		form.on('blur keyup change', 'input', function(event){
			validateForm(form);
		});
    }catch (e){
		console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
	}
};

function feedbackForm(){
    var form = jQuery('#feedback-form');

    if(form.length < 1){
        return false;
    };

    var lock		= false,
        action		= form.attr('action'),
        btn			= form.find('button[type="submit"]'),
        statusText	= form.find('.form-status');

    form.validate({
        submitHandler	: function(e){
            if(!lock){
				var phoneForm = form.find('input[name="phone"]'),
					phone_iti = window.intlTelInputGlobals.getInstance(phoneForm[0]);

                var phone = phone_iti.getNumber().replace(/\D+/g, "");

                $.ajax({
                    type		: "POST",
                    url			: action,
                    data		: serializeformData(form, phone),
                    dataType	: "json",
                    beforeSend	: function(request){
                        lock = true;
                        btn.attr('disabled', true);
                    },
                    success		: function(response){
                        lock = false;
                        btn.attr('disabled', false);

                        if(response.status){
                            form.trigger('reset');

                            btn.hide();
                            statusText.text(response.message);
                            statusText.show();

                            setTimeout(function(){
                                statusText.hide();
                                btn.show();
                            }, 4000);
                        }else{
							btn.hide();
							statusText.text(response.message);
							statusText.show();

							setTimeout(function(){
								statusText.hide();
								btn.show();
							}, 4000);

                            if(response.errors){
                            }
                        }
                    },
                    error		: function(){
                        lock = false;
                        btn.attr('disabled', false);

						btn.hide();
						statusText.text('Произошла ошибка');
						statusText.show();

						setTimeout(function(){
							statusText.hide();
							btn.show();
						}, 4000);
                    }
                });
            };

            return false;
        },
        onkeyup			: false,
        focusCleanup	: true,
        rules			: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            phone: {
                required: true,
                minlength: 8,
                maxlength: 19
            },
            text: {
                required: true,
                minlength: 5,
                maxlength: 500
            },
        },
        messages		: {
            name: {
                required: 'Введите имя',
                minlength: 'Минимум 2 символа',
                maxlength: 'Максимум 50 символa',
            },
            phone: {
                required: 'Введите номер',
                minlength: 'Введите коректный номер',
                maxlength: 'Максимум 19 символа',
            },
            text: {
                required: 'Введите сообщение',
                minlength: 'Минимум 5 символа',
                maxlength: 'Максимум 500 символа',
            },
        }
    });

    form.on('blur keyup change', 'input', function(event){
        validateForm(form);
    });
};

function modalTripForm(){
    var form = jQuery('#modalTrip');

    if(form.length < 1){
        return false;
    };

    var lock = false,
        action = form.attr('action'),
        btn = form.find('button[type="submit"]'),
        statusText = form.find('.form-status');

    form.validate({
        submitHandler: function (e) {
            if(!lock){
				var phoneForm = form.find('input[name="phone"]'),
					phone_iti = window.intlTelInputGlobals.getInstance(phoneForm[0]);

                var phone = phone_iti.getNumber().replace(/\D+/g, "");

                $.ajax({
                    type: "POST",
                    url: action,
                    data: serializeformData(form, phone),
                    dataType: "json",
                    beforeSend: function (request) {
                        lock = true;
                        btn.attr('disabled', true);
                    },
                    success: function (response) {
                        lock = false;
                        btn.attr('disabled', false);

                        if (response.status) {
                            form.trigger('reset');

                            btn.hide();

                            statusText.text(response.message);
                            statusText.show();

                            setTimeout(function(){
                                statusText.hide();
                                btn.show();
                            }, 4000);
                        } else {
                            if(response.errors){
                                btn.hide();

                                statusText.text(response.message);
                                statusText.show();

                                setTimeout(function(){
                                    statusText.hide();
                                    btn.show();
                                }, 4000);
                            }
                        };
                    },
                    error: function () {
                        lock = false;
                        btn.attr('disabled', false);

                        btn.hide();

						statusText.text('Произошла ошибка');
						statusText.show();

						setTimeout(function(){
							statusText.hide();
							btn.show();
						}, 4000);
                    }
                });
            };

            return false;
        },
        onkeyup: false,
        focusCleanup: true,
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            phone: {
                required: true,
                minlength: 8,
                maxlength: 19
            },
        },
        messages: {
            name: {
                required: 'Введите имя',
                minlength: 'Минимум 2 символа',
                maxlength: 'Максимум 50 символa',
            },
            phone: {
                required: 'Введите номер',
                minlength: 'Введите коректный номер',
                maxlength: 'Максимум 19 символа',
            },
        }
    });

    form.on('blur keyup change', 'input', function (event) {
        validateForm(form);
    });
};

function modalBookForm(){
    var form = jQuery('#modalBook');

    if(form.length < 1){
        return false;
    };

    var lock = false,
        action = form.attr('action'),
        btn = form.find('button[type="submit"]');

    form.validate({
        submitHandler: function (e) {
            if (!lock) {
                $.ajax({
					type    : "POST",
					url     : action,
					data    : form.serialize(),
					dataType  : "json",
					beforeSend  : function(request){
						lock = true;
						btn.attr('disabled', true);

					},
				   success: function (response) {
						  lock = false;
						  btn.attr('disabled', false);

						  if (response.status) {
							  form.trigger('reset');

							  btn.hide()
							  statusText.text(response.message)
							  statusText.show()
							  setTimeout(function () {
								  statusText.hide();
								  btn.show();
							  }, 4000);

						  } else {


							  if (response.errors) {
								  btn.hide()
								  statusText.text(response.message)
								  statusText.show()
								  setTimeout(function () {
									  statusText.hide();
									  btn.show();
								  }, 4000);
							  }
							  ;
						  }
						  ;
					  },
					error: function(){
						lock = false;
						btn.attr('disabled', false);

						btn.hide();

						statusText.text('Произошла ошибка');
						statusText.show();

						setTimeout(function(){
							statusText.hide();
							btn.show();
						}, 4000);
					}
				});
            };

            return false;
        },
        onkeyup: false,
        focusCleanup: true,
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            email: {
                required: 'Введите email',
                email: 'Введите корректный email',
            },
        }
    });

    form.on('blur keyup change', 'input', function (event) {
        validateForm(form);
    });
};

function modalKoychForm(){
    var form = jQuery('#formKoych');

    if (form.length < 1) {
        return false;
    }
    ;

    var lock = false,
        action = form.attr('action'),
        btn = form.find('button[type="submit"]');
        statusText = form.find('.form-status');


    form.validate({
        submitHandler: function (e) {
            if (!lock) {
                $.ajax({
                            type    : "POST",
                            url     : action,
                            data    : form.serialize(),
                            dataType  : "json",
                            beforeSend  : function(request){
                                lock = true;
                                btn.attr('disabled', true);

                            },
                           success: function (response) {
                                  lock = false;
                                  btn.attr('disabled', false);

                                  if (response.status) {
                                      form.trigger('reset');

                                      btn.hide()
                                      statusText.text(response.message)
                                      statusText.show()
                                      setTimeout(function () {
                                          statusText.hide();
                                          btn.show();
                                      }, 4000);

                                  } else {


                                      if (response.errors) {
                                          btn.hide()
                                          statusText.text(response.message)
                                          statusText.show()
                                          setTimeout(function () {
                                              statusText.hide();
                                              btn.show();
                                          }, 4000);
                                      }
                                      ;
                                  }
                                  ;
                              },
                            error: function(){
                                lock = false;
                                btn.attr('disabled', false);

                                btn.hide()
                                statusText.text('Произошла ошибка')
                                statusText.show()
                                    setTimeout(function () {
                                        statusText.hide();
                                        btn.show();
                                    }, 4000);

                            }
                        });
            }
            ;

            return false;
        },
        onkeyup: false,
        focusCleanup: true,
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            email: {
                required: 'Введите email',
                email: 'Введите корректный email',
            },
        }
    });

    form.on('blur keyup change', 'input', function (event) {
        validateForm(form);
    });
};

function modalPlantsForm(){
    var form = jQuery('.form-MasterPlants');

    if (form.length < 1) {
        return false;
    };

    var lock = false,
        action = form.attr('action'),
        btn = form.find('button[type="submit"]'),
       statusText = form.find('.form-status');


    form.validate({
       submitHandler: function (e) {
            if (!lock) {
                  var phoneForm = form.find('input[name="phone"]'),
                      phone_iti = window.intlTelInputGlobals.getInstance(phoneForm[0]);

                var phone = phone_iti.getNumber().replace(/\D+/g, "");

                $.ajax({
                    type: "POST",
                    url: action,
                    data: serializeformData(form, phone),
                    dataType: "json",
                    beforeSend: function (request) {
                        lock = true;
                        btn.attr('disabled', true);

                    },
                    success: function (response) {
                        lock = false;
                        btn.attr('disabled', false);

                        if (response.status) {
                            form.trigger('reset');

                            btn.hide()
                            statusText.text(response.message)
                            statusText.show()
                            setTimeout(function () {
                                statusText.hide();
                                btn.show();
                            }, 4000);

                        } else {


                            if (response.errors) {
                                btn.hide()
                                statusText.text(response.message)
                                statusText.show()
                                setTimeout(function () {
                                    statusText.hide();
                                    btn.show();
                                }, 4000);
                            }
                            ;
                        }
                        ;
                    },
                    error: function () {
                        lock = false;
                        btn.attr('disabled', false);

                        btn.hide()
                         statusText.text('Произошла ошибка')
                         statusText.show()
                            setTimeout(function () {
                                statusText.hide();
                                btn.show();
                            }, 4000);

                    }
                });
            };

            return false;
        },
        onkeyup: false,
        focusCleanup: true,
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            phone: {
                required: true,
                minlength:9,
                maxlength: 19
            },
        },
        messages: {
            name: {
                required: 'Введите имя',
                minlength: 'Минимум 2 символа',
                maxlength: 'Максимум 50 символa',
            },
            phone: {
                required: 'Введите номер',
                minlength: 'Введите коректный номер',
                maxlength: 'Максимум 19 символа',
            },
        }
    });

    form.on('blur keyup change', 'input', function (event) {
        validateForm(form);
    });
};

function consultationForm(){
    var form = jQuery('#formKonsult ');

    if (form.length < 1) {
        return false;
    }
    ;

    var lock = false,
        action = form.attr('action'),
        btn = form.find('button[type="submit"]'),
        statusText = form.find('.form-status');


     form.validate({
        submitHandler: function (e) {
            if (!lock) {
                  var phoneForm = form.find('input[name="phone"]'),
                      phone_iti = window.intlTelInputGlobals.getInstance(phoneForm[0]);

                var phone = phone_iti.getNumber().replace(/\D+/g, "");

                $.ajax({
                    type: "POST",
                    url: action,
                    data: serializeformData(form, phone),
                    dataType: "json",
                    beforeSend: function (request) {
                        lock = true;
                        btn.attr('disabled', true);

                    },
                    success: function (response) {
                        lock = false;
                        btn.attr('disabled', false);

                        if (response.status) {
                            form.trigger('reset');

                            btn.hide()
                            statusText.text(response.message)
                            statusText.show()
                            setTimeout(function () {
                                statusText.hide();
                                btn.show();
                            }, 4000);

                        } else {


                            if (response.errors) {
                                btn.hide()
                                statusText.text(response.message)
                                statusText.show()
                                setTimeout(function () {
                                    statusText.hide();
                                    btn.show();
                                }, 4000);
                            }
                            ;
                        }
                        ;
                    },
                    error: function () {
                        lock = false;
                        btn.attr('disabled', false);

                        btn.hide()
                         statusText.text('Произошла ошибка')
                         statusText.show()
                            setTimeout(function () {
                                statusText.hide();
                                btn.show();
                            }, 4000);

                    }
                });
            }
            ;
            return false;
        },
        onkeyup: false,
        focusCleanup: true,
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            phone: {
                required: true,
                minlength: 8,
                maxlength: 19
            },
            text: {
                required: true,
                minlength: 5,
                maxlength: 500
            },
        },
        messages: {
            name: {
                required: 'Введите имя',
                minlength: 'Минимум 2 символа',
                maxlength: 'Максимум 50 символa',
            },
            phone: {
                required: 'Введите номер',
                minlength: 'Введите коректный номер',
                maxlength: 'Максимум 19 символа',
            },
            text: {
                required: 'Введіть текст',
                minlength: 'Максимум 5 символа',
                maxlength: 'Максимум 500 символа',
            },
        }
    });

    form.on('blur keyup change', 'input', function (event) {
        validateForm(form);
    });
};

function inputMask(){
     var el = $('input[type=tel]');

    if(!el.length){
        return false;
    };

	$('input[type=tel]').on('click', function(){
		var input = $(this).closest('.iti').find("input[type=tel]");

		if(!input.length){
			return true;
		};

		var val = input.attr('placeholder');

		if((typeof val) == 'undefined'){
			input.attr('placeholder', '');
			input.mask('');

			return true;
		};

		input.attr('placeholder', val);
		input.mask(val.replace(new RegExp("[0-9]", "g"), "9"));
	});
};
