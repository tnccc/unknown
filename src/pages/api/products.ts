export const handler = (req: any, res: any) => {
  if(req.method.toLocalLowerCase() !== 'get') {
    return res.status(405).end()
  }
  res.status(200).json([{
    name: 'White T',
    price: 5000,
  }, {
    name: 'Logo Hoodie',
    price: 18000,
  }])
}