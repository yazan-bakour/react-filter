class List extends React.Component {
    constructor(props) {
        super(props);
    
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item => (
                        <li key={item}>
                        {item} &nbsp;
                        <span
                            className="delete"
                            onClick={() => this.removeItem(item)}
                        />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}