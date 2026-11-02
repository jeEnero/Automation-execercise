import {expect, test} from '@playwright/test'


test('Get All Products List', async({request}) => {
  const res =  await request.get('https://automationexercise.com/api/productsList')
 const body =  await res.json()


 await expect(res.status()).toBe(200)
//  console.log(JSON.stringify(body,null,1))
    console.log('Sample Product', body.products[1])
})