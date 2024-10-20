// src/redux/reducers/notesreducer.js

const initial_State = [];

export const notesReducer = (state = initial_State, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, action.payload]; // Return new state with added note

        case 'DELETE_NOTE':
            return state.filter(note => note.id !== action.payload); // Return state without the deleted note

        case 'UPDATE_NOTE':
            return state.map(note => 
                note.id === action.payload.id 
                    ? { ...note, ...action.payload.updatedNote } // Return updated note
                    : note // Return unchanged note
            );

        default:
            return state; // Return unchanged state if no actions matched
    }
};
