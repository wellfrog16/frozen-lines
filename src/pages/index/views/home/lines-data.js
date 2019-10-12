const EVERYONE = 'Everyone';
const ELSA = 'Elsa';
const ANNA = 'Anna';
const BABA = 'Baba';
const MAMA = 'Mama';

export const options = {
    actor: {
        [EVERYONE]: {
            backgroundColor: '#ff00ff',
            color: '#333',
        },
        [ELSA]: {
            backgroundColor: '#e0ebfe',
            color: '#333',
        },
        [ANNA]: {
            backgroundColor: '#ffd5f1',
            color: '#333',
        },
        [BABA]: {
            backgroundColor: '#ffd5f1',
            color: '#333',
        },
        [MAMA]: {
            backgroundColor: '#ffd5f1',
            color: '#333',
        },
    },
};

export const lines = [
    {
        name: '音乐',
        lines: [
            { name: EVERYONE, en: '111111' },
            { name: EVERYONE, en: '2222222' },
        ],
    },
    {
        name: '卧室',
        lines: [
            { name: ANNA, en: 'Elsa psst, Elsa.', cn: '111' },
            { name: ANNA, en: 'Wake up! Wake up! Wake up!', cn: '111' },
            { name: ELSA, en: 'Anna, go back to sleep' },
            { name: ANNA, en: 'I just can\'t. The sky\'s awake, so i\'m awake' },
            { name: ANNA, en: 'So we have to play' },
            { name: ELSA, en: 'Go play by yourself ' },
            { name: ANNA, en: 'Do you want to build a snowman' },
            { name: ANNA, en: 'Come on! Come on! Come on! Come on!' },
            { name: ANNA, en: 'Do the magic! Do the magic!' },
            { name: ELSA, en: 'Ready ?' },
            { name: ANNA, en: 'This is amazing' },
            { name: ELSA, en: 'Watch this' },
            { name: ELSA, en: 'Hi,i\'m Olaf and i like warm hugs' },
            { name: ANNA, en: 'I love you, Olaf' },
            { name: ANNA, en: 'Hang on, catch me！' },
            { name: ELSA, en: 'gotcha!' },
            { name: ANNA, en: 'Again' },
            { name: ELSA, en: 'Wait, Slow down! Anna!' },
            { name: ELSA, en: 'Wait, Slow down! Anna!' },
            { name: ELSA, en: 'Wait, Slow down! Anna!' },
            { name: ELSA, en: 'Wait, Slow down! Anna!' },
            { name: ELSA, en: 'Wait, Slow down! Anna!' },
            { name: ELSA, en: 'Wait, Slow down! Anna!' },
            { name: ELSA, en: 'Wait, Slow down! Anna!' },
            { name: ELSA, en: 'Wait, Slow down! Anna!' },
            { name: ELSA, en: 'Wait, Slow down! Anna!' },
            { name: ELSA, en: 'Wait, Slow down! Anna!' },
            { name: ANNA, en: 'Again' },
            { name: ANNA, en: 'Again' },
            { name: ANNA, en: 'Again' },
            { name: ELSA, en: 'Wait, Slow down! Anna!' },
        ],
    },
    {
        name: '大厅',
        lines: [
            { name: ANNA, en: 'Elsa psst, Elsa.', cn: '111' },
            { name: ANNA, en: 'Wake up! Wake up! Wake up!', cn: '111' },
            { name: ELSA, en: 'Anna, go back to sleep' },
        ],
    },
    {
        name: '场景',
        lines: [
            { name: ANNA, en: 'Elsa psst, Elsa.', cn: '111' },
            { name: ANNA, en: 'Wake up! Wake up! Wake up!', cn: '111' },
            { name: ELSA, en: 'Anna, go back to sleep' },
        ],
    },
];
