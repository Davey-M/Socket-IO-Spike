function Player({ main = false, x = 0, y = 0 }) {
  return (
    <>
      <div
        className={main ? 'player main' : 'player'}
        style={{ left: x, top: y }}
      ></div>
    </>
  );
}

export default Player;
