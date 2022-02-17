import { emailRegExp } from "./regex";

export const checkName = (name) => {
  if (name === '') {
    alert('이름 입력 필수');
    return false;
  }
  return true;
};

export const checkEmail = (email) => {
  if (email === '') {
    alert('이메일 입력 필수');
    return false;
  }
  if (!emailRegExp.test(email)) {
    alert('이메일 형식 안맞음');
    return false;
  }
  return true;
};

export const checkPW = (pw) => {
  if (pw === '') {
    alert('비밀번호 입력 필수');
    return false;
  }
  return true;
};

export const checkPWCheck = (pw, pwCheck) => {
  if (pw !== pwCheck) {
    alert('비밀번호 불일치');
    return false;
  }
  return true;
};
