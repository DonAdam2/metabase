const markdownInput = {
    tag: "document",
    content: [
        {
            tag: "heading",
            content: [
                "Header"
            ]
        },
        {
            tag: "paragraph",
            content: [
                "This is some normal text. Here is some ",
                {
                    tag: "bold",
                    content: [
                        "bold text"
                    ]
                },
                " and some ",
                {
                    tag: "italic",
                    content: [
                        "italic text"
                    ]
                },
                "."
            ]
        },
        {
            tag: "paragraph",
            content: [
                "This is a separate paragraph."
            ]
        }
    ]
};

let output = '';
const createMarkdown = ({content, tag}) => {
    content.forEach((el, i, arr) => {
        if(typeof el === 'string') {
            const isLastElement = i === arr.length -1;
            switch (tag) {
                case 'paragraph':
                    output = `${output}${el}${isLastElement ? '\n\n' :''}`;
                    break;
                case 'heading':
                    output = `${output}*${el}*${isLastElement ? '\n' :''}`;
                    break;
                case 'bold':
                    output = `${output}*${el}*`;
                    break;
                case 'italic':
                    output = `${output}_${el}_`;
                    break;
                default:
                    output = `${output}`;
                    break;
            }
        } else {
            createMarkdown(el);
        }
    })

    return output;
}

console.log(createMarkdown(markdownInput));