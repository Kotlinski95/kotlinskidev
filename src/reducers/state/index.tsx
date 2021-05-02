const initialState = {
    page: 'Homepage',
    language: "English"
  };

export default function state(state = initialState, action:any){
    switch (action.type){
      default: return state;
    }
}