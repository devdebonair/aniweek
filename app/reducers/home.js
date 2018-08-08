const initialState = {}

const store = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    default:
      return state;
  }
}

export default store;