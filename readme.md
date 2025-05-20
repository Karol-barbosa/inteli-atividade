Explique com suas palavras o papel de cada camada da arquitetura MVC usada neste projeto.
Como o Model, o Controller e a View interagem entre si?


No meu projeto, o model é a parte que cuida dos dados e das conexão com o banco, faz as consultas e depois retorna. o Controller é o intermediário. Ele recebe a requisição do usuário, chama o Model se precisar de dados e depois manda uma resposta. O view é a parte visual, mostra para o usuário em HTML

Como ocorre o envio e o recebimento de dados no formato JSON neste projeto?
Cite uma rota que responde em JSON e explique seu funcionamento.


O envio e recebimento de dados em JSON acontece quando o servidor precisa trocar informações com o front-end ou com outras aplicações. Um exemplo de rota que pode responder em JSON é: router.get('/curso/:curso_id', controller.byCurso);
Nessa rota, quando o usuário acessa /curso/2, por exemplo, o controller pega todos os alunos que fazem parte do curso com ID 2 e devolve esses dados.

Qual a importância de usar HTML básico com formulários e tabelas para organizar e manipular dados no navegador?
Por que esse tipo de estrutura ainda é útil em projetos back-end com Node.js?


Formulários servem para enviar dados.
Tabelas ajudam a mostrar dados de forma organizada.
Mesmo com tantas tecnologias modernas, usar HTML básico com formulários e tabelas ainda é muito útil, principalmente em sistemas internos ou quando o foco principal é o back-end. É uma forma simples de organizar e manipular os dados no navegador, sem precisar de ferramentas complexas.
