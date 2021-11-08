import Obstacle from "./Obstacle";
import Reward from "./Reward";

export const Obstacles = () => {
  var randomPositions = getRandomPositions(100, 2.5);
  return randomPositions.map((randomPosition, key) => {
    return <Obstacle position={randomPosition} key={key} />;
  });
};

export const Rewards = () => {
  var randomPositions = getRandomPositions(100, 1);
  return randomPositions.map((randomPosition, key) => {
    return <Reward position={randomPosition} key={key} />;
  });
};

function getRandomPositions(numberOfObstacles, height) {
  const positions = [];
  for (let i = 0; i < numberOfObstacles; i++) {
    var randomX = Math.floor(Math.random() * 20) - 9;
    var randomZ = Math.floor(Math.random() * -5000) + 100;
    if (!positions.includes([randomX, height, randomZ]))
      positions.push([randomX, height, randomZ]);
  }

  return positions;
}
