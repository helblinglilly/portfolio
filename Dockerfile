FROM node:latest
COPY . ./

ENV NODE_ENV=production
RUN npm ci
RUN npm run build
RUN cp -R .next/ /usr/src/app

WORKDIR /usr/src/app
EXPOSE 3000
CMD npm run start