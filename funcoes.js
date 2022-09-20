var txttoarray = (text) => {
    var toarray = text.split('');
    return toarray;
}
var arraytotxt = (ar) => {
    var toarray = ar.join('');
    return toarray;
}
var verificarinclusao = (eincluso, comparacao) => {
    var ar = txttoarray(comparacao)
    var bol = ar.includes(eincluso)
    return bol;
}
var iserir = (text, indice, array) => {
    //posicao comeca no 0
    var ar = []
    for (var i = 0; i < array.length + 1; i++){
        if (i == indice){
            ar.push()
        }
    }
}
