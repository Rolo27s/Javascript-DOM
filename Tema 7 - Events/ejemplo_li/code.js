const nuevoLi = document.createElement("li");
nuevoLi.textContent = "Tercer elemento";

document.querySelector("ul").appendChild(nuevoLi);

document.querySelectorAll("li").forEach((li) => {
	li.addEventListener("click", function () {
		alert(this.textContent);
	});
});
