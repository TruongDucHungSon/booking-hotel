export function calculateTotalPriceFood(items: { price: string }[]): number {
  // Tính tổng giá bằng cách cộng tất cả các giá trị của price
  return items?.reduce((total, item) => total + parseFloat(item.price), 0);
}
