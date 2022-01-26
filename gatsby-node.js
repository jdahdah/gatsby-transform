exports.onCreateNode = async ({ node, loadNodeContent }) => {
  if (node.name !== "example") return;

  try {
    const nodeContent = await loadNodeContent(node);
    console.log(node);
  } catch (error) {
    console.error(error);
  }
};
