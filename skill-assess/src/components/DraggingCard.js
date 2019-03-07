// Let's make <Card text='Write the docs' /> draggable!

import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './Constants';

const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function Card({ isDragging, connectDragSource, text }) {
  return connectDragSource(
    <div style={{ opacity: isDragging ? 0.5 : 1 }}>
      {text}
    </div>
  );
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);