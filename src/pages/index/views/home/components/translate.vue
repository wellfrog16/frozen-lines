<template>
    <van-dialog v-model="show" get-container="body">
        <div :class="$style.wrapper">
            <h4>{{ word.name }}</h4>
            <van-grid :column-num="2">
                <van-grid-item
                    v-for="(item, index) in word.voice"
                    :key="index"
                    icon="play-circle-o"
                    :text="`${item.name} ${item.ph}`"
                    @click="playVoice(item.mp3)"
                />
            </van-grid>
            <ul>
                <li v-for="(item, index) in word.parts" :key="index">
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
    computed: {
        show: {
            get() {
                return this.visible;
            },
            set(val) {
                this.$emit('update:visible', val);
            },
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

    h4 {
        margin: 0;
        text-align: center;
        margin-bottom: 12px;
        font-size: 1.5em;
    }

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
