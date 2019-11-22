import instance from '@/helper/axios';

const axios = instance();

// 格式化翻译返回数据
function formatTranslate(data) {
    const res = {};
    const { word } = data;

    if (!word) { return res; }

    // 名称
    res.name = word.word_name;

    // 单词信息
    const { symbols } = word;
    const symbol = Array.isArray(symbols) && symbols[0] ? symbols[0] : {};

    // 单词所有的含义数组
    res.parts = symbol.parts;

    // 单词的美式/英式音标和音频
    res.voice = [
        {
            name: '英',
            ph: symbol.ph_en,
            mp3: symbol.ph_en_mp3 || symbol.ph_tts_mp3,
        },
        {
            name: '美',
            ph: symbol.ph_am,
            mp3: symbol.ph_am_mp3 || symbol.ph_tts_mp3,
        },
    ];

    return { word: res };
}

const translate = (w) => {
    const options = {
        params: { w },
        transformResponse: [(data) => {
            const json = JSON.parse(data);
            const res = json.data;
            json.data = formatTranslate(res);
            return JSON.stringify(json);
        }],
    };

    return axios.get('/service/translate', options);
};


export default translate;
