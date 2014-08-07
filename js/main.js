$(".action").click(function(){
	$("body").scrollTo(50);
	$(".action").fadeOut();
	$(".ironmanHead").animate({left: "230px", bottom: "350px"});
	$(".ironmanHead").css("visibility", "visible");
	$(".ironmanHead1").animate({left: "235px", bottom: "355px"});
	$(".ironmanHead1").css("visibility", "visible");
	$(".ironmanWidowsPeak").animate({left: "244px", bottom: "388px"});
	$(".ironmanWidowsPeak").css("visibility", "visible");
	setTimeout(function(){
		$(".ironmanRightShoulder").css("visibility", "visible")
		$(".ironmanRightShoulder").animate({left: "330px", bottom: "315px"})
	}, 300);
	setTimeout(function(){
		$(".ironmanLeftShoulder").css("visibility", "visible")
		$(".ironmanLeftShoulder").animate({left: "150px", bottom: "310px"})
	}, 400);
	setTimeout(function(){
		$(".ironmanRightThigh").css("visibility", "visible")
		$(".ironmanRightThigh").animate({left: "315px", bottom: "80px"})
	}, 500);
	setTimeout(function(){
		$(".ironmanLeftForearm").css("visibility", "visible")
		$(".ironmanLeftForearm").animate({left: "130px", bottom: "215px"})
	}, 600);
	setTimeout(function(){
		$(".ironmanGroin").css("visibility", "visible")
		$(".ironmanGroin").animate({left: "70px", bottom: "150px"})
	}, 600);
	setTimeout(function(){
		$(".ironmanRightHand").css("visibility", "visible")
		$(".ironmanRightHand").animate({left: "200px", bottom: "430px"})
	}, 1000);
	setTimeout(function(){
		$(".ironmanTorso").css("visibility", "visible")
		$(".ironmanTorso").animate({left: "100px", bottom: "350px"})
	}, 1000);
	setTimeout(function(){
		$(".ironmanLeftFoot").css("visibility", "visible")
		$(".ironmanLeftFoot").animate({left: "147px", bottom: "0px"})
	}, 1000);
	setTimeout(function(){
		$(".ironmanNeck").css("visibility", "visible")
		$(".ironmanNeck").animate({left: "270px", bottom: "338px"})
	}, 1100);
	setTimeout(function(){
		$(".ironmanLeftShin").css("visibility", "visible")
		$(".ironmanLeftShin").animate({left: "175px", bottom: "40px"})
	}, 1200);
	setTimeout(function(){
		$(".ironmanRightBicep").css("visibility", "visible")
		$(".ironmanRightBicep").animate({left: "395px", bottom: "220px"})
	}, 1300);
	setTimeout(function(){
		$(".ironmanLeftThigh").css("visibility", "visible")
		$(".ironmanLeftThigh").animate({left: "125px", bottom: "40px"})
	}, 1400);
	setTimeout(function(){
		$(".ironmanLeftHand").css("visibility", "visible")
		$(".ironmanLeftHand").animate({left: "295px", bottom: "400px"})
	}, 1500);
	setTimeout(function(){
		$(".ironmanRightFoot").css("visibility", "visible")
		$(".ironmanRightFoot").animate({left: "330px", bottom: "0px"})
	}, 1600);
	setTimeout(function(){
		$(".ironmanLeftBicep").css("visibility", "visible")
		$(".ironmanLeftBicep").animate({left: "105px", bottom: "270px"})
	}, 1700);
	setTimeout(function(){
		$(".ironmanRightShin").css("visibility", "visible")
		$(".ironmanRightShin").animate({left: "355px", bottom: "50px"})
	}, 1800);
	setTimeout(function(){
		$(".ironmanRightForearm").css("visibility", "visible")
		$(".ironmanRightForearm").animate({left: "345px", bottom: "215px"})
	}, 1900);


	setTimeout(function(){
		$(".ironmanHead").animate({left: "230px", bottom: "350px"});
		$(".ironmanHead1").animate({left: "235px", bottom: "355px"});
		$(".ironmanWidowsPeak").animate({left: "244px", bottom: "388px"});
		$(".ironmanRightShoulder").animate({left: "280px", bottom: "305px"}, 100)
		$(".ironmanLeftShoulder").animate({left: "190px", bottom: "305px"}, 100)
		$(".ironmanRightThigh").animate({left: "255px", bottom: "100px"}, 100)
		$(".ironmanLeftForearm").animate({left: "180px", bottom: "205px"}, 100)
		$(".ironmanGroin").animate({left: "220px", bottom: "200px"}, 100)
		$(".ironmanRightHand").animate({left: "180px", bottom: "180px"}, 100)
		$(".ironmanTorso").animate({left: "200px", bottom: "250px"}, 100)
		$(".ironmanLeftFoot").animate({left: "207px", bottom: "0px"}, 100)
		$(".ironmanNeck").animate({left: "240px", bottom: "335px"}, 100)
		$(".ironmanLeftShin").animate({left: "215px", bottom: "20px"}, 100)
		$(".ironmanRightBicep").animate({left: "295px", bottom: "250px"}, 100)
		$(".ironmanLeftThigh").animate({left: "215px", bottom: "100px"}, 100)
		$(".ironmanLeftHand").animate({left: "295px", bottom: "180px"}, 100)
		$(".ironmanRightFoot").animate({left: "258px", bottom: "0px"}, 100)
		$(".ironmanLeftBicep").animate({left: "180px", bottom: "250px"}, 100)
		$(".ironmanRightShin").animate({left: "255px", bottom: "20px"}, 100)
		$(".ironmanRightForearm").animate({left: "295px", bottom: "205px"}, 100)
	}, 3000);
	setTimeout(function(){
		$(".ironmanRightEye").fadeIn();
		$(".ironmanLeftEye").fadeIn();
		$(".ironmanMouth").fadeIn();
	}, 3500);
	setTimeout(function(){
		$(".ironmanChestCircle").fadeIn();
	}, 4500);
	setTimeout(function(){
		$(".ironmanChestCircle").animate({backgroundColor: "#00FFFF"})
	}, 6000);
	setTimeout(function(){
		$(".ironmanChestCircle").addClass("glow");
		$(".ironmanClear").fadeIn();
	}, 6750);
});

$(".ironmanClear").click(function(){
	$(".ironmanClear").fadeOut();
	$(".ironmanHead").animate({bottom: "950px"});
	$(".ironmanHead1").animate({bottom: "955px"});
	$(".ironmanWidowsPeak").animate({bottom: "988px"});
	$(".ironmanRightShoulder").animate({bottom: "915px"})
	$(".ironmanLeftShoulder").animate({bottom: "910px"})
	$(".ironmanRightThigh").animate({bottom: "680px"})
	$(".ironmanLeftForearm").animate({bottom: "815px"})
	$(".ironmanGroin").animate({bottom: "750px"})
	$(".ironmanRightHand").animate({bottom: "1030px"})
	$(".ironmanTorso").animate({bottom: "950px"})
	$(".ironmanLeftFoot").animate({bottom: "600px"})
	$(".ironmanNeck").animate({bottom: "938px"})
	$(".ironmanLeftShin").animate({bottom: "640px"})
	$(".ironmanRightBicep").animate({bottom: "820px"})
	$(".ironmanLeftThigh").animate({bottom: "640px"})
	$(".ironmanLeftHand").animate({bottom: "1000px"})
	$(".ironmanRightFoot").animate({bottom: "600px"})
	$(".ironmanLeftBicep").animate({bottom: "870px"})
	$(".ironmanRightShin").animate({bottom: "650px"})
	$(".ironmanRightForearm").animate({bottom: "815px"})
	$(".ironmanRightEye").animate({bottom: "815px"})
	$(".ironmanLeftEye").animate({bottom: "815px"})
	$(".ironmanMouth").animate({bottom: "815px"})
	setTimeout(function(){
		$(".ironmanChestCircle").fadeOut();
		$(".hulkStart").fadeIn();
		$(".ironmanHead").fadeOut();
		$(".ironmanHead1").fadeOut();
		$(".ironmanWidowsPeak").fadeOut();
		$(".ironmanRightShoulder").fadeOut();
		$(".ironmanLeftShoulder").fadeOut();
		$(".ironmanRightThigh").fadeOut();
		$(".ironmanLeftForearm").fadeOut();
		$(".ironmanGroin").fadeOut();
		$(".ironmanRightHand").fadeOut();
		$(".ironmanTorso").fadeOut();
		$(".ironmanLeftFoot").fadeOut();
		$(".ironmanNeck").fadeOut();
		$(".ironmanLeftShin").fadeOut();
		$(".ironmanRightBicep").fadeOut();
		$(".ironmanLeftThigh").fadeOut();
		$(".ironmanLeftHand").fadeOut();
		$(".ironmanRightFoot").fadeOut();
		$(".ironmanLeftBicep").fadeOut();
		$(".ironmanRightShin").fadeOut();
		$(".ironmanRightForearm").fadeOut();
		$(".ironmanRightEye").fadeOut();
		$(".ironmanLeftEye").fadeOut();
		$(".ironmanMouth").fadeOut();
	}, 2000);
})

