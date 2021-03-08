function Image(title, url, tags) {
    this.title = title;
    this.url = "imgs/" + url;
    this.tags = tags;

    console.log(this.tags)

    this.display = function () {

        var container = $("<div>")
        this.tags.forEach(function (tag) {
            container.addClass(tag);
        })

        //quoteString += "<div style='background:" + this.color + "'>"; a cleaner version is "container.css("background", this.color)"
        container.addClass("image")

        var imageString = "";
        imageString += "<img src='" + this.url + "'>";

        console.log(imageString)

        container.html(imageString)
        $(".images").prepend(container)
    }
}


var Images = [
    new Image("Albert", "albert.jpg", ["BW", "All"]),
    new Image("Black Power Salute", "blk_pwr_salute.jpeg", ["BW", "All"]),
    new Image("Princess Diana", "diana.jpg", ["RGB", "All"]),
    new Image("Dolly Parton", "dolly.jpeg", ["BW", "All"]),
    new Image("Freddie Mercury", "freddie.jpg", ["RGB", "All"]),
    new Image("Frida Kahlo", "frida.jpeg", ["BW", "All"]),
    new Image("Marilyn Monroe", "marilyn.jpeg", ["RGB", "All"]),
    new Image("The Situation Room", "sit_room.jpeg", ["RGB", "All"]),
    new Image("Steve Jobs", "steve.jpeg", ["RGB", "All"]),
    new Image("VJ Day", "vj_day.jpeg", ["BW", "All"])
    ]

//Global tagllist
var tagList = []
Images.forEach(function (image) {
    image.display();
    image.tags.forEach(function (tag) {
        //checks to see if tag has been added to taglist
        if (!tagList.includes(tag)) {
            //if it isnt added, add it
            tagList.push(tag);
            //and also make a button for it
            $(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</button>")
        }
    })
})


console.log(tagList)


$(".filter").on("click", function(){
    var tag = $(this).attr("id");
    console.log(tag)
    
    $("." + tag).fadeIn();
    $(".image").not("." + tag).hide();
    
    $(".filter").removeClass("active")
    $(this).addClass("active")
})
