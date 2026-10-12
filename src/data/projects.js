export const projects = [
  {
    title: 'SkySense: Multi-Sensor Drone Detection System',
    badge: '3rd / 19 teams',
    description:
      'Real-time drone detection system fusing a custom YOLOv8 Nano model (99.5% mAP, 100% recall) with 60GHz radar, deployed on an NVIDIA Jetson Orin Nano via TensorRT at 21 FPS. Built the ML pipeline and a live Flask/ROS2 mission control dashboard.',
    tech: ['Python', 'PyTorch', 'YOLOv8', 'TensorRT', 'Flask', 'ROS2'],
    link: 'https://github.com/ishaandesai0/Skysense',
  },
  {
    title: 'Parallel Monte Carlo Options Pricing',
    description:
      'Monte Carlo European options pricer across Serial C++, OpenMP, and CUDA, benchmarked on an NVIDIA Tesla P100. Achieved 6.4x speedup via OpenMP and diagnosed a cuRAND bottleneck limiting CUDA gains, validated against Black-Scholes to within $0.01.',
    tech: ['C++', 'CUDA', 'OpenMP'],
    link: 'https://github.com/ishaandesai0/monteCarloOptions',
  },
  {
    title: 'Panoramic Scene Reconstruction with Object Detection & Tracking',
    badge: 'Team project',
    description:
      '3-stage computer vision pipeline stitching video into panoramas (SIFT + RANSAC), with YOLOv8n-seg detection and ByteTrack multi-object tracking rendering color-coded activity maps. Co-built with a teammate.',
    tech: ['Python', 'OpenCV', 'YOLOv8', 'ByteTrack'],
  },
  {
    title: 'Swarm Robotics for Mapping & Task Planning',
    badge: 'Contributor',
    description:
      'Multi-agent swarm robotics system in C++ performing autonomous environment exploration via graph-based DFS/BFS traversal with backtracking. Optimized node traversal using STL vectors and stacks for O(N+E) complete graph exploration, with a modular controller architecture coordinating multiple robots for object retrieval and path planning.',
    tech: ['C++', 'STL'],
    link: 'https://github.com/jackgladowsky/swarm_robots',
    linkLabel: 'View repo (contributor)',
  },
];

export const inProgress = [
  {
    title: 'FPL Optimization Pipeline',
    description:
      'End-to-end Fantasy Premier League decision system: Poisson-based team ratings feeding per-player expected-points projections, with a MILP optimizer solving weekly squad/transfer decisions. Includes a backtesting module to score projections against actual results each week.',
    tech: ['Python', 'MILP optimization', 'Poisson modeling'],
  },
  {
    title: 'NFL Survivor Pool Win-Probability Model',
    description:
      'Building a win-probability model for a 200-entrant NFL survivor pool, combining Vegas betting lines with a machine learning layer rather than relying on a published probability grid.',
    tech: ['Python', 'ML', 'Sports modeling'],
  },
];
