import axios from "./axios";
export const get = axios.get;
export const post = axios.post;

export const typeMap = {
    1: {
        icon: "canyin",
    },
    2: {
        icon: "fushi",
    },
    3: {
        icon: "jiaotong",
    },
    4: {
        icon: "riyong",
    },
    5: {
        icon: "gouwu",
    },
    6: {
        icon: "xuexi",
    },
    7: {
        icon: "yiliao",
    },
    8: {
        icon: "lvxing",
    },
    9: {
        icon: "renqing",
    },
    10: {
        icon: "qita",
    },
    11: {
        icon: "gongzi",
    },
    12: {
        icon: "jiangjin",
    },
    13: {
        icon: "zhuanzhang",
    },
    14: {
        icon: "licai",
    },
    15: {
        icon: "tuikuang",
    },
    16: {
        icon: "qita",
    },
};
export const REFRESH_STATE = {
    normal: 0,  //普通
    pull: 1,   // 下拉
    drop: 2,    // 立刻刷新
    loading: 3,
    success: 4,
    failure: 5,
};

export const LOAD_STATE = {
    normal: 0,
    abort: 1,   //中止
    loading: 2,
    success: 3,
    failure: 4,
    complete: 5
}