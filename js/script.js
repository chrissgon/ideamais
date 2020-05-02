// INICIADO AO CARREGAR O DOCUMENTO
var tempcases;

$(document).ready(function () {
  // Temporizado de cases
  tempcases = setInterval(() => {
    animateCases();
  }, 5000);
});

// MENU MOBILE
$(".btn-mobile").click(function () {
  $(".container-menu").fadeIn(100);
  $(".menu-mobile").addClass("active");
});

$(document).click(function (e) {
  menu = $(".menu-mobile");
  let btn = $(".btn-mobile");

  if (
    !menu.is(e.target) &&
    menu.has(e.target).length === 0 &&
    !btn.is(e.target) &&
    btn.has(e.target).length === 0
  ) {
    $(".menu-mobile").removeClass("active");
    $(".container-menu").fadeOut();
  }
});

$(".menu-mobile a").click(function () {
  $(".menu-mobile").removeClass("active");
  $(".container-menu").fadeOut();
});

// Cases
cont = 0;
$(".btn-case").click(function () {
  animateCases();
});

function animateCases() {
  // Desabilita btn
  $(".btn-case").prop("disabled", true);

  cont++;

  // Array com dados
  arrDados = {
    [0]: {
      foto: "foto_1.png",
      nome: "Evelyn Ford",
      cargo: "Gerente da Bayer",
      comentario:
        "A demasiada preocupação para a satisfação de seus clientes são claramente uma marca da empresa e me sinto completamente satisfeita com o resultado do projeto.",
    },
    [1]: {
      foto: "foto_2.png",
      nome: "John Lock",
      cargo: "Presidente da Facebook",
      comentario:
        "Grande seriedade e compentência, além de profissionalismo. Percebe-se a preocupação para com a satisfação dos clientes.",
    },
    [2]: {
      foto: "foto_3.png",
      nome: "Cintya Magnoria",
      cargo: "CEO da Google",
      comentario:
        "Incrível trabalho, utilizam a criatividade acima de tudo. Elaboram soluções viáveis e de fácil implementação de forma simples e objetiva; fica evidente o seu profissionalismo.",
    },
  };

  // Verifica se contagem excedeu
  if (cont == Object.keys(arrDados).length) {
    cont = 0;
  }

  // Insere valores
  $(".cases .descricao .foto").html(`<img src="img/${arrDados[cont].foto}">`);
  $(".cases .info .nome").html(arrDados[cont].nome);
  $(".cases .info .cargo").html(arrDados[cont].cargo);
  $(".cases .comentario p").html(arrDados[cont].comentario);

  // Animacoes
  $(".cases .descricao .foto").addClass("active");
  $(".cases .info .nome").addClass("active");
  $(".cases .info .cargo").addClass("active");
  $(".cases .comentario p").addClass("active");

  setTimeout(() => {
    $(".cases .descricao .foto").removeClass("active");
    $(".cases .info .nome").removeClass("active");
    $(".cases .info .cargo").removeClass("active");
    $(".cases .comentario p").removeClass("active");
    // Habilita btn
    $(".btn-case").prop("disabled", false);
  }, 1000);
}

$(".cases .avaliacao").hover(function () {
  clearInterval(tempcases);
});

$(".cases .avaliacao").mouseleave(function () {
  // Temporizado de cases
  tempcases = setInterval(() => {
    animateCases();
  }, 5000);
});
