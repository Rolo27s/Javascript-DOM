const ref = document.getElementById("reference");

class TelefonoMovil {
	constructor(CPU, RAM, Almacenamiento, Ancho, Alto, numCamaras) {
		this.CPU = CPU;
		this.RAM = RAM;
		this.Almacenamiento = Almacenamiento;
		this.Ancho = Ancho;
		this.Alto = Alto;
		this.numCamaras = numCamaras;
	}

	toString() {
		let infoContainer = document.createElement("div");
		infoContainer.innerHTML = `
            CPU: ${this.CPU} <br/>
            RAM: ${this.RAM} <br/>
            Almacenamiento: ${this.Almacenamiento} <br/>
            Ancho: ${this.Ancho} <br/>
            Alto: ${this.Alto} <br/>
            numCamaras: ${this.numCamaras} <br/><br/>
        `;

		ref.insertAdjacentElement("beforebegin", infoContainer);
	}
}

let movil1 = new TelefonoMovil("4 nucleos", "1GB", "16GB", "5cm", "8cm", "3");
movil1.toString();

let movil2 = new TelefonoMovil("2 nucleos", "500MB", "8GB", "4cm", "7cm", "1");
movil2.toString();

let movil3 = new TelefonoMovil(
	"6 nucleos",
	"2GB",
	"16GB",
	"5.5cm",
	"8.2cm",
	"3"
);
movil3.toString();

let movil4 = new TelefonoMovil("8 nucleos", "4GB", "32GB", "6cm", "9cm", "4");
movil4.toString();
