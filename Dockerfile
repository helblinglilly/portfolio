FROM node:16-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN echo hello
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci
RUN ls -lha /usr/src/app
COPY . /usr/src/app/.
EXPOSE 4200
CMD ["ng","serve","--host", "0.0.0.0"] 