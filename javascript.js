//função para o botão

function guardafoms() {
    var formsCliente = new Object();

    formsCliente.nome = document.getElementById("nome").value;
    formsCliente.email = document.getElementById("email").value;
    formsCliente.telefone = document.getElementById("telefone").value;
    formsCliente.cep = document.getElementById("cep").value;
    formsCliente.formacao = document.getElementById("formacao").value;
    formsCliente.primeiravaga = document.getElementById("primeiravaga").value;
    formsCliente.segundavaga = document.getElementById("segundavaga").value;

    //converter para String Json 

var jsonForms = JSON.stringify(formsCliente);

//exibir

console.log(formsCliente.valueOf());

    document.getElementById("nome2").innerHTML = `<p>Nome: ` + 'formsCliente.nome</p>';
    document.getElementById("email2").innerHTML = `<p>E-mail: ` + 'formsCliente.email</p>';
    document.getElementById("telefone2").innerHTML = `<p>Telefone: ` + 'formsCliente.telefone</p>';
    document.getElementById("cep2").innerHTML = `<p>CEP: ` + 'formsCliente.cep</p>';
    document.getElementById("formacao2").innerHTML = `<p>Formação: ` + 'formsCliente.formacao</p>';
    document.getElementById("primeiravaga2").innerHTML = `<p>1º Opção de vaga: ` + 'formsCliente.primeiravaga</p>';
    document.getElementById("segundavaga2").innerHTML = `<p>2º Opção de vaga: ` + 'formsCliente.segundavaga</p>';

}

const btn_imp=document.getElementById("btn_imp")

btn_imp.addEventListener("click",(evt)=>{
    const conteudo = document.getElementById('imprimir').innerHTML;
    let estilo ="<Style>";
    estilo += "form { align-items: center}";
    estilo += "</Style>";

    const win = window.open('', '', 'height=700,width=700');
    win.document.write('<html><head>');
    win.document.write('<legend>Formulario</legend><br>');
    win.document.write(estilo);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(conteudo);
    win.document.write('</body></html>');
    
    window.print()

})