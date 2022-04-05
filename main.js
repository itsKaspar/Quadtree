// Maths
const Maths = require('./js/maths/Maths.js'); // import from other files
// Geometry
const Point = require('./js/geometry/Point.js')
const Rectangle = require('./js/geometry/Rectangle.js'); // import from other files
const Circle = require('./js/geometry/Circle.js');
// Quadtree
const Quadtree = require('./js/quadtree/Quadtree.js');
// Particle System
const Particle = require('./js/particlesystem/Particle.js')
const ParticleSystem = require('./js/particlesystem/ParticleSystem.js')
const ParticleData = require('./js/particlesystem/ParticleData.js')
// Autonomous Agents
const Agent = require('./js/autonomousagents/Agent.js')
const AgentSystem = require('./js/autonomousagents/AgentSystem.js')
// Chain System
const ChainSystem = require('./js/chainsystem/ChainSystem.js');
const ChainNode = require('./js/chainsystem/ChainNode.js');
// Morphogenesis
// - Differential Growth
const DifferentialLine = require('./js/morphogenesis/differentialgrowth/DifferentialLine.js');
const DifferentialNode = require('./js/morphogenesis/differentialgrowth/DifferentialNode.js');

const modules = {
  Maths,
  Point, Rectangle, Circle,
  Quadtree,
  Particle, ParticleSystem, ParticleData,
  Agent, AgentSystem,
  ChainSystem, ChainNode,
  DifferentialLine, DifferentialNode
}

if(typeof window !== 'undefined') window.tilde = modules; // would change Q to the name of the library
else module.exports = modules; // in node would create a context
