import {test,expect} from '@playwright/test'

test('POST To All Products List',async({request}) =>{

   const res =  await request.post('https://automationexercise.com/api/productsList')
    const body  = await res.json();
    await expect(res.status()).toBe(200)

    expect(body.message).toBe('This request method is not supported.')
})