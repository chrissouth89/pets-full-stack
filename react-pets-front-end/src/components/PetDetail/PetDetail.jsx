const PetDetail = (props) => {

    if(!props.selected) {
        return (
            <div>
                <h1>No Details</h1>
            </div>
        )
    }

    return (
        <>
            <h2>Pet Details</h2>
            <ul>
                <li>Name: {props.selected.name}</li>
                <li>Breed: {props.selected.breed}</li>
                <li>Age: {props.selected.age}</li>
            </ul>
            <button onClick={() => props.handleFormView(props.selected)}>
                Edit Pet
            </button>
            <button onClick={() => props.handleDeletePet(props.selected._id)}>
                Delete Pet
            </button>
        </>
    )
}

export default PetDetail