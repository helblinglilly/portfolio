FROM node:latest
ENV NODE_ENV=production
RUN --mount=type=secret,id=TWITTER_TOKEN
RUN --mount=type=secret,id=GA_KEY
RUN --mount=type=secret,id=FETCHPREVIEW_TOKEN

COPY . ./
RUN node sitemapgen.js
RUN npm ci
RUN npm install sharp -g 
RUN npm run build
RUN cp -R .next/ /usr/src/app

RUN echo TWITTER_TOKEN=$(cat /run/secrets/TWITTER_TOKEN) >> /usr/src/app/.env
RUN echo GA_KEY=$(cat /run/secrets/GA_KEY) >> /usr/src/app/.env
RUN echo FETCHPREVIEW_TOKEN=$(cat /run/secrets/FETCHPREVIEW_TOKEN) >> /usr/src/app/.env

WORKDIR /usr/src/app
EXPOSE 3000
CMD npm run start