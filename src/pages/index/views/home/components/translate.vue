<template>
    <van-dialog v-model="show" get-container="body">
        <van-loading />
        你好
    </van-dialog>
</template>

<script>
import { Dialog, Loading } from 'vant';

export default {
    props: {
        visible: { type: Boolean, default: false },
        word: { type: Object },
    },
    components: {
        VanDialog: Dialog.Component,
        VanLoading: Loading,
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
    },
};
</script>

<style lang="less" module>
.main {
    width: 600px;
    height: 400px;
    background-color: #fff;
    position: absolute;
}
</style>
