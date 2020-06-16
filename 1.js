new Vue({
    el: "#app",
    data: { showNav: !0, lastScrollPosition: 0, currentPosition: 0, showBacktotop: !0 },
    mounted() {
        this.lastScrollPosition = window.pageYOffset;
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        onScroll(e) {
            this.currentPosition = window.pageYOffset;
            if (window.pageYOffset < 0) return;
            this.showNav = window.pageYOffset < this.lastScrollPosition;
            this.lastScrollPosition = window.pageYOffset;
            this.showBacktotop = window.pageYOffset < 10;
        },
        scrollOnTop() {
            var clearSet = setInterval(function () {
                if (window.scrollY > 0) window.scrollTo(0, window.pageYOffset - 30);
                else clearInterval(clearSet);
            }, 5);
        },
    },
});
