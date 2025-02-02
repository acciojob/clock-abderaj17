//your JS code here.  


setInterval(()=>{
	let date = new Date();
	document.querySelector("#timer").textContent = `${date}`;
},1000)

