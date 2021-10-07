import passport from "passport";
import passportLocal from "passport-local";
import { members } from "../models/Member.js";

// local login 정책을 수행하는 모듈
const LocalStratege = passportLocal.Strategy;

const exportPassportConfig = () => {
  // 로그인이 성공했을때 (내부에서) 호출되는 함수
  passport.serializeUser((user, done) => {
    console.log("로그인 성공");
    done(null, user);
  });
  // 로그인이 정상적으로 수행된 후
  // client 에서 세션이 유효한지 문의가 들어왔을 떄 실행되는 함수
  passport.deserializeUser((user, done) => {
    console.log("DES", user);
    done(null, user);
  });

  // 로그인을 실제 수행하는 함수
  passport.use(
    new LocalStratege(
      {
        usernameField: "userid",
        passwordField: "password",
        session: true, // 세션 저장하기
      },
      (userid, password, done) => {
        // // Member.js 에 선언된 사용자 리스트를 사용하여 인증하기
        // const findMember = members.filter((member) => {
        //   return member.userid === userid && member.password === password;
        // });
        // if (findMember && findMember.length > 0) {
        //   return done(null, findMember[0]);
        //   // 그냥 findMemeber를 보내면 배열로 가기떄문에 0 번째로
        // } else {
        //   return done(null, false, { message: "login Fial" });
        // }
        members.map((member) => {
          if (member.userid === userid && member.password === password) {
            return done(null, member);
          }
        });
        members.forEach((member) => {
          if (member.userid === userid && member.password === password) {
            return done(null, member);
          }
        });
        return done(null, false, { message: "fail" });
      }
    )
  );
};
export default exportPassportConfig;
