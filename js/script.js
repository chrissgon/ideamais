// INICIADO AO CARREGAR O DOCUMENTO
var tempcases;

$(document).ready(function () {
  // Temporizado de cases
  tempcases = setInterval(() => {
    animateCases();
  }, 5000);
  // Temporizado de servicos
  tempServicos = setInterval(() => {
    animateServicos();
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

// Servicos
contServicos = 0;
$(".btn-servicos").click(function () {
  animateServicos();
});

function animateServicos() {
  // Desabilita btn
  $(".btn-servicos").prop("disabled", true);

  contServicos++;

  // Array com dados
  arrDados = {
    [0]: {
      foto: "img_servico_1.svg",
      subtitulo: "Hardware e Sistemas",
      comentario:
        "Definimos o hardware e SO que mais se adeque ao tipo de serviço prestado, para que todo e qualquer tipo de sistema utilizado possa ter compatibilidade e ser exercido.",
    },
    [1]: {
      foto: "img_servico_2.svg",
      subtitulo: "Rede e Cabeamento",
      comentario:
        "A estrutura da rede também recebe uma ampla atenção, pois o fluxo de dados é primordial, assim como a disposição de cabeamentos que são mapeados para que todo o setor e até mesmo o complexo possam ter esse fluxo de forma continua e acessível.",
    },
    [2]: {
      foto: "img_servico_3.svg",
      subtitulo: "Servidores",
      comentario:
        "Os servidores são escolhidos de forma que façam todas as ligações necessárias, desde email, aplicações, bancos de dados e o que a empresa utilizar, podendo ser interno e externo.",
    },
    [3]: {
      foto: "img_servico_4.svg",
      subtitulo: "Bancos de dados",
      comentario:
        "Avaliamos o banco de dados de acordo com a quantidade de dados a serem armazenados.",
    },
  };

  // Verifica se contagem excedeu
  if (contServicos == Object.keys(arrDados).length) {
    contServicos = 0;
  }

  // Insere valores
  $(".servicos .illustration").html(
    `<img src="img/${arrDados[contServicos].foto}">`
  );
  $(".servicos .descricao .subtitulo").html(arrDados[contServicos].subtitulo);
  $(".servicos .descricao .comentario").html(arrDados[contServicos].comentario);

  // // Animacoes
  $(".servicos .illustration").addClass("active");
  $(".servicos .descricao .subtitulo").addClass("active");
  $(".servicos .descricao .comentario").addClass("active");

  setTimeout(() => {
    $(".servicos .illustration").removeClass("active");
    $(".servicos .descricao .subtitulo").removeClass("active");
    $(".servicos .descricao .comentario").removeClass("active");
    // Habilita btn
    $(".btn-servicos").prop("disabled", false);
  }, 1000);
}

$(".servicos").hover(function () {
  clearInterval(tempServicos);
});

$(".servicos").mouseleave(function () {
  // Temporizado de servicos
  tempServicos = setInterval(() => {
    animateServicos();
  }, 5000);
});

// Cases
contCases = 0;
$(".btn-cases").click(function () {
  animateCases();
});

function animateCases() {
  // Desabilita btn
  $(".btn-cases").prop("disabled", true);

  contCases++;

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
  if (contCases == Object.keys(arrDados).length) {
    contCases = 0;
  }

  // Insere valores
  $(".cases .descricao .foto").html(
    `<img src="img/${arrDados[contCases].foto}">`
  );
  $(".cases .info .nome").html(arrDados[contCases].nome);
  $(".cases .info .cargo").html(arrDados[contCases].cargo);
  $(".cases .comentario p").html(arrDados[contCases].comentario);

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
    $(".btn-cases").prop("disabled", false);
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
