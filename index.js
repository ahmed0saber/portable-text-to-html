const portableText = [
    {
        "markDefs": [],
        "children": [
            {
                "_type": "span",
                "marks": [
                    "em"
                ],
                "text": "Big Title",
                "_key": "1be5ff0ab645"
            }
        ],
        "_type": "block",
        "style": "h1",
        "_key": "6fcec3b7603a"
    },
    {
        "_key": "e91930d7686a",
        "markDefs": [],
        "children": [
            {
                "_type": "span",
                "marks": [],
                "text": "Hello from ",
                "_key": "b23ce726a2f5"
            },
            {
                "_key": "94f4795c974e",
                "_type": "span",
                "marks": [
                    "strong"
                ],
                "text": "GitHub student package"
            },
            {
                "text": " article!",
                "_key": "181672cf487c",
                "_type": "span",
                "marks": []
            }
        ],
        "_type": "block",
        "style": "normal"
    }
]

const getTagName = (style) => {
    const tagNames = {
        "normal": "p"
    }

    return tagNames[style] || style
}

const toFormattedElement = (child) => {
    let html = `<${child._type}>`

    for (let i = 0; i < child.marks.length; i++) {
        html += `<${child.marks[i]}>`
    }

    html += child.text

    for (let i = child.marks.length - 1; i >= 0; i--) {
        html += `</${child.marks[i]}>`
    }

    html += `</${child._type}>`

    return html
}

function toHTML(blocks = []) {
    return blocks
        .map(block => {
            if (block._type !== 'block' || !block.children) {
                return ''
            }

            let html = `<${getTagName(block.style)}>`
            html += block.children.map(child => toFormattedElement(child)).join('')
            html += `</${getTagName(block.style)}>`

            return html
        })
        .join('')
}

const html = toHTML(portableText)
console.log({ html })
