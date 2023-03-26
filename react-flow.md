# react flow

## Terminology
`nodes` - the draggable container
`handles` - the connection point between the node and the edge
`edges` - the line connecting handle to handle
`connection line` - while creating a new edge, the placeholder edge is called a connection line

## Concepts
- all node and edges need a unique id
- a node needs a `position` and a `label`
- an edge needs a `source (node id)` and a `target (node id)`

## Nodes  
Nodes are objects with many properties:

### id
`id` - each node needs an id to be used to attach edges
`type` - `input`| `output`| `default`(default) | `group` | `custom`
`input` - has only a source handle
`output` - has only a target handle
`default` - has both source & target
`group` ?

## Edges
Edges is the term for the line connecting two nodes from handle to handle.  To make an edge, we need to specify two attributes: the source node (where the edge begins) and the target node (where the edge ends). We use the id of the two nodes to specify this (in our example, our two nodes have ids of "1" and "2"):

Properties:
### id
### source
### target
### label
### type
`type: bezier(default) | straight | step | smoothstep | simplebezier`

## custom nodes
a custom node is a react component that is wrapped to provide functionality like selecting and dragging.

the wrapper component sends props like position or other data.

### create

    import { Handle, Position } from 'reactflow';
    const handleStyle = { left: 10 };

    return (
        <>
          <Handle type="target" position={Position.Top} />
          <div>
            <label htmlFor="text">Text:</label>
            <input id="text" name="text" onChange={onChange} className="nodrag" />
          </div>
          <Handle type="source" position={Position.Bottom} id="a" />
          <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
        </>
      );

### add to react flow
You can add a new node type to React Flow by adding it to the nodeTypes prop. *It's important that the nodeTypes are memoized or defined outside of the component*
