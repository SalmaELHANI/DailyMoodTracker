FROM node:14-alpine

WORKDIR /DAILYMOODTRACKER

COPY package.json ./

# Installer les dépendances

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
