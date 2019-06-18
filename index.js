$(document).ready(function(){
	$("#btn-on").click(function(){
		$(".row div").addClass("active");
	});
});

$(document).ready(function(){
	$("#btn-off").click(function(){
		$(".row div").removeClass("active");
	});
});

$(document).ready(function(){
	$(".cercle").click(function(){
		$(this).toggleClass("active");
	})
})

// 
// 
// 


$(document).ready(function(){
	$(".carrer").click(function(){
		let cID = this.id;
		if($(this).hasClass("active") && $(".line" + cID).hasClass("active")){
			$(".line" + cID).removeClass("active");
		} else {
			$(".line" + cID).addClass("active")

		}
	})
})

$(document).ready(function(){
	$(".losange").click(function(){
		if($(this).hasClass("active") && $(".col" + this.id).hasClass("active")){
			$(".col" + this.id).removeClass("active");
		} else {
			$(".col" + this.id).addClass("active")

		}
	})
	})


// $(document).ready(function(){
// 	$(".carrer").click(function(){
// 		var cID = this.id;
// 		console.log(cID)
// 		if($(this).is("#" + cID)){
// 			console.log("matxching id")
// 		}
// 	})
// })
