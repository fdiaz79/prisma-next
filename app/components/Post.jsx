export default function Post({ id, title, content, authorName }) {
    return (
        <div style={{border: '1px solid black', margin: '10px 0px', padding: '15px'}}>
            <h3>{authorName}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}