import React from "react";
import "./ListCar.css"
const ListCar: React.FC = () => {
    return (
        <div>
            <div className="ListCar">
                <div className="ListCarText">
                    <strong>List Car</strong>
                </div>
                <button className="button-add-new">
                    Add New Car
                </button>
            </div>
            <div className="filter-button">
                <button>All</button>
                <button>Small</button>
                <button>Medium</button>
                <button>Large</button>
            </div>
            <div className="SectionViewCars">

            </div>
        </div>
    )
}

export default ListCar