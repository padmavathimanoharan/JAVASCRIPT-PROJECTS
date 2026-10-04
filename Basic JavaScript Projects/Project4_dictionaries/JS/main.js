// dictionary assignment
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    }
    document.getElementById("Dictionary").innerHTML = "Species: " + Animal.Species + ", Color: " + Animal.Color + ", Breed: " + Animal.Breed;
}

function del_Dictionary() {
    var movie = {
        Title: "Inception",
        Director: "Christopher Nolan",
        Year: 2010,
        Genre: "Science Fiction",
        Rating: "PG-13"
    }
    delete movie.Rating;
    document.getElementById("delDict").innerHTML = movie.Rating;
}
