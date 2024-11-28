import React, { useEffect } from 'react';
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
import BasicEdge from './../components/BasicEdge';

import 'reactflow/dist/style.css';

const nodeTypes = { list: TaskListNode };
const edgeTypes = { basic: BasicEdge };

const Task: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [draggingHandle, setDraggingHandle] = React.useState<string | null>(null);
  const [hoveredHandle, setHoveredHandle] = React.useState<string | null>(null);
  const [connectedHandles, setConnectedHandles] = React.useState<Set<string>>(new Set());

  // Fetch nodes and edges from JSON files
  useEffect(() => {
    const fetchData = async () => {
      try {
        const nodesResponse = await fetch('/test/nodes.json');
        const edgesResponse = await fetch('/test/edges.json');

        if (!nodesResponse.ok || !edgesResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const nodesData = await nodesResponse.json();
        const edgesData = await edgesResponse.json();

        setNodes(nodesData);
        setEdges(edgesData);

        // Initialize connectedHandles from fetched edges
        const initialHandles: any = new Set(
          edgesData
            .flatMap((edge: Edge) => [edge.sourceHandle, edge.targetHandle])
            .filter((handle: any): handle is string => typeof handle === 'string')
        );
        setConnectedHandles(initialHandles);
      } catch (error) {
        console.error('Error fetching nodes or edges:', error);
      }
    };

    fetchData();
  }, []); // Runs only once on mount

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

    // Prevent invalid connections
    if (!sourceHandle || !targetHandle) {
      console.warn('Invalid connection handles.');
      return;
    }

    // Log successful connections
    console.log('Connected:', { source, target, sourceHandle, targetHandle });

    // Update edges and connectedHandles
    setEdges((eds) => addEdge(params, eds));
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
