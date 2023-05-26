import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import { Dashboard, ALayout } from '@/pages/admin'
import { User, EditUser, AddUser } from '@/pages/admin/users';
import { Cocktail, AddCocktail, EditCocktail } from '@/pages/admin/cocktails';
import Error from '@/_utils/Error'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>} >
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='user/liste' element={<User />} />
                <Route path='user/ajout' element={<AddUser />} />
                <Route path='user/edition/:uid' element={<EditUser />} />
                <Route path='cocktail/liste' element={<Cocktail />} />
                <Route path='cocktail/ajout' element={<AddCocktail />} />
                <Route path='cocktail/edition/:cid' element={<EditCocktail />} />
                <Route path='*' element={ <Error/> } />
            </Route>
        </Routes>
    );
};

export default AdminRouter;