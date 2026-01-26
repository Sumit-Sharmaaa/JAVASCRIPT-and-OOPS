    class Media {
      //properties
        title;
        artist;
        duration;
        //constructor
        constructor(title,artist,duration) {
            this.title = title;
            this.artist = artist;
            this.duration = duration;
        }
        //methods
        getTitle() {
            return this.title;
        }
        getArtist() {
            return this.artist;
        }
        getDuration() {
            return this.duration;
        }
  }

  const media = new Media('Pal',"Arijit",'04:30');
  console.log(media.getArtist());
  console.log(media.getTitle());
  console.log(media.getDuration());