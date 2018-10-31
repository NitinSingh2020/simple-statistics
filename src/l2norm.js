/* @flow */

function l2norm (
    data /*: Array<number> */
) /*: number */ {
    if (!Array.isArray(data) || data.length < 1) {
        throw Error('Value must be non-empty array');
    }

    let total = 0;
    let i;
    for (i = 0; i < data.length; i++) {
        total += data[i] * data[i];
    }

    return Math.sqrt(total);
};

export default l2norm;
