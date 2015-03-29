'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        if(!fullpage_initialized){
            init_fullpage();
        }
        else{
            $.fn.fullpage.destroy('all');
            init_fullpage();
        }
	}
]);

var fullpage_initialized = false;

var init_fullpage = function(){
    //TODO User a defer instead of a timeout ?
    setTimeout(function(){
        $('#fullpage').fullpage({
            //Navigation
            menu: true,
            anchors:['index', 'resume', 'experiences', 'computing-skills', 'projects', 'education', 'about-me'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['index', 'resume', 'experiences', 'computing-skills', 'projects', 'education', 'about-me'],
            showActiveTooltips: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 1000,
            autoScrolling: true,
            fitToSection: true,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: true,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            //TODO Interesting for maps, so that scroll works on the map, and doesn't go to next page
            normalScrollElements: '#element1, .element2',
            //TODO Not sure what to use for this
            scrollOverflow: false,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: false,

            //Design
            paddingTop: 0,
            paddingBottom: 0,
            controlArrows: true,
            verticalCentered: true,
            resize : false,
            //TODO Update colors for different setions
            sectionsColor : ['#aaa', '#bbb', '#ccc', '#ddd', '#eee', '#fff', '#aaa'],
            fixedElements: null,
            responsive: 0,

            //Custom selectors
            sectionSelector: '.sectionFullPage',
            slideSelector: '.slideFullPage'
        });
    }, 100);

    fullpage_initialized = true
};
