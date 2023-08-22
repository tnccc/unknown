import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method?.toLocaleLowerCase() !== 'get') {
    res.status(405).end();
  }
  res.status(200).json(departments);
};

const departments = [
  {
    id: 1,
    label: 'MEN',
    checked: false,
  },
  {
    id: 2,
    label: 'WOMEN',
    checked: false,
  },
  {
    id: 3,
    label: 'UNISEX',
    checked: false,
  },
  {
    id: 4,
    label: 'KIDS',
    checked: false,
  },
];
export default handler;
