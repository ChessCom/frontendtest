<template>
    <div class="player-info">
      <img :src="player.avatar" alt="player's avatar" class="player-avatar" />
      <div class="player-details">
        <div class="player-name">{{ player.name }}</div>
        <div class="player-rating">{{ player.rating }} ({{ player.title }})</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PlayerInfo",
    props: {
      player: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .player-info {
    display: flex;
    align-items: center;
    background-color: #818589;
    padding: 8px;
    border-radius: 4px;
    max-width: 600px;
  }
  
  .player-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }
  
  .player-details {
    flex-grow: 1;
  }
  
  .player-name {
    font-weight: bold;
  }
  
  .player-rating {
    color: #020202;
    font-size: 0.9em;
  }
  
  .player-flag img{
    width: 20px;
  }
  </style>