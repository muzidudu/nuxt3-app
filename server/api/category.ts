import { useQuery } from 'h3'

export default async (req) => {
    // console.log(req)
    const response  = await $fetch('http://laravel.test/api/category', { params: useQuery(req) })
    // console.log(response);
 return   response
}