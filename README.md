# 날: 숨
실어증 환자 분들이 자연스럽게 말을 하는 그 날까지 함께 하겠습니다.

## 목차
1. 개요
2. 주요 기능
3. 서비스 화면
4. 개발 환경
5. 아키텍처
6. ERD
7. 팀원 소개 및 역할

## 개요
실어증은 뇌질환 또는 우울증 등으로 뇌 언어 영역에 문제가 발생하여 언어 영역이 떨어지는 질병입니다. 실어증의 치료 방안 중 언어 재활이 있으며, 언어 재활은 조기 치료
가 중요합니다. 하지만 실어증 환자 옆에 언어 치료사가 항상 있을 수 없습니다. 그래서 저희는 실어증 환자분들이 시간과 공간의 제약을 받지 않고 재활 치료에 전념할 수 있도록
이 서비스를 기획했습니다. 내쉬는 숨이 말로 이어질 수 있도록 돕고 싶습니다.

## 주요 기능
### 1️⃣ 재활 프로그램
- 이름 대기, 따라 말하기, 듣기 이해력, 유창성 4개 영역에 대한 문제를 제공합니다.
- 환자분들은 문제를 반복해서 품으로써 재활 치료를 진행합니다.
- 유창성 문제의 경우, LLM 모델이 환자분들의 답이 문제(질문)에 대해 문법적으로, 문맥적으로 맞는지 판단합니다.
- 틀린 문제의 경우, 자동으로 복습 문제집에 추가됩니다. 복습 문제집에서 복습을 할 수 있습니다.
### 2️⃣ 실어증 커뮤니티
- 실어증 환자분들이 치료 과정, 정보 등을 서로 공유할 수 있도록 커뮤니티 기능을 제공합니다.
- 커뮤니티는 3개의 카테고리(정보 글, 환자 이야기, 치료 후기)로 구분됩니다.
### 3️⃣ 통계
- 최근 한 달간 주 별로 푼 문제 수, 맞은 문제 수, 틀린 문제 수를 확인할 수 있습니다.
- 따라 말하기의 문제를 풀었을 경우, 많이 틀린 발음(초,중,성)을 확인할 수 있습니다.

## 서비스 화면
### 메인 화면
![메인화면](img/메인화면.gif)

### 로그인 화면
![로그인](img/로그인화면.gif)

### 회원가입 화면
![회원가입화면](img/회원가입화면.gif)

### 회원가입시, 이메일 인증(성공)
![이메일_인증_성공](img/회원가입시이메일인증.gif)

### 회원가입시, 이메일 인증(실패)
![이메일_인증_실패](img/회원가입시이메일인증(실패).gif)

### 재활 코스 화면
![게임코스화면](img/재활코스화면.gif)

### 이름 대기 문제
![이름대기_정답](img/이름대기문제.gif)

### 따라 말하기 문제
![따라말하기_오답](img/따라말하기문제.gif)

### 듣기 이해력 문제
![듣기이해력_정답1](img/듣기이해력문제.gif)
![듣기이해력_오답2](img/듣기이해력문제2.gif)

### 유창성 문제
![유창성_정답](img/유창성문제.gif)
![유창성_오답](img/유창성문제2.gif)

### 커뮤니티
![커뮤니티](img/커뮤니티.gif)

### 커뮤니티 글 쓰기
![글쓰기](img/커뮤니티글쓰기.gif)

### 통계
![통계](img/통계.gif)

## 개발 환경
<table>
<tr>
 <td align="center">언어</td>
 <td>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/Java-orange?style=for-the-badge&logo=Java&logoColor=white"/>
 </td>
</tr>
<tr>
 <td align="center">프레임워크</td>
 <td>
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=ffffff"/>
	<img src="https://img.shields.io/badge/Vue-61DAFB?style=for-the-badge&logo=vuedotjs&logoColor=ffffff"/>
 </td>
</tr>
<tr>
 <td align="center">라이브러리</td>
 <td>  
  <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/jwt-6DB33F?style=for-the-badge&logo=jwt&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/gpt-6DB33F?style=for-the-badge&logo=gpt&logoColor=ffffff"/>
 </td>
</tr>
<tr>
 <td align="center">패키지 매니저</td>
 <td>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
    <img src="https://img.shields.io/badge/maven-02303A?style=for-the-badge&logo=maven&logoColor=white">
</td>
</tr>
<tr>
 <td align="center">인프라</td>
 <td>
  <img src="https://img.shields.io/badge/MYSQL-4479A1?style=for-the-badge&logo=MYSQL&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/sonarQube-181717?style=for-the-badge&logo=sonarqube&logoColor=ffffff"/>
 </td>
</tr>
<tr>
 <td align="center">협업툴</td>
 <td>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/> 
  <img src="https://img.shields.io/badge/Gitlab-FC6D26?style=for-the-badge&logo=Gitlab&logoColor=white"/> 
  <img src="https://img.shields.io/badge/Mattermost-0058CC?style=for-the-badge&logo=Mattermost&logoColor=white"/> 
  <img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white"/>
 </td>
</tr>
<tr>
 <td align="center">기타</td>
 <td>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/>
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/> 
  <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
 </td>
</tr>
</table>

## 아키텍처
![아키텍처](img/아키텍처.png)

## ERD
![캡처](img/ERD.png)

## 와이어프레임
![와이어프레임](img/와이어프레임.png)

## 팀원 소개 및 역할
| 이름   | 기능 및 역할 |
| ----|--------------------------------------------------------------------------- |
| 정건준 |  팀장, Backend </br> PM, 인프라(docker, CI/CD), 재활 게임 API, 통계 API, S3, ChatGPT 적용|
| 김희중 |  팀원, Backend </br> API 명세, 소셜로그인, 커뮤니티 API
| 나하나 |  팀원, Frontend </br> 기능 구현(게시판 CRUD), UI/UX 설계 및 디자인, 와이어프레임, 퍼블리싱(HTML, CSS, JS) |
| 신예지 |  팀원, Backend </br> DB, Spring Security(인증,인가), 사용자 관련 API, 재활 코스 기능 구현 |
| 조상민 |  팀원, Frontend </br> 기능 구현(회원가입, 로그인, 게시판), 컴포넌트 구조 설계, API 요청, UCC 제작|
