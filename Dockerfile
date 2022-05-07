FROM node:latest
ENV NODE_ENV=production
RUN --mount=type=secret,id=TWITTER_TOKEN
RUN export TWITTER_TOKEN=$(cat /run/secrets/TWITTER_TOKEN)

COPY . ./
RUN npm ci
RUN npm install sharp -g 
RUN npm run build
RUN cp -R .next/ /usr/src/app

WORKDIR /usr/src/app
EXPOSE 3000
CMD npm run start