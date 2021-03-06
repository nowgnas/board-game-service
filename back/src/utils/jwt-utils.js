import jwt from "jsonwebtoken";
import { Token } from "../db";

const secret = process.env.JWT_SECRET_KEY;

exports.sign = (user) => {
    // jwt 방식 access token 생성
    const payload = {
        id: user._id,
    };
    return jwt.sign(payload, secret, {
        // 암호화 방식
        algorithm: "HS256",
        // 만료 시간
        expiresIn: "1h",
    });
};

exports.verify = (token) => {
    // token 확인
    let decoded = null;
    try {
        // decoding
        decoded = jwt.verify(token, secret);
        return {
            ok: true,
            id: decoded.id,
        };
    } catch (error) {
        return {
            ok: false,
            message: error.message,
        };
    }
};

exports.refresh = () => {
    // refresh token 생성
    return jwt.sign({}, secret, {
        algorithm: "HS256",
        expiresIn: "14h",
    });
};

exports.refreshVerify = async (token, user_id) => {
    // refresh token 확인
    try {
        // db에서 refresh token 가져오기
        const refreshToken = await Token.getToken({ user_id });

        if (refreshToken !== token) return false;
        try {
            return jwt.verify(token, secret);
        } catch (error) {
            return false;
        }
    } catch (err) {
        return false;
    }
};
