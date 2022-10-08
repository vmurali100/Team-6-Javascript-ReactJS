import { useState } from "react"

const AddNote=({handleAddNote})=>{
    const[noteText,setNotetext]=useState('');
    const characterLimit=200;

    let handleChange=(event)=>{
        // if(characterLimit-event.target.value>=0){
            setNotetext(event.target.value)
        // }
        
    }
    let handleSaveClick=()=>{
       if(noteText.trim().length > 0){
        handleAddNote(noteText) 
        setNotetext("")
       }
    }
    return (
        <div className="note new">
            <textarea rows="8" cols="10" value={noteText} placeholder="Type to add note"  onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>{characterLimit-noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}
export default AddNote