
const Sidebar = () => {
    return (
        <div>
            <div className="border border-black p-10">
                <div className="mb-10">
                    <h1 className="text-2xl font-bold text-center mb-5">Want to cook: 00</h1>
                    <hr />
                    <div className="flex gap-24 justify-start mt-5">
                        <div><p>Name</p></div>
                        <div><p>Time</p></div>
                        <div><p>Calories</p></div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center mb-5">Currently cooking: 02</h1>
                    <hr />
                    <div className="flex gap-24 justify-start mt-5">
                        <div><p>Name</p></div>
                        <div><p>Time</p></div>
                        <div><p>Calories</p></div>
                    </div>
                </div>

                <div className="mt-10 flex gap-24">
                    <p>Total Time= 45 minutes</p>
                    <p>Total Calories= 1050 calories</p>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;