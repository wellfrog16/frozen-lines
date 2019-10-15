import instance from '@/helper/axios';

const axios = instance({ baseURL: 'http://dict-co.iciba.com/api/dictionary.php' });

const baseUrl = '';

const translate = (words) => {
    const params = {
        type: 'json',
        key: 'E56ABC10E12BCE88717FEE502FC46EBF',
        w: words,
    };

    return axios.get(baseUrl, { params });
};


export default translate;
