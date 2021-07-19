import ReactMarkdown from 'react-markdown'

const renderers = {
    link: (props) => {
        return (
            <a {...props} className="text-primary-700">
                {props.children}
            </a>
        )
    }
}

export default function Content({ value }) {

    return (
        <ReactMarkdown
            renderers={renderers}
        >
            {value}
        </ReactMarkdown>
    )
}