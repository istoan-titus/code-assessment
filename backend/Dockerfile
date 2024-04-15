FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate --schema ./src/prisma/schema.prisma

EXPOSE 3000

CMD ["npm", "run", "seed"]

CMD ["npm", "run", "start:dev"]

