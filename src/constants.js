export const JITSI_CLIENT_INIT = 'JITSI_CLIENT_INIT';
export const JITSI_CLIENT_CREATED = 'JITSI_CLIENT_CREATED';
export const JITSI_CLIENT_CONNECTED = 'JITSI_CLIENT_CONNECTED';
export const JITSI_CLIENT_DISCONNECTED = 'JITSI_CLIENT_DISCONNECTED';
export const JITSI_CLIENT_ERROR = 'JITSI_CLIENT_ERROR';

export const RTC_ERROR = 'RTC_ERROR';

export const JITSI_CONFERENCE_JOINED = 'JITSI_CONFERENCE_JOINED';

export const REMOTE_TRACK_ADDED = 'REMOTE_TRACK_ADDED';
export const REMOTE_TRACK_REMOVED = 'REMOTE_TRACK_ADDED';

export const LOCAL_TRACKS_CHANGED = 'LOCAL_TRACKS_CHANGED';
export const LOCAL_STREAM_ENDED = 'LOCAL_STREAM_ENDED';

export const CHANGE_CAMERA_SOURCE = 'CHANGE_CAMERA_SOURCE';
export const CHANGE_MIC_SOURCE = 'CHANGE_MIC_SOURCE';
export const CHANGE_CAMERA_FACING_MODE = 'CHANGE_CAMERA_FACING_MODE';

export const TOGGLE_AUDIO_MUTED_STATE = 'TOGGLE_AUDIO_MUTED_STATE';
export const TOGGLE_VIDEO_MUTED_STATE = 'TOGGLE_VIDEO_MUTED_STATE';

export const PEER_JOINED = 'PEER_JOINED';
export const PEER_LEFT = 'PEER_LEFT';
export const PEER_CHANGED = 'PEER_CHANGED';
export const DOMINANT_SPEAKER_CHANGED = 'DOMINANT_SPEAKER_CHANGED';
export const MODERATOR_CHANGED = 'MODERATOR_CHANGED';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const MODERATOR_ADDED = 'MODERATOR_ADDED';
export const MODERATOR_REMOVED = 'MODERATOR_REMOVED';

export const LOCK_ROOM = 'LOCK_ROOM';
export const ROOM_LOCKED = 'ROOM_LOCKED';

export const START_YOUTUBE_SHARE = 'START_YOUTUBE_SHARE';
export const STOP_YOUTUBE_SHARE = 'STOP_YOUTUBE_SHARE';

export const START_SCREENSHARE = 'START_SCREENSHARE';
export const STOP_SCREENSHARE = 'STOP_SCREENSHARE';

export const USER_STATISTICS = 'USER_STATISTICS';
export const PARTICIPANT_STATISTICS = 'PARTICIPANT_STATISTICS';

export const MEDIA_CONNECTION_CHANGE = 'MEDIA_CONNECTION_CHANGE';
export const SELECT_MEDIA = 'SELECT_MEDIA';

// TODO: not sure if it's the best place to have it here. Probably we need to
// split action names and other constants
export const CAMERA_FACING_MODE = {
    ENVIRONMENT: 'environment',
    USER: 'user'
};
