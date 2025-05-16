# Atividade padrões projeto
Nesta atividade deveriamos desenvolver uma pesquisa sobre padrões de projeto utilizados para desenvolvimento de API REST com Node JS. Desenvolver uma Ficha-Resumo sobre o resultado da pesquisa, escolhendo um padrão de projeto de exemplo.
Aplique este padrão de projetos, na construção de uma API, baseada na API que construímos em aula. Onde terão rotas (end points) para produto e cliente.

Ficha resumo- Padrões de projeto em API Rest com node.js 

---

## Tema da Pesquisa

**Padrões de Projeto no Desenvolvimento de API REST com Node.js**

---

## O que são Padrões de Projeto

Padrões de projeto são soluções reutilizáveis, bem definidas e testadas para problemas recorrentes no desenvolvimento de software. Eles promovem boas práticas de codificação, facilitam a manutenção, organização e escalabilidade de sistemas.

---

## Objetivo

Compreender como os padrões de projeto contribuem para a organização, escalabilidade e manutenibilidade de APIs desenvolvidas com Node.js.

---

## Padrões Pesquisados

### MVC (Model-View-Controller)

O padrão MVC divide a aplicação em três camadas bem definidas:

* Model: Responsável pelo tratamento dos dados e interação com o banco de dados.
* Controller: Contém a lógica de negócio e manipula as requisições recebidas, coordenando a resposta adequada.
* Router (em APIs substitui a View): Define os endpoints da aplicação e direciona as requisições para os controladores.

Essa separação de responsabilidades facilita a manutenção e o desenvolvimento colaborativo.

---

### Repository Pattern

O padrão de repositório encapsula a lógica de acesso a dados, isolando a camada de persistência das demais partes da aplicação.
Principais benefícios:

* Promove a injeção de dependência.
* Mantém as regras de negócio independentes da forma de armazenamento.
* Facilita testes e manutenção.

---

### DTO (Data Transfer Object)

O DTO é um padrão utilizado para transportar dados entre processos. Normalmente utilizado em:

* Comunicação entre cliente e servidor.
* Integrações entre serviços distintos.
* Organização dos dados transmitidos.

O DTO é um objeto simples, sem lógica de negócio, que contém apenas os dados necessários para a comunicação.

---

## Padrão Escolhido: **MVC**

---

## Vantagens do MVC

* Aplicável em diversas linguagens e frameworks.
* Permite atualizações rápidas na aplicação.
* Facilita a manutenção e o entendimento do código.
* Proporciona maior segurança ao separar as responsabilidades.
* Ideal para equipes de desenvolvimento, permitindo divisão clara de tarefas.

---

## Conclusão

O padrão **MVC** é amplamente utilizado no desenvolvimento de APIs REST com Node.js por promover uma estrutura clara, modular e escalável. Sua separação de responsabilidades melhora a organização do projeto, facilita a colaboração entre desenvolvedores e torna a aplicação mais fácil de manter e evoluir ao longo do tempo.




* Sites utilizados:  

    https://www.alura.com.br/artigos/design-patterns-introducao-padroes-projeto 

    https://renicius-pagotto.medium.com/entendendo-o-repository-pattern-fcdd0c36b63b 

    https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308 

