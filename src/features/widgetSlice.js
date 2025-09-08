import { createSlice } from "@reduxjs/toolkit";
import widgetData from "../data/widgetData";

let nextId =
  Math.max(
    0,
    ...Object.values(widgetData)
      .flat()
      .map((w) => w.id),
  ) + 1;

const initialState = {
  categories: widgetData,
};

const widgetSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { category, widgetName, widgetText } = action.payload;
      const newWidget = {
        id: nextId++,
        name: widgetName,
        type: "text",
        data: { text: widgetText },
      };

      if (!state.categories[category]) {
        state.categories[category] = [];
      }
      state.categories[category].push(newWidget);
    },

    removeWidget: (state, action) => {
      const { category, widgetId } = action.payload;
      if (state.categories[category]) {
        state.categories[category] = state.categories[category].filter(
          (widget) => widget.id !== widgetId,
        );
      }
    },
  },
});

export const { addWidget, removeWidget } = widgetSlice.actions;

export default widgetSlice.reducer;
