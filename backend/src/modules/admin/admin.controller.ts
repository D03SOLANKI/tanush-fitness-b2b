import { Response } from 'express';
import { asyncHandler } from '../../utils/asyncHandler';
import { ApiResponse } from '../../utils/apiResponse';
import { AdminService } from './admin.service';
import { AuthenticatedRequest } from '../../types';

export class AdminController {
  /**
   * GET /api/v1/admin/stats (ADMIN Only)
   */
  static getDashboardStats = asyncHandler(async (_req: AuthenticatedRequest, res: Response) => {
    const data = await AdminService.getDashboardStats();
    return ApiResponse.success(res, 'Admin stats retrieved successfully', data);
  });
}
