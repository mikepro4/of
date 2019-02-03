import {
    TRACK_LOAD,
    TRACK_PLAY,
    TRACK_PAUSE,
    TRACK_STOP,
    TRACK_SEEK,
    TRACK_PLAYING,
    SET_ANALYSER
  } from "../actions/types";
  
  export const initialState = {
    loading: false,
    soundUrl: "",
    status: "stop",
    currentTime: 0,
    seekToSeconds: null,
    analyser: null
  };
  
  export const playerReducer = (state = initialState, action) => {
      switch (action.type) {
      case SET_ANALYSER: {
        return {
          ...state,
          analyser: action.payload
        }
      }
      case TRACK_LOAD:
        return {
            ...state,
            soundUrl: action.payload,
            seekToSeconds: null
        }
      case TRACK_PLAY:
        return {
            ...state,
            status: "play",
            seekToSeconds: null,
            soundUrl: action.payload
        }
      case TRACK_PAUSE:
        return {
            ...state,
            status: "pause",
            seekToSeconds: null,
            soundUrl: action.payload
        }
      case TRACK_STOP:
        return {
            ...state,
            status: "stop",
            seekToSeconds: null,
            soundUrl: action.payload
        }
      case TRACK_SEEK:
        return {
            ...state,
            seekToSeconds: action.seekToSeconds,
            soundUrl: action.payload
        }
      case TRACK_PLAYING:
        return {
            ...state,
            seekToSeconds: null,
            currentTime: action.currentTime,
            soundUrl: action.payload
        }
          default:
            return state;
      }
  };
  