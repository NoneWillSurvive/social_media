export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});

export const updateDialogsMessageActionCreator = (text) =>
    ({type: 'UPDATE-DIALOGS-MESSAGE', newText: text});

let initialState = {
    messages: [
        {id: 1, message: 'this is messagethis is messagethis is message'},
        {id: 2, message: 'this is messagethis is messagethis is message'},
        {id: 3, message: 'this is messagethis is messagethis is message'},
        {id: 4, message: 'this is messagethis is messagethis is message'},
        {id: 5, message: 'this is messagethis is messagethis is message'},
        {
            id: 6,
            message: 'this is messagethis is messagethis is messagethis is messagethis is messagethis is messagethis is messagethis is messagethis is message'
        }
    ],
    peoples: [
        {name: 'Andrew', id: 1},
        {name: 'Sasha', id: 2},
        {name: 'Sveta', id: 3},
        {name: 'Valera', id: 4},
        {name: 'Victor', id: 5},
        {name: 'This is a list item', id: 6},
        {name: 'Another list name', id: 7},
        {name: 'This is a list item', id: 8},
        {name: 'Another list name', id: 9},
        {name: 'This is a list item', id: 10}
    ],
    newDialogsText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE' : {
            let newId = state.messages.length + 1;
            let newMessage = {
                id: newId,
                message: state.newDialogsText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newDialogsText: ''
            }
        }
        case 'UPDATE-DIALOGS-MESSAGE' : {
            return {
                ...state,
                newDialogsText: action.newText
            }
        }
        default :
            return state;
    }
};

export default dialogsReducer;
