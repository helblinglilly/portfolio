# Install sqlite3
FROM ubuntu:trusty
RUN sudo apt-get -y update
RUN sudo apt-get -y upgrade
RUN sudo apt-get install -y sqlite3 libsqlite3-dev

WORKDIR /dbsetup

COPY *.sh .
CMD ["./setup.sh"]