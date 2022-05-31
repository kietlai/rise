
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var text = ["Les océans montent", "Los océanos están subiendo", "海洋正在上升", "المحيطات آخذة في الارتفاع", "Ozeane steigen", "Oceans Are Rising"];

async function texts(text){ 	
	for (var i = 0; i < text.length; i++) {
	  console.log(text[i]);
		await sleep(750);
		document.getElementById("oceans").innerHTML = text[i];
        if (i === 6) {
            i=0;
        }
	}
}

texts(text); 