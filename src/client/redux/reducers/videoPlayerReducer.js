import {
    VIDEO_LOAD,
    VIDEO_PLAY,
    VIDEO_PAUSE,
    VIDEO_STOP,
    VIDEO_SEEK,
    VIDEO_PLAYING,
  } from "../actions/types";
  
  export const initialState = {
    loading: false,
    videoDetails: {},
    status: "stop",
    duration: 0,
    currentTime: 0,
    seekToSeconds: null,
  };
  
  export const videoPlayerReducer = (state = initialState, action) => {
      switch (action.type) {
      case VIDEO_LOAD:
        return {
            ...state,
            videoDetails: action.payload,
            seekToSeconds: null,
            duration: action.duration
        }
      case VIDEO_PLAY:
        return {
            ...state,
            status: "play",
            seekToSeconds: null,
            videoDetails: action.payload,
            duration: action.duration
        }
      case VIDEO_PAUSE:
        return {
            ...state,
            status: "pause",
            seekToSeconds: null,
            videoDetails: action.payload,
        }
      case VIDEO_STOP:
        return {
            ...state,
            status: "stop",
            seekToSeconds: null,
            videoDetails: action.payload
        }
      case VIDEO_SEEK:
        return {
            ...state,
            status: "play",
            seekToSeconds: action.seekToSeconds,
            videoDetails: action.payload
        }
      case VIDEO_PLAYING:
        return {
            ...state,
            seekToSeconds: null,
            currentTime: action.currentTime,
            videoDetails: action.payload,
            duration: action.duration
        }
          default:
            return state;
      }
  };
  