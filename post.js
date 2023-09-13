const { createStore,combineReducers } = require("redux");
const ADD_POST="ADD_POST";
const DELETE_POST="DELETE_POST";

const ADD_USER="ADD_USER";
const DELETE_USER="DELETE_USER";

const initialState = {
  Post: [],
};
const userInitialState = {
    User: [],
  };

const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  };
};

const addUser = (user) => {
    return {
      type: ADD_USER,
      payload: user,
    };
  };
  const deleteUser = (id) => {
    return {
      type: DELETE_USER,
      id
    };
  };
  



const postReducer = (state = initialState, action) => {
switch(action.type){
case ADD_POST: 
return{
    Post: [...state.Post, action.payload], 
}
case DELETE_POST: 
    return {
      Post: state.Post.filter((post) => {
        return post.id !== action.id;
      }),
    }
 default:
    return state  
}
};

const userReducer = (state = userInitialState, action) => {
    switch(action.type){
    case ADD_USER: 
    return{
        User: [...state.User, action.payload], 
    }
    case DELETE_USER: 
        return {
          User: state.User.filter((usre) => {
            return user.id !== action.id;
          }),
        }
     default:
        return state  
    }
    };
    

const RootReducer=combineReducers({

    Post:postReducer,
    User:userReducer
})



const store = createStore(RootReducer);

store.subscribe(() => {
  const data = store.getState();
  console.log("🚀 ~ file: post.js:42 ~ store.subscribe ~ data:", data);
});

store.dispatch(
  addPost({
    id: "111",
    name: "sherazAbbas",
  })
);
store.dispatch(
    addPost({
      id: "222",
      name: "adeelAbbas",
    })
  );

  store.dispatch(
    addUser({
      id: "45435",
      name: "shercsvfdsgazAbbas",
    })
  );
  store.dispatch(
    addUser({
        id: "43543222",
        name: "adzvdsdeelAbbas",
      })
    );

  store.dispatch(
    deletePost(id="222")
  );