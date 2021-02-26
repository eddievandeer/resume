class Transition {
    beforeEnter(el) {
        if (!el.dataset) el.dataset = {};

        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = '0';
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
    }

    enter(el) {
        this.beforeEnter(el)
        if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 9.8 + 'px';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
            el.style.height = '';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
        this.afterEnter(el)
    }

    afterEnter(el) {
        setTimeout(() => {
            el.style.height = ''
        }, 200)
    }

    beforeLeave(el) {
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = el.scrollHeight + 9.8 + 'px';
    }

    leave(el) {
        this.beforeLeave(el)
        if (el.scrollHeight !== 0) {
            el.style.height = '0';
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        }
    }
}

export default Transition