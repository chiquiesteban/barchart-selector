var w, maxb, valCat;
var array = new Array();
var arrayPcts = new Array();
var arrayCats = new Array();

$(document).ready(function(){
  
	for (var n in categories) {  
	  
   		arrayCats.push(categories[n][0]); 
    	$("#group-selector").append('<option value="'+arrayCats[n]+'">'+arrayCats[n]+'</option>');
		
  	}
	
	for (var i in data) {
		array.push(data[i][2]);
		array.sort(function(a,b){return a-b}); 
	}
	
	maxb = array[array.length-1]; 
	
	for (var h in data) {
		arrayPcts.push((data[h][2]*75)/maxb);
		$('#barchart-container').append('<div class="row chapter '+data[h][1]+'"><div class="bartext" id="bt'+h+'">'+data[h][0]+'</div><div class="barchart estirar" id="bc'+h+'" style="width:'+arrayPcts[h]+'%"></div><div class="value" id="cy'+h+'">'+data[h][2]+'</div></div>');
	}
	
});

function val() {
	
	valCat = document.getElementById("group-selector").value;


	for (var j in categories) {
		
		if (valCat == categories[j][0]) {
			$('#barchart-container').empty();
			arrayPcts = []
		
			for (var i in data) {
				array.push(data[i][parseInt(j)+2]);
				array.sort(function(a,b){return a-b}); 
			}
			
			maxb = array[array.length-1]; 
			
			for (var h in data) {
				arrayPcts.push((data[h][parseInt(j)+2]*75)/maxb);
				$('#barchart-container').append('<div class="row chapter '+data[h][1]+'"><div class="bartext" id="bt'+h+'">'+data[h][0]+'</div><div class="barchart estirar" id="bc'+h+'" style="width:'+arrayPcts[h]+'%"></div><div class="value" id="cy'+h+'">'+data[h][parseInt(j)+2]+'</div></div>');
			}
		
		} 
		
	}
	
}
