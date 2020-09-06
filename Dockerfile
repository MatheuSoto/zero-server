FROM ubuntu
COPY . /usr/src
WORKDIR /usr/src/scripts/
RUN bash root.sh