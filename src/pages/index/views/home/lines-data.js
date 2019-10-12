const EVERY = 'Every';
const ME = 'Me';
const ELSA = 'Elsa';
const ANNA = 'Anna';
const BABA = 'Baba';
const MAMA = 'Mama';
const TROLLS = 'Trolls';

export const options = {
    actor: {
        [EVERY]: {
            backgroundColor: '#eee',
            color: '#333',
        },
        [ME]: {
            backgroundColor: '#c3fdff',
            color: '#333',
        },
        [ELSA]: {
            backgroundColor: '#ffd5f1',
            color: '#333',
        },
        [ANNA]: {
            backgroundColor: '#fe9add',
            color: '#333',
        },
        [BABA]: {
            backgroundColor: '#6598ff',
            color: '#fff',
        },
        [MAMA]: {
            backgroundColor: '#ff7800',
            color: '#fff',
        },
        [TROLLS]: {
            backgroundColor: '#9afec0',
            color: '#333',
        },
    },
};

export const lines = [
    {
        name: '开场',
        lines: [
            { name: EVERY, words: 'Born of cold and winter air and mountain rain combining' },
            { name: EVERY, words: 'This icy force both foul and fair' },
            { name: EVERY, words: 'Has a frozen heart worth mining' },
            { name: EVERY, words: 'So cut through the heart, cold and clear' },
            { name: EVERY, words: 'Strike for love and strike for fear' },
            { name: EVERY, words: 'See the beauty sharp and sheer' },
            { name: EVERY, words: 'Split the ice apart' },
            { name: EVERY, words: 'And break the frozen heart' },
            { name: EVERY, words: 'Hup! Ho! Watch your step! Let it go' },
            { name: EVERY, words: 'Hup! Ho! Watch your step! Let it go' },
            { name: EVERY, words: 'Beautiful! Powerful! Dangerous! Cold!' },
            { name: EVERY, words: 'Ice has a magic can\'t be controlled' },
            { name: EVERY, words: 'Stronger than one, stronger then ten' },
            { name: EVERY, words: 'Stronger than a hundred men' },
            { name: EVERY, words: 'Born of cold and winter air and mountain rain combining' },
            { name: EVERY, words: 'This icy force both foul and fair' },
            { name: EVERY, words: 'Has a frozen heart worth mining' },
            { name: EVERY, words: 'So cut through the heart, cold and clear' },
            { name: EVERY, words: 'Strike for love and strike for fear' },
            { name: EVERY, words: 'There\'s beauty and there\'s danger here' },
            { name: EVERY, words: 'Split the ice apart' },
            { name: EVERY, words: 'Beware the frozen heart' },
            { name: ME, words: 'Come on, Sven' },
        ],
    },
    {
        name: '家',
        lines: [
            { name: ANNA, words: 'Elsa psst, Elsa.' },
            { name: ANNA, words: 'Wake up! Wake up! Wake up!' },
            { name: ELSA, words: 'Anna, go back to sleep' },
            { name: ANNA, words: 'I just can\'t. The sky\'s awake, so i\'m awake' },
            { name: ANNA, words: 'So we have to play' },
            { name: ELSA, words: 'Go play by yourself ' },
            { name: ANNA, words: 'Do you want to build a snowman' },
            { name: ANNA, words: 'Come on! Come on! Come on! Come on!' },
            { name: ANNA, words: 'Do the magic! Do the magic!' },
            { name: ELSA, words: 'Ready ?' },
            { name: ANNA, words: 'This is amazing' },
            { name: ELSA, words: 'Watch this' },
            { name: ELSA, words: 'Hi,i\'m Olaf and i like warm hugs' },
            { name: ANNA, words: 'I love you, Olaf' },
            { name: ANNA, words: 'Hang on, catch me！' },
            { name: ELSA, words: 'gotcha!' },
            { name: ANNA, words: 'Again' },
            { name: ELSA, words: 'Wait, Slow down! Anna!' },
            { name: ELSA, words: 'You\'re okay, Anna. I got you.' },
            { name: BABA, words: 'Else, what have you done? This is gettinh out of hand!' },
            { name: ELSA, words: 'It was an accident. I\'m sorry, Anna.' },
            { name: MAMA, words: 'She\'s ice cold.' },
            { name: BABA, words: 'I know where we have to go.' },
        ],
    },
    {
        name: '森林',
        lines: [
            { name: ME, words: 'Ice? Faster, Sven!' },
            { name: ME, words: 'Sven!' },
            { name: BABA, words: 'Please... Help! My daughter!' },
            { name: TROLLS, words: 'He is the King!' },
            { name: ME, words: 'Trolls...?' },
            { name: TROLLS, words: 'Shush. I\'m trying to listen.' },
            { name: TROLLS, words: 'Cuties. I\'m gonna keep you.' },
            { name: TROLLS, words: 'Your Majesty.' },
            { name: TROLLS, words: 'Born with the powers or cursed?' },
            { name: BABA, words: 'Born. And they\'re getting stronger.' },
            { name: TROLLS, words: 'You are lucky it wasn\'t her heart.' },
            { name: TROLLS, words: 'The heart is not so easily changed, but the head can be persuaded.' },
            { name: BABA, words: 'Do what you must.' },
            { name: TROLLS, words: 'I recommend we remove all magic.' },
            { name: TROLLS, words: 'even memories of magic to be safe..' },
            { name: TROLLS, words: 'But don\'t worry, I\'ll leave the fun.' },
            { name: TROLLS, words: 'She will be okay.' },
            { name: ELSA, words: 'But she won\'t remember i have powers?' },
            { name: BABA, words: 'It\'s for the best.' },
            { name: TROLLS, words: 'Listen to me, Elsa, your power will only grow.' },
            { name: TROLLS, words: 'There is beauty in it...' },
            { name: TROLLS, words: 'but also great danger.' },
            { name: TROLLS, words: 'You must learn to control it.' },
            { name: TROLLS, words: 'Fear will be your enemy.' },
            { name: BABA, words: 'No. We\'ll protect her. Sha can learn to control it. I\'m sure.' },
            { name: BABA, words: 'Until then, we\'ll lock the gates. We\'ll reduce the staff' },
            { name: BABA, words: 'We will limit her contact with people and keep her powers hidden from every...' },
            { name: BABA, words: 'including Anna.' },
        ],
    },
    {
        name: '插曲',
        lines: [
            { name: ANNA, words: 'Elsa?' },
            { name: ANNA, words: 'Do you want to build a snowman' },
            { name: ANNA, words: 'Come on let\'s go and play' },
            { name: ANNA, words: 'I never see you anymore. Come out the door' },
            { name: ANNA, words: 'It\'s like you\'ve gone away' },
            { name: ANNA, words: 'We used to be best buddies' },
            { name: ANNA, words: 'And now we\'re not. I wish you would tell me why' },
            { name: ANNA, words: 'Do you want to build a snowman' },
            { name: ANNA, words: 'It doesn\'t have to be a snowman' },
            { name: ELSA, words: 'Go away, Anna' },
            { name: ANNA, words: 'Okay bye' },
        ],
    },
];
