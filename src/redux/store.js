import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage : {
      posts : [
        {id: 1, message: 'Hi, how are you?', likesCount: 2 },
        {id: 2, message: 'Its my first post', likesCount: 4 },
        {id: 3, message: 'Its my sec post', likesCount: 12 },
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage : {
      messages : [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
      ],
      dialogs : [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
      ],
      newMessageBody: 'message'
    },
  },
  _callSubscriber() {
    console.log('state was changed')
  },

  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }

}


export default store;
window.store = store;