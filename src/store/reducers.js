import { SESSION } from "./action";

const local = JSON.parse(localStorage.getItem("Pomodoro"));

const initialState = {
  workTime: 25,
  shortBreak: 5,
  longBreak: 10,
  pomodoroQuantity: 4,
};

export const rootReducer = (state = local ? local : initialState, action) => {
  switch (action.type) {
    case SESSION:
      return {
        ...state,
        workTime: state.workTime,
        shortBreak: state.shortBreak,
        longBreak: state.longBreak,
        pomodoroQuantity: state.pomodoroQuantity,
      };
    default:
      return state;
  }
};
