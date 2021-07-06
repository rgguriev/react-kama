import profileReducer, {addPostAC, deletePost} from "./profile-reducer";

let initialState = {
  posts : [
    {id: 1, message: 'Hi, how are you?', likesCount: 2 },
    {id: 2, message: 'Its my first post', likesCount: 4 },
    {id: 3, message: 'Its my sec post', likesCount: 12 },
  ],
};

test('new post should be added', () => {
  // 1. test data
  let action = addPostAC('it-kama');

  // 2. action
  let newState = profileReducer(initialState, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});

test('new post should it-kama test', () => {
  // 1. test data
  let action = addPostAC('it-kama');

  // 2. action
  let newState = profileReducer(initialState, action);

  // 3. expectation
  expect(newState.posts[3].message).toBe('it-kama');
});

test('after deleting length of messages should be decremented', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(initialState, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});