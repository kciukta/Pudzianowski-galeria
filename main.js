/*
setTimeout(function(){
alert("Kinga");
},2000);

var a=2;
var b="smile";
var a="WarsawJS";

var $images=document.querySelectorAll("div img");
function print_images(){
	console.log($images);
	console.log("fun");
	console.log(100+444);
}
print_images();

function print_image(index){
	console.log($images[index]);
}

function hello(){
	console.log("hello");
}
hello();
var names=["dom","ala","kot"];
	console.log(names);
*/
var $images=document.querySelectorAll("div img");
function print_images(){
	console.log($images);
	console.log("fun");
	console.log(100+444);
}
print_images();

function print_image(index){
	console.log($images[index]);
}

function hello(){
	console.log("hello");
}
hello();
var names=["dom","ala","kot"];
	console.log(names);

var $zoom = document.querySelector("div#zoom");

$images.forEach(function print_image(image){
	console.log(image);
	image.addEventListener("click", function clickHandler(e){
		var $image = document.createElement("img");
				$image.src = image.parentNode.href;
				$zoom.innerHTML = "";
				$zoom.appendChild($image);
			e.preventDefault();
	});
});
