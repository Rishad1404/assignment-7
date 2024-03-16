
const Sidebar = () => {
    return (
        <div>
            <div className="border border-black p-10">
                <div className="mb-10">
                    <h1 className="text-2xl font-bold text-center mb-5">Want to cook: 00</h1>
                    <hr />
                    <table className="mt-5">
                        <thead>
                            <tr className="flex gap-24 justify-start">
                                <th><p>Name</p></th>
                                <th><p>Time</p></th>
                                <th><p>Calories</p></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center mb-5">Currently cooking: 00</h1>
                    <hr />
                    <table className="mt-5">
                        <thead>
                            <tr className="flex gap-24 justify-start">
                                <th><p>Name</p></th>
                                <th><p>Time</p></th>
                                <th><p>Calories</p></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 flex gap-32">
                    <p>Total Time= 00 minutes</p>
                    <p>Total Calories= 00 calories</p>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;