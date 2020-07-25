import {createSelector} from "reselect";

const getPeoples = (state) => {
    return state.dialogsPage.peoples
};
export const getPeoplesS = createSelector(getPeoples, (peoples)=>{
    return peoples;
});

const getMessages = (state) => {
    return state.dialogsPage.messages
};
export const getMessagesS = createSelector(getMessages, (messages)=>{
    return messages;
});

const getNewDialogsText = (state) => {
    return state.dialogsPage.newDialogsText
};
export const getNewDialogsTextS = createSelector(getNewDialogsText, (text) => {
    return text;
});
