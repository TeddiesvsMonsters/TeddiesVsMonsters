// services/auth.ts
import axios from 'axios';

const strapiUrl = process.env.STRAPI_URL;

interface SignInParams {
  email: string;
  password: string;
}
export async function signIn({ email, password }: SignInParams) {

  try {
    const res = await axios.post(`${strapiUrl}/api/auth/local`, {
      identifier: email,
      password,
    });

    console.log('Response from Strapi:', res.data);

    return res.data;
  } catch (error) {
    console.error('Error while signing in:', error);
    throw new Error('Authentication failed');
  }
}

interface RegisterData {
  id?: number;
  slug: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  address: string;
}
export async function register({ data }: { data: RegisterData }) {

  try {
   
    const res = await axios.post(`https://teddies-vs-monsters-backend-production.up.railway.app/api/auth/local/register`, {
      id: data.slug,
      name: data.name,
      username: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      address: data.address
    });
  
    return res
  } catch (error) {
    throw new Error('Registration failed:  '+ error);
  }
}

interface UpdateFields {
  id?: number;
  name?: string | null;
  username?: string | null;
  email?: string | null;
  phone?: string | null;
  password?: string | null;
  address?: string | null;
  address_2?: string | null;
  lastname?: string | null;
}

export async function updateUser({ data }: { data: UpdateFields }) {

  try {
    // Prepare the fields that are being updated
    const updateFields: UpdateFields = {};

    // Add the fields to the updateFields object conditionally
    if (data.name) {
      updateFields['name'] = data.name;
    }
    if (data.lastname) {
      updateFields['lastname'] = data.lastname;
    }
    if (data.email) {
      updateFields['email'] = data.email;
    }
    if (data.password) {
      updateFields['password'] = data.password;
    }
    if (data.phone) {
      updateFields['phone'] = data.phone;
    }
    if (data.address) {
      updateFields['address'] = data.address;
    }
    if (data.address_2) {
      updateFields['address_2'] = data.address_2;
    }

    // Make the API call to update the user with the provided fields
    const id = data.id;

    const res = await axios.put(`https://teddies-vs-monsters-backend-production.up.railway.app/api/users/${id}`, updateFields);
    return res.data;
  } catch (error) {
    throw new Error('Update failed');
  }
}
