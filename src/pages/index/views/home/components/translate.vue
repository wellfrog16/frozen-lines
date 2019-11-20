<template>
    <van-dialog v-model="show" get-container="body">
        <div :class="$style.wrapper">
            <van-grid :column-num="2">
                <van-grid-item
                    v-for="(item, index) in voice"
                    :key="index"
                    icon="play-circle-o"
                    :text="`${item.name} ${item.ph}`"
                    @click="playVoice(item.mp3)"
                />
            </van-grid>
            <ul>
                <li v-for="(item, index) in parts" :key="index">
                    {{ item.part }}
                    {{ item.means.join(';') }}
                </li>
            </ul>
        </div>
    </van-dialog>
</template>

<script>
import { Dialog, Grid, GridItem } from 'vant';

export default {
    props: {
        visible: { type: Boolean, default: true },
        word: { type: Object, default: () => {} },
    },
    components: {
        VanDialog: Dialog.Component,
        VanGrid: Grid,
        VanGridItem: GridItem,
    },
    // data() {
    //     return {
    //         show: true,
    //     };
    // },
    computed: {
        show: {
            get() {
                return this.visible;
            },
            set(val) {
                this.$emit('update:visible', val);
            },
        },

        // 单词信息
        symbol() {
            const { symbols } = this.word;
            if (Array.isArray(symbols) && symbols[0]) {
                return symbols[0];
            }
            return {};
        },

        // 单词所有的含义数组
        parts() {
            return this.symbol.parts;
        },

        // 单词的美式/英式音标和音频
        voice() {
            return [
                {
                    name: '英',
                    ph: this.symbol.ph_en,
                    mp3: this.symbol.ph_en_mp3 || this.symbol.ph_tts_mp3,
                },
                {
                    name: '美',
                    ph: this.symbol.ph_am,
                    mp3: this.symbol.ph_am_mp3 || this.symbol.ph_tts_mp3,
                },
            ];
        },
    },
    methods: {
        playVoice(url) {
            new Audio(url).play();
        },
    },
};
</script>

<style lang="less" module>
.wrapper {
    padding: 24px 0;
    position: relative;

    // :global([class*=van-hairline]::after) {
    //     border: 0;
    // }

    ul {
        margin-top: 24px;
        padding: 0 24px;

        li {
            line-height: 1.2em;
        }

        li + li {
            margin-top: 8px;
        }
    }
}
</style>
