
import axios from 'axios'
axios.defaults.baseURL = 'http://yuu.ir';
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';
exports.site = "http://yuu.ir";

exports.isLogin = false;

exports.place = async() => {
    return await axios.get('/directory/v1/place/',{params:{category:693}});
};
exports.loadMore = async(next) => {
    return await axios.get(next);
};