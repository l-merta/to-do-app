import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  OnConnectStartParams,
  Edge,
} from 'reactflow';

import Navbar from './../components/Navbar';
import TaskListNode from './../components/TaskListNode';
import BasicEdge from './../components/BasicEdge'

import 'reactflow/dist/style.css';

// Define initial nodes and edges
const initialNodes = [
  {
    id: '1',
    type: 'list',
    position: { x: 100, y: 100 },
    data: { label: 'Task Node 1', items: ['Task A'] },
  },
  {
    id: '2',
    type: 'list',
    position: { x: 400, y: 100 },
    data: { label: 'Task Node 2', items: ['Task X', 'Task Y', 'Task Z'] },
  },
];

// Initial edges setup
const initialEdges: Edge[] = [
  {
    id: 'e1-2',  // Edge ID
    source: '1',  // Source node ID
    target: '2',  // Target node ID
    sourceHandle: '1-item-0-source',  // Source handle ID
    targetHandle: '2-target',  // Target handle ID
  },
];

const nodeTypes = { list: TaskListNode };
const edgeTypes = { basic: BasicEdge };

const Task: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [draggingHandle, setDraggingHandle] = React.useState<string | null>(null);
  const [hoveredHandle, setHoveredHandle] = React.useState<string | null>(null);
  
  // Initialize connectedHandles with handles from initial edges, filtering out null and undefined
  const initialConnectedHandles = new Set(
    initialEdges
      .flatMap((edge) => [edge.sourceHandle, edge.targetHandle])
      .filter((handle): handle is string => typeof handle === 'string') // Ensure only strings are added
  );

  const [connectedHandles, setConnectedHandles] = React.useState<Set<string>>(initialConnectedHandles);

  const onConnectStart = (_: any, params: OnConnectStartParams) => {
    const { handleId } = params;
    if (handleId) {
      setDraggingHandle(handleId);
    }
  };

  const onConnectEnd = () => {
    setDraggingHandle(null);
  };

  const onConnect = (params: any) => {
    const { source, target, sourceHandle, targetHandle } = params;

    // Validate that the target handle is the main node's target handle
    if (!targetHandle || !targetHandle.endsWith('-target')) {
      console.warn('Connections must target a node’s target handle.');
      return;
    }

    // Prevent self-connections
    if (source === target) {
      console.warn('Self-connections are not allowed.');
      return;
    }

    // Prevent invalid connections (e.g., same source/target handle pairings)
    if (!sourceHandle || !targetHandle) {
      console.warn('Invalid connection handles.');
      return;
    }

    // Log successful connections for debugging
    console.log('Connected:', { source, target, sourceHandle, targetHandle });

    // Update edges with a new connection
    setEdges((eds) => addEdge(params, eds));

    // Update connectedHandles state with new connections
    setConnectedHandles((prev) => new Set(prev).add(sourceHandle).add(targetHandle));

    // Reset dragging handle after a successful connection
    setDraggingHandle(null);
  };

  return (
    <>
      <Navbar />
      <main className="main-task">
        <ReactFlow
          nodes={nodes.map((node) => ({
            ...node,
            data: {
              ...node.data,
              draggingHandle,
              hoveredHandle,
              connectedHandles,
              setHoveredHandle,
            },
          }))}
          edges={edges}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onConnectStart={onConnectStart}
          onConnectEnd={onConnectEnd}
          fitView
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </main>
    </>
  );
};

export default Task;
