//RENDER TREE - primeiro nav monta a estrutura html(tag soup), depois o estilo(style) e depois render (as acoes)
//eventos sao acoes nos objetos (toda vez que quero uma acao com o evento, eu coloco ON juntamente com a palavra 'onClick') - metodos sao as acoes dos objetos
//parseInt() converte para inteiros
//document.getElementById identifica o id no html ou bd
//addEventListener 
//defer - ele so carrega o script depois que carregar toda a html, script externo
//<script language="" type="" scr="" defer></script>
//document.addEventListener("DOMContentLoaded", function(){...}); - mesma coisa do defer, porem nao precisa ser em um arquivo externo - essa function() é uma funcao anonima
//document.addEventListener("click", minhaFuncao);
//function minhaFuncao()){
//  alert("oi");
//}
//OU document.addEventListener("DOMContentLoaded", function(){alert("oi");});
//OBJETO DATE - Date() - metodos getDate(), getDay()... dia, mes comeca com 0 - getFullYear() ou getYear() precisa colocar -1900
//