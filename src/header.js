const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
	items.classList.add("active");
	menuBtn.classList.add("hide");
	searchBtn.classList.add("hide");
	cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
	items.classList.remove("active");
	menuBtn.classList.remove("hide");
	cancelBtn.classList.remove("show");
	form.classList.remove("active"); 
}
searchBtn.onclick = ()=>{
	form.classList.add("active");
	searchBtn.classList.add("hide");
	cancelBtn.classList.add("show");
}
function cleanLang() {
	const span = document.querySelectorAll(".nav-wrapper span");
	span.forEach(function(userItem) {
		userItem.classList.remove("active");
	});
}
const span = document.querySelectorAll(".nav-wrapper span");
span.forEach(function(userItem) {
	userItem.onclick = ()=>{
		cleanLang();
		document.querySelector(".nav-wrapper b").innerHTML=userItem.innerHTML+' <i class="fa fa-angle-down" aria-hidden="true"></i>';
		userItem.classList.add("active");
	}
});