let app = new Vue({
    el: '#app',

    data: {
        carouselImages : [
            {
                imageURL : 'https://cdn.cnn.com/cnnnext/dam/assets/190913153747-comedy-wildlife-photography-awards-4-full-169.jpg',
                imageAlt : 'Birds, Wildlife photography awards'
            },
            {
                imageURL : 'https://www.euronatur.org/fileadmin/images/fotowettbewerb/2021/01_JulianRad_Waldmaus_Niederoesterreich_1.JPG',
                imageAlt : 'Mouse, Wildlife photography awards'
            },
            {
                imageURL : 'https://mymodernmet.com/wp/wp-content/uploads/2021/06/BigPicture-Winner-1-Jo-Anne-McArthur.jpg',
                imageAlt : 'Kangaroo, Wildlife photography awards'
            },
            {
                imageURL : 'https://www.agenpress.it/wp-content/uploads/2021/09/http___cdn.cnn_.com_cnnnext_dam_assets_210901131047-11-comedy-wildlife-photography-awards-2021.jpg',
                imageAlt : 'Pigeon, Wildlife photography awards'
            }
        ],
        indexImage : 0,
        autoplay : ''
    },

    methods: {

        clickPreviousImage: function(){
            clearInterval(this.autoplay);
            console.log('Timer stopped')
            this.previousImage();
        },

        clickNextImage: function(){
            clearInterval(this.autoplay);
            console.log('Timer stopped')
            this.nextImage();
        },

        previousImage : function(){
            this.indexImage == 0 ? this.indexImage = this.carouselImages.length -1 : this.indexImage--
            console.log(this.indexImage)
        },
        
        nextImage : function(){
            
            this.indexImage == this.carouselImages.length -1 ? this.indexImage = 0 : this.indexImage++
            console.log(this.indexImage)
        },      
    },

    created : function(){

        this.autoplay = setInterval(this.nextImage, 3000)
    }

}); 