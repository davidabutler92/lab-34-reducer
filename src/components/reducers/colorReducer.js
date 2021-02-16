const initialState = {
  before: [],
  current: '#FF0000',
  after: [],
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'UNDO':
      return { ...state, current: action.payload };
  }
}
