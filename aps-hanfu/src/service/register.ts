import connectSql from '../lib/mysql';

interface userInfo {
  userName: string,
  userPwd: string,
  userphone: string,
  userSex: string,
}

const register = async ({ userName, userPwd, userphone, userSex   }: userInfo) => {
  const checkUserSql = `select * from user_info where user_name='${userName}'`;
  const registerSql = `INSERT INTO user_info (user_name, user_pwd, user_phone, user_sex) VALUES ('${userName}', '${userPwd}', '${userphone}', '${userSex}')`;
  try {
    let users = await connectSql(checkUserSql);
    if(users.length == 1 && users[0].user_name === userName) {
      // 用户已存在
      return {
        code: '201',
        message: '用户已存在'
      }
    } else {
      let result = await connectSql(registerSql);
      console.log(result);
      return {
        code: '101',
        message: '注册成功'
      }
    }
  } catch (error) {
    return {
      code: '202',
      message: '注册失败'
    }
  }
}

export {
  register
};