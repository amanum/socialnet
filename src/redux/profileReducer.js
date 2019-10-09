const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'

let initialState = {
    postsData: [
        {id: 2, text: "Hey, why nobody loves me?", likes: 0},
        {id: 1, text: "It's our new program! Hey!", likes: 8}
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: state.postsData.length + 1,
                text: state.newPostText,
                likes: 0
            }
            state.postsData.unshift(newPost)
            state.newPostText = ""
            return state;

        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText
            return state;

        case ADD_LIKE:
            let newLikesCount = action.likes + 1;
            state.postsData.find(p => p.id === action.id).likes = newLikesCount;
            return state;

        default:
            return state;
    }
}

export const onAddPostBtnClickActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const onLikeBtnClickActionCreator = (likesCount, id) => ({type: ADD_LIKE, likes: likesCount, id: id})

export default profileReducer