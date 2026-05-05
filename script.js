function calcularConsultasMensuales(ticketsMensuales, consultasPorTicket) {
return ticketsMensuales * consultasPorTicket;
}

function calcularTokensEntrada(consultasMensuales, tokensEntradaPorConsulta) {
return consultasMensuales * tokensEntradaPorConsulta;
}

function calcularTokensSalida(consultasMensuales, tokensSalidaPorConsulta) {
return consultasMensuales * tokensSalidaPorConsulta;
}

function calcularAhorroBruto(ticketsMensuales, tiempoActual, tiempoEsperado, costeHora) {
const minutosAhorradosPorTicket = tiempoActual - tiempoEsperado;
const minutosTotalesAhorrados = minutosAhorradosPorTicket * ticketsMensuales;
const horasAhorradas = minutosTotalesAhorrados / 60;
const ahorro = horasAhorradas * costeHora;

return {
minutosAhorradosPorTicket,
horasAhorradas,
ahorro
};
}

function calcular() {
const tickets = Number(document.getElementById("tickets").value);
const consultas = Number(document.getElementById("consultas").value);
const tokensEntrada = Number(document.getElementById("tokensEntrada").value);
const tokensSalida = Number(document.getElementById("tokensSalida").value);
const tiempoActual = Number(document.getElementById("tiempoActual").value);
const tiempoIA = Number(document.getElementById("tiempoIA").value);
const costeHora = Number(document.getElementById("costeHora").value);

// Validación básica
if (!tickets || !consultas || !tokensEntrada || !tokensSalida || !tiempoActual || !tiempoIA || !costeHora) {
alert("Rellena todos los campos");
return;
}

const consultasMensuales = calcularConsultasMensuales(tickets, consultas);
const totalTokensEntrada = calcularTokensEntrada(consultasMensuales, tokensEntrada);
const totalTokensSalida = calcularTokensSalida(consultasMensuales, tokensSalida);

const ahorroData = calcularAhorroBruto(tickets, tiempoActual, tiempoIA, costeHora);

const resultado = `
Consultas mensuales: ${consultasMensuales}

Tokens entrada: ${totalTokensEntrada}
Tokens salida: ${totalTokensSalida}

Minutos ahorrados por ticket: ${ahorroData.minutosAhorradosPorTicket}
Horas ahorradas totales: ${ahorroData.horasAhorradas.toFixed(2)}

Ahorro estimado (€): ${ahorroData.ahorro.toFixed(2)}
`;

document.getElementById("output").innerText = resultado;
}
