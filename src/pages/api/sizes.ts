import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method?.toLocaleLowerCase() !== 'get') {
    res.status(405).end();
  }
  res.status(200).json(sizes);
};

const sizes = [
  {
    id: 1,
    value: 'S',
  },
  {
    id: 2,
    value: 'M',
  },
  {
    id: 3,
    value: 'L',
  },
  {
    id: 4,
    value: 'XL',
  },
];

export default handler;
