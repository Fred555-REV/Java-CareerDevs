function computerStore() {
  console.log(`\nComputer Store\n`)
  const productCategory = [["Keyboard"],["Mouse"],["Monitor"],["Desktop"]]
  const productType = [["Mechanical", "Membrane", "Ergonomical", "Gaming"],["Trackball", "Optical", "Laser"],["LCD", "LED", "OLED", "PDP"],["Windows 10 Home", "Windows 10 Pro", "Mac OS", "Linux"]]
  const price = [[50, 30, 80, 100],[40, 20, 50],[50, 75, 100, 150],[400, 600, 1000, 800]]
  const itemQuantity = [[3, 4, 2, 1],[2, 8, 5],[7, 2, 5, 1],[6, 2, 4, 1]]
  let totalStoreSales = 0
  let productCategoryTotalSales = 0
  for (let i = 0; i < productCategory.length; i++) {
    productCategoryTotalSales = 0
    for (let j = 0; j < productType[i].length; j++) {
      productCategoryTotalSales += price[i][j] * itemQuantity[i][j]
      totalStoreSales += productCategoryTotalSales
      console.log(`The ${productType[i][j]} ${productCategory[i]} costs $${price[i][j]} and we sold ${itemQuantity[i][j]} for a total of $${price[i][j]*itemQuantity[i][j]}.`)
    }
    console.log(`\nThe Computer Store made $${productCategoryTotalSales} in ${productCategory[i]} sales this past week\n`)
  }
  console.log(`The Computer Store made $${totalStoreSales} for total sales in the past week.`)
}
computerStore()
// "The Gaming Keyboard costs $100."

// "The company has made $8400 in Desktop sales the past week."


/*
Trying to get desktop sales separate from total sales for everything but am getting Nan error and I don't know what to do to fix that.

Not a number ? I think something is happening between both for loops and it is interfering with my calculation of totalStoreSales.
When In between for loops totalStoreSales = 0 works but only shows the desktop sales and does not iterate the rest of the arrays. 
*/
// ALL PROBLEMS RESOLVED