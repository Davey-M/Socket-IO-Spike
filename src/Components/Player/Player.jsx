function Player({ main = false, x = 0, y = 0 }) {
  return (
    <>
      <div
        className={main ? 'player main' : 'player'}
        style={{
          marginLeft: x + 'px',
          marginTop: y + 'px',
          zIndex: main ? 2 : 1,
        }}
      ></div>
    </>
  );
}

export default Player;
