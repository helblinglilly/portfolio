FROM node:latest
COPY . ./

ENV NODE_ENV=production
ENV TWITTER_URL="https://api.twitter.com/2/users/1397471686371467266/tweets?tweet.fields=created_at&max_results=5"
RUN --mount=type=secret,id=TWITTER_TOKEN && export TWITTER_TOKEN=$(cat /run/secrets/TWITTER_TOKEN)
RUN npm ci
RUN npm install sharp -g 
RUN npm run build
RUN cp -R .next/ /usr/src/app

WORKDIR /usr/src/app
EXPOSE 3000
CMD npm run start