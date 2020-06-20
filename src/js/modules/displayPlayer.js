function displayPlayer() {
  console.log(`//////// ${state.playerName} VS Kodiak Island \\\\\\\\\\\\\\\\`);
  console.log(
    `Energy: ${state.energy} ${!state.skills[0] ? '' : '| Skills: '} ${
      state.diseases
    } ${!state.equipment[0] ? '' : '| Equipment: '} ${state.equipment} ${
      !state.diseases[0] ? '' : '| Diseases: '
    } ${state.diseases}`
  );
}

export default displayPlayer;
