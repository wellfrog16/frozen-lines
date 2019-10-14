
import createRouter from '#index/router';
import { NProgress } from '@/utils/cdn';

// 多语言
import { getLanguage, loadLanguageAsync } from '#index/locale';

NProgress.configure({ showSpinner: false });

const router = createRouter();
router.beforeEach((to, from, next) => {
    NProgress.start();

    // 多语言，封装一层next，每次路由时判断语言
    const lang = getLanguage();
    const handleNext = (params) => {
        loadLanguageAsync(lang).then(() => next(params));
    };

    handleNext();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
