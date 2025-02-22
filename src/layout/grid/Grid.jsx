import "./grid.scss"
function Grid() {
    const cards = [1, 2, 3, 4, 5, 6, 7,]
    return (
        <div className="grid">
            {cards.map(e => <div className="card" key={e}>
                <div className="content">
                    <h2>title {e}</h2>
                </div>
            </div>)}

        </div>
    )
}

export default Grid