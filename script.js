
var container = document.querySelector('.container');
var btn_add = document.querySelector('#btn_add');
var buttons_delete;
var books;
var title;
var author;
var pages;
var read;
var div;
var newbook;
var button;
var index;





var myLibrary = [

    {
        title:"El Principito",
        author:"Antoine De Saint-exupéry",
        pages:"96",
        read:"not read"
    },
    {
        title:"El Principito2",
        author:"Antoine De Saint-exupéry",
        pages:"96",
        read:"not read"
    },
    {
      title:"El Principito3",
      author:"Antoine De Saint-exupéry",
      pages:"96",
      read:"not read"
  }

];

function Book(title,author,pages,read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
   // console.log(this);

}


  //button Add Book
btn_add.addEventListener('click', () => {
 
  let form = document.getElementById('form');

  //title = document.querySelector('#title').value;
  title = (form.elements[0]).value;
  console.log(title);
  newbook = new Book(title,author,pages,read);
  //Call to display info books
 /* books = document.querySelectorAll(".container > div");
  addBookToLibrary(newbook);
  delete_grid();
  info(myLibrary); */
  
});

//Addbook to Array
function addBookToLibrary(book) {

    myLibrary.push(book);
    
}

//addBookToLibrary.prototype = Object.create(Book.prototype);

function inicial(myLibrary){

    //console.log(myLibrary.length);
    for(i=0;i<myLibrary.length;i++){

        
        //Add to view a book
        div = document.createElement('div');
        div.classList.add('book'+[i]); 
        container.appendChild(div);
        


        //Add Info about book
        divinfo = document.createElement('div');
        divinfo.classList.add('title:'+i);
        divinfo.textContent = "Title:"+myLibrary[i].title;
        div.appendChild(divinfo); 

        divinfo = document.createElement('div');
        divinfo.classList.add('author:'+i);
        divinfo.textContent = "Author:"+myLibrary[i].author;
        div.appendChild(divinfo); 

        divinfo = document.createElement('div');
        divinfo.classList.add('pages:'+i);
        divinfo.textContent = "Pages:"+myLibrary[i].pages;
        div.appendChild(divinfo); 

        divinfo = document.createElement('div');
        divinfo.classList.add('read:'+i);
        divinfo.textContent = "Read:"+myLibrary[i].read;
        div.appendChild(divinfo);
        

        button = document. createElement('button');
        button.type = 'button';
        button.classList.add('button'+i);
        button.innerText = 'Delete';
        div.appendChild(button);

    }

}


window.onload = () => {
    
    inicial(myLibrary);
    books = document.querySelectorAll(".container > div");
    buttons_delete = document.querySelectorAll(".container > div > button");
    //console.log(buttons_delete);
    buttons_delete.forEach((button) => {

      button.addEventListener('click', () => {

        index = (button.className).substr(-1);
        //console.log(index);
        div = document.querySelector('.book'+index);
        //console.log(div);
        myLibrary.splice(index,index+1);
        div.remove();
        //console.log(myLibrary);

      });

    });
   
  }

 
function delete_grid(){
  books.forEach((div) => {
    div.remove();
    //console.log(div);
  });
}