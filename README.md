# MockServer

Descrição
-------
Projeto simples que expõe um servidor HTTP local para testes rápidos.

Requisitos
---------
- Node.js (v14+ recomendado)

Como executar
--------------
1. Abrir um terminal na pasta do projeto.
2. Iniciar o servidor principal:

```bash
node index.js
```

Ou iniciar o servidor na subpasta:

```bash
node webservice/server.js
```

Por padrão o servidor responde em `127.0.0.1:3000` (veja `index.js`).

Testando
-------
Abra no navegador: http://127.0.0.1:3000/

Ou use curl:

```bash
curl http://127.0.0.1:3000/
```

Arquivos importantes
-------------------
- `index.js`: servidor simples usando `node:http` (responde com "Olá Gerinaldo").
- `webservice/server.js`: alternativa/serviço adicional (ver conteúdo para detalhes).

Contribuição
------------
Pull requests e issues são bem-vindos — mantenha as mudanças pequenas e documentadas.

Licença
-------
Fique à vontade para usar este projeto como base para testes locais.
