function displayPlayer() {
  console.log(
    `//////// ${state.player.name} VS Kodiak Island \\\\\\\\\\\\\\\\`
  );
  console.log(
    `Energy: ${state.player.energy} ${
      !state.player.skills[0] ? '' : '| Skills: '
    } ${state.player.diseases} ${
      !state.player.equipment[0] ? '' : '| Equipment: '
    } ${state.player.equipment} ${
      !state.player.diseases[0] ? '' : '| Diseases: '
    } ${state.player.diseases}`
  );
}
