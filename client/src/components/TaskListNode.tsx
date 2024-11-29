import { Handle, Position } from 'reactflow';

import TaskItem from './TaskItem';

interface TaskItemProps {
  label: string;
  completed: boolean;
}

const TaskListNode = ({ data, id }: any) => {
  const { draggingHandle, hoveredHandle, connectedHandles, setHoveredHandle } = data;

  const isHandleActive = (handleId: string) => {
    return (
      draggingHandle === handleId ||
      hoveredHandle === handleId ||
      connectedHandles.has(handleId)  // Check if handle is connected
    );
  };  

  return (
    <div className="task-list">
      <div className="label">
        <Handle
          className={`handle handle-target handle-left ${
            isHandleActive(`${id}-target`) ? 'handle-dragging' : ''
          }`}
          type="target"
          position={Position.Left}
          id={`${id}-target`}
          onMouseEnter={() => setHoveredHandle(`${id}-target`)}
          onMouseLeave={() => setHoveredHandle(null)}
        />
        <span className="list-label">{data.label}</span>
      </div>
      <div className="list">
        <ul className="count-cont">
          {data.items.map((item: TaskItemProps, index: number) => (
            <li key={index} className="count">
              <span className="task-count">{index + 1}.</span>
            </li>
          ))}
        </ul>
        <ul className="tasks-cont">
          {data.items.map((item: TaskItemProps, index: number) => (
            <TaskItem data={data} item={item} index={index} id={id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskListNode;
