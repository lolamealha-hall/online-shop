

$(document).ready(function(){

	// make a place to store the current basket total
  	var basketTotal = 0;

  	// make a way to print out the text required to show the basket total
  	function getCost(){
  		return '£' + basketTotal.toFixed(2);
  	}

    
  	// bind a function to the buttons so that clicking them increases the basket total and writes it into the page
  	$( ".addtobasket" ).on( "click", function() {

  		// make a place to store the price of the product
  		var price, $el, priceText;

  		//get the button we clicked so that we can retrieve the price from it
  		$el = $(this);

  		//get the price from the button's data
  		price = $el.data('price');

  		//add the price to the basket's total
        basketTotal = basketTotal + price;

        //get the text for the price
        priceText = getCost();

        //write the new total into the page using '.text()' to insert text and get
        $('#basket').text(priceText);

	});

	console.log(getCost());

    //write total into page

	$("#basket").text(getCost());

});






