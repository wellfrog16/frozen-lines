<template>
    <div :class="['main-wrapper', $style.main]" v-swiperight="handleSwiperight">
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

        <!--  -->
        <div id="wrapper" :class="$style.wrapper">
            <ul :class="$style.lines">
                <li
                    v-for="(item, index) in currentLines.lines"
                    :key="index"
                    :style="linesStyle(item.name)"
                >
                    <span>{{ item.name }}</span>
                    <p v-html="item.words"></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Sidebar, SidebarItem, Popup } from 'vant';
import { lines, options } from './lines-data';
import { BScroll } from '@/utils/cdn';

export default {
    components: {
        VanSidebar: Sidebar,
        VanSidebarItem: SidebarItem,
        VanPopup: Popup,
    },
    data() {
        return {
            activeIndex: 1,
            popupShow: false,
            lines,
            options,
            myScroll: null,
        };
    },
    computed: {
        currentLines() {
            return lines[this.activeIndex];
        },
    },
    watch: {
        activeIndex() {
            setTimeout(() => {
                this.myScroll.refresh();
                this.myScroll.scrollTo(0, 0, 1000);
                this.popupShow = false;
            }, 0);
        },
    },
    mounted() {
        const h = document.body.clientHeight;
        document.querySelector('#wrapper').style.height = `${h}px`;
        setTimeout(() => {
            this.myScroll = new BScroll('#wrapper');
        }, 1000);
    },
    methods: {
        handleSwiperight() {
            this.popupShow = true;
        },
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
