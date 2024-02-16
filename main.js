async function makeApICall() {
    try {
        const retrievedData = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
        //console.log(retrievedData);
        return retrievedData;    
    }
    catch (error) {
        console.log(error);
    }
}

async function converttoJSON() {
    const jsonData = await makeApICall();
    return jsonData.json();
}

const libData = converttoJSON();
libData.then((res)=>{
    //res is the whole response
    //res.docs is a list of book object with lots of information
    const books =  document.getElementsByClassName("book-card")
    let apicounter = 0
    for(let i = 0; i < books.length ;i++){
        while(!res.docs[apicounter].isbn){
            apicounter++
        }
        let isbn = res.docs[apicounter].isbn[0]
        apicounter++
        books[i].style.backgroundImage = "url('https://covers.openlibrary.org/b/isbn/"+isbn+"-L.jpg')";
    }
    console.log(res.docs[0].isbn[0])
})






















function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// Credit to W3 schools for this specific javascript
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

