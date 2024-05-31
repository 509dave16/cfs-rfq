"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { UserCreate, UserList } from '@/components/user'
import { dataProvider } from "ra-data-simple-prisma";

const AdminApp = () => (
    <Admin dataProvider={dataProvider("/api", {})}>
        <Resource
            name="user"
            create={UserCreate}
            list={UserList}
        />
    </Admin>
);

export default AdminApp;