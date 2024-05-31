import {
    Datagrid,
    List,
    TextField,
} from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid optimized>
            <TextField source="name" />
            <TextField source="email" />
        </Datagrid>
    </List>
);