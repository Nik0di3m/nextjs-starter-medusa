function parseChildNodes(nodes) {
  return nodes
    .map((node) => {
      if (node.type === "text") {
        return node.bold ? `<strong>${node.text}</strong>` : node.text
      } else if (node.type === "link") {
        return `<a href="${node.url}">${parseTextNodes(node.children)}</a>`
      }
      return ""
    })
    .join("")
}

function parseTextNodes(nodes) {
  return parseChildNodes(nodes)
}

function parseListItem(item) {
  return `<li>${parseTextNodes(item.children)}</li>`
}

// Parser
export function parseContent(content) {
  return content
    .map((node) => {
      switch (node.type) {
        case "heading":
          return `<h${node.level}>${parseTextNodes(node.children)}</h${
            node.level
          }>`
        case "paragraph":
          return `<p>${parseTextNodes(node.children)}</p>`
        case "list":
          const tag = node.format === "ordered" ? "ol" : "ul"
          return `<${tag}>${node.children.map(parseListItem).join("")}</${tag}>`
        case "image":
          return `<img src="${node.image.url.replace(
            "https://piw.nextlevellab.pl",
            "https://strapi.piw.pl"
          )}" alt="${node.image.alternativeText}" width="${
            node.image.width
          }" height="${node.image.height}" />`
        case "quote":
          return `<blockquote>${parseTextNodes(node.children)}</blockquote>`
        default:
          return ""
      }
    })
    .join("")
}
