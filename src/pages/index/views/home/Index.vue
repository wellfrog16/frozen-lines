<template>
    <div
        :class="['main-wrapper', $style.main]"
        v-swiperight="handleSwiperight"
        v-tap="handleTap"
        v-press="handlePress"
        v-pressup="handlePressup"
        v-panend="handlePressup"
    >
        <!-- 左侧导航 -->
        <van-popup
            v-model="popupShow"
            position="left"
            get-container="body"
            :class="$style.popup"
        >
            <van-sidebar v-model="activeIndex">
                <van-sidebar-item
                    v-for="(item, index) in lines"
                    :title="item.name"
                    :key="index"
                />
            </van-sidebar>
        </van-popup>

        <!-- 台词区 -->
        <div id="wrapper" :class="$style.wrapper">
            <ul :class="$style.lines">
                <li
                    v-for="(item, index) in currentLines"
                    :key="index"
                    :style="linesStyle(item[0])"
                >
                    <span>{{ item[0] }}</span>
                    <p v-html="item[1]" :class="item[2]"></p>
                </li>
            </ul>
        </div>

        <!-- 翻译结果 -->
        <translate :visible.sync="translateVisible" :word="word" />

        <van-overlay :show="loading" class="flex-center">
            <van-loading />
        </van-overlay>
    </div>
</template>

<script>
import {
    Sidebar,
    SidebarItem,
    Popup,
    Loading,
    Overlay,
} from 'vant';
import { options } from '#index/locale/role'; // 角色信息
import { loadLanguageAsync } from '#index/locale';
import { BScroll } from '@/utils/cdn';
import apiTranslate from '@/api/sys/translate';
import Translate from './components/translate.vue';
import newWords from './new-words';

const EN = 'en-US';
const CN = 'zh-CN';

export default {
    components: {
        VanSidebar: Sidebar,
        VanSidebarItem: SidebarItem,
        VanPopup: Popup,
        VanLoading: Loading,
        VanOverlay: Overlay,
        Translate,
    },
    data() {
        return {
            activeIndex: 0, // 当前选项卡
            popupShow: false, // popuo是否显示（左侧导航）
            lines: this.$t('lines'), // 台词
            options,
            myScroll: null,
            translateTimeId: null,
            translateVisible: false, // 翻译对话框的显示
            word: {}, // 翻译回传的结果
            loading: false,
        };
    },
    computed: {
        // 当前页台词
        currentLines() {
            const lang = this.$t('lang');
            const { lines } = this.$t('lines')[this.activeIndex];

            if (lang === EN) {
                // 注入生词
                return lines.map(line => [
                    line[0],
                    newWords.inject(line[1], newWords.list),
                    line[2],
                ]);
            }
            return lines;
        },
    },
    watch: {
        activeIndex(val) {
            setTimeout(() => {
                if (this.myScroll) {
                    this.myScroll.refresh();
                    this.myScroll.scrollTo(0, 0, 1000);
                    this.popupShow = false;
                    localStorage.setItem('frozen-active', val);
                }
            }, 0);
        },
    },
    mounted() {
        this.activeIndex = localStorage.getItem('frozen-active') || 0;
        const h = document.body.clientHeight;
        document.querySelector('#wrapper').style.height = `${h}px`;
        setTimeout(() => {
            this.myScroll = new BScroll('#wrapper');
        }, 1000);
    },
    methods: {
        // 右滑显示导航
        handleSwiperight() {
            this.popupShow = true;
        },

        // 长按显示中文
        handlePress() {
            loadLanguageAsync(CN);
        },

        // 松开恢复英文
        handlePressup() {
            loadLanguageAsync(EN);
        },

        // 点击翻译
        handleTap(ev) {
            const { nodeName, innerText } = ev.target;
            if (nodeName !== 'EM') { return; }

            this.loading = true;
            apiTranslate(innerText.toLowerCase()).then((res) => {
                this.loading = false;
                this.translateVisible = true;
                this.word = res.word;
            });
        },

        // 动态台词样式
        linesStyle(name) {
            const option = options.actor[name];
            return {
                'background-color': option.backgroundColor,
                color: option.color,
            };
        },
    },
};
</script>

<style lang="less" module>
.main {
    height: 100%;

    :global(.row2) {
        height: 48px;
    }

    em {
        font-style: normal;
        text-decoration: underline;
    }
}

.wrapper {
    box-sizing: border-box;
    overflow: hidden;
}

.popup {
    height: 100%;
}

.lines {
    line-height: 1;

    li {
        display: flex;
    }

    li + li {
        margin-top: 1px;
    }

    span {
        flex: 0 0 60px;
        padding: 5px 0 5px 10px;
        line-height: 1.5em;
    }

    p {
        margin: 0;
        flex-grow: 1;
        padding: 5px;
        line-height: 1.5em;
    }
}

.loading {
    line-height: 1;
}
</style>
