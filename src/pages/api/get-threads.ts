import type { NextApiRequest, NextApiResponse } from 'next';
import { Threads } from '@/types';

const URI = 'https://a.4cdn.org/po/2.json';

type Data = {
  data: Threads | null;
};

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch(URI);
    const data = await response.json();

    return res.status(200).json({ data });
  } catch (err: any) {
    return res.status(500).json({ data: null });
  }
}
