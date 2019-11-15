import instance from '@/helper/axios';

const axios = instance();

const translate = w => axios.get('/service/translate', { params: { w } });


export default translate;
