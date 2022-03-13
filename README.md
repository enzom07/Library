# Library

    books = document.querySelectorAll(".container > div");
    buttons_delete = document.querySelectorAll(".container > div > button");
    buttons_delete.forEach((button) => {

      console.log(index);
      button.addEventListener('click', () => {
    
        index = (button.className).substr(-1);
        console.log(index);
        
        //console.log(div);
        //Remove book from Array myLibrary
        for(let i=0;i<myLibrary.length;i++){
    
          if(myLibrary[i].index === index){
    
            myLibrary.splice(index,index+1);
    
          }
    
        }
        //Remove book from HTML
        div = document.querySelector('.book'+index);
        div.remove();
        //console.log(myLibrary);
    
      });
    
    });