import '../../Styles/MainPage.css';
function MainPage() {
    return (
        <>
            <div className="main-page">
                <div className="bg">
                    <img  src={require('../../Resources/Imgs/MainBG.png')} alt='Bg_Image' />
                </div>
                <div className="info">
                    <div className="name d-inline">
                        <div className="d-inline firs-name">
                            <h1>A</h1>
                            <h1>d</h1>
                            <h1>r</h1>
                            <h1>i</h1>
                            <h1>á</h1>
                            <h1>n</h1>
                        </div>
                        <div className="d-inline last-name">
                            <h1>G</h1>
                            <h1>a</h1>
                            <h1>r</h1>
                            <h1>z</h1>
                            <h1>a</h1>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="title">
                        Fullstack Developer
                    </div>
                    <div className="about">

                    </div>
                </div>

            </div>
        </>
    );
}

export default MainPage;