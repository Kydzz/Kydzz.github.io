new Vue({
    el:"#app",
    data: {
        showNav: true,
        lastScrollPosition: 0,
        currentPosition: 0,
        showBacktotop: true
    },
    mounted() {
        this.lastScrollPosition = window.pageYOffset
        window.addEventListener("scroll", this.onScroll)
        
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
        
    },
    methods: {
        onScroll(e) {
            this.currentPosition = window.pageYOffset /* e.target.documentElement.scrollTop */
            if(window.pageYOffset < 0) return
            this.showNav = window.pageYOffset < this.lastScrollPosition
            this.lastScrollPosition  = window.pageYOffset
            this.showBacktotop = window.pageYOffset < 10
            // if( window.pageYOffset < this.lastScrollPosition){
            //     this.showNav = false
            // }
            // this.lastScrollPosition = window.pageYOffset
        },
        scrollOnTop(){
                var clearSet = setInterval(function(){
                    if (window.scrollY > 0)
                        window.scrollTo(0,window.pageYOffset - 30);
                    else clearInterval(clearSet)
                },5)
        }
    }
    
})