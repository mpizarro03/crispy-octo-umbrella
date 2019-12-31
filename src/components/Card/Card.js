import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function InfoDisplayCard({ series }) {
  const { seriesTitle, seriesHeroArt, episodeList } = series;

  return (
    <div className="card">
      <img alt="series art" src={seriesHeroArt} />
      <div className="card__body">
        <div className="card__title">{seriesTitle}</div>
        <div className="card__list">
          <div className="card__list-title"> Episodes List:</div>
          {episodeList &&
            episodeList.map(episode => {
              const { episodeId, episodeTitle, episodeNumber } = episode;

              return (
                <div className="card__episodes" key={episodeId}>
                  <div className="card__episode-data">
                    {episodeNumber}. {episodeTitle}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

InfoDisplayCard.defaultProps = {
  imageURL: "",
  episodeList: []
};

InfoDisplayCard.propTypes = {
  className: PropTypes.string,
  imageAlt: PropTypes.string,
  imageURL: PropTypes.string
};

export default React.memo(InfoDisplayCard);
