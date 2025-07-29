const malla = [
  {
    semestre: "1° Semestre",
    ramos: [
      {
        nombre: "Administración General",
        codigo: "610184",
        creditos: 5,
        prerreq: [],
        correq: []
      },
      {
        nombre: "Derecho Empresarial",
        codigo: "613042",
        creditos: 3,
        prerreq: [],
        correq: []
      },
      {
        nombre: "Álgebra I",
        codigo: "220118",
        creditos: 6,
        prerreq: [],
        correq: []
      },
      {
        nombre: "Cálculo I",
        codigo: "220120",
        creditos: 6,
        prerreq: [],
        correq: []
      },
      {
        nombre: "Habilidades Sociales",
        codigo: "612109",
        creditos: 4,
        prerreq: [],
        correq: []
      },
      {
        nombre: "Contabilidad I",
        codigo: "612167",
        creditos: 6,
        prerreq: [],
        correq: []
      },
      {
        nombre: "Formación Integral I",
        codigo: "340555",
        creditos: 3,
        prerreq: [],
        correq: []
      },
    ],
  },

  {
    semestre: "2° Semestre",
    ramos: [
      {
        nombre: "Administración Estratégica",
        codigo: "610185",
        creditos: 6,
        prerreq: ["Administración General"],
        correq: []
      },
      {
        nombre: "Sistemas de Información",
        codigo: "620430",
        creditos: 4,
        prerreq: [],
        correq: []
      },
      {
        nombre: "Álgebra II",
        codigo: "220119",
        creditos: 6,
        prerreq: ["Álgebra I"],
        correq: []
      },
      {
        nombre: "Cálculo II",
        codigo: "220121",
        creditos: 6,
        prerreq: ["Cálculo I"],
        correq: []
      },
      {
        nombre: "Introducción a la Economía",
        codigo: "611030",
        creditos: 3,
        prerreq: [],
        correq: []
      },
      {
        nombre: "Contabilidad II",
        codigo: "612168",
        creditos: 6,
        prerreq: ["Contabilidad I"],
        correq: []
      },
      {
        nombre: "Formación Integral II",
        codigo: "340209",
        creditos: 4,
        prerreq: [],
        correq: []
      },
    ],
  },
];

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.innerHTML = `
    <strong>${ramo.nombre}</strong>
    <div class="info">Código: ${ramo.codigo}</div>
    <div class="info">Créditos: ${ramo.creditos}</div>
    ${
      ramo.prerreq.length > 0
        ? `<div class="info">Prerreq: ${ramo.prerreq.join(", ")}</div>`
        : ""
    }
    ${
      ramo.correq.length > 0
        ? `<div class="info">Correquisitos: ${ramo.correq.join(", ")}</div>`
        : ""
    }
  `;

  div.addEventListener("click", () => {
    div.classList.toggle("aprobado");
  });

  return div;
}

function generarMalla() {
  const contenedor = document.getElementById("malla-container");

  malla.forEach((sem) => {
    const semestreDiv = document.createElement("div");
    semestreDiv.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = sem.semestre;

    const ramosDiv = document.createElement("div");
    ramosDiv.classList.add("ramos");

    sem.ramos.forEach((ramo) => {
      ramosDiv.appendChild(crearRamo(ramo));
    });

    semestreDiv.appendChild(titulo);
    semestreDiv.appendChild(ramosDiv);
    contenedor.appendChild(semestreDiv);
  });
}

document.addEventListener("DOMContentLoaded", generarMalla);
