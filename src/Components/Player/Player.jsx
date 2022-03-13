function Player({ main = false }) {
  return (
    <>
      <div className={main ? 'player main' : 'player'}></div>
    </>
  );
}

export default Player;
