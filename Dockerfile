FROM node:latest
ENV NODE_ENV=production

RUN --mount=type=secret,id=TWITTER_TOKEN
RUN --mount=type=secret,id=GA_KEY
RUN --mount=type=secret,id=FETCHPREVIEW_TOKEN

RUN echo TWITTER_TOKEN=$(cat /run/secrets/TWITTER_TOKEN) >> .env
RUN echo GA_KEY=$(cat /run/secrets/GA_KEY) >> .env
RUN echo FETCHPREVIEW_TOKEN=$(cat /run/secrets/FETCHPREVIEW_TOKEN) >> .env

COPY . ./
RUN npm ci
RUN npm install sharp -g 
RUN npm run build
RUN cp -R .next/ /usr/src/app

WORKDIR /usr/src/app
EXPOSE 3000
CMD npm run start