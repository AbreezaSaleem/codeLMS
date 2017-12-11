FROM gcc:4.9

WORKDIR /app

COPY /repository/test.cpp /app

RUN g++ test.cpp -o test  && ./test

CMD ["./test"]