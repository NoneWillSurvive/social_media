import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        // данные которые прийдут к нам в теории с сервера
        // пока лежат тут
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 223}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        navbar: {
            friends: [
                {
                    name: 'Andrew',
                    avatar: 'https://sun9-4.userapi.com/c824201/v824201969/173426/YW0DIgHPsvw.jpg?ava=1',
                    id: 1
                },
                {name: 'Sasha', avatar: 'https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg', id: 2},
                {name: 'Sveta', avatar: 'https://avatarko.ru/img/kartinka/2/cherep_kapyushon_uzhasy_1606.jpg', id: 3}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log(`there is not of subscribers`);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this.getState().profilePage = profileReducer(this.getState().profilePage, action);
        this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
        //this.getState().navbar = navbarReducer(this.getState().navbar, action);

        // _callSubscriber вызывает перерисовку дерева т.к. в нем уже лежит колбэк обсервера
        // т.е. компонента апп. А В НЕЕ нужно передать state!

        this._callSubscriber(this.getState());
    }
};

export default store;

