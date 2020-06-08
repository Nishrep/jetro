$(function(){ 

	$('.slider__inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.slider__external',
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.png" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.png" alt=""></img>'
	  });

	$('.slider__external').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		centerPadding: '50px',
		asNavFor: '.slider__inner',
		focusOnSelect: true,
		// responsive: [
		// 	{
		// 	  breakpoint: 890,
		// 	  settings: {
		// 		slidesToShow: 5
		// 	  }
		// 	},
		// 	{
		// 		breakpoint: 750,
		// 		settings: {
		// 			slidesToShow: 4
		// 		}
		// 	 },
		// 	 {
		// 		breakpoint: 620,
		// 		settings: {
		// 			arrows: false
		// 		}
		// 	 },
		// 	 {
		// 		breakpoint: 594,
		// 		settings: {
		// 			slidesToShow: 3
		// 		}
		// 	 },
		// 	 {
		// 		breakpoint: 446,
		// 		settings: {
		// 			slidesToShow: 2
		// 		}
		// 	 },
		//  ]
	 });

	 $('.header__menu-btn').on('click', function(){
		$('.header__menu ul').slideToggle();
	 });

});
