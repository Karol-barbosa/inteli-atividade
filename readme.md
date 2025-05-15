O model é a a parte do código responsável por se comunicar com o banco de dados. Ele é como um "tradutor" entre o banco e o resto da aplicação, tudo que envolve acesso ao banco de dados fica dentro do Model.

O Controller é quem recebe a requisição, chama as funções do Model e responde ao usuário, O controller organiza a lógica da aplicação e liga o front (view) ao banco (model).

Os endpoints são os caminhos da URL que a gente usa para acessar alguma funcionalidade da aplicação, no meu projeto endpoints estão definidos no arquivo routes/professores.js, e cada um chama uma função do controller.

