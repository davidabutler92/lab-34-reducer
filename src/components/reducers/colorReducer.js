export const initialState = {
  before: [],
  current: '#FF0000',
  after: [],
};

export default function reducer(state, action) {
  const { after, current, before } = state;

  switch (action.type) {
    case 'UNDO':
      return {
        ...state,
        after: [current, ...after],
        current: before[before.length - 1] || '#FF0000',
        before: before.slice(0, -1),
      };
    case 'REDO':
      return {
        ...state,
        before: [...before, current],
        current: after[0] || '#FF0000',
        after: after.slice(1),
      };
    case 'RECORD':
      return {
        ...state,
        before: [...before, current],
        current: action.payload,
      };
    default:
      return state;
  }
}
