// import { City, ListParams, ListResponse } from 'models';
// import { Student } from 'models/student';
// import axiosClient from './axiosClient';

import { ListParams, ListResponse } from 'models';
import { Student } from 'models/student';
import axiosClient from './axiosClient';

// export const cityApi = {
//   getAll(params: ListParams): Promise<ListResponse<Student>> {
//     const url = '/students';
//     return axiosClient.get(url, {
//       params,
//     });
//   },
//   add(data: Student): Promise<Student> {
//     const url = '/students';
//     return axiosClient.post(url, data);
//   },
//   update(data: Student): Promise<Student> {
//     const url = `/students/${data.id}`;
//     return axiosClient.patch(url, data);
//   },
//   remove(id: string): Promise<any> {
//     const url = `/students/${id}`;
//     return axiosClient.delete(url);
//   },
// };

export const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/students';
    return axiosClient.get(url, { params });
  },
  getById(id: string): Promise<Student> {
    const url = `/students${id}`;
    return axiosClient.get(url);
  },
  add(data: Student): Promise<Student> {
    const url = '/students';
    return axiosClient.post(url, data);
  },
  update(data: Student): Promise<Student> {
    const url = `/students/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id: string): Promise<any> {
    const url = `/students${id}`;
    return axiosClient.delete(url);
  },
};
