import PropTypes from 'prop-types';
const Append = ({current}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-5">Currently cooking : {current.length}</h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='bg-base-200'>
                    {
                       current.map((item,idx)=><tr key={idx}>
                           <td>{idx + 1}</td>
                           <td>{item.recipe_name}</td>
                           <td>{item.preparing_time} minutes</td>
                           <td>{item.calories} calories</td>

                       </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};
Append.propTypes={
    current:PropTypes.array,
}

export default Append;