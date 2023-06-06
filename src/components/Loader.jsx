export const Loader = ({ mRight }) => {

    const 
    
    spanStack   = [1, 2, 3, 4, 5, 6, 7, 8],
    rotateStack = [0, 1, 2, 3, 4];

    return (

        <div className={ mRight ? `loader loader${mRight}` : "loader" } >
            
            <svg className="loader__svg">
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                    <feColorMatrix 
                        values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 20 -10
                    " />
                </filter>
            </svg>

            {
                spanStack.map((i) => (
                    <span className="loader__span" key={i * Math.random()} style={{ "--i": i }}></span>
                ))
            }
            {
                rotateStack.map((j) => (
                    <span className="loader__span loader__rotate" key={j * Math.random()} style={{ "--j": j}}></span>
                ))
            }
            
        </div>

    );

};