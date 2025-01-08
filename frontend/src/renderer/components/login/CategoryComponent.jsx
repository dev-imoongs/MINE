import React from 'react';

const Category = ({ onChange, input, name, categoryData }) => {

    return (
        <>
            <select id={name} name={name} onChange={onChange} value={input}>
                <option value="">카테고리</option>
                {categoryData.map((category) => (
                    <option value={category.categoryDetail}>
                        {category.categoryValue}
                    </option>
                ))}
            </select>
        </>
    )
}

export default Category;