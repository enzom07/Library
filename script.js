
var container = document.querySelector('.container');
var title;
var author;
var pages;
var read;
var div;
var newbook;
var index;




var myLibrary = [

  {
      title:"El Principito",
      author:"Antoine De Saint-exupéry",
      pages:"96",
      read:"yes",
      index:0
  },
  {
      title:"El Principito2",
      author:"Antoine De Saint-exupéry",
      pages:"96",
      read:"no",
      index:1
  },
  {
    title:"El Principito3",
    author:"Antoine De Saint-exupéry",
    pages:"96",
    read:"no",
    index:2
}

];

class Book{

  constructor(title,author,pages,read,ind){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = ind;
  }
}

function EditStatus(value) {
  
  this.read = value;

}

EditStatus.prototype = Object.create(Book.prototype);


function inicial(myLibrary){

  //console.log(myLibrary.length);
  for(let i=0;i<myLibrary.length;i++){

      
      //Add to view a book
      div = document.createElement('div');
      div.classList.add('book'+myLibrary[i].index);
      container.appendChild(div);
      


      //Add Info about book
      divinfo = document.createElement('div');
      divinfo.classList.add('title'+myLibrary[i].index);
      divinfo.textContent = "Title:"+myLibrary[i].title;
      div.appendChild(divinfo); 

      divinfo = document.createElement('div');
      divinfo.classList.add('author'+myLibrary[i].index);
      divinfo.textContent = "Author:"+myLibrary[i].author;
      div.appendChild(divinfo); 

      divinfo = document.createElement('div');
      divinfo.classList.add('pages'+myLibrary[i].index);
      divinfo.textContent = "Pages:"+myLibrary[i].pages;
      div.appendChild(divinfo); 

      divinfo = document.createElement('div');
      divinfo.classList.add('read'+myLibrary[i].index);
      divinfo.textContent = "Read:"+myLibrary[i].read;
      div.appendChild(divinfo);
      
      //Button Delate Book
      button = document. createElement('button');
      button.type = 'button';
      button.classList.add('button'+myLibrary[i].index);
      button.setAttribute("id", "book"+myLibrary[i].index); 
      button.innerText = 'Delete';
      div.appendChild(button);

      //Button Edit Book
      button = document. createElement('button');
      button.type = 'button';
      button.setAttribute("id", "edit"+myLibrary[i].index); 
      button.innerText = 'Edit Status';
      div.appendChild(button);

  }

}

//Addbook to Array and HTML
function addBookToLibrary() {

  let max =0;
  title = document.querySelector('#title').value;
  author = document.querySelector('#author').value;
  pages = document.querySelector('#pages').value;
  read = document.querySelector('input[name="read"]:checked').value;
  console.log(read);
  for(let i=0;i<myLibrary.length;i++){

    if(max < myLibrary[i].index ){
      max = myLibrary[i].index; 
    }
  }
  //Index must be > max for the new book
  index = max+1;
  newbook = new Book(title,author,pages,read,index);
  //Add to Array
  myLibrary.push(newbook);

  //Add to view a book
  div = document.createElement('div');
  div.classList.add('book'+this.index); 
  container.appendChild(div);

  //Add Info about book
  divinfo = document.createElement('div');
  divinfo.classList.add('title'+this.index);
  divinfo.textContent = "Title:"+this.title;
  div.appendChild(divinfo); 

  divinfo = document.createElement('div');
  divinfo.classList.add('author'+this.index);
  divinfo.textContent = "Author:"+this.author;
  div.appendChild(divinfo); 

  divinfo = document.createElement('div');
  divinfo.classList.add('pages'+this.index);
  divinfo.textContent = "Pages:"+this.pages;
  div.appendChild(divinfo); 

  divinfo = document.createElement('div');
  divinfo.classList.add('read'+this.index);
  divinfo.textContent = "Read:"+this.read;
  div.appendChild(divinfo);
  
  //Button Delate Book
  button = document. createElement('button');
  button.type = 'button';
  button.classList.add('button'+this.index);
  button.setAttribute("id", "book"+this.index); 
  button.innerText = 'Delete';
  div.appendChild(button);

  //Button Edit Book
  button = document. createElement('button');
  button.type = 'button';
  button.setAttribute("id", "edit"+this.index); 
  button.innerText = 'Edit Status';
  div.appendChild(button);
}

function RemoveBook(index){
  //Remove Book From Array
  for(let i=0;i<myLibrary.length;i++){
    if(myLibrary[i].index === index){
      myLibrary.splice(index,index+1);
    }
  }
  //Remove Book from DOM
  div = document.querySelector('.book'+index);
  div.remove();
}
   
       
function listenClicks() {
      document.addEventListener('click', (event) => {
        const { target } = event;
        if (target.id.includes('book')) {
          index = (target.id).substr(-1);
          RemoveBook(index); 
        }
        else if(target.id === 'btn_add'){
          addBookToLibrary();
          document.getElementById("form").reset();
        }
        else if(target.id.includes('edit')) {
          index = (target.id).substr(-1);
          EditStatus(index);
          
        }
      });
}

    

//addBookToLibrary.prototype = Object.create(Book.prototype);


window.onload = () => {

  if(myLibrary.length > 0)
    inicial(myLibrary);
  }
  listenClicks();