import React, { useState } from 'react';
import menus from './data'
import Categories from '../../Components/Categories/Categories'
import Menu from '../../Components/CourseBox/CourseBox'


const allCategories = [...new Set(menus.map(menu => menu.category)), 'همه دوره ها']

export default function LastCourses() {

    console.log(allCategories);

    const [allMenus, setAllMenus] = useState(menus)
    const [categories, setCategories] = useState(allCategories)

    const filterMenus = (category) => {
        if (category === 'همه دوره ها') {
            setAllMenus(menus)
            return
        }

        let filteredMenus = menus.filter(menu => menu.category === category)
        setAllMenus(filteredMenus)
    }


    return (
        <>
            <div className='menu section shadow text-zinc-600 bg-gray-300 dark:bg-zinc-800'>
                <Categories categories={categories} filterMenus={filterMenus} />
            </div>
            <Menu allMenus={allMenus} />
        </>
    )
}
