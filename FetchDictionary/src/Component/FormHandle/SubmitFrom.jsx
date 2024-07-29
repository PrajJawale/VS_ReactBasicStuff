import { useState } from "react";

function SubmitForm() {
    const [formData, setFormData] = useState({ name: "", age: "", date: "", file: null });
    const [objdata, setObjData] = useState([]);

    function getInput(event) {
        let {name,value} = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function getFileInput(file, name) {
        setFormData(prevState => ({
            ...prevState,
            [name]: file
        }));
    }

    function submit(event) {
        event.preventDefault();
        setObjData(prevState => [...prevState, formData]);
        setFormData({ name: "", age: "", date: "", file: null });
    }

    return (
        <>
            <h2>Submit Form</h2>
            <form onSubmit={submit}>
                <div style={{ justifyItems: 'center', justifyContent: 'center', backgroundColor: 'grey' }}>
                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={getInput}
                            placeholder="Enter Name"
                        />
                        <input
                            required
                            type="number"
                            name="age"

                            value={formData.age}
                            onChange={getInput}
                            placeholder="Age"
                        />
                        <input
                            required
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={getInput}
                        />
                        <input
                            type="file"
                            name="file"
                            onChange={(event) => getFileInput(event.target.files[0], event.target.name)}
                        />
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
            <h3>Submitted Data:</h3>
            <div style={{ backgroundColor: 'grey', color: 'white' }}>{JSON.stringify(objdata)}</div>
        </>
    );
}

export default SubmitForm;
