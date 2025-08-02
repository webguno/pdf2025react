import { Request, Response } from 'express';

export default function handler(req: Request, res: Response) {
  // Since this is a client-side image converter,
  // we only need a simple health check endpoint
  if (req.method === 'GET') {
    res.status(200).json({ 
      message: 'Image to PDF Converter API', 
      status: 'active',
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}