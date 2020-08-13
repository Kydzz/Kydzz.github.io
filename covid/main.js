// Vue.component("list-country",{
//     props: ['showListCountry'],
//     template: ` 
        
//     `
// })
new Vue({
    el: '#app',
    data () {
        return {
            data: [],
            currentLength: 0,
            loading: true,
            query: '',
            id: 0,
            isShow: false,
            showListCountry: false
        }
    },
    mounted () {
        var url = 'https://corona.lmao.ninja/v2/countries'
        this.loading = true
        axios
            .get(url)
            .then( e => {
                if( e.status === 200 ) {
                    this.data = e.data
                    this.loading = false
                }
            })
            
    },
    methods: {
        format(e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        fetchCountry() {

            this.query = this.query.charAt(0).toUpperCase() + this.query.slice(1).toLowerCase()
            if( this.query === "usa" || this.query === "Usa") {
                this.query = this.query.toUpperCase()
            }
            this.data.forEach((e,idx,array) => {
                if(e.country === this.query) {
                    this.id = idx
                }
            });
            this.isShow = true
            // var x = this.data[2].country.includes(`${this.query}`)
            // console.log(x)
        }
    }, 
})