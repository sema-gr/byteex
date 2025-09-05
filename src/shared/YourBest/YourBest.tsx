import { useEffect, useState } from "react";

import "./YourBest.style.css"

export function YourBest() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="best-container">
            {isMobile ? <div style={{flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "15px"}}>
                <div>
                    <h2 className="best-info-title">Be your best self.</h2>
                </div>
                <div className="best-picture-container">
                    <picture>
                        <source />
                        <img src="/static/image/bestPicture.png" alt="" className="best-picture" />
                    </picture>
                </div>
                <div className="best-info-container">
                    <p className="simple-text">Hi! My name’s [Insert Name], and I founded [Insert] in ____.</p>
                    <p className="simple-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                    <p className="simple-text">Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula. </p>
                    <p className="simple-text">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales. </p>
                    <p className="simple-text">Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh. </p>
                    <p className="simple-text">Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien. </p>
                    <p className="simple-text">Cras mattis varius mollis.</p>
                </div>
            </div> : <>
                <div className="best-picture-container">
                    <picture>
                        <source />
                        <img src="/static/image/bestPicture.png" alt="" className="best-picture" />
                    </picture>
                </div>
                <div className="best-info-container">
                    <h2 className="best-info-title">Be your best self.</h2>
                    <p className="simple-text">Hi! My name’s [Insert Name], and I founded [Insert] in ____.</p>
                    <p className="simple-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                    <p className="simple-text">Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula. </p>
                    <p className="simple-text">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales. </p>
                    <p className="simple-text">Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh. </p>
                    <p className="simple-text">Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien. </p>
                    <p className="simple-text">Cras mattis varius mollis.</p>
                    <button className="intro-screen-button">Customize Your Outfit</button>
                </div>
            </>}
        </div>
    )
}