/**
 * hollywood.js
 * Author:              Tyler Gaw www.tylergaw.com - me@tylergaw.com
 *
 * Description:         Some Javascript that turns class names on and off to 
 *                      makes shit move, bounce, and spin around the screen.
 *						
 * What does this do?	This script's main purpose is to add and remove
 *						class names from html elements. I use jQuery to
 *						select elements and add/remove the classes, but
 *						I am not using any of jQuery's animation features.
 *						All of the animation is done with CSS.
 *
 *                      Linted with love at www.jslint.com
 *
 * Joe Strummer says:   Death or Glory!
 *
 */

var HOLLYWOOD = {	
	
	init: function ()
	{
		$('#play').click(
			function ()
			{
				HOLLYWOOD.play();
			}
		);
	},
	
	// To control the <audio> element we need to get it as a DOM
	// element and not a jQuery object. So we'll store the retrieval
	// here for easy use later.
	//
	audio: function ()
	{
		return document.getElementById('track-main');
	},
	
	// Start this Boss Hog up. Roll sound, fade out
	// background players and begin directing the actors
	//
	play: function ()
	{
		var direct = HOLLYWOOD.direct,
			audio  = HOLLYWOOD.audio();
		
		$('#play').removeClass('midstage-player').addClass('offstage-player');
		
		// Little hackish here, but I want the above animations to play,
		// then remove the play button
		setTimeout(function ()
		{
			$('#play').addClass('hide');
		}, 900);
		
		// Fade the header and footer
		$('header, footer').addClass('background-player');
		
		audio.play();
		
		direct('#scene-1', 'action', 900);
		direct('#scene-1', 'cut', 1600);
		direct('#scene-2 .act-1', 'position-1', 1800);
		direct('#scene-2 .act-1', 'position-2', 2050);
		direct('#scene-2 .act-1', 'exit', 2300);
		direct('#scene-2 .act-2', 'position-1', 2200);
		direct('#scene-2 .act-3 strong', 'action', 4700);
		direct('#scene-2', 'closeup-1', 5100);
		direct('#scene-2 .act-3 span', 'action', 5300);
		direct('#scene-2 .act-3 em', 'action', 5900);
		direct('#scene-2 .act-4 strong', 'action', 6500);
		direct('#scene-2 .act-4 span', 'action', 7400);
		direct('#scene-2 .act-4 span', 'action-2', 7900);
		direct('#scene-2 .act-4 span b', 'action', 8000);
		direct('#scene-2 .act-4 em', 'action', 8300);
		direct('#scene-2 .act-2, #scene-2 .act-3, #scene-2 .act-4', 'hide', 9400);
		direct('#scene-2 .act-5', 'position-1', 9400);
		direct('#scene-2 .act-5', 'position-2', 9500);
		direct('#scene-2 .act-5', 'position-3', 9600);
		direct('#scene-2 .act-5', 'position-4', 9700);
		direct('#scene-2 .act-5', 'position-5', 9800);
		direct('#scene-2 .act-5', 'position-6', 99000);
		direct('#scene-2 .act-5', 'position-7', 10000);
		direct('#scene-2 .act-5', 'position-8', 10100);
		direct('#scene-2 .act-5', 'position-9', 10200);
		direct('#scene-2 .act-5', 'position-10', 10400);
		direct('#scene-2 .act-5', 'position-11', 10600);
		direct('#scene-2 .act-5 span', 'exit', 11000);
		direct('#scene-2 .act-5', 'position-12', 11000);
		direct('#scene-2 .act-5 strong', 'action', 11300);
		direct('#scene-2 .act-5 em', 'action', 13500);
		direct('#scene-2 .act-5 strong, #scene-2 .act-5 em', 'action', 14200);
		
		direct('#scene-2 .act-5', 'exit', 15000);
		direct('#scene-2', 'exit-left', 14300);
		
		direct('#scene-2', 'exit-left', 14500);
		direct('#scene-2 .act-2, #scene-2 .act-3, #scene-2 .act-4', 'hide', 14500);
		
		direct('#scene-2 .act-6', 'action', 15500);
		direct('#scene-2 .act-6 em', 'action', 15800);
		direct('#scene-2 .act-6 strong', 'action', 16000);
		direct('#scene-2 .act-6 span', 'action', 17000);
		direct('#scene-2 .act-6 span', 'action', 18000);
		direct('#scene-2 .act-7 strong', 'action', 18200);
		direct('#scene-2 .act-7 span', 'action', 19000);
		direct('#scene-2 .act-7 span', 'action', 20000);
		direct('#scene-2 .act-8 strong', 'action', 20200);
		direct('#scene-2 .act-8 b:eq(0)', 'action', 21200);
		direct('#scene-2 .act-8 b:eq(1)', 'action', 21300);
		direct('#scene-2 .act-8 b:eq(2)', 'action', 21400);
		direct('#scene-2 .act-8 b:eq(3)', 'action', 21550);
		direct('#scene-2 .act-8 b:eq(4)', 'action', 21700);
		direct('#scene-2', 'exit', 22500);
		
		direct('#stage', 'norman', 22500);
		direct('#scene-3 .act-1', 'action', 22500);
		direct('#scene-3 .act-1 span:eq(0)', 'action', 22550);
		direct('#scene-3 .act-1 span:eq(1)', 'action', 22650);
		direct('#scene-3 .act-1 span:eq(2)', 'action', 22750);
		direct('#scene-3 .act-1 span:eq(3)', 'action', 23050);
		direct('#scene-3 .act-1 span:eq(3) em', 'action', 23100);
		direct('#scene-3 .act-1 span:eq(4)', 'action', 23450);
		direct('#scene-3 .act-1 span:eq(5)', 'action', 23600);
		direct('#scene-3 .act-1 span:eq(6)', 'action', 23800);
		direct('#scene-3 .act-1', 'exit', 24425);
		
		direct('#stage', 'norman', 24300);
		direct('#scene-4 .act-1 em', 'action', 24300);
		direct('#scene-4 .act-1', 'action', 24500);
		direct('#scene-4 .act-1 span:eq(0)', 'action', 24800);
		direct('#scene-4 .act-1 span:eq(1)', 'action', 24900);
		direct('#scene-4 .act-1 span:eq(2)', 'action', 25000);
		direct('#scene-4 .act-1 span:eq(3)', 'action', 25200);
		direct('#scene-4 .act-1 span:eq(4)', 'action', 25400);
		direct('#scene-4 .act-1 span:eq(5)', 'action', 25450);
		
		direct('#scene-4 .act-2 span:eq(0)', 'action', 27000);
		direct('#scene-4 .act-2 span:eq(1)', 'action', 27100);
		direct('#scene-4 .act-2 span:eq(2)', 'action', 27200);
		
		direct('#scene-4', 'action', 27200);
		
		direct('#scene-4 .act-2 span:eq(3)', 'action', 27300);
		direct('#scene-4 .act-2 span:eq(4)', 'action', 27400);
		direct('#scene-4 .act-2 span:eq(5)', 'action', 27500);
		direct('#scene-4 .act-2 span:eq(6)', 'action', 27600);
		direct('#scene-4 .act-2 span:eq(7)', 'action', 27700);
		direct('#scene-4 .act-2 span:eq(8)', 'action', 27800);
		direct('#scene-4 .act-2 span:eq(9)', 'action', 27900);
		
		direct('#scene-4', 'cut', 28300);
		direct('#scene-5', 'action', 28300);
		direct('#stage', 'everyone', 28300);
		
		direct('#scene-5', 'action', 28900);
		direct('#stage', 'everyone', 28900);
		
		direct('#scene-6 .act-1', 'action', 29150);
		direct('#scene-6 .act-1', 'closeup-1', 30200);
		
		direct('#scene-6 .act-1 em:eq(0)', 'action', 30300);
		direct('#scene-6 .act-1 b:eq(0)', 'action', 30650);
		direct('#scene-6 .act-1 b:eq(1)', 'action', 30750);
		direct('#scene-6 .act-1 b:eq(2)', 'action', 30850);
		direct('#scene-6 .act-1 b:eq(3)', 'action', 30950);
		direct('#scene-6 .act-1 b:eq(4)', 'action', 31050);
		direct('#scene-6 .act-1 b:eq(5)', 'action', 31150);
		direct('#scene-6 .act-1 b:eq(6)', 'action', 31250);
		direct('#scene-6 .act-1 b:eq(7)', 'action', 31350);
		direct('#scene-6 .act-1 b:eq(8)', 'action', 31450);
		direct('#scene-6 .act-1', 'midshot', 31600);
		direct('#scene-6 .act-1 b:eq(9)', 'action', 31800);
		direct('#scene-6 .act-1 b:eq(10)', 'action', 31900);
		direct('#scene-6 .act-1 b:eq(11)', 'action', 32150);
		direct('#scene-6 .act-1 b:eq(12)', 'action', 32300);
		direct('#scene-6 .act-1 b:eq(13)', 'action', 32400);
		
		direct('#scene-8 .act-1 span:eq(0)', 'action', 35450);
		direct('#scene-8 .act-1 span:eq(1)', 'action', 35550);
		direct('#scene-8 .act-1 span:eq(2)', 'action', 35800);
		direct('#scene-8 .act-1 span:eq(3)', 'action', 36000);
		
		direct('#scene-9 .act-1 span', 'action', 38800);
		
		direct('#scene-10 .act-1 span:eq(0)', 'action', 39500);
		direct('#scene-6 .act-1, #scene-8 .act-1, #scene-9 .act-1', 'exit', 39700);
		direct('#scene-10 .act-1', 'action', 39700);
		direct('#scene-10 .act-1 span:eq(1)', 'action', 39800);
		direct('#scene-10 .act-1 span:eq(2)', 'action', 40400);
		direct('#scene-10 .act-1 span:eq(3)', 'action', 40600);
		direct('#scene-10 .act-1 span:eq(3) em:eq(0)', 'exit', 41300);
		direct('#scene-10 .act-1 span:eq(3) em:eq(1)', 'action', 41600);
		direct('#scene-10 .act-1', 'exit', 42500);
		direct('#scene-6 .act-1, #scene-9 .act-1', 'off-stage', 42500);
		
		direct('#scene-10 .act-2 span:eq(0)', 'action', 43000);
		direct('#scene-10 .act-2 span:eq(1) b:eq(0)', 'action', 43800);
		direct('#scene-10 .act-2 span:eq(1) b:eq(1)', 'action', 44000);
		direct('#scene-10 .act-2 span:eq(1) b:eq(2)', 'action', 44200);
		direct('#scene-10 .act-2 span:eq(1) b:eq(3)', 'action', 44300);
		direct('#scene-10 .act-2 span:eq(1) b:eq(4)', 'action', 44500);
		direct('#scene-10 .act-2 span:eq(1) b:eq(5)', 'action', 44700);
		direct('#scene-10 .act-2 span:eq(1) b:eq(6)', 'action', 44900);
		direct('#scene-10 .act-2 span:eq(1) b:eq(7)', 'action', 45100);
		direct('#scene-10 .act-2 span:eq(1) b:eq(8)', 'action', 45300);
		direct('#scene-10 .act-2 span:eq(1) b:eq(9)', 'action', 45500);
		
		direct('#scene-10 .act-2', 'action', 45700);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(0)', 'action', 46100);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(1)', 'action', 46300);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(2)', 'action', 46500);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(3)', 'action', 46650);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(4)', 'action', 47050);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(5)', 'action', 47450);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(6)', 'action', 47650);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(7)', 'action', 47850);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(8)', 'action', 48150);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(9)', 'action', 48250);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(10)', 'action', 48350);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(11)', 'action', 48450);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(12)', 'action', 48550);
		direct('#scene-10 .act-2 strong:eq(1) b:eq(13)', 'action', 48650);
		direct('#scene-10 .act-2', 'exit', 50000);
		
		direct('#scene-10 .act-3', 'action', 50000);
		direct('#scene-10 .act-3', 'position-1', 50200);
		direct('#scene-10 .act-3', 'position-2', 50300);
		direct('#scene-10 .act-3', 'position-3', 50400);
		direct('#scene-10 .act-3', 'position-4', 50500);
		direct('#scene-10 .act-3', 'position-5', 50900);
		direct('#scene-10 .act-3', 'position-6', 51100);
		direct('#scene-10 .act-3', 'position-7', 51300);
		direct('#scene-10 .act-3', 'position-8', 51500);
		direct('#scene-10 .act-3', 'position-9', 51700);
		direct('#scene-10 .act-3', 'position-10', 52000);
		direct('#scene-10 .act-3 strong:eq(0)', 'action', 53400);
		
		direct('#scene-10 .act-3', 'dance-motherfucker-dance', 54000);
		direct('#scene-10 .act-3', 'position-11', 54200);
		direct('#scene-10 .act-3', 'position-12', 55300);
		direct('#scene-10 .act-3', 'position-13', 55500);
		direct('#scene-10 .act-3', 'position-14', 55700);
		direct('#scene-10 .act-3', 'position-15', 56000);
		direct('#scene-10 .act-3', 'position-16', 56500);
		direct('#scene-10 .act-3', 'position-17', 57000);
		direct('#scene-10 .act-3', 'position-18', 58200);
		direct('#scene-10 .act-3', 'position-19', 59300);
		
		direct('#scene-10 .act-4', 'position-1', 54200);
		direct('#scene-10 .act-4', 'position-2', 55300);
		direct('#scene-10 .act-4', 'position-3', 55500);
		direct('#scene-10 .act-4', 'position-4', 55700);
		direct('#scene-10 .act-4', 'position-5', 56000);
		direct('#scene-10 .act-4', 'position-6', 56500);
		direct('#scene-10 .act-4', 'position-7', 57000);
		direct('#scene-10 .act-4', 'position-8', 58200);
		direct('#scene-10 .act-4', 'position-9', 59300);
		direct('#scene-10 .act-4 span:eq(7) em', 'action', 59350);
		direct('#scene-10 .act-4', 'position-10', 60600);
		direct('#scene-10 .act-4', 'position-11', 60900);
		direct('#scene-10 .act-4', 'exit', 61700);
		
		direct('#scene-10 .act-5 span:eq(0)', 'action', 61700);
		direct('#scene-10 .act-5 span:eq(1)', 'action', 61850);
		direct('#scene-10 .act-5 span:eq(2)', 'action', 62000);
		
		direct('#scene-10 .act-5 span:eq(3)', 'action', 62300);
		direct('#scene-10 .act-5 span:eq(4)', 'action', 62450);
		direct('#scene-10 .act-5 span:eq(5)', 'action', 62600);
		
		direct('#scene-10 .act-5 span:eq(6)', 'action', 62900);
		direct('#scene-10 .act-5 span:eq(7)', 'action', 63000);
		direct('#scene-10 .act-5 span:eq(8)', 'action', 63100);
		
		direct('#scene-10 .act-5 span:eq(9)', 'action', 63200);
		direct('#scene-10 .act-5 span:eq(10)', 'action', 63300);
		direct('#scene-10 .act-5 span:eq(11)', 'action', 63400);
		
		direct('#scene-10 .act-5', 'position-1', 63600);
		direct('#scene-10 .act-5 span:eq(12)', 'action', 63600);
		
		direct('#scene-10 .act-5', 'position-2', 63900);
		direct('#scene-10 .act-5 span:eq(13)', 'action', 63900);
		
		direct('#scene-10 .act-5', 'position-3', 64100);
		direct('#scene-10 .act-5 span:eq(14)', 'action', 64100);
		
		direct('#scene-10 .act-5', 'position-4', 64400);
		direct('#scene-10 .act-5 span:eq(15)', 'action', 64400);
		
		direct('#scene-10 .act-5 span:eq(16)', 'action', 64700);
		direct('#scene-10 .act-5 span:eq(17)', 'action', 65000);

		direct('#scene-10 .act-6 span:eq(0)', 'action', 66500);
		direct('#scene-10 .act-6 span:eq(1)', 'action', 67200);
		direct('#scene-10 .act-6 span:eq(2)', 'action', 67400);
		direct('#scene-10 .act-6 span:eq(3)', 'action', 67600);
		direct('#scene-10 .act-6 span:eq(4)', 'action', 67900);
		direct('#scene-10 .act-6 span:eq(5)', 'action', 68200);
		
		direct('#scene-10 .act-6', 'position-1', 68300);
		direct('#scene-10 .act-5', 'position-5', 68300);
		
		direct('#scene-10 .act-6 span:eq(6)', 'action', 68500);
		direct('#scene-10 .act-6 span:eq(7)', 'action', 68900);
		direct('#scene-10 .act-6 span:eq(8)', 'action', 69400);
		direct('#scene-10 .act-6 span:eq(9)', 'action', 69600);
		direct('#scene-10 .act-6 span:eq(10)', 'action', 69800);
		direct('#scene-10 .act-6 span:eq(11)', 'action', 69900);
		direct('#scene-10 .act-6 span:eq(12)', 'action', 70000);
		
		direct('#scene-10 .act-6', 'position-2', 70000);
		direct('#scene-10 .act-5', 'position-6', 70000);
		
		direct('#scene-10 .act-6 span:eq(13)', 'action', 70300);
		direct('#scene-10 .act-6 span:eq(14)', 'action', 70500);
		direct('#scene-10 .act-6 span:eq(15)', 'action', 70800);
		direct('#scene-10 .act-6 span:eq(16)', 'action', 71000);
		direct('#scene-10 .act-6 span:eq(17)', 'action', 71200);
		direct('#scene-10 .act-6 span:eq(18)', 'action', 71500);
		direct('#scene-10 .act-6 span:eq(19)', 'action', 71700);
		direct('#scene-10 .act-6 span:eq(20)', 'action', 72000);
		direct('#scene-10 .act-6 span:eq(21)', 'action', 72300);
		
		direct('#scene-10 .act-5, #scene-10 .act-6', 'exit', 73500);
		
		direct('#scene-10 .act-7', 'action', 73500);
		direct('#scene-10 .act-7 em', 'action', 73800);
		
		direct('#scene-10 .act-8 span:eq(0)', 'action', 75000);
		direct('#scene-10 .act-8 span:eq(1)', 'action', 75200);
		direct('#scene-10 .act-8 span:eq(2)', 'action', 75400);
		direct('#scene-10 .act-8 span:eq(3)', 'action', 75700);
		direct('#scene-10 .act-8 span:eq(4)', 'action', 75800);
		direct('#scene-10 .act-8 span:eq(5)', 'action', 76100);
		direct('#scene-10 .act-8 span:eq(6)', 'action', 76300);
		direct('#scene-10 .act-8 span:eq(7)', 'action', 76500);
		direct('#scene-10 .act-8 span:eq(8)', 'action', 76700);
		direct('#scene-10 .act-8 span:eq(9)', 'action', 76900);
		direct('#scene-10 .act-8 span:eq(10)', 'action', 77300);
		direct('#scene-10 .act-8 span:eq(10)', 'positions', 77450);
		direct('#scene-10 .act-8 span:eq(11)', 'action', 77450);
		direct('#scene-10 .act-8 span:eq(11)', 'positions', 77550);
		direct('#scene-10 .act-8 span:eq(12)', 'action', 77550);
		direct('#scene-10 .act-8 span:eq(13)', 'action', 77900);
		
		direct('#scene-10 .act-7, #scene-10 .act-8', 'exit', 79700);
		
		direct('#scene-10 .act-9 span:eq(0)', 'action', 79700); 
		direct('#scene-10 .act-9 span:eq(1)', 'action', 80000); 
		direct('#scene-10 .act-9 span:eq(2)', 'action', 80300);
		direct('#scene-10 .act-9 span:eq(3)', 'action', 80800); 
		direct('#scene-10 .act-9 span:eq(4)', 'action', 81400); 
		direct('#scene-10 .act-9 span:eq(5)', 'action', 81600); 
		direct('#scene-10 .act-9 span:eq(6)', 'action', 81800);
		direct('#scene-10 .act-9 span:eq(7)', 'action', 82100); 
		direct('#scene-10 .act-9 span:eq(8)', 'action', 82300); 
		direct('#scene-10 .act-9 span:eq(9)', 'action', 82500); 
		
		direct('#scene-10 .act-10 strong:eq(0)', 'action', 83500);
		
		direct('#scene-10 .act-9 span:eq(0)', 'spotlight', 83700);
		direct('#scene-10 .act-9 span:eq(1)', 'spotlight', 84000);
		
		direct('#scene-10 .act-10 strong:eq(1)', 'action', 84400);
		direct('#scene-10 .act-9 span:eq(2)', 'action', 84400);	
		direct('#scene-10 .act-9 span:eq(3)', 'spotlight', 84800);
		direct('#scene-10 .act-9 span:eq(4)', 'spotlight', 85700);
		direct('#scene-10 .act-9 span:eq(5)', 'spotlight', 86100);
		direct('#scene-10 .act-9 span:eq(6)', 'spotlight', 86400);
		direct('#scene-10 .act-9 span:eq(7)', 'spotlight', 87200);
		direct('#scene-10 .act-9 span:eq(8)', 'spotlight', 87800);
		direct('#scene-10 .act-9 span:eq(9)', 'spotlight', 88700);
		
		direct('#scene-10 .act-9, #scene-10 .act-10', 'exit', 89700);
		direct('#scene-11 .act-1', 'action', 89900);
		direct('#scene-11 .act-1', 'action', 91000);
		
		// Reset the actors and the end
		setTimeout(function ()
		{
			HOLLYWOOD.reset();
		}, 91000);
	},
	
	// Add or remove class names to advance the scene at the specified time
	//
	direct: function (actor, direction, delay)
	{
		var a = $(actor);
		setTimeout(function ()
		{
			if (a.hasClass(direction))
			{
				a.removeClass(direction);
			}
			else
			{
				a.addClass(direction);
				HOLLYWOOD.helpers.logDirection(direction);
			}
			
		}, delay);
	},
	
	reset: function ()
	{
		var audio = HOLLYWOOD.audio();
		audio.pause();
		
		setTimeout(function ()
		{
			$('#play').removeClass('hide').removeClass('offstage-player');
			$('header, footer').removeClass('background-player');
			
			HOLLYWOOD.helpers.clearLog();
		}, 1000);
	}
};

/**
 * Helper methods that are not necessary for the actual
 * actual direction of the piece, more for demo purposes
 *
 */
HOLLYWOOD.helpers = {
	
	// An array store for each direction class
	// we use this to restart the movie
	directionLog: [],
	
	// Create a new member in the array for each class
	// @param STRING direction - a CSS classname
	//
	logDirection: function (direction)
	{
		this.directionLog.push(direction);
	},
	
	// Remove all applied directions from all actors
	clearLog: function ()
	{
		$('#stage dl').css('display', 'none');
		
		$.each(this.directionLog, 
			function (i, value)
			{
				$('dd, p, span, strong, b, i, em').removeClass(value);
			}
		);
		
		setTimeout(function () 
		{
			$('#stage dl').css('display', 'block');
		}, 500);
	}
};

$(document).ready(function ()
{
	HOLLYWOOD.init();
});