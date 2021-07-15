import connectSql from '../lib/mysql';
import { getLogger } from '../lib/log4';
const err = getLogger('err');

const checkLogin  = async(userName: string, pwd: string ) => {

    const sql = `select * from user_info where user_name='${userName}' and user_pwd='${pwd}'`;
    try {
        let res = await connectSql(sql);
        if(res.length == 1 && res[0].user_name === userName && res[0].user_pwd === pwd) {
            return { msg: "登陆成功", code: 200, data: {
                userId: res[0].user_id,
                userName: res[0].user_name,
                userphone: res[0].user_phone
            } }
        } else {
            return { msg: "登陆失败", code: 201 }
        }
    } catch (error) {
        err.error(error)
        return { msg: error, code: 201 }
    }
}

export {
    checkLogin
}