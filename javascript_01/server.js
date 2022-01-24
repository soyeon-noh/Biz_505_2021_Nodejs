// const express = require("express");

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});

/**
 * 1
 * require는 nodeJS에서 다른 패키지를 불러올 때 사용되는 키워드입니다.
 * 1번 줄처럼 특정 path 가 지정이 되지 않는다면 예) ./src/express
 * 기본적으로 node_modules 폴더 또는 NODE_PATH 환경 변수에 설정한 위치에서 express라는 모듈을 찾게 됩니다.
 * 현재 코드는 node_modules에서 express라는 모듈을 활용한다는 뜻으로 이해하시면 되겠습니다.
 *
 * 2
 * app이라는 변수에 express 함수의 변환 값을 저장하였습니다.
 * 이 app이라는 변수로 REST End Point들을 생성하게 될 겁니다.
 *
 * 3
 * process.env는 nodeJS에서 환경 변수를 가져올 때 사용됩니다.
 * 환경 변수가 입력되지 않을 시 port에 3000번을 지정하는 코드입니다.
 * 환경 변수에 대해서는 나중에 더 자세히 배워보도록 하겠습니다.
 *
 * 4-10
 * 4줄부터 10번 줄까지는 REST API의 한가지 종류인 GET 리퀘스트를 정의하는 부분입니다.
 * app.get이라고 작성했기 때문에 get 요청으로 정의가 되고 app.post로 작성할 경우 post 요청으로 정의가 됩니다.
 * REST API의 종류 (get, post, update, delete 등등)을 사용하여 End Point를 작성하실 수 있습니다.
 *
 * 11-13
 * 위와 같이 엔드 포인트 생성 시 파라미터는 두 가지를 받습니다.
 * 첫 번째 파라미터는 URL 정의 (‘/’) 두 번째 파라미터는 해당 url에서 수행할 작업 및 응답을 정의할 수 있습니다.
 * 두 번째 파라미터 함수에는 두 개의 파라미터를 받는데 요청에 해당하는 req (request) 와 응답에 해당하는 res (response)입니다.
 * 요청에 대한 정보는 req에 저장되어있고 응답할 때 res 파라미터를 사용하여 응답 정보를 송신합니다.
 * 위 코드는 res 파라미터에 json 형태의 {success:true}를 전송하는 코드가 되겠습니다.
 *
 * 11번 줄부터 마지막까지는 express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다.
 * 첫 번째 파라미터에는 저희가 3번 줄에 저장한 port 3000번을 적용하여 express를 3000번 포트에 실행하라고 지정하였고,
 *  두 번째 파라미터인 콜백 함수에서 express 서버 구축 성공 시 server is running at localhost:3000이라는 로그를 실행하도록 하였습니다.
 *
 * nodeJS 어플리케이션 실행하기
 * 터미널에서 프로젝트 루트로 이동하신 후 아래 명령어를 사용하여 express 서버를 실행해보도록 하겠습니다
 * node server.js
 *
 * 이제 http://localhost:3000에 크롬 브라우저를 사용해 이동하셔서 서버가 잘 작동하는 걸 확인해보겠습니다.
 * 화면에 저희가 ‘/’ path에 지정한 아래와 같은 응답이 오면 성공하신 겁니다.
 */
