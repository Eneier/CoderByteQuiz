import './App.css';

function App() {

    const handlerSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container">
            <div className="nav">
                <div className="title">Quiz number #1</div>
                <button className="btn primary">Next</button>
            </div>
            <div className="card">
                <div className="item1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi dolorum
                    ducimus ex libero magni natus repellat sit temporibus vitae?
                </div>
                <div className="variants">
                    <h3>SELECT ONLY ONE</h3>
                    <form action={handlerSubmit}>

                        <input type="radio" id="var1" name="radio-group"/>
                        <label htmlFor="var1">Variant 1</label>

                        <input type="radio" id="var2" name="radio-group"/>
                        <label htmlFor="var2">Variant 2</label>

                        <input type="radio" id="var3" name="radio-group"/>
                        <label htmlFor="var3">Variant 3</label>

                        <input type="radio" id="var4" name="radio-group"/>
                        <label htmlFor="var4">Variant 4</label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
