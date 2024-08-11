// import React, { useState, useEffect } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { FaSpinner } from 'react-icons/fa';

// const TaskBoard = () => {
//   const [columns, setColumns] = useState({
//     'not-started': { name: 'Not Started', items: [] },
//     'in-progress': { name: 'In Progress', items: [] },
//     'completed': { name: 'Completed', items: [] },
//   });
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.get('http://localhost:8080/api/tasks');
//       const tasks = response.data;
//       const newColumns = {
//         'not-started': { name: 'Not Started', items: [] },
//         'in-progress': { name: 'In Progress', items: [] },
//         'completed': { name: 'Completed', items: [] },
//       };
//       tasks.forEach(task => {
//         newColumns[task.status].items.push(task);
//       });
//       setColumns(newColumns);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//       toast.error('Failed to fetch tasks. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const onDragEnd = async (result, columns, setColumns) => {
//     if (!result.destination) return;
//     const { source, destination } = result;

//     if (source.droppableId !== destination.droppableId) {
//       const sourceColumn = columns[source.droppableId];
//       const destColumn = columns[destination.droppableId];
//       const sourceItems = [...sourceColumn.items];
//       const destItems = [...destColumn.items];
//       const [removed] = sourceItems.splice(source.index, 1);
//       destItems.splice(destination.index, 0, removed);
//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...sourceColumn,
//           items: sourceItems
//         },
//         [destination.droppableId]: {
//           ...destColumn,
//           items: destItems
//         }
//       });

//       // Update task status in the backend
//       try {
//         await axios.patch(`http://localhost:8080/api/tasks/${removed.id}`, {
//           status: destination.droppableId
//         });
//         toast.success('Task status updated successfully');
//       } catch (error) {
//         console.error('Error updating task status:', error);
//         toast.error('Failed to update task status. Please try again.');
//         // Revert the change in the UI
//         fetchTasks();
//       }
//     } else {
//       const column = columns[source.droppableId];
//       const copiedItems = [...column.items];
//       const [removed] = copiedItems.splice(source.index, 1);
//       copiedItems.splice(destination.index, 0, removed);
//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...column,
//           items: copiedItems
//         }
//       });
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <FaSpinner className="animate-spin text-4xl text-indigo-600" />
//       </div>
//     );
//   }

//   return (
//     <div className="flex space-x-4">
//       <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
//         {Object.entries(columns).map(([columnId, column]) => (
//           <div key={columnId} className="flex flex-col w-1/3">
//             <h2 className="font-bold text-lg mb-4">{column.name}</h2>
//             <div className="flex-1">
//               <Droppable droppableId={columnId}>
//                 {(provided, snapshot) => (
//                   <div
//                     {...provided.droppableProps}
//                     ref={provided.innerRef}
//                     className={`min-h-[500px] p-4 rounded-lg ${
//                       snapshot.isDraggingOver ? 'bg-indigo-100' : 'bg-gray-100'
//                     }`}
//                   >
//                     {column.items.map((item, index) => (
//                       <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
//                         {(provided, snapshot) => (
//                           <div
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             className={`p-4 mb-4 rounded-lg shadow-md ${
//                               snapshot.isDragging ? 'bg-white opacity-75' : 'bg-white'
//                             }`}
//                           >
//                             <h3 className="font-semibold">{item.title}</h3>
//                             <p className="text-sm text-gray-600">{item.description}</p>
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//             </div>
//           </div>
//         ))}
//       </DragDropContext>
//     </div>
//   );
// };

// export default TaskBoard;

// import React, { useState, useEffect } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { FaSpinner } from 'react-icons/fa';

// const TaskBoard = ({ tasks, onTaskUpdate }) => {
//   const [columns, setColumns] = useState({
//     'not-started': { name: 'Not Started', items: [] },
//     'in-progress': { name: 'In Progress', items: [] },
//     'completed': { name: 'Completed', items: [] },
//   });

//   useEffect(() => {
//     organizeTasks(tasks);
//   }, [tasks]);

//   const organizeTasks = (tasks) => {
//     const newColumns = {
//       'not-started': { name: 'Not Started', items: [] },
//       'in-progress': { name: 'In Progress', items: [] },
//       'completed': { name: 'Completed', items: [] },
//     };
//     tasks.forEach(task => {
//       newColumns[task.status].items.push(task);
//     });
//     setColumns(newColumns);
//   };

//   const onDragEnd = async (result, columns, setColumns) => {
//     if (!result.destination) return;
//     const { source, destination } = result;

//     if (source.droppableId !== destination.droppableId) {
//       const sourceColumn = columns[source.droppableId];
//       const destColumn = columns[destination.droppableId];
//       const sourceItems = [...sourceColumn.items];
//       const destItems = [...destColumn.items];
//       const [removed] = sourceItems.splice(source.index, 1);
//       destItems.splice(destination.index, 0, removed);
//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...sourceColumn,
//           items: sourceItems
//         },
//         [destination.droppableId]: {
//           ...destColumn,
//           items: destItems
//         }
//       });

