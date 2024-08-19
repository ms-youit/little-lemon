export default function Meal({name, description, price}) {
    return (
        <article className="meal">
            <div className="title">{name}</div>
            <div className="description">{description}</div>
            <div className="price">${price}</div>
        </article>
    );
}