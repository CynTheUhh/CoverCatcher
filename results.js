const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const search = urlParams.get('search');
console.log(search);

const option = urlParams.get('option');
console.log(option);

async function makeApICall() {
    try {
        const retrievedData = await fetch("https://openlibrary.org/search.json?q=${search}");
        //console.log(retrievedData);
        return retrievedData;    
    }
    catch (error) {
        console.log(error);
    }
}

// async function converttoJSON() {
//     const jsonData = await makeApICall();
//     return jsonData.json();
// }

// const libData = converttoJSON();
// libData.then((res)=>{
//     //res is the whole response
//     //res.docs is a list of book object with lots of information
//     console.log(res);
//     const books =  document.getElementsByClassName("book-card")
//     let apicounter = 0
//     for(let i = 0; i < books.length ;i++){
//         while(!res.docs[apicounter].isbn){
//             apicounter++
//         }
//         let isbn = res.docs[apicounter].isbn[0]
//         apicounter++
//         books[i].style.backgroundImage = "url('https://covers.openlibrary.org/b/isbn/"+isbn+"-L.jpg')";
//     }
//     console.log(res.docs[0].isbn[0])
// })


