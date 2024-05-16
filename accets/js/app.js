const cl = console.log;

const togglebtn  = [...document.querySelectorAll(".togglebtn")];
const sidenavbar  = document.getElementById("sidenavbar");
const backdrop = document.getElementById("backdrop");

const onShowSidebar =()=>{
	sidenavbar.classList.toggle("active")
	backdrop.classList.toggle("active")
}



togglebtn.forEach(btn => 
	btn.addEventListener("click", onShowSidebar)
	
)