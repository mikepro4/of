import * as _ from "lodash";
import axios from "axios";

import {
  TRACK_LOAD,
  TRACK_PLAY,
  TRACK_PAUSE,
  TRACK_STOP,
  TRACK_SEEK,
  TRACK_PLAYING,
  VIDEO_LOAD,
  VIDEO_PLAY,
  VIDEO_PAUSE,
  VIDEO_STOP,
  VIDEO_SEEK,
  VIDEO_PLAYING,
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


export const updateHoverTime = (seconds) => async (dispatch, getState, api) => {
  console.log(seconds)
}

// =============================================================================

export const videoLoad = (videoDetails, duration) => async (dispatch, getState, api) => {
  dispatch({
    type: VIDEO_LOAD,
    payload: videoDetails,
    duration
  });
}

export const videoPlay = (videoDetails) => async (dispatch, getState, api) => {
  dispatch({
    type: VIDEO_PLAY,
    payload: videoDetails
  });
}

export const videoPause = (videoDetails) => async (dispatch, getState, api) => {
  dispatch({
    type: VIDEO_PAUSE,
    payload: videoDetails
  });
}

export const videoStop = (videoDetails) => async (dispatch, getState, api) => {
  dispatch({
    type: VIDEO_STOP,
    payload: videoDetails
  });
}

export const videoSeek = (seconds, videoDetails) => async (dispatch, getState, api) => {
  dispatch({
    type: VIDEO_SEEK,
    seekToSeconds: seconds,
    payload: videoDetails
  });
}

export const videoPlaying = (currentTime, duration, videoDetails) => async (dispatch, getState, api) => {
  dispatch({
    type: VIDEO_PLAYING,
    currentTime: currentTime,
    duration: duration,
    payload: videoDetails
  });
}
