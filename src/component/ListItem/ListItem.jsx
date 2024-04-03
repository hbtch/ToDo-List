import "./listitem.css"

function ListItem(props) {
    return (
        <div className="item">
            <input type="checkbox" className="checkbox"></input>
            <label className="label">{props.name}</label>
            <button>Удалить</button>
        </div>
    )
}
export default ListItem