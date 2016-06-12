/**
 * This is an action type
 */
export const SAVE_COUNT = 'SAVE_COUNT';

/**
 * This is an action creator
 */
export function saveCount(count) {

    // This is an action
    return {
        type: SAVE_COUNT,
        count
    };
}
