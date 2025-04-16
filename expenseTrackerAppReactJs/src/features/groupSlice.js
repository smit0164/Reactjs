import { createSlice } from "@reduxjs/toolkit"
const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('groupState');
      if (serializedState === null) {
        return undefined; // Return undefined to use default initialState
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Error loading state from localStorage:', err);
      return undefined;
    }
  };
  
const defaultInitialState ={
    group:[
        {
            id:1,
            name:"Office"
        }
    ]
}
const initialState = loadFromLocalStorage() || defaultInitialState;
let count=2;
const groupSlice=createSlice({
    name:"group",
    initialState,
    reducers:{
        AddGroup:(state,action)=>{
            const group={
               id:count++,
               name:action.payload
            }
            state.group.push(group)
            try {
                localStorage.setItem('groupState', JSON.stringify(state));
              } catch (err) {
                console.error('Error saving state to localStorage:', err);
              }
        },
       
    }
})

export const {AddGroup} = groupSlice.actions;
export default groupSlice.reducer