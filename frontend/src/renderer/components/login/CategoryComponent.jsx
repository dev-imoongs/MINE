import React from 'react';

const Category = ({ onChange, input, name }) => {
    return (
        <>
            <select id={name} name={name} onChange={onChange} value={input}>
                <option value="">카테고리</option>
                <option value="1">머리</option>
                <option value="2">어깨</option>
                <option value="3">무릎</option>
                <option value="4">발</option>
                <option value="5">스웩</option>
            </select>
        </>
    )
}

export default Category;