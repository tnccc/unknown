import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method?.toLocaleLowerCase() !== 'get') {
    res.status(405).end();
  }
  res.status(200).json(colors);
};

export const colors = [
  {
    id: 1,
    value: 'white',
  },
  {
    id: 2,
    value: 'black',
  },
  {
    id: 3,
    value: 'gray',
  },
  {
    id: 4,
    value: 'red',
  },
];
export default handler;
