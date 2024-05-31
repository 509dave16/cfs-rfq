import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name"  fullWidth />
            <TextInput source="email" fullWidth validate={[required()]} />
        </SimpleForm>
    </Create>
);