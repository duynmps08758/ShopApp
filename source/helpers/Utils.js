
export const checkValidateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
        return false
    }
    else {
        return true
    }
}

export const checkValidatePhone = (text) => {
    let reg = /^[0-9]{10}$/
    if (reg.test(text.replace(/\s/g, '')) === false) {
        return false
    } else {
        return true
    }
}

export const checkNumber = (text) => {
    if (isNaN(text)) {
        return false
    } else {
        return true
    }
}

const errorList = {
    'USER_NOT_FOUND': 'Tài khoản không đúng hoặc không tồn tại.',
    'USER_ERROR': 'Tên đăng nhập hay mật khẩu không đúng.',
    'AUTHENTICATION': 'Người dùng không có quyền vào hệ thống.',
    'LOGIN_SUCCESS': 'Đăng nhập thành công!',
    'PASSWORD_AND_REPASSWORD_NOT_SAME': 'Mật khẩu mới không giống nhau!',
    'UNAUTHORIZED': 'Có lỗi xảy ra, vui lòng đăng nhập lại!',
    'SEVER_ERROR': 'Hệ thống đang bảo trì, vui lòng thử lại!',
    'OTHER_ERROR': 'Có lỗi xảy ra,vui lòng thử lại!',
    'NOT_FOUND': 'Không tìm thấy dữ liệu, vui lòng thử lại!',
    'NOT_PERMISSION': 'Bạn không có quyền truy cập, vui lòng thử lại sau!',
    'FORGOT_SUCCESS': 'Thay đổi mật khẩu thành công!',
    'REGISTER_SUCCESS': 'Đăng ký thành công!',
}

export const getErrorString = (errorCode) => {
    console.log(errorCode)
    return errorList[errorCode] || 'Có lỗi xảy ra vui lòng thử lại sau'
}