import "./ChillForest.css";

export default function ChillForest() {
    const trees = Array.from({ length: 16 });

    return (
        <div className="forest-container">
            <div className="hills-back"></div>
            <div className="hills-front"></div>
            <div className="mist"></div>

            <div className="trees">
                {trees.map((_, i) => (
                    <div
                        key={i}
                        className="tree"
                        style={{
                            '--h': `${70 + (i % 4) * 15}px`,
                            '--crown': `hsl(${110 + (i % 4) * 4}, 14%, ${25 + (i % 3) * 5}%)`,
                        } as React.CSSProperties}
                    >
                        <div className="crown"></div>
                        <div className="trunk"></div>

                        {/* MESSAGE CACHÉ derrière le premier arbre */}
                        {i === 2 && (
                            <div className="hidden-message">F12</div>
                        )}
                    </div>
                ))}
            </div>


            <div className="ground"></div>
        </div>
    );
}
