import React, { useState } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const menuList = [
    {
      id: "dashboard",
      name: "Dashboard",
      links: '/'
    },
    {
      id: "customers",
      name: "Customers",
      links: '/customers'
    },
    {
      id: "tasks",
      name: "Tasks",
      links: '/'
    },
    {
      id: "orders",
      name: "Orders",
      links: '/'
    }
];

  const Menus = () => {
    const [characters, updateCharacters] = useState(menuList);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
    }
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
                {/* <ul>
                    <li>
                        <NavLink to='/customers'>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Customers</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Orders</NavLink>
                    </li>
                </ul> */}
                {(provided) => (
                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                        {characters.map(({id, name, links}, index) => {
                        return (
                            <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <NavLink to={links}>{ name }</NavLink>
                                </li>
                            )}
                            </Draggable>
                        );
                        })}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Menus;