var txttoarray = (text) => {
    var toarray = text.split('');
    return toarray;
}
var arraytotxt = (text) => {
    var toarray = text.split('');
    return totxt;
}
var verificarinclusao = (eincluso, comparacao) => {
    var ar = txttoarray(comparacao)
    var bol = ar.includes(eincluso)
    return bol;
}
var iserir = (text, posicao) => {
    
}
