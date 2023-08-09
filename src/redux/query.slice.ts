import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStore } from "utils/mock-data";

const initialState: { query: InitialState } = {
  query: {
    stores: [],
    active_param: null,
    tags: []
  },
};

interface InitialState {
  stores: IStore[];
  active_param: ActiveParam;
  tags: string[];
}

type ActiveParam =
  | "most-popular"
  | "still-opened"
  | "new-arrival"
  | "most-rated"
  | "highest-rated"  | 
  "by-tags"
  | null;

const querySlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setStore(state, action: PayloadAction<IStore[]>) {
      state.query.stores = action.payload;
    },
    setActiveParams(
      state,
      action: PayloadAction<InitialState["active_param"]>
    ) {
      state.query.active_param = action.payload;
    },
    setTags(state, action: PayloadAction<InitialState["tags"]>) {
      state.query.tags = action.payload;
    },
    addTag(state, action: PayloadAction<string>) {
      const tags = state.query.tags;
      // To ensure the active tags don't exceed 5 in number
      if( tags.length === 5 ){
         state.query.tags = tags
      }else{
        state.query.active_param="by-tags"
        state.query.tags.push(action.payload);
      }
    },

    removeTag(state, action: PayloadAction<string>) {
      const tags = state.query.tags;
      state.query.tags = tags.filter((_) => _ !== action.payload);
      if( state.query.tags.length === 0 ) state.query.active_param = null;  
    },
    reset(state, action: PayloadAction<string>){
      state.query.active_param = null;
      state.query.stores = [];
      state.query.stores = [];
    }
  
  },
});

export const { setStore, setActiveParams, setTags, addTag, removeTag, reset } =
  querySlice.actions;

export default querySlice.reducer;
