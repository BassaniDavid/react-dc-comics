export default function Main(props) {

    const comicData = props.dataComics.map((element) =>
        <div className="card" key={element.id}>
            <img src={element.thumb} alt={element.title} />
            <p>{element.series}</p>
        </div>)

    return (
        <main>
            <button className="btnmain currentbtn">current series</button>
            {/* <h2>&minus; &minus; &gt; Content goes here &lt; &minus; &minus;</h2> */}
            <div className="card-container">
                {comicData}
            </div>
            <button className="btnmain loadbtn">load more</button>
        </main>
    );
}