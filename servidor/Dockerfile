FROM node:20

WORKDIR /app

# Instalamos dependencias primero
COPY package*.json ./
RUN npm install

# Copiamos el resto del código (incluyendo /src)
COPY . .

EXPOSE 4000

# Ejecutamos el archivo dentro de /src
CMD ["node", "src/index.js"]
