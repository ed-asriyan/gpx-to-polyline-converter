FROM alpine 
MAINTAINER Ed Asriyan <ed-asriyan@protonmail.com> 

RUN apk --no-cache add cmake make gcc g++ libc-dev linux-headers boost-dev
 
WORKDIR /app 
ADD ./core/ ./core 
ADD main.cpp . 
ADD RouteTranslator.hpp . 
ADD CMakeLists.txt . 
 
RUN cmake CMakeLists.txt 
RUN make

RUN mv app ../app.run
WORKDIR /
RUN rm -rf app

CMD ./app.run
EXPOSE 8080

