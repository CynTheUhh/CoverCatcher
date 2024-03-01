apiURL = "https://openlibrary.org/search.json?"
const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const search = urlParams.get('search');
console.log(search);

const option = urlParams.get('option');
console.log(option);


if (option == "Name"){
    console.log("name boi");
    apiURL += "title=";
}
else if(option == "Author"){
    console.log("author boi");
    apiURL += "author=";
}
else if(option == "Genre"){
    console.log("genre boi");
    apiURL += "q=";
}

apiURL += search;
apiURL += "&limit=25"
console.log(apiURL)

async function makeApICall(url) {
    try {
        const retrievedData = await fetch(url);
        //console.log(retrievedData);
        return retrievedData.json();    
    }
    catch (error) {
        console.log(error);
    }
}

 const libData = makeApICall(apiURL);
 libData.then((res)=>{
    //res is the whole response
    //res.docs is a list of book object with lots of information
    console.log("we have "+ res.numFound+" results")
    console.log(res.docs);
    const books =  document.getElementsByClassName("book-card")
    for(let i = 0; i < books.length ;i++){
        let ID = res.docs[i].cover_i;
        let title = res.docs[i].title;
        let author_name = res.docs[i].author_name[0];
        books[i].style.backgroundImage = "url('https://covers.openlibrary.org/b/id/"+ID+"-L.jpg')";
    }
})


