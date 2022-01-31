import React from 'react';
import { deletField } from '../../API/api';
import { useLocation } from 'wouter';

const Card = ({ field }) => {
    
    const onDelete = async (id) => {
        if(window.confirm('You want delete this?')) {
            await deletField(id);
            alert("This field has been removed, maybe you need refresh the page.");
        }
    }

    return (
        <div className="card">
            <div className="container">
                <h2>{field.lastName + ' ' + field.firstName}</h2>
                <p>{field.gender}</p>
                {
                    field.occupation ? <p>Active: {field.occupation}</p> : <p>No active</p>
                }
                <p>ID: {field.id}</p>
                <button 
                    className="btn-delete"
                    onClick={event => onDelete(field.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Card;
