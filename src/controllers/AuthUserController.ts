import { Request, Response } from 'express';
import { AuthUserService } from '../services/AuthUserService';

class AuthUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const service = new AuthUserService();
    try {
      const result = await service.execute(code);
      return response.json(result);
    } catch (error) {
      return response.json({error: error});
    }
  }
}

export { AuthUserController }