import { FormData } from '@/app/contact-us/page';
import axios from 'axios';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/contact';

  return axios.post(apiEndpoint, data);
}
