import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method?.toLocaleLowerCase() !== 'get') {
    res.status(405).end();
  }
  res.status(200).json(categories);
};

const categories = [
  {
    id: 1,
    label: 'TEES',
    checked: false,
  },
  {
    id: 2,
    label: 'SHIRTS',
    checked: false,
  },
  {
    id: 3,
    label: 'JACKETS',
    checked: false,
  },
  {
    id: 4,
    label: 'SWEATERS',
    checked: false,
  },
  {
    id: 5,
    label: 'BOTTOMS',
    checked: false,
  },
];
export default handler;
