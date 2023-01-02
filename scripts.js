var ajax = new XMLHttpRequest;
ajax.open('GET', 'https://rafaelescalfoni.github.io/desenv_web/filmes.json');

ajax.responseType = "json";

ajax.send();

ajax.onreadystatechange = function(){
    if(ajax.readyState === 4 && ajax.status === 200){
        console.log(ajax);
        
        var resposta = ajax.response
        console.log(resposta)
        resposta.forEach(element => {
            
            document.querySelector(".principal").innerHTML += `<div class="container">
            <div class="classificacao">
                <p>${element.classificacao}</p>
            </div>
            <div class="container-top">
                <img class="container-top-img" src="${element.figura}" alt="">
                <div class="container-top-texts">
                    <h2 class="titulo">${element.titulo}</h2>
                    <p class="generos">${element.generos}</p>
                    <div class="elenco">
                        <strong>Elenco</strong>
                        <p class="elenco-atores">${element.elenco}</p>
                    </div>
                </div>
            </div>
            <p class="descricao">${element.resumo}</p>
            <div class="similares">
                <h3>Titulos Similares</h3>
                
                <div class="similares-imagens">
                    
                </div>
            </div>`        
            console.log(element.id)
            console.log(element.titulo)  
            console.log(element.resumo) 
            console.log(element.generos)
            console.log(element.titulosSemelhantes)
            console.log(element.elenco)
            console.log(element.classificacao)
            console.log(element.opinioes) 
        });
    }
    
}



const div = document.getElementsByClassName("principal");

/*
0
: 
{id: 1, titulo: 'Better Call Saul', resumo: 'Jimmy era um advogado qualquer até a vida o transf…Saul, o cara que coloca criminosos dentro da lei.', generos: Array(4), titulosSemelhantes: Array(2), …}
1
: 
{id: 2, titulo: 'Breaking Bad', resumo: 'À beira da morte, um professor passa a fabricar me…lo futuro da família, mudando o destino de todos.', generos: Array(4), titulosSemelhantes: Array(3), …}
2
: 
{id: 3, titulo: 'House of Cards', resumo: 'É verdade que o poder corrompe? O congressista Frank Underwood está pronto para descobrir.', generos: Array(3), titulosSemelhantes: Array(3), …}
3
: 
{id: 4, titulo: 'Narcos', resumo: 'Primeiro, a mercadoria. Segundo, as rotas. Quando …dinheiro corre solto, a próxima parada é o poder.', generos: Array(3), titulosSemelhantes: Array(3), …}
4
: 
{id: 5, titulo: 'Carros', resumo: 'Um carro de corrida aprende que a vida é mais do q… você achava que o seu carro tinha personalidade!', generos: Array(2), titulosSemelhantes: Array(2), …}
5
: 
{id: 6, titulo: 'Carros 2', resumo: 'A caminho da Europa para participar do Grand Prix …divertidas e misteriosas intrigas internacionais.', generos: Array(2), titulosSemelhantes: Array(2), …}
6
: 
{id: 7, titulo: 'Uma Família da Pesada', resumo: 'Nesta série animada sem escrúpulos de Seth MacFarl…problemática passam por desventuras tresloucadas.', generos: Array(3), titulosSemelhantes: Array(2), …}
7
: 
{id: 8, titulo: 'Valente', resumo: 'Após enfurecer três lordes poderosos e ter um pedi… sua jornada para reparar os estragos que causou.', generos: Array(2), titulosSemelhantes: Array(2), …}
8
: 
{id: 9, titulo: 'Friends', resumo: 'Esta série de enorme sucesso acompanha as aventura…has da vida, do trabalho e do amor nos anos 1990.', generos: Array(4), titulosSemelhantes: Array(1), …}
9
: 
{id: 10, titulo: 'House', resumo: 'Hugh Laurie é o mal-humorado Dr. Gregory House, um…mas que é um gênio ao tratar doenças misteriosas.', generos: Array(3), titulosSemelhantes: Array(0), …}
10
: 
{id: 11, titulo: 'Mãos talentosas', resumo: 'Cuba Gooding Jr. é um cirurgião pediátrico que sup…edicina e salvar vidas no Hospital Johns Hopkins.', generos: Array(3), titulosSemelhantes: Array(0), …}
11
: 
{id: 12, titulo: 'Família Moderna', resumo: 'Esta série vencedora do Emmy acompanha a vida de J…os desafios da vida contemporânea em Los Angeles.', generos: Array(3), titulosSemelhantes: Array(2), …}
12
: 
{id: 13, titulo: 'Scarface', resumo: 'Um chefão do tráfico da Flórida comete o erro fata…em do diretor Brian de Palma do original de 1932.', generos: Array(3), titulosSemelhantes: Array(0), …}
13
: 
{id: 14, titulo: "That '70s show", resumo: 'Jovens ', generos: Array(3), titulosSemelhantes: Array(2), …}
14
: 
{id: 15, titulo: 'Zumbilândia', resumo: 'Tentando sobreviver em um mundo dominado por zumbi…io se une a um desordeiro e duas irmãs golpistas.', generos: Array(2), titulosSemelhantes: Array(0), …}
length
: 
15*/