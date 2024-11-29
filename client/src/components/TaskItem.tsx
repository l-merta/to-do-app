//import React from 'react'
import { Handle, Position } from 'reactflow';

const TaskItem = ({ data, item, index, id }: any) => {
    const { draggingHandle, hoveredHandle, connectedHandles, setHoveredHandle } = data;
    const isHandleActive = (handleId: string) => {
        return (
          draggingHandle === handleId ||
          hoveredHandle === handleId ||
          connectedHandles.has(handleId)  // Check if handle is connected
        );
      }; 

    return (
        <li key={index} className="task">
            <input type="checkbox" defaultChecked={item.completed} name="" id="" />
            <span className="task-label">{item.label}</span>
            <Handle
                className={`handle handle-source handle-right ${
                    isHandleActive(`${id}-item-${index}-source`) ? 'handle-dragging' : ''
                }`}
                type="source"
                position={Position.Right}
                id={`${id}-item-${index}-source`}
                onMouseEnter={() => setHoveredHandle(`${id}-item-${index}-source`)}
                onMouseLeave={() => setHoveredHandle(null)}
            />
        </li>
    )
}

export default TaskItem
