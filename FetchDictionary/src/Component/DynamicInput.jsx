import { useState } from "react";

function DynamicInput() {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        experience: ''
    });

    function getInput(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function addEmp() {
        setData(prevData => [...prevData, formData]);
        setFormData({
            name: '',
            age: '',
            experience: ''
        });
    }

    console.log(data);

    return (
        <>
            <div style={{ backgroundColor: 'grey', width: '200px', height: '200px' }}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter name"
                        name='name'
                        value={formData.name}
                        onChange={getInput}
                    />
                    <input
                        type="number"
                        placeholder="Enter age"
                        name='age'
                        value={formData.age}
                        onChange={getInput}
                    />
                    <input
                        type="number"
                        placeholder="Enter experience"
                        name='experience'
                        value={formData.experience}
                        onChange={getInput}
                    />
                </div>
                <button
                    style={{ backgroundColor: 'green', color: 'black', alignItems: 'center', justifyItems: 'center' }}
                    onClick={addEmp}
                >
                    Add new Employee
                </button>
            </div>
            <div>
                <h2>{JSON.stringify(data)}</h2>
            </div>
        </>
    );
}

export default DynamicInput;
