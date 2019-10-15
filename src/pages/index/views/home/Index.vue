<template>
    <div
        :class="['main-wrapper', $style.main]"
        v-swiperight="handleSwiperight"
        v-tap="handleTap"
        @touchstart="handleTouchstart"
        @touchend="handleTouchend"
        @touchmove="handleTouchmove"
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
                    v-for="(item, index) in currentLines.lines"
                    :key="index"
                    :style="linesStyle(item[0])"
                >
                    <span>{{ item[0] }}</span>
                    <p v-html="item[1]" :class="item[2]"></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Sidebar, SidebarItem, Popup } from 'vant';
import { options } from '#index/locale/role';
import { loadLanguageAsync, getLanguage } from '#index/locale';
import { BScroll } from '@/utils/cdn';
import apiTranslate from '@/api/sys/translate';

export default {
    components: {
        VanSidebar: Sidebar,
        VanSidebarItem: SidebarItem,
        VanPopup: Popup,
    },
    data() {
        return {
            activeIndex: 0,
            popupShow: false,
            lines: this.$t('lines'),
            options,
            myScroll: null,
            translateTimeId: null,
            startLang: '',
        };
    },
    computed: {
        currentLines() {
            return this.$t('lines')[this.activeIndex];
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
        handleTouchstart() {
            this.translateTimeId = setTimeout(() => {
                loadLanguageAsync('zh-CN');
            }, 500);
        },

        // 松开恢复英文
        handleTouchend() {
            this.startLang = '';
            clearTimeout(this.translateTimeId);
            loadLanguageAsync('en-US');
        },

        // 移动时保持原有语言
        handleTouchmove() {
            if (!this.startLang) {
                this.startLang = getLanguage();
            }
            if (this.startLang === 'en-US') {
                clearTimeout(this.translateTimeId);
            }
        },

        handleTap(ev) {
            console.log(ev.target.nodeName);
            console.log(ev.target.innerText);
            apiTranslate(ev.target.innerText).then((res) => {
                console.log(res);
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
</style>
