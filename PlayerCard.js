import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
  const {
    tag,
    name,
    clan,
    trophies,
    bestTrophies,
    leagueRank,
    attacks,
    defenses,
  } = player;

  return (
    <div className="player-card">
      <div className="header">
        <h2>{name}</h2>
        <span className="player-tag">{tag}</span>
      </div>
      <div className="clan-name">Clan: {clan}</div>
      <div className="stats">
        <div className="stat-item">
          <label>Trophies:</label>
          <span>{trophies}</span>
        </div>
        <div className="stat-item">
          <label>Best Trophies:</label>
          <span>{bestTrophies}</span>
        </div>
        <div className="stat-item">
          <label>Legend Rank:</label>
          <span>#{leagueRank}</span>
        </div>
        <div className="stat-item attacks">
          <label>Attacks:</label>
          <span>{attacks}</span>
        </div>
        <div className="stat-item defenses">
          <label>Defenses:</label>
          <span>{defenses}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard; // Ensure default export