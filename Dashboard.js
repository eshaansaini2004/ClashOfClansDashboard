import React, { useState } from 'react';
import './Dashboard.css';
import PlayerCard from './PlayerCard';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);


  const players = [
    {
      tag: '#43FKSDJ3',
      name: 'Chief Sam',
      clan: 'Legends Only',
      trophies: 5800,
      bestTrophies: 6000,
      leagueRank: 120,
      attacks: 8,
      defenses: 3,
    },
    {
      tag: '#AKLSFJ903',
      name: 'Queen Lucy',
      clan: 'Dragon Warriors',
      trophies: 6100,
      bestTrophies: 6500,
      leagueRank: 98,
      attacks: 10,
      defenses: 2,
    },
    {
      tag: '#DFJK0924',
      name: 'Warden Lee',
      clan: 'Night Watch',
      trophies: 5750,
      bestTrophies: 5900,
      leagueRank: 160,
      attacks: 6,
      defenses: 4,
    },
    {
      tag: '#DKF23EKL',
      name: 'Barbarian Max',
      clan: 'Fury Clan',
      trophies: 5900,
      bestTrophies: 6100,
      leagueRank: 110,
      attacks: 7,
      defenses: 5,
    },
    {
      tag: '#32JMFLKR',
      name: 'Archer Lily',
      clan: 'Arrow Masters',
      trophies: 6200,
      bestTrophies: 6400,
      leagueRank: 85,
      attacks: 12,
      defenses: 3,
    },
    {
      tag: '#43KFLKMD',
      name: 'Giant Hank',
      clan: 'Heavy Hitters',
      trophies: 5400,
      bestTrophies: 5600,
      leagueRank: 200,
      attacks: 4,
      defenses: 6,
    },
    {
      tag: '#23KLMEDK',
      name: 'Wizard Theo',
      clan: 'Magic Circle',
      trophies: 6050,
      bestTrophies: 6300,
      leagueRank: 95,
      attacks: 9,
      defenses: 2,
    },
    {
      tag: '#VWX987',
      name: 'Dragon Zara',
      clan: 'Flame Riders',
      trophies: 6300,
      bestTrophies: 6550,
      leagueRank: 75,
      attacks: 14,
      defenses: 4,
    },
    {
      tag: '#YZA654',
      name: 'Miner Jake',
      clan: 'Underground Force',
      trophies: 5600,
      bestTrophies: 5800,
      leagueRank: 180,
      attacks: 5,
      defenses: 7,
    },
    {
      tag: '#BCD789',
      name: 'Pekka Knight',
      clan: 'Steel Warriors',
      trophies: 6700,
      bestTrophies: 6800,
      leagueRank: 50,
      attacks: 15,
      defenses: 6,
    },
    {
      tag: '#EFG321',
      name: 'Goblin Ben',
      clan: 'Treasure Seekers',
      trophies: 5200,
      bestTrophies: 5400,
      leagueRank: 230,
      attacks: 3,
      defenses: 8,
    },
    {
      tag: '#HIJ987',
      name: 'Queen Rose',
      clan: 'Royal Clashers',
      trophies: 6500,
      bestTrophies: 6700,
      leagueRank: 70,
      attacks: 12,
      defenses: 5,
    },
    {
      tag: '#KLM654',
      name: 'Hog Rider Bob',
      clan: 'Charge Masters',
      trophies: 6100,
      bestTrophies: 6250,
      leagueRank: 105,
      attacks: 9,
      defenses: 4,
    },
    {
      tag: '#NOP987',
      name: 'Electro Emma',
      clan: 'Shock Squad',
      trophies: 6450,
      bestTrophies: 6600,
      leagueRank: 80,
      attacks: 13,
      defenses: 2,
    },
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredPlayers([]);
      return;
    }

    // Filter players by tag
    const matches = players.filter((player) =>
      player.tag.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlayers(matches);
  };

  return (
    <div className="dashboard">
      <h1>Legend League Dashboard</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Player Tag (e.g., #ABC123)"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Player List */}
      <div className="player-list">
        {(filteredPlayers.length > 0 ? filteredPlayers : players).map((player) => (
          <PlayerCard key={player.tag} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;