$(".hulkStart").click(function(){
	$("body").scrollTo(50);
	setTimeout(function(){
		$(".hulkPantsLeft").animate({left: "215px"}, 300)
		$(".hulkPantsRight").animate({left: "255px"}, 300)
		$(".hulkPantsTop").animate({left: "215px"}, 300)
		$(".hulkPantsLeft").css("visibility", "visible");
		$(".hulkPantsRight").css("visibility", "visible");
		$(".hulkPantsTop").css("visibility", "visible");
	}, 1000)
	setTimeout(function(){
		$(".rightHand").animate({
			backgroundColor: "#2ecc71",
			borderTopColor: "#2ecc71",
			width: "75px",  
			height: "75px", 
			bottom: "198px",
			left: "95px",
			borderRadius: "0px",
			borderTopWidth: "0px", 
			borderLeftWidth: "0px",
			borderRadius: "40px",
		}, 4000)
		$(".head").animate({
			width: "80px", 
			height: "80px",
			borderRadius: "40px",
			backgroundColor: "#27ae60",
			bottom: "345px",
			left: "210px"
		}, 4000);
	    $(".neck").animate({
			width: "30px",  
			height: "30px", 
			backgroundColor: "#2ecc71",
			bottom: "360px",
			left: "235px"
		}, 4000);
	    $(".rightThigh").animate({ 
			backgroundColor: "#2ecc71",
			width: "75px",  
			height: "155px", 
			bottom: "100px",
			left: "270px",
			borderRadius: "30px",
		}, 4000);
		$({deg: 0}).animate({deg: -50}, {
        	duration: 4000,
        	step: function(now) {
            	$(".rightThigh").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
	    $(".leftThigh").animate({ 
			backgroundColor: "#2ecc71",
			width: "75px",  
			height: "155px", 
			bottom: "100px",
			left: "150px",
			borderRadius: "30px",
		}, 4000);
		$({deg: 0}).animate({deg: 50}, {
        	duration: 4000,
        	step: function(now) {
            	$(".leftThigh").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
	    $(".rightShin").animate({
			backgroundColor: "#2ecc71",
			width: "60px",  
			height: "150px", 
			bottom: "20px",
			left: "325px",
			borderRadius: "30px",
		}, 4000);
	    $(".leftShin").animate({
			backgroundColor: "#2ecc71",
			width: "60px",  
			height: "150px", 
			bottom: "20px",
			left: "110px",
			borderRadius: "30px",
		}, 4000);
	    $(".torso").animate({
			borderTopColor: "#2ecc71",
			width: "140px", 
			borderTopWidth: "160px", 
			borderLeftWidth: "50px", 
			borderRightWidth: "50px", 
			bottom: "250px",
			left: "130px",
			borderRadius: "40px",
		}, 4000);
	    $(".groin").animate({
			borderTopColor: "#2ecc71",
			width: "80px", 
			borderTopWidth: "50px", 
			borderLeftWidth: "30px", 
			borderRightWidth: "30px", 
			bottom: "200px",
			left: "180px",
		}, 4000);
	    $(".rightShoulder").animate({
			width: "120px", 
			height: "120px",
			borderRadius: "60px",
			backgroundColor: "#2ecc71",
			bottom: "305px",
			left: "250px"
		}, 4000);
	    $(".leftShoulder").animate({
			width: "120px", 
			height: "120px",
			borderRadius: "60px",
			backgroundColor: "#2ecc71",
			bottom: "305px",
			left: "130px"
		}, 4000);
	    $(".rightBicep").animate({
			backgroundColor: "#2ecc71",
			width: "80px",  
			height: "170px", 
			bottom: "270px",
			left: "360px",
			borderRadius: "40px",
		}, 4000)
		$({deg: 0}).animate({deg: -50}, {
        	duration: 4000,
        	step: function(now) {
            	$(".rightBicep").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
	    $(".leftBicep").animate({
			backgroundColor: "#2ecc71",
			width: "80px",  
			height: "170px", 
			bottom: "270px",
			left: "60px",
			borderRadius: "40px",
		}, 4000)
		$({deg: 0}).animate({deg: 50}, {
        	duration: 4000,
        	step: function(now) {
            	$(".leftBicep").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
	    $(".rightForearm").animate({
			backgroundColor: "#2ecc71",
			width: "70px",  
			height: "130px", 
			bottom: "223px",
			left: "375px",
			borderRadius: "35px",
		}, 4000);
		$({deg: 0}).animate({deg: 40}, {
        	duration: 4000,
        	step: function(now) {
            	$(".rightForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
	    $(".leftForearm").animate({
			backgroundColor: "#2ecc71",
			width: "70px",  
			height: "130px", 
			bottom: "223px",
			left: "55px",
			borderRadius: "35px",
		}, 4000);
		$({deg: 0}).animate({deg: -40}, {
        	duration: 4000,
        	step: function(now) {
            	$(".leftForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
	    $(".rightFoot").animate({
			borderBottomColor: "#2ecc71",
			borderLeftColor: "#2ecc71",
			width: "55px", 
			borderBottomWidth: "45px", 
			borderRightWidth: "20px", 
			bottom: "0px",
			left: "325px",
		}, 4000);
	    $(".leftFoot").animate({
			borderBottomColor: "#2ecc71",
			borderRightColor: "#2ecc71",
			width: "55px", 
			borderBottomWidth: "45px", 
			borderLeftWidth: "20px", 
			bottom: "0px",
			left: "90px",
		}, 4000);
	    $(".leftHand").animate({
			backgroundColor: "#2ecc71",
			borderTopColor: "#2ecc71",
			width: "75px",  
			height: "75px", 
			bottom: "198px",
			left: "330px",
			borderRadius: "0px",
			borderTopWidth: "0px", 
			borderRightWidth: "0px",
			borderRadius: "40px", 
		}, 4000);
		$(".hulkPantsLeft").animate({
			backgroundColor: "#8e44ad",
			width: "75px",  
			height: "96px", 
			bottom: "128px",
			left: "148px",
			borderRadius: "0px",
		}, 4000);
		$({deg: 0}).animate({deg: 50}, {
        	duration: 4000,
        	step: function(now) {
            	$(".hulkPantsLeft").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
		$(".hulkPantsRight").animate({
			backgroundColor: "#8e44ad",
			width: "75px",  
			height: "96px", 
			bottom: "128px",
			left: "271px",
			borderRadius: "0px",
		}, 4000);
		$({deg: 0}).animate({deg: -50}, {
        	duration: 4000,
        	step: function(now) {
            	$(".hulkPantsRight").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
		$(".hulkPantsTop").animate({
			width: "100px", 
			bottom: "178px",
			left: "197px",
			height: "57px"
		}, 4000);
	}, 2000)
	setTimeout(function(){


		$(".rightBicep").animate({ 
			bottom: "300px",
		}, 500);
		$({deg: -50}).animate({deg: -90}, {
        	duration: 500,
        	step: function(now) {
            	$(".rightBicep").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$(".rightForearm").animate({ 
			bottom: "350px",
			left: "385px",
		}, 500);
		$({deg: 40}).animate({deg: 130}, {
        	duration: 500,
        	step: function(now) {
            	$(".rightForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$(".leftHand").animate({
			bottom: "425px",
			left: "325px",
		}, 500);
    	$(".leftBicep").animate({ 
			bottom: "300px",
		}, 500);
		$({deg: 50}).animate({deg: 90}, {
        	duration: 500,
        	step: function(now) {
            	$(".leftBicep").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$(".leftForearm").animate({ 
			bottom: "350px",
			left: "40px",
		}, 500);
		$({deg: -40}).animate({deg: -130}, {
        	duration: 500,
        	step: function(now) {
            	$(".leftForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$(".rightHand").animate({
			bottom: "425px",
			left: "100px",
		}, 500);

	}, 6500)
	setTimeout(function(){
		$(".frame").animate({
			height: "650px"
		}, 2000)
		$(".contain").animate({
			height: "780px"
		}, 2000)
		$(".rightBicep").animate({ 
			bottom: "350px",
			left: "310px",
		}, 2000);
		$({deg: -90}).animate({deg: -180}, {
        	duration: 2000,
        	step: function(now) {
            	$(".rightBicep").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$(".rightForearm").animate({ 
			bottom: "480px",
			left: "315px",
		}, 2000);
		$({deg: 130}).animate({deg: 180}, {
        	duration: 2000,
        	step: function(now) {
            	$(".rightForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$(".leftHand").animate({
			bottom: "575px",
			left: "314px",
		}, 2000);
    	$(".leftBicep").animate({ 
			bottom: "350px",
			left: "109px"
		}, 2000);
		$({deg: 90}).animate({deg: 180}, {
        	duration: 2000,
        	step: function(now) {
            	$(".leftBicep").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$(".leftForearm").animate({ 
			bottom: "480px",
			left: "113px",
		}, 2000);
		$({deg: -130}).animate({deg: -180}, {
        	duration: 2000,
        	step: function(now) {
            	$(".leftForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$(".rightHand").animate({
			bottom: "575px",
			left: "111px",
		}, 2000);
	}, 7500)
	setTimeout(function(){
		$(".rightBicep").animate({ 
			bottom: "300px",
			left: "360px",
		}, 500);
		$({deg: -180}).animate({deg: -90}, {
        	duration: 500,
        	step: function(now) {
            	$(".rightBicep").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$(".rightForearm").animate({ 
			bottom: "365px",
			left: "430px",
		}, 500);
    	$(".leftHand").animate({
			bottom: "465px",
			left: "425px",
		}, 500);
	}, 10000)
	setTimeout(function(){
		$(".frame").animate({
			width: "625px"
		}, 2000)
		$(".rightForearm").animate({ 
			bottom: "322px",
			left: "480px",
		}, 2000);
			$({deg: 180}).animate({deg: 270}, {
	        	duration: 2000,
	        	step: function(now) {
	            	$(".rightForearm").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
    	$(".leftHand").animate({
			bottom: "351px",
			left: "550px",
		}, 2000);
	}, 12000)
	setTimeout(function(){
		$(".frame").animate({
			height: "500px",
			width: "500px",
		}, 2000)
		$(".contain").animate({
			height: "630px",
		}, 2000)
    	$(".rightForearm").animate({ 
			bottom: "325px",
			left: "430px",
		}, 2000);
			$({deg: 270}).animate({deg: 180}, {
	        	duration: 2000,
	        	step: function(now) {
	            	$(".rightForearm").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
	    $(".rightBicep").animate({ 
			bottom: "280px",
		}, 2000);
			$({deg: -90}).animate({deg: -60}, {
	        	duration: 2000,
	        	step: function(now) {
	            	$(".rightBicep").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
    	$(".leftHand").animate({
			bottom: "425px",
			left: "425px",
		}, 2000);
    	$(".leftBicep").animate({ 
			bottom: "300px",
			left: "60px",
		}, 2000);
			$({deg: 180}).animate({deg: 90}, {
	        	duration: 2000,
	        	step: function(now) {
	            	$(".leftBicep").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
    	$(".leftForearm").animate({ 
			bottom: "350px",
			left: "40px",
		}, 2000);
			$({deg: -180}).animate({deg: -130}, {
	        	duration: 2000,
	        	step: function(now) {
	            	$(".leftForearm").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
    	$(".rightHand").animate({
			bottom: "425px",
			left: "100px",
		}, 2000);
	}, 14000)
	setTimeout(function(){
    	$(".rightForearm").animate({ 
			bottom: "223px",
			left: "375px",
		}, 500);
			$({deg: 180}).animate({deg: 40}, {
	        	duration: 500,
	        	step: function(now) {
	            	$(".rightForearm").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
	    $(".rightBicep").animate({ 
			bottom: "270px",
			left: "360px",
		}, 500);
			$({deg: -60}).animate({deg: -50}, {
	        	duration: 500,
	        	step: function(now) {
	            	$(".rightBicep").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
    	$(".leftHand").animate({
			bottom: "198px",
			left: "330px",
		}, 500);
    	$(".leftBicep").animate({ 
			bottom: "270px",
			left: "60px",
		}, 500);
			$({deg: 90}).animate({deg: 50}, {
	        	duration: 500,
	        	step: function(now) {
	            	$(".leftBicep").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
    	$(".leftForearm").animate({ 
			bottom: "223px",
			left: "55px",
		}, 500);
			$({deg: -130}).animate({deg: -40}, {
	        	duration: 500,
	        	step: function(now) {
	            	$(".leftForearm").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
    	$(".rightHand").animate({
			bottom: "198px",
			left: "95px",
		}, 500);
	}, 16000)
	setTimeout(function(){
		$(".rightHand").animate({
			backgroundColor: "transparent",
			borderTopColor: "#eebb99",
			width: "15px",  
			height: "0px", 
			bottom: "180px",
			left: "180px",
			borderTopWidth: "40px", 
			borderLeftWidth: "10px",
			borderRadius: "0px",
		}, 4000)
		$(".head").animate({
			width: "40px", 
			height: "50px",
			borderRadius: "18px",
			backgroundColor: "#eebb99",
			bottom: "350px",
			left: "230px"
		}, 4000);
	    $(".neck").animate({
			width: "20px",  
			height: "19px", 
			backgroundColor: "#eebb99",
			bottom: "335px",
			left: "240px"
		}, 4000);
	    $(".rightThigh").animate({ 
			backgroundColor: "#eebb99",
			width: "30px",  
			height: "115px", 
			bottom: "100px",
			left: "255px",
			borderRadius: "15px",
		}, 4000);
			$({deg: -50}).animate({deg: 0}, {
	        	duration: 4000,
	        	step: function(now) {
	            	$(".rightThigh").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
	    $(".leftThigh").animate({ 
			backgroundColor: "#eebb99",
			width: "30px",  
			height: "115px", 
			bottom: "100px",
			left: "215px",
			borderRadius: "15px",
		}, 4000);
			$({deg: 50}).animate({deg: 0}, {
	        	duration: 4000,
	        	step: function(now) {
	            	$(".leftThigh").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
	    $(".rightShin").animate({
			backgroundColor: "#eebb99",
			width: "30px",  
			height: "100px", 
			bottom: "20px",
			left: "255px",
			borderRadius: "15px",
		}, 4000);
	    $(".leftShin").animate({
			backgroundColor: "#eebb99",
			width: "30px",  
			height: "100px", 
			bottom: "20px",
			left: "215px",
			borderRadius: "15px",
		}, 4000);
	    $(".torso").animate({
			borderTopColor: "#eebb99",
			width: "60px", 
			borderTopWidth: "85px", 
			borderLeftWidth: "20px", 
			borderRightWidth: "20px", 
			bottom: "250px",
			left: "200px",
			borderRadius: "20px",
		}, 4000);
	    $(".groin").animate({
			borderTopColor: "#eebb99",
			width: "40px", 
			borderTopWidth: "50px", 
			borderLeftWidth: "10px", 
			borderRightWidth: "10px", 
			bottom: "200px",
			left: "220px",
		}, 4000);
	    $(".rightShoulder").animate({
			width: "30px", 
			height: "30px",
			borderRadius: "15px",
			backgroundColor: "#eebb99",
			bottom: "305px",
			left: "280px"
		}, 4000);
	    $(".leftShoulder").animate({
			width: "30px", 
			height: "30px",
			borderRadius: "15px",
			backgroundColor: "#eebb99",
			bottom: "305px",
			left: "190px"
		}, 4000);
	    $(".leftBicep").animate({ 
			backgroundColor: "#eebb99",
			width: "25px",  
			height: "70px", 
			bottom: "250px",
			left: "180px",
			borderRadius: "15px",
		}, 4000);
			$({deg: 50}).animate({deg: 0}, {
	        	duration: 4000,
	        	step: function(now) {
	            	$(".leftBicep").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
	    $(".rightBicep").animate({ 
			backgroundColor: "#eebb99",
			width: "25px",  
			height: "70px", 
			bottom: "250px",
			left: "295px",
			borderRadius: "15px",
		}, 4000);
			$({deg: -50}).animate({deg: 0}, {
	        	duration: 4000,
	        	step: function(now) {
	            	$(".rightBicep").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
	    $(".leftForearm").animate({ 
			backgroundColor: "#eebb99",
			width: "25px",  
			height: "55px", 
			bottom: "205px",
			left: "180px",
			borderRadius: "15px",
		}, 4000);
			$({deg: -40}).animate({deg: 0}, {
	        	duration: 4000,
	        	step: function(now) {
	            	$(".leftForearm").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
	    $(".rightForearm").animate({ 
			backgroundColor: "#eebb99",
			width: "25px",  
			height: "55px", 
			bottom: "205px",
			left: "295px",
			borderRadius: "15px",
		}, 4000);
			$({deg: 40}).animate({deg: 0}, {
	        	duration: 4000,
	        	step: function(now) {
	            	$(".rightForearm").css({
	                	transform: 'rotate(' + now + 'deg)'
	        	    });
	        	}
	    	});
	    $(".rightFoot").animate({
			borderBottomColor: "#eebb99",
			borderLeftColor: "#eebb99",
			width: "20px", 
			borderBottomWidth: "25px", 
			borderRightWidth: "10px", 
			bottom: "0px",
			left: "258px",
		}, 4000);
	    $(".leftFoot").animate({
			borderBottomColor: "#eebb99",
			borderRightColor: "#eebb99",
			width: "20px", 
			borderBottomWidth: "25px", 
			borderLeftWidth: "10px", 
			bottom: "0px",
			left: "207px",
		}, 4000);
	    $(".leftHand").animate({
			backgroundColor: "transparent",
			borderTopColor: "#eebb99",
			width: "15px",  
			height: "0px", 
			bottom: "180px",
			left: "295px",
			borderRadius: "0px",
			borderTopWidth: "40px", 
			borderRightWidth: "10px",
		}, 4000);
		$(".hulkPantsRight").animate({ 
			width: "30px",  
			height: "60px", 
			bottom: "124px",
			left: "255px",
		}, 4000);
		$(".hulkPantsLeft").animate({ 
			width: "30px",  
			height: "60px", 
			bottom: "124px",
			left: "215px",
		}, 4000);
		$(".hulkPantsTop").animate({ 
			width: "70px",  
			height: "30px", 
			bottom: "184px",
			left: "215px",
		}, 4000);
		$({deg: -50}).animate({deg: 0}, {
        	duration: 4000,
        	step: function(now) {
            	$(".hulkPantsRight").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
		$({deg: 50}).animate({deg: 0}, {
        	duration: 4000,
        	step: function(now) {
            	$(".hulkPantsLeft").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
	}, 17000)
	setTimeout(function(){
		$(".hulkPantsLeft").animate({left: "540px"}, 300)
		$(".hulkPantsRight").animate({left: "580px"}, 300)
		$(".hulkPantsTop").animate({left: "540px"}, 300)
	}, 22000)
	setTimeout(function(){
		$(".hulkPantsLeft").css("visibility", "hidden");
		$(".hulkPantsRight").css("visibility", "hidden");
		$(".hulkPantsTop").css("visibility", "hidden");
	}, 22300)
})

$(".cyclopsStart").click(function(){
	$("body").scrollTo(50);
	setTimeout(function(){
		$(".cyclopsHead").animate({left: "230px"}, 300);
		$(".cyclopsHead").css("visibility", "visible");
		$(".cyclopsNeck").animate({left: "240px"}, 300);
		$(".cyclopsNeck").css("visibility", "visible");
		$(".cyclopsRightThigh").animate({left: "255px"}, 300);
		$(".cyclopsRightThigh").css("visibility", "visible");
		$(".cyclopsLeftThigh").animate({left: "215px"}, 300);
		$(".cyclopsLeftThigh").css("visibility", "visible");
		$(".cyclopsRightShin").animate({left: "255px"}, 300);
		$(".cyclopsRightShin").css("visibility", "visible");
		$(".cyclopsLeftShin").animate({left: "215px"}, 300);
		$(".cyclopsLeftShin").css("visibility", "visible");
		$(".cyclopsTorso").animate({left: "200px"}, 300);
		$(".cyclopsTorso").css("visibility", "visible");
		$(".cyclopsGroin").animate({left: "220px"}, 300);
		$(".cyclopsGroin").css("visibility", "visible");
		$(".cyclopsLeftShoulder").animate({left: "190px"}, 300);
		$(".cyclopsLeftShoulder").css("visibility", "visible");
		$(".cyclopsRightShoulder").animate({left: "280px"}, 300);
		$(".cyclopsRightShoulder").css("visibility", "visible");
		$(".cyclopsLeftBicep").animate({left: "180px"}, 300);
		$(".cyclopsLeftBicep").css("visibility", "visible");
		$(".cyclopsRightBicep").animate({left: "295px"}, 300);
		$(".cyclopsRightBicep").css("visibility", "visible");
		$(".cyclopsLeftForearm").animate({left: "180px"}, 300);
		$(".cyclopsLeftForearm").css("visibility", "visible");
		$(".cyclopsRightForearm").animate({left: "295px"}, 300);
		$(".cyclopsRightForearm").css("visibility", "visible");
		$(".cyclopsRightFoot").animate({left: "258px"}, 300);
		$(".cyclopsRightFoot").css("visibility", "visible");
		$(".cyclopsLeftFoot").animate({left: "207px"}, 300);
		$(".cyclopsLeftFoot").css("visibility", "visible");
		$(".cyclopsRightHand").animate({left: "180px"}, 300);
		$(".cyclopsRightHand").css("visibility", "visible");
		$(".cyclopsLeftHand").animate({left: "295px"}, 300);
		$(".cyclopsLeftHand").css("visibility", "visible");
		$(".cyclopsBelt").animate({left: "220px"}, 300);
		$(".cyclopsBelt").css("visibility", "visible");
		$(".cyclopsBelt1").animate({left: "238px"}, 300);
		$(".cyclopsBelt1").css("visibility", "visible");
		$(".cyclopsHead1").css("visibility", "visible");
		$(".cyclopsVisor").animate({left: "227px"}, 300);
		$(".cyclopsVisor").css("visibility", "visible");
		$(".cyclopsVisor1").animate({left: "227px"}, 300);
		$(".cyclopsVisor1").css("visibility", "visible");	
	}, 1000)
	setTimeout(function(){
		$(".leftForearm").css("visibility", "hidden");
		$(".leftBicep").css("visibility", "hidden");
		$(".rightHand").css("visibility", "hidden");
		$(".torso").css("visibility", "hidden");
	}, 1400)
	setTimeout(function(){
		$(".cyclopsVisor").animate({left: "256px", width: "16px"});
		$(".cyclopsVisor1").animate({left: "262px", width: "10px"});
		$(".cyclopsHead1").animate({left: "259px", width: "11px"});
	}, 2000)
	setTimeout(function(){
		$(".cyclopsRightHand").animate({left: "245px", bottom: "260px"}, 250);
		$(".cyclopsLeftForearm").animate({left: "234px", bottom: "246px"}, 500);
		// $(".cyclopsLeftBicep").animate({left: "208px", bottom: "263px"}, 500);
		$({deg: 0}).animate({deg: -87}, {
        	duration: 250,
        	step: function(now) {
            	$(".cyclopsRightHand").css({
                	transform: 'rotate(' + now + 'deg)',
                	transformOrigin:  "50% 50%",
        	    });
        	}
    	});
    	$({deg: 0}).animate({deg: -172}, {
        	duration: 500,
        	step: function(now) {
            	$(".cyclopsLeftForearm").css({
                	transform: 'rotate(' + now + 'deg)',
                	transformOrigin:  "50% 10%",
        	    });
        	}
    	});
    	$({deg: 0}).animate({deg: -65}, {
        	duration: 500,
        	step: function(now) {
            	$(".cyclopsLeftBicep").css({
                	transform: 'rotate(' + now + 'deg)',
                	transformOrigin:  "50% 10%",
        	    });
        	}
    	});
	}, 3000)
	setTimeout(function(){
		$(".cyclopsRightHand").animate({left: "242px", bottom: "304px"}, 250);
		$({deg: -87}).animate({deg: -175}, {
        	duration: 250,
        	step: function(now) {
            	$(".cyclopsRightHand").css({
                	transform: 'rotate(' + now + 'deg)',
                	transformOrigin:  "50% 10%",
        	    });
        	}
    	});
	}, 3250)
	setTimeout(function(){
		$(".cyclopsBeam").css("visibility", "visible");
		$(".cyclopsBeam").animate({width: "234px"}, 300)
	}, 3500)
	setTimeout(function(){
		$(".cyclopsBeam").animate({width: "6px", left: "500px"}, 300)
	}, 4500)
	setTimeout(function(){
		$(".cyclopsBeam").css("visibility", "hidden");
		$(".cyclopsBeam").animate({left: "267px"});
	}, 4800)
	setTimeout(function(){
		$(".cyclopsVisor").animate({left: "227px", width: "46px"});
		$(".cyclopsVisor1").animate({left: "227px", width: "46px"});
		$(".cyclopsHead1").animate({left: "238px", width: "24px"});
		$(".cyclopsRightHand").animate({left: "212px"});
		$(".cyclopsLeftForearm").animate({left: "204px"});
		$(".cyclopsLeftBicep").animate({bottom: "280px", height: "30px"});
		$(".cyclopsLeftBicep").css({"z-index": "1"});
	}, 5500)
	setTimeout(function(){
		$(".cyclopsBeam1").css("visibility", "visible");
		$(".cyclopsBeam1").css("display", "block");
		$(".cyclopsBeam1").animate({height: "500px", width: "500px", bottom: "0px", left: "0px", borderRadius: "0px", opacity: "1"}, 300);
	}, 6000)
	setTimeout(function(){
		$(".cyclopsHead").animate({left: "590px"}, 100);
		$(".cyclopsHead").css("visibility", "hidden");
		$(".cyclopsNeck").animate({left: "600px"}, 100);
		$(".cyclopsNeck").css("visibility", "hidden");
		$(".cyclopsRightThigh").animate({left: "615px"}, 100);
		$(".cyclopsRightThigh").css("visibility", "hidden");
		$(".cyclopsLeftThigh").animate({left: "575px"}, 100);
		$(".cyclopsLeftThigh").css("visibility", "hidden");
		$(".cyclopsRightShin").animate({left: "615px"}, 100);
		$(".cyclopsRightShin").css("visibility", "hidden");
		$(".cyclopsLeftShin").animate({left: "575px"}, 100);
		$(".cyclopsLeftShin").css("visibility", "hidden");
		$(".cyclopsTorso").animate({left: "560px"}, 100);
		$(".cyclopsTorso").css("visibility", "hidden");
		$(".cyclopsGroin").animate({left: "580px"}, 100);
		$(".cyclopsGroin").css("visibility", "hidden");
		$(".cyclopsLeftShoulder").animate({left: "550px"}, 100);
		$(".cyclopsLeftShoulder").css("visibility", "hidden");
		$(".cyclopsRightShoulder").animate({left: "640px"}, 100);
		$(".cyclopsRightShoulder").css("visibility", "hidden");
		$(".cyclopsLeftBicep").animate({left: "540px", height: "70px", bottom: "250px"}, 100);
		$({deg: -65}).animate({deg: 0}, {
        	duration: 100,
        	step: function(now) {
            	$(".cyclopsLeftBicep").css({
                	transform: 'rotate(' + now + 'deg)',
                	transformOrigin:  "50% 10%",
        	    });
        	}
    	});
		$(".cyclopsLeftBicep").css("visibility", "hidden");
		$(".cyclopsRightBicep").animate({left: "655px"}, 100);
		$(".cyclopsRightBicep").css("visibility", "hidden");
		$(".cyclopsLeftForearm").animate({left: "540px", bottom: "205px"}, 100);
		$({deg: -172}).animate({deg: 0}, {
        	duration: 100,
        	step: function(now) {
            	$(".cyclopsLeftForearm").css({
                	transform: 'rotate(' + now + 'deg)',
                	transformOrigin:  "50% 10%",
        	    });
        	}
    	});
		$(".cyclopsLeftForearm").css("visibility", "hidden");
		$(".cyclopsRightForearm").animate({left: "655px"}, 100);
		$(".cyclopsRightForearm").css("visibility", "hidden");
		$(".cyclopsRightFoot").animate({left: "618px"}, 100);
		$(".cyclopsRightFoot").css("visibility", "hidden");
		$(".cyclopsLeftFoot").animate({left: "567px"}, 100);
		$(".cyclopsLeftFoot").css("visibility", "hidden");
		$(".cyclopsRightHand").animate({left: "540px", bottom: "180px"}, 100);
		$({deg: -175}).animate({deg: 0}, {
        	duration: 100,
        	step: function(now) {
            	$(".cyclopsRightHand").css({
                	transform: 'rotate(' + now + 'deg)',
                	transformOrigin:  "50% 10%",
        	    });
        	}
    	});
		$(".cyclopsRightHand").css("visibility", "hidden");
		$(".cyclopsLeftHand").animate({left: "655px"}, 100);
		$(".cyclopsLeftHand").css("visibility", "hidden");
		$(".cyclopsBelt").animate({left: "580px"}, 100);
		$(".cyclopsBelt").css("visibility", "hidden");
		$(".cyclopsBelt1").animate({left: "598px"}, 100);
		$(".cyclopsBelt1").css("visibility", "hidden");
		$(".cyclopsHead1").css("visibility", "hidden");
		$(".cyclopsVisor").animate({left: "587px"}, 100);
		$(".cyclopsVisor").css("visibility", "hidden");
		$(".cyclopsVisor1").animate({left: "587px"}, 100);
		$(".cyclopsVisor1").css("visibility", "hidden");
	}, 6400)
	setTimeout(function(){
		$(".leftForearm").css("visibility", "visible");
		$(".leftBicep").css("visibility", "visible");
		$(".rightHand").css("visibility", "visible");
		$(".torso").css("visibility", "visible");
		$(".cyclopsBeam1").animate({height: "6px", width: "46px", bottom: "375px", left: "227px", borderRadius: "18px", opacity: ".8"}, 300);
	}, 7000)
	setTimeout(function(){
		$(".cyclopsBeam1").fadeOut();
	}, 8000)
	setTimeout(function(){
		$(".cyclopsBeam1").css("visibility", "hidden")
	}, 8400)
})

$(".wolverineStart").click(function(){
	$("body").scrollTo(50);
	setTimeout(function	(){
		$(".wolverineHead").animate({left: "230px"}, 300);
		$(".wolverineHead").css("visibility", "visible");
		$(".wolverineNeck").animate({left: "240px"}, 300);
		$(".wolverineNeck").css("visibility", "visible");
		$(".wolverineRightThigh").animate({left: "255px"}, 300);
		$(".wolverineRightThigh").css("visibility", "visible");
		$(".wolverineLeftThigh").animate({left: "215px"}, 300);
		$(".wolverineLeftThigh").css("visibility", "visible");
		$(".wolverineRightShin").animate({left: "255px"}, 300);
		$(".wolverineRightShin").css("visibility", "visible");
		$(".wolverineLeftShin").animate({left: "215px"}, 300);
		$(".wolverineLeftShin").css("visibility", "visible");
		$(".wolverineTorso").animate({left: "200px"}, 300);
		$(".wolverineTorso").css("visibility", "visible");
		$(".wolverineGroin").animate({left: "220px"}, 300);
		$(".wolverineGroin").css("visibility", "visible");
		$(".wolverineLeftShoulder").animate({left: "190px"}, 300);
		$(".wolverineLeftShoulder").css("visibility", "visible");
		$(".wolverineRightShoulder").animate({left: "280px"}, 300);
		$(".wolverineRightShoulder").css("visibility", "visible");
		$(".wolverineLeftBicep").animate({left: "180px"}, 300);
		$(".wolverineLeftBicep").css("visibility", "visible");
		$(".wolverineRightBicep").animate({left: "295px"}, 300);
		$(".wolverineRightBicep").css("visibility", "visible");
		$(".wolverineLeftForearm").animate({left: "180px"}, 300);
		$(".wolverineLeftForearm").css("visibility", "visible");
		$(".wolverineRightForearm").animate({left: "295px"}, 300);
		$(".wolverineRightForearm").css("visibility", "visible");
		$(".wolverineRightFoot").animate({left: "258px"}, 300);
		$(".wolverineRightFoot").css("visibility", "visible");
		$(".wolverineLeftFoot").animate({left: "207px"}, 300);
		$(".wolverineLeftFoot").css("visibility", "visible");
		$(".wolverineRightHand").animate({left: "180px"}, 300);
		$(".wolverineRightHand").css("visibility", "visible");
		$(".wolverineLeftHand").animate({left: "295px"}, 300);
		$(".wolverineLeftHand").css("visibility", "visible");
		$(".wolverineBelt").animate({left: "220px"}, 300);
		$(".wolverineBelt").css("visibility", "visible");
		$(".wolverineBelt1").animate({left: "237px"}, 300);
		$(".wolverineBelt1").css("visibility", "visible");
		$(".wolverineHead1").css("visibility", "visible");
		$(".wolverineHead2").animate({left: "230px"}, 300);
		$(".wolverineHead2").css("visibility", "visible");
		$(".wolverineRightEye").animate({left: "252px"}, 300);
		$(".wolverineRightEye").css("visibility", "visible");
		$(".wolverineLeftEye").animate({left: "230px"}, 300);
		$(".wolverineLeftEye").css("visibility", "visible");
		$(".wolverineRightHorn").animate({left: "255px"}, 300);
		$(".wolverineRightHorn").css("visibility", "visible");
		$(".wolverineLeftHorn").animate({left: "227px"}, 300);
		$(".wolverineLeftHorn").css("visibility", "visible");
		$(".wolverineTorso1").animate({left: "200px"}, 300);
		$(".wolverineTorso1").css("visibility", "visible");
	}, 1000)
	setTimeout(function(){
		$(".rightFoot").css("visibility", "hidden");
		$(".leftFoot").css("visibility", "hidden");
		$(".rightShin").css("visibility", "hidden");
		$(".leftShin").css("visibility", "hidden");
		$(".rightThigh").css("visibility", "hidden");
		$(".leftThigh").css("visibility", "hidden");
		$(".groin").css("visibility", "hidden");
		$(".torso").css("visibility", "hidden");
		$(".rightShoulder").css("visibility", "hidden");
		$(".leftShoulder").css("visibility", "hidden");
		$(".head").css("visibility", "hidden");
		$(".neck").css("visibility", "hidden");
		$(".leftForearm").css("visibility", "hidden");
		$(".rightForearm").css("visibility", "hidden");
		$(".rightHand").css("visibility", "hidden");
		$(".leftHand").css("visibility", "hidden");
	},1400)
	setTimeout(function(){
		$(".wolverineRightFoot").animate({left: "308px"}, 500)
		$(".wolverineLeftFoot").animate({left: "157px"}, 500)
		$(".wolverineLeftShin").animate({left: "165px"}, 500)
		$(".wolverineRightShin").animate({left: "305px"}, 500)
		$(".wolverineLeftThigh").animate({left: "200px", bottom: "80px"}, 500)
		$(".wolverineRightThigh").animate({left: "270px", bottom: "80px"}, 500)
		$(".wolverineGroin").animate({bottom: "150px"}, 500)
		$(".wolverineBelt").animate({bottom: "185px"}, 500)
		$(".wolverineBelt1").animate({bottom: "185px"}, 500)
		$(".wolverineTorso").animate({bottom: "200px"}, 500)
		$(".wolverineTorso1").animate({bottom: "200px"}, 500)
		$(".wolverineRightShoulder").animate({bottom: "255px"}, 500)
		$(".wolverineLeftShoulder").animate({bottom: "255px"}, 500)
		$(".wolverineHead").animate({bottom: "280px"}, 500)
		$(".wolverineHead1").animate({bottom: "280px"}, 500)
		$(".wolverineNeck").animate({bottom: "280px"}, 500)
		$(".wolverineHead2").animate({bottom: "307px"}, 500)
		$(".wolverineRightEye").animate({bottom: "307px"}, 500)
		$(".wolverineLeftEye").animate({bottom: "307px"}, 500)
		$(".wolverineLeftHorn").animate({bottom: "315px"}, 500)
		$(".wolverineRightHorn").animate({bottom: "315px"}, 500)
		$(".rightBicep").animate({height: "50px", bottom: "225px", left: "301px"}, 500)
		$(".leftBicep").animate({height: "50px", bottom: "225px", left: "174px"}, 500)
		$(".wolverineLeftForearm").animate({bottom: "185px", left: "148px"}, 500)
		$(".wolverineRightHand").animate({bottom: "166px", left: "138px", borderLeftColor: "#8B0000"}, 500)
		$(".wolverineRightForearm").animate({bottom: "185px", left: "328px"}, 500)
		$(".wolverineLeftHand").animate({bottom: "166px", left: "338px", borderRightColor: "#8B0000"}, 500)
		$({deg: 0}).animate({deg: -60}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineRightThigh").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 0}).animate({deg: 20}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineRightHand").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 0}).animate({deg: 20}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineLeftForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 0}).animate({deg: -20}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineRightForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 0}).animate({deg: -20}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineLeftHand").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
		$({deg: 0}).animate({deg: -50}, {
        	duration: 500,
        	step: function(now) {
            	$(".rightBicep").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 0}).animate({deg: 50}, {
        	duration: 500,
        	step: function(now) {
            	$(".leftBicep").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 0}).animate({deg: 60}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineLeftThigh").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
	},2000)
	setTimeout(function(){
		$(".wolverineRightClaws").css("visibility", "visible");
		$(".wolverineLeftClaws").css("visibility", "visible");
		$(".wolverineRightClaws").animate({left: "353px", top: "331px"}, 100);
		$(".wolverineLeftClaws").animate({left: "120px", top: "331px"}, 100);
	}, 3000)
	setTimeout(function(){
		$(".rightBicep").animate({height: "70px", bottom: "200px", left: "295px"}, 500)
		$(".leftBicep").animate({height: "70px", bottom: "200px", left: "180px"}, 500)
		$(".wolverineRightForearm").animate({left: "278px"}, 500)
		$(".wolverineLeftForearm").animate({left: "198px"}, 500)
		$(".wolverineRightHand").animate({bottom: "216px", left: "218px"}, 500)
		$(".wolverineLeftHand").animate({bottom: "216px", left: "258px"}, 500)
		$(".wolverineLeftClaws").animate({top: "209px", left: "243px"}, 500)
		$(".wolverineRightClaws").animate({top: "209px", left: "228px"}, 500)
		$({deg: -50}).animate({deg: 0}, {
        	duration: 500,
        	step: function(now) {
            	$(".rightBicep").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 50}).animate({deg: 0}, {
        	duration: 500,
        	step: function(now) {
            	$(".leftBicep").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: -20}).animate({deg: 140}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineRightForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: -20}).animate({deg: 140}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineLeftHand").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 20}).animate({deg: -140}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineLeftForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 20}).animate({deg: -140}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineRightHand").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 20}).animate({deg: -140}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineLeftClaws").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: -20}).animate({deg: 140}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineRightClaws").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
	}, 4000)
	setTimeout(function(){
		$(".wolverineLeftClaws").animate({top: "243px", left: "215px"}, 100)
		$(".wolverineRightClaws").animate({top: "243px", left: "253px"}, 100)
	}, 5000)
	setTimeout(function(){
		$(".wolverineLeftClaws").css("visibility", "hidden")
		$(".wolverineRightClaws").css("visibility", "hidden")
		$(".wolverineLeftClaws").animate({top: "288px", left: "136px"},100)
		$(".wolverineRightClaws").animate({top: "288px", left: "337px"},100)
		$({deg: -140}).animate({deg: 20}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineLeftClaws").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 140}).animate({deg: -20}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineRightClaws").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
	}, 5200)
	setTimeout(function(){
		$(".wolverineHead").animate({bottom: "350px"}, 500);
		$(".wolverineNeck").animate({bottom: "335px"}, 500);
		$(".wolverineRightThigh").animate({left: "255px", bottom: "100px"}, 500);
		$(".wolverineLeftThigh").animate({left: "215px", bottom: "100px"}, 500);
		$(".wolverineRightShin").animate({left: "255px"}, 500);
		$(".wolverineLeftShin").animate({left: "215px"}, 500);
		$(".wolverineTorso").animate({bottom: "250px"}, 500);
		$(".wolverineGroin").animate({bottom: "200px"}, 500);
		$(".wolverineLeftShoulder").animate({bottom: "305px"}, 500);
		$(".wolverineRightShoulder").animate({bottom: "305px"}, 500);
		$(".leftBicep").animate({bottom: "250px"}, 500);
		$(".rightBicep").animate({bottom: "250px"}, 500);
		$(".wolverineLeftForearm").animate({left: "180px", bottom: "205px"}, 500);
		$(".wolverineRightForearm").animate({left: "295px", bottom: "205px"}, 500);
		$(".wolverineRightFoot").animate({left: "258px"}, 500);
		$(".wolverineLeftFoot").animate({left: "207px"}, 500);
		$(".wolverineRightHand").animate({bottom: "180px", left: "180px", borderLeftColor: "transparent"}, 500);
		$(".wolverineLeftHand").animate({bottom: "180px", left: "295px", borderRightColor: "transparent"}, 500);
		$(".wolverineBelt").animate({bottom: "235px"}, 500);
		$(".wolverineBelt1").animate({bottom: "235px"}, 500);
		$(".wolverineHead1").animate({bottom: "350px"}, 500);
		$(".wolverineHead2").animate({bottom: "377px"}, 500);
		$(".wolverineRightEye").animate({bottom: "377px"}, 500);
		$(".wolverineLeftEye").animate({bottom: "377px"}, 500);
		$(".wolverineRightHorn").animate({bottom: "385px"}, 500);
		$(".wolverineLeftHorn").animate({bottom: "385px"}, 500);
		$(".wolverineTorso1").animate({bottom: "250px"}, 500);
		$({deg: 140}).animate({deg: 0}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineRightForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 140}).animate({deg: 0}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineLeftHand").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: -140}).animate({deg: 0}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineLeftForearm").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: -140}).animate({deg: 0}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineRightHand").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: 60}).animate({deg: 0}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineLeftThigh").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
    	$({deg: -60}).animate({deg: 0}, {
        	duration: 500,
        	step: function(now) {
            	$(".wolverineRightThigh").css({
                	transform: 'rotate(' + now + 'deg)'
        	    });
        	}
    	});
	}, 6000)
	setTimeout(function(){
		$(".rightFoot").css("visibility", "visible");
		$(".leftFoot").css("visibility", "visible");
		$(".rightShin").css("visibility", "visible");
		$(".leftShin").css("visibility", "visible");
		$(".rightThigh").css("visibility", "visible");
		$(".leftThigh").css("visibility", "visible");
		$(".groin").css("visibility", "visible");
		$(".torso").css("visibility", "visible");
		$(".rightShoulder").css("visibility", "visible");
		$(".leftShoulder").css("visibility", "visible");
		$(".head").css("visibility", "visible");
		$(".neck").css("visibility", "visible");
		$(".leftForearm").css("visibility", "visible");
		$(".rightForearm").css("visibility", "visible");
		$(".rightHand").css("visibility", "visible");
		$(".leftHand").css("visibility", "visible");
		$(".wolverineHead").animate({left: "590px"}, 300);
		$(".wolverineNeck").animate({left: "600px"}, 300);
		$(".wolverineRightThigh").animate({left: "615px"}, 300);
		$(".wolverineLeftThigh").animate({left: "575px"}, 300);
		$(".wolverineRightShin").animate({left: "615px"}, 300);
		$(".wolverineLeftShin").animate({left: "575px"}, 300);
		$(".wolverineTorso").animate({left: "560px"}, 300);
		$(".wolverineGroin").animate({left: "580px"}, 300);
		$(".wolverineLeftShoulder").animate({left: "550px"}, 300);
		$(".wolverineRightShoulder").animate({left: "640px"}, 300);
		$(".wolverineLeftBicep").animate({left: "540px"}, 300);
		$(".wolverineRightBicep").animate({left: "655px"}, 300);
		$(".wolverineLeftForearm").animate({left: "540px"}, 300);
		$(".wolverineRightForearm").animate({left: "655px"}, 300);
		$(".wolverineRightFoot").animate({left: "618px"}, 300);
		$(".wolverineLeftFoot").animate({left: "567px"}, 300);
		$(".wolverineRightHand").animate({left: "540px"}, 300);
		$(".wolverineLeftHand").animate({left: "655px"}, 300);
		$(".wolverineBelt").animate({left: "580px"}, 300);
		$(".wolverineBelt1").animate({left: "597px"}, 300);
		$(".wolverineHead2").animate({left: "590px"}, 300);
		$(".wolverineRightEye").animate({left: "512px"}, 300);
		$(".wolverineLeftEye").animate({left: "590px"}, 300);
		$(".wolverineRightHorn").animate({left: "615px"}, 300);
		$(".wolverineLeftHorn").animate({left: "587px"}, 300);
		$(".wolverineTorso1").animate({left: "560px"}, 300);
	}, 7000)
	setTimeout(function(){
		$(".wolverineHead").css("visibility", "hidden");
		$(".wolverineNeck").css("visibility", "hidden");
		$(".wolverineRightThigh").css("visibility", "hidden");
		$(".wolverineLeftThigh").css("visibility", "hidden");
		$(".wolverineRightShin").css("visibility", "hidden");
		$(".wolverineLeftShin").css("visibility", "hidden");
		$(".wolverineTorso").css("visibility", "hidden");
		$(".wolverineGroin").css("visibility", "hidden");
		$(".wolverineLeftShoulder").css("visibility", "hidden");
		$(".wolverineRightShoulder").css("visibility", "hidden");
		$(".wolverineLeftBicep").css("visibility", "hidden");
		$(".wolverineRightBicep").css("visibility", "hidden");
		$(".wolverineLeftForearm").css("visibility", "hidden");
		$(".wolverineRightForearm").css("visibility", "hidden");
		$(".wolverineRightFoot").css("visibility", "hidden");
		$(".wolverineLeftFoot").css("visibility", "hidden");
		$(".wolverineRightHand").css("visibility", "hidden");
		$(".wolverineLeftHand").css("visibility", "hidden");
		$(".wolverineBelt").css("visibility", "hidden");
		$(".wolverineBelt1").css("visibility", "hidden");
		$(".wolverineHead1").css("visibility", "hidden");
		$(".wolverineHead2").css("visibility", "hidden");
		$(".wolverineRightEye").css("visibility", "hidden");
		$(".wolverineLeftEye").css("visibility", "hidden");
		$(".wolverineRightHorn").css("visibility", "hidden");
		$(".wolverineLeftHorn").css("visibility", "hidden");
		$(".wolverineTorso1").css("visibility", "hidden");
	}, 7400)
})

$(".thorStart").click(function(){
	$("body").scrollTo(50);
	setTimeout(function(){
		$(".thorRightThigh").css("visibility", "visible");
		$(".thorLeftThigh").css("visibility", "visible");
		$(".thorRightShin").css("visibility", "visible");
		$(".thorLeftShin").css("visibility", "visible");
		$(".thorTorso").css("visibility", "visible");
		$(".thorGroin").css("visibility", "visible");
		$(".thorLeftShoulder").css("visibility", "visible");
		$(".thorRightShoulder").css("visibility", "visible");
		$(".thorLeftFoot").css("visibility", "visible");
		$(".thorRightFoot").css("visibility", "visible");
		$(".thorBelt").css("visibility", "visible");
		$(".thorHead1").css("visibility", "visible");
		$(".thorRightWing").css("visibility", "visible");
		$(".thorLeftWing").css("visibility", "visible");
		$(".thorLeftHair").css("visibility", "visible");
		$(".thorRightHair").css("visibility", "visible");
		$(".thorRightCircleTop").css("visibility", "visible");
		$(".thorRightCircleMiddle").css("visibility", "visible");
		$(".thorRightCircleBottom").css("visibility", "visible");
		$(".thorLeftCircleTop").css("visibility", "visible");
		$(".thorLeftCircleMiddle").css("visibility", "visible");
		$(".thorLeftCircleBottom").css("visibility", "visible");
		$(".thorRightWristBand").css("visibility", "visible");
		$(".thorRightWristBand1").css("visibility", "visible");
		$(".thorLeftWristBand").css("visibility", "visible");
		$(".thorLeftWristBand1").css("visibility", "visible");
		$(".thorLeftKnee").css("visibility", "visible");
		$(".thorRightKnee").css("visibility", "visible");
		$(".thorCape").css("visibility", "visible");
		$(".thorRightThigh").animate({left: "255px"}, 300);
		$(".thorLeftThigh").animate({left: "215px"}, 300);
		$(".thorRightShin").animate({left: "255px"}, 300);
		$(".thorLeftShin").animate({left: "215px"}, 300);
		$(".thorTorso").animate({left: "200px"}, 300);
		$(".thorGroin").animate({left: "220px"}, 300);
		$(".thorLeftShoulder").animate({left: "190px"}, 300);
		$(".thorRightShoulder").animate({left: "280px"}, 300);
		$(".thorLeftFoot").animate({left: "207px"}, 300);
		$(".thorRightFoot").animate({left: "258px"}, 300);
		$(".thorBelt").animate({left: "220px"}, 300);
		$(".thorHead1").animate({left: "230px"}, 300);
		$(".thorRightWing").animate({left: "262px"}, 300);
		$(".thorLeftWing").animate({left: "228px"}, 300);
		$(".thorLeftHair").animate({left: "229px"}, 300);
		$(".thorRightHair").animate({left: "254px"}, 300);
		$(".thorRightCircleTop").animate({left: "259px"}, 300);
		$(".thorRightCircleMiddle").animate({left: "255px"}, 300);
		$(".thorRightCircleBottom").animate({left: "253px"}, 300);
		$(".thorLeftCircleTop").animate({left: "223px"}, 300);
		$(".thorLeftCircleMiddle").animate({left: "227px"}, 300);
		$(".thorLeftCircleBottom").animate({left: "230px"}, 300);
		$(".thorRightWristBand").animate({left: "295px"}, 300);
		$(".thorRightWristBand1").animate({left: "295px"}, 300);
		$(".thorLeftWristBand").animate({left: "180px"}, 300);
		$(".thorLeftWristBand1").animate({left: "180px"}, 300);
		$(".thorLeftKnee").animate({left: "250px"}, 300);
		$(".thorRightKnee").animate({left: "210px"}, 300);
		$(".thorCape").animate({left: "175px"}, 300);	
	}, 1000)	
	setTimeout(function(){
		$(".torso").css("visibility", "hidden");
		$(".leftShoulder").css("visibility", "hidden");
		$(".rightShoulder").css("visibility", "hidden");
		$(".groin").css("visibility", "hidden");
		$(".leftFoot").css("visibility", "hidden");
		$(".rightFoot").css("visibility", "hidden");
		$(".leftShin").css("visibility", "hidden");
		$(".rightShin").css("visibility", "hidden");
		$(".leftThigh").css("visibility", "hidden");
		$(".rightThigh").css("visibility", "hidden");	
	}, 1400)
	setTimeout(function(){
		$(".rightBicep").animate({bottom: "320px"}, 500)
		$(".rightForearm").animate({bottom: "380px"}, 500)
		$(".leftHand").animate({bottom: "420px"}, 500)
		$(".thorRightWristBand").animate({bottom: "402px"}, 500)
		$(".thorRightWristBand1").animate({bottom: "410px"}, 500)
	}, 2000)
	setTimeout(function(){
		$(".rightBicep").animate({bottom: "315px", left: "310px"}, 500)
		$(".rightForearm").animate({bottom: "370px", left: "338px"}, 500)
		$(".leftHand").animate({bottom: "410px", left: "357px"}, 500)
		$(".thorRightWristBand").animate({bottom: "392px", left: "341px"}, 500)
		$(".thorRightWristBand1").animate({bottom: "400px", left: "341px"}, 500)
		$({deg: 0}).animate({deg: 30}, {
	    	duration: 500,
	    	step: function(now) {
	        	$(".rightBicep").css({
	            	transform: 'rotate(' + now + 'deg)'
	    	    });
	    	    $(".rightForearm").css({
	            	transform: 'rotate(' + now + 'deg)'
	    	    });
	    	    $(".leftHand").css({
	            	transform: 'rotate(' + now + 'deg)'
	    	    });
	    	    $(".thorRightWristBand").css({
	            	transform: 'rotate(' + now + 'deg)'
	    	    });
	    	    $(".thorRightWristBand1").css({
	            	transform: 'rotate(' + now + 'deg)'
	    	    });
	    	}
	    });
	}, 2500)
	setTimeout(function(){
		$(".frame").animate({
			backgroundColor: "#474546",
		}, 1800)
		setTimeout(function(){
			$(".frame").css({"backgroundColor": "#00FFFF"})
		},1900)
		setTimeout(function(){
			$(".frame").css("background-color", "#474546")
		},2000)
	}, 3000)
	setTimeout(function(){
		$(".thorHammer1").css("visibility", "visible");
		$(".thorHammer").css("visibility", "visible");
		$(".thorHammer1").animate({
			left: "313px"
		}, 200)
		$(".thorHammer").animate({
			left: "350px"
		}, 200)
		setTimeout(function(){
			$(".frame").css({"backgroundColor": "#00FFFF"})
		},600)
		setTimeout(function(){
			$(".frame").css("background-color", "#474546")
		},700)
	}, 5000)
	setTimeout(function(){
		$(".thorRightThigh").animate({left: "355px", bottom: "690px",}, 500);
		$(".thorLeftThigh").animate({left: "315px", bottom: "690px",}, 500);
		$(".thorRightShin").animate({left: "355px", bottom: "610px",}, 500);
		$(".thorLeftShin").animate({left: "315px", bottom: "610px",}, 500);
		$(".thorTorso").animate({left: "300px", bottom: "840px",}, 500);
		$(".thorGroin").animate({left: "320px", bottom: "790px",}, 500);
		$(".thorLeftShoulder").animate({left: "290px", bottom: "895px",}, 500);
		$(".thorRightShoulder").animate({left: "380px", bottom: "895px",}, 500);
		$(".thorLeftFoot").animate({left: "307px", bottom: "590px",}, 500);
		$(".thorRightFoot").animate({left: "358px", bottom: "590px",}, 500);
		$(".thorBelt").animate({left: "320px", bottom: "825px",}, 500);
		$(".thorHead1").animate({left: "330px", bottom: "967px",}, 500);
		$(".thorRightWing").animate({left: "362px", bottom: "978px",}, 500);
		$(".thorLeftWing").animate({left: "328px", bottom: "978px",}, 500);
		$(".thorLeftHair").animate({left: "329px", bottom: "907px",}, 500);
		$(".thorRightHair").animate({left: "354px", bottom: "907px",}, 500);
		$(".thorRightCircleTop").animate({left: "359px", bottom: "895px",}, 500);
		$(".thorRightCircleMiddle").animate({left: "355px", bottom: "858px",}, 500);
		$(".thorRightCircleBottom").animate({left: "353px", bottom: "802px",}, 500);
		$(".thorLeftCircleTop").animate({left: "323px", bottom: "895px",}, 500);
		$(".thorLeftCircleMiddle").animate({left: "327px", bottom: "858px",}, 500);
		$(".thorLeftCircleBottom").animate({left: "330px", bottom: "802px",}, 500);
		$(".thorRightWristBand").animate({bottom: "982px", left: "441px"}, 500)
		$(".thorRightWristBand1").animate({bottom: "990px", left: "441px"}, 500)
		$(".thorLeftWristBand").animate({left: "280px", bottom: "803px",}, 500);
		$(".thorLeftWristBand1").animate({left: "280px", bottom: "811px",}, 500);
		$(".thorLeftKnee").animate({left: "350px", bottom: "690px",}, 500);
		$(".thorRightKnee").animate({left: "310px", bottom: "690px",}, 500);
		$(".thorCape").animate({left: "275px", bottom: "590px",}, 500);
		$(".thorHammer").animate({left: "450px", bottom: "990px"}, 500);
		$(".thorHammer1").animate({left: "413px", bottom: "1017px"}, 500);
		$(".rightBicep").animate({left: "413px", bottom: "1017px"}, 500);
		$(".leftBicep").animate({left: "280px", bottom: "840px"}, 500);
		$(".leftForearm").animate({left: "413px", bottom: "795px"}, 500);
		$(".rightForearm").animate({left: "413px", bottom: "1017px"}, 500);
		$(".leftHand").animate({left: "413px", bottom: "1017px"}, 500);
		$(".rightHand").animate({left: "280px", bottom: "770px"}, 500);
		$(".neck").animate({left: "340px", bottom: "925px"}, 500);
		$(".head").animate({left: "330px", bottom: "940px"}, 500);
	}, 6000)
	setTimeout(function(){
		$(".torso").css("visibility", "visible");
		$(".leftShoulder").css("visibility", "visible");
		$(".rightShoulder").css("visibility", "visible");
		$(".groin").css("visibility", "visible");
		$(".leftFoot").css("visibility", "visible");
		$(".rightFoot").css("visibility", "visible");
		$(".leftShin").css("visibility", "visible");
		$(".rightShin").css("visibility", "visible");
		$(".leftThigh").css("visibility", "visible");
		$(".rightThigh").css("visibility", "visible");
		$(".leftBicep").css({
			visibility : "visible",
			left: "180px",
			bottom: "250px",
		});
		$(".leftForearm").css({
			visibility : "visible",
			left: "180px",
			bottom: "205px",
		});
		$(".rightHand").css({
			visibility : "visible",
			left: "180px",
			bottom: "180px",
		});
		$(".neck").css({
			visibility : "visible",
			left: "240px",
			bottom: "335px",
		});
		$(".head").css({
			visibility : "visible",
			left: "230px",
			bottom: "350px",
		});
		$(".rightBicep").css({
			visibility : "visible",
			left: "295px",
			bottom: "250px",
		});
		$(".rightForearm").css({
			visibility : "visible",
			left: "295px",
			bottom: "205px",
		});
		$(".leftHand").css({
			visibility : "visible",
			left: "295px",
			bottom: "180px",
		});
		$(".rightBicep").css({
        	transform: 'rotate(0deg)'
	    });
	    $(".rightForearm").css({
        	transform: 'rotate(0deg)'
	    });
	    $(".leftHand").css({
        	transform: 'rotate(0deg)'
	    });
	    $(".thorRightWristBand").css({
        	transform: 'rotate(0deg)'
	    });
	    $(".thorRightWristBand1").css({
        	transform: 'rotate(0deg)'
	    });
	    $(".thorRightThigh").css({left: "615px", bottom: "100px", visibility: "hidden"});
		$(".thorLeftThigh").css({left: "575px", bottom: "100px", visibility: "hidden"});
		$(".thorRightShin").css({left: "615px", bottom: "20px", visibility: "hidden"});
		$(".thorLeftShin").css({left: "575px", bottom: "20px", visibility: "hidden"});
		$(".thorTorso").css({left: "560px", bottom: "250px", visibility: "hidden"});
		$(".thorGroin").css({left: "580px", bottom: "200px", visibility: "hidden"});
		$(".thorLeftShoulder").css({left: "550px", bottom: "305px", visibility: "hidden"});
		$(".thorRightShoulder").css({left: "640px", bottom: "305px", visibility: "hidden"});
		$(".thorLeftFoot").css({left: "567px", bottom: "0px", visibility: "hidden"});
		$(".thorRightFoot").css({left: "618px", bottom: "0px", visibility: "hidden"});
		$(".thorBelt").css({left: "580px", bottom: "235px", visibility: "hidden"});
		$(".thorHead1").css({left: "590px", bottom: "377px", visibility: "hidden"});
		$(".thorRightWing").css({left: "622px", bottom: "388px", visibility: "hidden"});
		$(".thorLeftWing").css({left: "588px", bottom: "388px", visibility: "hidden"});
		$(".thorLeftHair").css({left: "590px", bottom: "317px", visibility: "hidden"});
		$(".thorRightHair").css({left: "614px", bottom: "317px", visibility: "hidden"});
		$(".thorRightCircleTop").css({left: "619px", bottom: "305px", visibility: "hidden"});
		$(".thorRightCircleMiddle").css({left: "615px", bottom: "268px", visibility: "hidden"});
		$(".thorRightCircleBottom").css({left: "613px", bottom: "212px", visibility: "hidden"});
		$(".thorLeftCircleTop").css({left: "583px", bottom: "305px", visibility: "hidden"});
		$(".thorLeftCircleMiddle").css({left: "587px", bottom: "268px", visibility: "hidden"});
		$(".thorLeftCircleBottom").css({left: "590px", bottom: "212px", visibility: "hidden"});
		$(".thorRightWristBand").css({bottom: "213px", left: "655px", visibility: "hidden"})
		$(".thorRightWristBand1").css({bottom: "221px", left: "655px", visibility: "hidden"})
		$(".thorLeftWristBand").css({left: "540px", bottom: "213px", visibility: "hidden"});
		$(".thorLeftWristBand1").css({left: "540px", bottom: "221px", visibility: "hidden"});
		$(".thorLeftKnee").css({left: "610px", bottom: "100px", visibility: "hidden"});
		$(".thorRightKnee").css({left: "570px", bottom: "100px", visibility: "hidden"});
		$(".thorCape").css({left: "535px", bottom: "0px", visibility: "hidden"});
		$(".thorHammer").css({left: "592px", bottom: "400px", visibility: "hidden"});
		$(".thorHammer1").css({left: "555px", bottom: "427px", visibility: "hidden"});
		$(".frame").css({"backgroundColor": "#00FFFF"})
		$(".frame").animate({
			backgroundColor: "#ecf0f1",
		}, 1000)
	}, 7000)
})

$(".capStart").click(function(){

})


















