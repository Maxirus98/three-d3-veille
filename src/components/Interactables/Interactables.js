import Obstacle from "./Obstacle";
import Reward from "./Reward";

export const Interactables = ({ isObstacle }) => {
  var randomPositions = getRandomPositions(100);
  return randomPositions.map((randomPosition, key) => {
    return isObstacle ? (
      <Obstacle position={randomPosition} key={key} />
    ) : (
      <Reward position={randomPosition} key={key} index={key} />
    );
  });
};

function getRandomPositions(numberOfObstacles) {
  const positions = [];
  for (let i = 0; i < numberOfObstacles; i++) {
    var randomX = Math.floor(Math.random() * 20) - 9;
    var randomZ = Math.floor(Math.random() * 5000) + 1;
    if (!positions.includes([randomX, 1, randomZ]))
      positions.push([randomX, 1, randomZ]);
  }
  return positions;
}

export default Interactables;
