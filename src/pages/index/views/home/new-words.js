export default {
    // 注入生词
    inject(words, list) {
        const reg = new RegExp(`(^|\\s)(${list.join('|')})`, 'gi');
        const result = words.replace(reg, '$1<em>$2</em>');
        return result;
    },
    // 生词列表
    list: [
        'combining', 'foul', 'strike', 'sheer', 'combining', 'mining',
        'worth', 'apart', 'beware', 'hugs', 'gotcha', 'accident', 'trolls',
        'shush', 'cuties', 'gonna', 'majesty', 'cursed', 'persuaded', 'recommend',
        'memories', 'fear', 'reduce', 'staff', 'anymore', 'buddies',
    ],
};
