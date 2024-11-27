import { Handle, Position } from 'reactflow';

const TaskListNode = ({ data, id }: any) => {
  return (
    <div className="task-list">
      <div className="label">
        <Handle
          className="handle handle-target handle-left"
          type="target"
          position={Position.Left}
          id={`${id}-target`}
        />
        <span className="list-label">{data.label}</span>
      </div>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {data.items.map((item: string, index: number) => (
          <li key={index} style={{ margin: '5px 0', position: 'relative' }}>
            {item}
            <Handle
              className="handle handle-source handle-right"
              type="source"
              position={Position.Right}
              id={`${id}-item-${index}-source`} // Unique source handle for each item
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListNode;
