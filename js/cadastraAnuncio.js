function relatorio(){
    var nomeAnuncio = document.getElementById('anuncio').value;
    var cliente = document.getElementById('nomeCliente').value;
    var dtInicio = new Date(document.getElementById('dataInicio').value);
    var dtTermino = new Date(document.getElementById('dataTermino').value);
    var difMilissegundos = dtTermino - dtInicio;
    var dias = difMilissegundos / (1000 * 60 * 60 * 24);
    var investDia = document.getElementById('invest').value;
    investDia = parseFloat(investDia.replace('.',','));
    var totInvestido = investDia * dias; //Valor total investido seria a quantidade de dias multiplicada pelo investimento diário   
    
    
    var visualizaAnuncio = (investDia * 30) * dias; // 30 pessoas visualizam o anúncio original a cada R$ 1,00 investido.
    var qtdeMaxCliques = ((parseInt)((visualizaAnuncio / 100) * 12) * dias); // A cada 100 pessoas q visualizam o anúncio 12 clicam nele.
    var compartilha = ((parseInt)((qtdeMaxCliques / 20) * 3) * dias); // A cada 20 pessoas que clicam no anuncio 3 compartilham nas redes sociais.
    var novaVisualizacao =  ((parseInt)(compartilha * 40) * dias); // Cada compartilhamento nas redes sociais gera 40 novas visualizações.
    var compartilhaOriginal = ((parseInt)(compartilha * 4) * dias); // O mesmo anúncio é compartilhado no máximo 4 vezes em sequência.
    
    var qtdeMaxCompartilhamentos = compartilhaOriginal + compartilha;
    var qtdeMaxVisualizacoes = novaVisualizacao + visualizaAnuncio;
        if (nomeAnuncio == ""){
            alert("Dados inválidos!!!");
        }else if (nomeAnuncio <= 0 || nomeAnuncio >= 0){
            alert("Não pode digitar números nesse campo");
        }
        else if (cliente == ""){
            alert("Dados inválidos!!!");
        }else if (cliente <= 0 || cliente >= 0){
            alert("Não pode digitar números nesse campo");
        }
        else    
            if (dtTermino > dtInicio){
                if (investDia < 0){
                    alert("Não pode numeros negativos no campo valor Investido!!!")
                }else 
                    if(investDia != 0 || investDia != ""){
                        var relatorio = "############### Relatorio ###############" + "\n" + "\n" 
                        + "Total dos investimentos : R$ " + totInvestido.toFixed(2) + "\n"
                        + "Quantidade máxima de visualizações : " + qtdeMaxVisualizacoes + "\n"
                        + "Quantidade máxima de cliques : " + qtdeMaxCliques + "\n"
                        + "Quantidade máxima de compartilhamentos : " + qtdeMaxCompartilhamentos + "\n" + "\n"
                        + "######################################";
                    
                        alert(relatorio);                               
                    }
                    else{
                        alert("Valor investido inválido!!!");
                    }
            }else{
                    alert("A data inicial não pode ser maior que a data final");
        }

}
                    