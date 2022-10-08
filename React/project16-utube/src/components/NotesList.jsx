import Note from "./Note"
import AddNote from "./AddNote"
const NotesList =({notes,handleAddNote,handledeletenotes})=>{
    return(
        <div className="notes-list">
           {notes.map((note)=>{
          return  <Note id={note.id} text={note.text} date={note.date} handledeletenotes={handledeletenotes}/>
           })}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}
export default NotesList