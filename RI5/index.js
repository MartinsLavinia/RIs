import Empresa from './classes/empresa.js'
import Funcionario from './classes/funcionario.js'
import Endereco from './classes/endereco.js'
import Telefone from './classes/telefone.js'
import Descritor from './classes/descritorEmpresa.js'

let endereco = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo');
let telefone = new Telefone('11', '99999-9999');
let funcionario = new Funcionario('Tony Stark', '123456789', '999.999.999-99', endereco, telefone);
let funcionarios = [funcionario];
//Mentalista
let telefones = [telefone];
let empresa = new Empresa(funcionarios, 'ABC LTDA', 'Mercado online', '999-999-999-999-99', endereco, telefones);

let descritor = new Descritor();
console.log(descritor.descrever(empresa))