# swit-pilot-front

![image](https://i.imgur.com/JwDkh77.png)

## Contributors

|[<img src="https://github.com/sally0226.png" width="150px">](https://github.com/sally0226)|[<img src="https://github.com/leemir.png" width="150px">](https://github.com/leemir)|
|:---:|:---:|
|[sally0226](https://github.com/sally0226) | [LeeMir](https://github.com/leemir) |

## Installation

### Environment

> OS : Windows10 x64
>
> Node.js : v16.13.0(LTS)
>
> npm : v8.1.0
>
> yarn : v1.22.17

### Dependencies

```shell
yarn install # 또는 yarn
```

## Run

```shell
yarn start
```

## Feature

- [x] 로그인
  - [x] 기본 로그인
  - [x] Google 로그인
- [x] 회원가입
- [x] 메인 페이지
  - [x] 채널
    - [x] 유저가 속한 채널 목록 가져오기
    - [x] 현재 채널 정보 가져오기
    - [x] 채널 탐색
      - [x] 전체 채널 목록 가져오기
      - [x] 채널 가입
    - [x] 채널 생성
    - [x] 채널 이름 수정(socket)
    - [x] 채널 탈퇴(socket) 
  - [x] 채팅
    - [x] 현재 채널의 메시지 목록 가져오기(socket)
    - [x] 새 메시지 받기(socket)
      - [x] 삭제, 수정 정보도 socket으로 받음 (전송은 REST API)
    - [x] 메시지 전송
    - [x] 메시지 수정
    - [x] 메시지 삭제
    - [x] 자동 스크롤

## Images

### Login

![image](https://i.imgur.com/nrvPWdX.png)

### Signup

![image](https://i.imgur.com/CH1u9fG.png)

### Main

![image](https://i.imgur.com/f4A99nq.png)

### Main - in Channel

![image](https://i.imgur.com/yAjRtYy.png)

### Main - Modal 1

<img width="49%" src="https://i.imgur.com/SLVMYug.png" />
<img width="49%" src="https://i.imgur.com/KN9ZVgW.png" />

### Main - Modal 2

![image](https://i.imgur.com/xzzLAuk.png)
