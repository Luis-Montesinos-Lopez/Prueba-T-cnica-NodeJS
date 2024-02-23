FROM node:18.12.1-alpine

EXPOSE 3000

WORKDIR / app-express
COPY . .
RUN npm install
CMD ["npm","start"]