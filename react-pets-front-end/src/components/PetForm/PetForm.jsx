import { useState } from 'react'

const initialState = {
        name: '',
        age: '',
        breed: ''
}

const PetForm = (props) => {
    const [formData, setFormData] = useState(
        props.selected ? props.selected : initialState
    )

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(props.selected) {
            props.handleUpdatePet(formData, props.selected._id)
        } else {
            props.handleAddPet(formData)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name </label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="age"> Age </label>
                <input
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="breed"> Breed </label>
                <input
                    id="breed"
                    name="breed"
                    value={formData.breed}
                    onChange={handleChange}
                />
                <button type="submit">{props.selected ? "Update Pet" :" Add New Pet" }</button>
            </form>
        </div>
    )
}

export default PetForm;