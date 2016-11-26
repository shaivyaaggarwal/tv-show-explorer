const padZeroes = function padZeroes(num, pad) {
    return num.length === pad ? num : padZeroes(`0${num}`, pad);
};

const episodeNumber = () => (
    (episode) => (`S${padZeroes(episode.Season, 2)}E${padZeroes(episode.Episode, 2)}`)
);

export default episodeNumber;
