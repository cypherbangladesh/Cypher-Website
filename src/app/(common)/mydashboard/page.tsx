import AdminSidebar from '@/components/admin/admin-sidebar';
import React from 'react';

function page(){
    return (
        <div className='flex'>
            <AdminSidebar />
            This is my dashboard
        </div>
    );
};

export default page;