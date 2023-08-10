const handler = (req: any, res: any) => {
  if (req.method.toLocaleLowerCase() !== 'get') {
      return res.status(405).end()
  }
  res.status(200).json(
    [
        {
            name: 'White Tee',
            price: '5,000',
            path: '/images/img_02.jpg',
            new: true
        }, 
        {
            name: 'Logo Hoodie',
            price: '18,000',
            path: '/images/img_01.jpg',
            new: false
        },
        {
            name: 'Tailored Jacket',
            price: '18,000',
            path: '/images/img_03.jpg',
            new: false
        },
        {
            name: 'Rugby Polo',
            price: '22,000',
            path: '/images/img_04.jpg',
            new: false
        }
    ]
    )
};
export default handler;