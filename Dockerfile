FROM node:latest
ENV NODE_ENV=production

COPY . ./
RUN npm ci
RUN npm install sharp -g 

RUN --mount=type=secret,id=TWITTER_TOKEN \
  --mount=type=secret,id=GA_KEY \
  --mount=type=secret,id=FETCHPREVIEW_TOKEN \
  export TWITTER_TOKEN=$(cat /run/secrets/TWITTER_TOKEN) && \
  export GA_KEY=$(cat /run/secrets/GA_KEY) && \
  export FETCHPREVIEW_TOKEN=$(cat /run/secrets/FETCHPREVIEW_TOKEN) && \
  npm run build

#RUN npm run build
RUN cp -R .next/ /usr/src/app

WORKDIR /usr/src/app
EXPOSE 3000
CMD npm run start