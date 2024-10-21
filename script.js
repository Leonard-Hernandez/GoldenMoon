var prenda = {
  id: 1,
  name: "Conjunto lencería negro",
  description: "Bata de algodón 100% algodón cosechado en los Andes",
  category: "Bata",
  price: "$50.000 COP",
  image:
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLde_19-yT9fsxbWdNn7uGZKvHEG4FJuCT1R8r4fQlRkLDVI_ekwJAhQYNGnpBmwu1fYispF98KDTAW-G-w1KB6tb7pI-0JgfvH0spYLoLQkmIRe0R80qXSg&usqp=CAE",
  tallas: {
    S: "S",
    M: "M",
    L: "L",
    XL: "XL",
  },
};

var prenda1 = {
  id: 2,
  name: "Conjunto lencería negro 2",
  description: "Bata de algodón 100% algodón cosechado en los Andes",
  category: "pijama",
  price: "$100.000 COP",
  image:
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLde_19-yT9fsxbWdNn7uGZKvHEG4FJuCT1R8r4fQlRkLDVI_ekwJAhQYNGnpBmwu1fYispF98KDTAW-G-w1KB6tb7pI-0JgfvH0spYLoLQkmIRe0R80qXSg&usqp=CAE",
  tallas: {
    S: "S",
    M: "M",
  },
};

var prenda2 = {
  id: 3,
  name: "Conjunto lencería negro 3",
  description: "Bata de algodón 100% algodón cosechado en los Andes",
  category: "camisa",
  price: "$200.000 COP",
  image:
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLde_19-yT9fsxbWdNn7uGZKvHEG4FJuCT1R8r4fQlRkLDVI_ekwJAhQYNGnpBmwu1fYispF98KDTAW-G-w1KB6tb7pI-0JgfvH0spYLoLQkmIRe0R80qXSg&usqp=CAE",
  tallas: {
    S: "S",
    M: "M",
    L: "L",
    XL: "XL",
  },
};
mensaje_wsp = "Hola, me interesa la compra de ";
mensaje_wsp_compra_directa = "Hola, me interesa la compra de ";
var data = [prenda, prenda1, prenda2];
var prendas = data;

function mapPrendaToHTML(prenda) {
  const article = document.createElement("article");
  article.classList.add("prenda");

  const header = document.createElement("header");
  article.appendChild(header);

  const h2 = document.createElement("h2");
  h2.textContent = prenda.name;
  header.appendChild(h2);

  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("tallas_prenda_" + prenda.id);
  header.appendChild(fieldset);

  const legend = document.createElement("legend");
  legend.textContent = "Tallas";
  fieldset.appendChild(legend);

  Object.keys(prenda.tallas).forEach((talla) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "tallas_prenda_" + prenda.id;
    input.value = talla;
    input.id = talla + "_" + prenda.id;
    fieldset.appendChild(input);

    const label = document.createElement("label");
    label.textContent = talla;
    label.htmlFor = talla + "_" + prenda.id;
    fieldset.appendChild(label);
  });

  const img = document.createElement("img");
  img.src = prenda.image;
  img.loading = "lazy";
  article.appendChild(img);

  const p = document.createElement("p");
  p.classList.add("description");
  p.textContent = prenda.description;
  article.appendChild(p);

  const footer = document.createElement("footer");
  article.appendChild(footer);

  const span = document.createElement("span");
  span.classList.add("price");
  span.textContent = prenda.price;
  footer.appendChild(span);

  const div = document.createElement("div");
  div.classList.add("botones");
  footer.appendChild(div);

  const buttonComprar = document.createElement("button");
  buttonComprar.textContent = "Comprar";
  buttonComprar.ariaLabel = "Comprar";
  buttonComprar.onclick = () => {
    comprarPrenda(prenda.id);
  };
  div.appendChild(buttonComprar);

  const buttonAnadir = document.createElement("button");
  buttonAnadir.textContent = "Añadir al carrito";
  buttonAnadir.ariaLabel = "Añadir al carrito";
  buttonAnadir.onclick = () => {
    añadirPrenda(prenda.id);
  };
  div.appendChild(buttonAnadir);

  return article;
}

function renderPrendas() {
  console.log("RenderPrendas se está ejecutando");
  console.log(prendas); // Verificar que el arreglo esté poblado

  prendas.forEach((prenda) => {
    console.log(prenda); // Verificar que cada objeto tenga las propiedades correctas
    const article = mapPrendaToHTML(prenda);
    console.log(article); // Verificar que el elemento article se esté creando correctamente

    const prendaContainer = document.getElementById("prendas_container");
    console.log(prendaContainer); // Verificar que el elemento prendaContainer exista en el DOM
    prendaContainer.appendChild(article);
  });
}

window.onload = renderPrendas;

function añadirPrenda(id) {
  try {
    var talla = document.querySelector(
      'input[name="tallas_prenda_' + id + '"]:checked'
    ).value;
  } catch (error) {
    talla = undefined;
  }
  const prenda = prendas.find((prenda) => prenda.id === id);
  mensaje_wsp += prenda.name;
  if (talla != undefined) {
    mensaje_wsp += " con la talla " + talla;
  }
  mensaje_wsp += "\n";
  console.log(mensaje_wsp);
}

function comprarPrenda(id) {
  try {
    var talla = document.querySelector(
      'input[name="tallas_prenda_' + id + '"]:checked'
    ).value;
  } catch (error) {
    talla = undefined;
  }
  const prenda = prendas.find((prenda) => prenda.id === id);
  mensaje_wsp_compra_directa += prenda.name;

  if (talla != undefined) {
    mensaje_wsp_compra_directa += " con la talla " + talla;
  }
  mensaje_wsp_compra_directa += "\n";
  window.open("https://wa.me/573106147971?text=" + encodeURIComponent(mensaje_wsp_compra_directa), "_blank");
}

function enviarCarrito() {
  window.open("https://wa.me/573106147971?text=" + encodeURIComponent(mensaje_wsp), "_blank");
}

function filtrar() {
  /*evitando la recarga*/
  event.preventDefault();
  
}

function filtrar(){
  event.preventDefault();
  const tallas = document.querySelectorAll('input[name="tallas_filtros"]:checked');
  const tallas_values = Array.from(tallas).map((talla) => talla.value);
  console.log(tallas_values);

  const categorias = document.querySelectorAll('input[name="categorias_filtros"]:checked');
  const categorias_values = Array.from(categorias).map((categoria) => categoria.value);
  console.log(categorias_values);

  const precio = document.querySelector('input[name="precio"]').value;
  console.log(precio);

  let prendasFiltradas = prendas;

  for( prenda of prendas){
    talla_boolean = false;
    categoria_boolean = false;
    precio_boolean = false;

    if(tallas_values.length > 0){
      tallas_prenda = prenda.tallas;
      talla_boolean = Object.keys(tallas_prenda).some(talla => Object.keys(tallas_values).includes(talla));
      console.log(tallas_values);
      console.log(tallas_prenda);
    }

  }

}