//       // Update task status in the backend
//       try {
//         await axios.patch(`http://localhost:8080/api/tasks/${removed.id}`, {
//           status: destination.droppableId
//         });
//         toast.success('Task status updated successfully');
//         onTaskUpdate(); // Call the callback to refresh tasks in the parent component
//       } catch (error) {
//         console.error('Error updating task status:', error);
//         toast.error('Failed to update task status. Please try again.');
//         // Revert the change in the UI
//         organizeTasks(tasks);
//       }
//     } else {
//       const column = columns[source.droppableId];
//       const copiedItems = [...column.items];
//       const [removed] = copiedItems.splice(source.index, 1);
//       copiedItems.splice(destination.index, 0, removed);
//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...column,
//           items: copiedItems
//         }
//       });
//     }
//   };

//   return (
//     <div className="flex space-x-4">
//       <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
//         {Object.entries(columns).map(([columnId, column]) => (
//           <div key={columnId} className="flex flex-col w-1/3">
//             <h2 className="font-bold text-lg mb-4">{column.name}</h2>
//             <div className="flex-1">
//               <Droppable droppableId={columnId}>
//                 {(provided, snapshot) => (
//                   <div
//                     {...provided.droppableProps}
//                     ref={provided.innerRef}
//                     className={`min-h-[500px] p-4 rounded-lg ${
//                       snapshot.isDraggingOver ? 'bg-indigo-100' : 'bg-gray-100'
//                     }`}
//                   >
//                     {column.items.map((item, index) => (
//                       <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
//                         {(provided, snapshot) => (
//                           <div
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             className={`p-4 mb-4 rounded-lg shadow-md ${
//                               snapshot.isDragging ? 'bg-white opacity-75' : 'bg-white'
//                             }`}
//                           >
//                             <h3 className="font-semibold">{item.title}</h3>
//                             <p className="text-sm text-gray-600">{item.description}</p>
//                             <div className="mt-2 flex justify-between items-center">
//                               <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                                 item.priority === 'high' ? 'bg-red-100 text-red-800' :
//                                 item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
//                                 'bg-green-100 text-green-800'
//                               }`}>
//                                 {item.priority}
//                               </span>
//                               <span className="text-xs text-gray-500">
//                                 Due: {new Date(item.dueDate).toLocaleDateString()}
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//             </div>
//           </div>
//         ))}
//       </DragDropContext>
//     </div>
//   );
// };

// export default TaskBoard;

import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { toast } from 'react-hot-toast';
import { updateTaskStatus } from '../../services/api';

const TaskBoard = ({ tasks, onTaskUpdate }) => {
  const [columns, setColumns] = useState({
    'not-started': { name: 'Not Started', items: [] },
    'in-progress': { name: 'In Progress', items: [] },
    'completed': { name: 'Completed', items: [] },
  });

  useEffect(() => {
    organizeTasks(tasks);
  }, [tasks]);

  const organizeTasks = (tasks) => {
    const newColumns = {
      'not-started': { name: 'Not Started', items: [] },
      'in-progress': { name: 'In Progress', items: [] },
      'completed': { name: 'Completed', items: [] },
    };
    tasks.forEach(task => {
      newColumns[task.status].items.push(task);
    });
    setColumns(newColumns);
  };

  const onDragEnd = async (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });

      // Update task status in the backend
      try {
        await updateTaskStatus(removed.id, destination.droppableId);
        toast.success('Task status updated successfully');
        onTaskUpdate(); // Call the callback to refresh tasks in the parent component
      } catch (error) {
        console.error('Error updating task status:', error);
        toast.error('Failed to update task status. Please try again.');
        // Revert the change in the UI
        organizeTasks(tasks);
      }
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  return (
    <div className="flex space-x-4">
      <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([columnId, column]) => (
          <div key={columnId} className="flex flex-col w-1/3">
            <h2 className="font-bold text-lg mb-4">{column.name}</h2>
            <div className="flex-1">
              <Droppable droppableId={columnId}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`min-h-[500px] p-4 rounded-lg ${
                      snapshot.isDraggingOver ? 'bg-indigo-100' : 'bg-gray-100'
                    }`}
                  >
                    {column.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`p-4 mb-4 rounded-lg shadow-md ${
                              snapshot.isDragging ? 'bg-white opacity-75' : 'bg-white'
                            }`}
                          >
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <div className="mt-2 flex justify-between items-center">
                              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                item.priority === 'high' ? 'bg-red-100 text-red-800' :
                                item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {item.priority}
                              </span>
                              <span className="text-xs text-gray-500">
                                Due: {new Date(item.dueDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
};

export default TaskBoard;