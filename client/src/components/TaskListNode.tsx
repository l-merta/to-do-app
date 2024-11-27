import { Handle, Position } from 'reactflow';

const TaskListNode = ({ data, id }: any) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
        backgroundColor: '#f5f5f5',
        position: 'relative',
      }}
    >
      {/* Single Target Handle for the entire node on the left of the label */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-target`}
        style={{
          top: '10px', // Positioned near the label
          left: '-10px', // Move handle to the left
          background: '#555',
          width: '10px',
          height: '10px',
        }}
      />

      <strong>{data.label}</strong>

      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {data.items.map((item: string, index: number) => (
          <li key={index} style={{ margin: '5px 0', position: 'relative' }}>
            {item}
            {/* Individual Source Handles for each list item */}
            <Handle
              type="source"
              position={Position.Right}
              id={`${id}-item-${index}-source`} // Unique source handle for each item
              style={{
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#555',
                width: '10px',
                height: '10px',
                right: '-10px',
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListNode;
