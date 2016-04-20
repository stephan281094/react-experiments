export const CHANGE_VIEW = 'CHANGE_VIEW'

// Actions
export function changeView (item) {
  return {
    type: CHANGE_VIEW,
    item
  }
}
