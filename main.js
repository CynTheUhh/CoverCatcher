const submitbutton = document.getElementById('button');

submitbutton.addEventListener('click', ()=>{
  let searchText = document.getElementById('search-field').value;
  let searchBtn = document.getElementById('search-by').value;
  console.log(searchText);
  console.log(searchBtn);
  //goto results.html and give them these values
  window.location.assign( './results.html' +"?search="+ searchText+"&option="+ searchBtn)
  console.log("hi")
})


