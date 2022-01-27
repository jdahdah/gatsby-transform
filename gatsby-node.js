exports.onCreateNode = async ({ node, loadNodeContent }) => {
  if (node.name !== "example") return;

  // Ensure Gatsby loads the item into memory so that its
  // content becomes available in the GraphQL File node
  try {
    const nodeContent = await loadNodeContent(node);
    console.log(node);
  } catch (error) {
    console.error(error);
  }
};
