import * as _ from "lodash";
import axios from "axios";

import {
  TRACK_LOAD,
  TRACK_PLAY,
  TRACK_PAUSE,
  TRACK_STOP,
  TRACK_SEEK,
  TRACK_PLAYING,
  SET_ANALYSER
} from "./types";

// =============================================================================

export const trackLoad = (soundUrl) => async (dispatch, getState, api) => {
  dispatch({
    type: TRACK_LOAD,
    payload: soundUrl
  });
}

export const trackPlay = (soundUrl) => async (dispatch, getState, api) => {
  dispatch({
    type: TRACK_PLAY,
    payload: soundUrl
  });
}

export const trackPause = (soundUrl) => async (dispatch, getState, api) => {
  dispatch({
    type: TRACK_PAUSE,
    payload: soundUrl
  });
}

export const trackStop = (soundUrl) => async (dispatch, getState, api) => {
  dispatch({
    type: TRACK_STOP,
    payload: soundUrl
  });
}

export const trackSeek = (seconds, soundUrl) => async (dispatch, getState, api) => {
  dispatch({
    type: TRACK_SEEK,
    seekToSeconds: seconds,
    payload: soundUrl
  });
}

export const trackPlaying = (currentTime, soundUrl) => async (dispatch, getState, api) => {
  dispatch({
    type: TRACK_PLAYING,
    currentTime: currentTime,
    payload: soundUrl
  });
}

export const setAnalyser = (analyser) => async (dispatch, getState, api) => {
  dispatch({
    type: SET_ANALYSER,
    payload: analyser
  });
}
