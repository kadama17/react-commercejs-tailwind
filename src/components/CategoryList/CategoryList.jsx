import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";


const CategoryList = () => {
    const [ cate, setCate ] = useState([]);

    useEffect(() => {

        commerce.categories.list().then(( category ) => {
            console.log( category );
            setCate( category );
        }
        );
        console.log( "dname:", cate );


    }, []);






    return (


        <ul className="w-60 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">


            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Supermarché</li>
            <li className="w-full px-4 py-2 rounded-b-lg">Beauté & Santé</li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Vêtements & Chaussures</li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Accessoires Mode</li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Maison & Cuisine
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Téléphone & Tablette
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Électroménager
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Informatique</li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Sports & Loisirs
            </li>

            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">TV & Hi Tech

            </li>   <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                Bébé & Jouets
            </li>   <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Autres catégorie

            </li>



        </ul>
    );
};

export default CategoryList;
