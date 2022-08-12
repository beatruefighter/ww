

let addNoteContainer = document.getElementById('addNoteContainer')

function showAllNotes(){
    addNoteContainer.style.display = 'none';
    let allNotes;
    let notes = localStorage.getItem("notes")
    if(notes === null){
        allNotes =[]
    }else{
        allNotes = JSON.parse(notes);
    }

    let notesContainer = document.getElementById('notes');
    notesContainer.innerHTML = '';
    allNotes.forEach((note, index) => {
        notesToBeShown = `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${note.title}</h5>
                                <h5 class="card-gender">${note.gender}</h5>
                                <h5 class="card-number">${note.number}</h5>
                                <h5 class="card-date">${note.date}</h5>
                                <h5 class="card-ug">${note.ug}</h5>
                                <h5 class="card-st">${note.st}</h5>

                                

                                
        
                                <button class="btn btn-warning card_btns" onclick="editNote(${index})"><img src="./edit.svg" alt="" class="edit_btn"></button>
                            </div>
                        </div>`
        
        notesContainer.innerHTML = notesContainer.innerHTML + notesToBeShown
    });
}

showAllNotes()

let addNoteBtn = document.getElementById('addNote')
addNoteBtn.addEventListener('click', ()=>{
    let allNotes;
    let notes = localStorage.getItem("notes")
    if(notes === null){
        allNotes =[]
    }else{
        allNotes = JSON.parse(notes);
    }
    let title = document.getElementById('title')
    let gender = document.getElementById('gender')
    let number = document.getElementById('number')
    let date = document.getElementById('date')
    let ug = document.getElementById('ug')
    let st = document.getElementById('st');




    
    let newNoteObj = {
        title : title.value,
        gender : gender.value,
        number : number.value,
        date : date.value,
        ug : ug.value,
        st : st.value,

        
    }

    if(addNoteBtn.innerText === "Update Note"){
        let editCard = document.querySelector('.card')
        let editIndex = editCard.getAttribute('editIndex') 
        allNotes[editIndex] = newNoteObj
    }else{
        allNotes.push(newNoteObj);
    }
    localStorage.setItem("notes", JSON.stringify(allNotes))
    title.value = ''
    gender.value = ''
    number.value = ''
    date.value = ''
    ug.value = ''
    st.value = ''

    
    showAllNotes()

})

let navAddNoteBtn = document.getElementById('navAddNote')
navAddNoteBtn.addEventListener('click', function (){
    addNoteContainer.style.display = 'block';
    addNoteBtn.innerText = 'Save'
})

function deleteNote(noteIndex){
    let allNotes = JSON.parse(localStorage.getItem('notes'));
    allNotes.splice(noteIndex, 1)
    localStorage.setItem("notes", JSON.stringify(allNotes))
    showAllNotes()
}

function editNote(noteIndex){
    let allNotes = JSON.parse(localStorage.getItem('notes'));
    addNoteContainer.style.display = 'block';
    addNoteBtn.innerText = 'Update Note'

    let title = document.getElementById('title')
    let gender = document.getElementById('gender')
    let number = document.getElementById('number')
    let date = document.getElementById('date')
    let ug = document.getElementById('ug')
    let st = document.getElementById('st');

    

    title.value = allNotes[noteIndex].title
    gender.value = allNotes[noteIndex].gender
    number.value = allNotes[noteIndex].number
    date.value = allNotes[noteIndex].date
    ug.value = allNotes[noteIndex].ug
    st.value = allNotes[noteIndex].st
    

    let editCard = document.querySelector('.card')
    editCard.setAttribute('editIndex', `${noteIndex}`)
    console.log(editCard);
}


let search = document.getElementById('search')
search.addEventListener('input', ()=> {
    let inputValue = search.value.toLowerCase()
    let allCards = document.getElementsByClassName('card');

    Array.from(allCards).forEach((ele)=>{
        let cardText = ele.getElementsByTagName('p')[0].innerText

        if(cardText.toLowerCase().includes(inputValue)){
            ele.style.display = 'block';
        }
        else{
            ele.style.display ='none';
        }
    })
})
