function calcularArea() { 
const a = parseFloat(document.getElementById("ladoA").value); 
const b = parseFloat(document.getElementById("ladoB").value); 
const c = parseFloat(document.getElementById("ladoC").value); 
const resultado = document.getElementById("resultado"); 
// Validar lados positivos 
if (a <= 0 || b <= 0 || c <= 0) { 
resultado.textContent = "Todos los lados deben ser mayores que cero."; 
return; 
} 
// Validar si los lados forman un triángulo válido 
if (a + b <= c || a + c <= b || b + c <= a) { 
resultado.textContent = "Los lados no forman un triángulo valido."; 
return; 
} 
// Semiperímetro 
const p = (a + b + c) / 2; 
// Fórmula de Herón 
const area = Math.sqrt(p * (p - a) * (p - b) * (p - c)); 
resultado.textContent = `El área del triángulo es: ${area.toFixed(2)} unidades cuadradas.`; 
} 
function calcularTodo() {
  const a = parseFloat(document.getElementById("ladoA").value);
  const b = parseFloat(document.getElementById("ladoB").value);
  const c = parseFloat(document.getElementById("ladoC").value);

  // Validaciones básicas
  if (a <= 0 || b <= 0 || c <= 0) {
    alert("Todos los lados deben ser mayores que cero.");
    return;
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    alert("Los lados no forman un triángulo válido.");
    return;
  }

  // Semiperímetro
  const p = (a + b + c) / 2;

  // Área (Herón)
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  // Ángulos (ley de cosenos)
  const radA = Math.acos((b**2 + c**2 - a**2) / (2 * b * c));
  const radB = Math.acos((a**2 + c**2 - b**2) / (2 * a * c));
  const radC = Math.acos((a**2 + b**2 - c**2) / (2 * a * b));
  const angA = radA * (180 / Math.PI);
  const angB = radB * (180 / Math.PI);
  const angC = radC * (180 / Math.PI);

  // Alturas (h = 2A / lado)
  const ha = (2 * area) / a;
  const hb = (2 * area) / b;
  const hc = (2 * area) / c;

  // Medianas (fórmula general)
  const ma = 0.5 * Math.sqrt(2*b*b + 2*c*c - a*a);
  const mb = 0.5 * Math.sqrt(2*a*a + 2*c*c - b*b);
  const mc = 0.5 * Math.sqrt(2*a*a + 2*b*b - c*c);

  // Bisectrices (desde un vértice)
  const ta = (2 * b * c * Math.cos(radA / 2)) / (b + c);
  const tb = (2 * a * c * Math.cos(radB / 2)) / (a + c);
  const tc = (2 * a * b * Math.cos(radC / 2)) / (a + b);

  // Mostrar resultados en HTML
  document.getElementById("anguloA").textContent = angA.toFixed(2);
  document.getElementById("anguloB").textContent = angB.toFixed(2);
  document.getElementById("anguloC").textContent = angC.toFixed(2);

  document.getElementById("ha").textContent = ha.toFixed(2);
  document.getElementById("hb").textContent = hb.toFixed(2);
  document.getElementById("hc").textContent = hc.toFixed(2);

  document.getElementById("ma").textContent = ma.toFixed(2);
  document.getElementById("mb").textContent = mb.toFixed(2);
  document.getElementById("mc").textContent = mc.toFixed(2);

  document.getElementById("ta").textContent = ta.toFixed(2);
  document.getElementById("tb").textContent = tb.toFixed(2);
  document.getElementById("tc").textContent = tc.toFixed(2);

  document.getElementById("area").textContent = area.toFixed(2);
  document.getElementById("perimetro").textContent = (a + b + c).toFixed(2);
}

// Asociar el botón
document.getElementById("calcularBtn").addEventListener("click", calcularTodo);