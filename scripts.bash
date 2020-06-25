# Cria uma migração
npm run typeorm migration:create -- -n CreateClass

npm run typeorm migration:run

npx typeorm entity:create -n Class

# Cria tabelas baseada no entity
npm run typeorm migration:generate -- -n CriaTabelas