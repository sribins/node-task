<!-- Read file-->

/*console.log("srikanthhh")

var fs = require("fs")
	var filepath = './srikanth.txt';
	console.log("start reading file !!!!")

	 fs.readFile(filepath, function(err, data){
	  	if(err){
	  		console.log(err)
	  	}
	  	console.log(data.toString())
	  })

	 console.log("Done reading file !!")*/

<!-- write file -->



	 	/* console.log("start writing file !!!")
	 	 var fs = require("fs")
	

	 	 
	 	 		var data = fs.writeFile('./output.txt', 'welcome srikanth', function(err,data){
	 	 		if(err){
	 	 			throw err;
	 	 			console.log(err)
	 	 		}
	 	 		console.log(data)

	 	 	 	 })
*/

<!--  Create File-->

/* var fs = require("fs")
	var filepath = './srikanth.txt';

	var data = fs.readFileSync(filepath)
		fs.writeFileSync('sriiii.txt',data)
	*/

	<!-- Deleting File-->


	 	 var fs = require("fs")
	 	 var data = fs.unlink('./sriii.txt', function(err){
	 	 		if(err){
	 	 			console.log(err)
	 	 		}
	 	 		console.log(data)
	 	 		console.log("file deleted succesfully");
})