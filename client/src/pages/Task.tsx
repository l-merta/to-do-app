//import { Link } from "react-router-dom";
import ReactFlow, {
  Background,
  Controls,
  //MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import Navbar from './../components/Navbar';
import TaskListNode from './../components/TaskListNode'; // Import the custom node

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
const initialEdges = [
  { id: '', source: '', target: '' }
];

const nodeTypes = { list: TaskListNode }; // Register the custom node

const Task:React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
  
    setEdges((eds) => addEdge(params, eds));
    //setEdges((eds) => addEdge({ ...params, type: 'bezier' }, eds));
  };  

  const onNodeClick = (event: React.MouseEvent, node: any) => {
    //setNodes((nds) => nds.filter((n) => n.id !== node.id)); // Delete clicked node
  };
  

  return (
    <>
    <Navbar />
    <main className="main-task">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
        nodeTypes={nodeTypes} // Register the custom node types here
      >
        <Background />
        <Controls />
      </ReactFlow>
    </main>
    </>
  );
}

export default Task
