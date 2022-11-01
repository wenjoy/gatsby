exports.onCreateNode = ({ node, getNode, actions }) => {
    console.log('node', node.internal.type);
  if(node.internal.type.toLowerCase() === 'mdx') {
    console.log('node', node);
  }
  // console.log('getNode', getNode);
}