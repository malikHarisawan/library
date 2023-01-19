// Book class
class Book{
    constructor(title,author,pages,isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}
// UI class

class UI{

    static DisplayList(book){
        const list = document.querySelector(".list");

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.isRead}</td>
        <td> <a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        list.appendChild(row)
    }

    static Delete(el){

        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }

    static clearField(){
        document.querySelector("#title").value = ''
        document.querySelector("#author").value = ''
        document.querySelector("#pages").value = ''
        document.querySelector("#checkbox").checked = false
        
    }

}
document.addEventListener("DOMContentLoaded",UI.DisplayBooks)

// Store class : handle storge




document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#checkbox').checked;

     const book1 = new Book(title,author,pages,isRead)
     UI.DisplayList(book1)

    UI.clearField()
})

document.querySelector('.list').addEventListener('click',(e)=>{
    UI.Delete(e.target)
})
