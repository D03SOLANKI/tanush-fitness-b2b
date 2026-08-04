import { Request, Response } from 'express';
import { asyncHandler } from '../../utils/asyncHandler';
import { ApiResponse } from '../../utils/apiResponse';
import { HTTP_STATUS } from '../../config/constants';
import { EquipmentService } from './equipment.service';
import { AuthenticatedRequest } from '../../types';

export class EquipmentController {
  /**
   * GET /api/v1/equipment/categories
   */
  static getCategories = asyncHandler(async (_req: Request, res: Response) => {
    const categories = await EquipmentService.getCategories();
    return ApiResponse.success(res, 'Equipment categories retrieved successfully', { categories });
  });

  /**
   * GET /api/v1/equipment/products
   */
  static getProducts = asyncHandler(async (req: Request, res: Response) => {
    const filters = {
      search: req.query.search as string,
      category: req.query.category as string,
      brand: req.query.brand as string,
      type: req.query.type as string,
      application: req.query.application as string,
      page: req.query.page ? parseInt(req.query.page as string, 10) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string, 10) : 12,
    };

    const result = await EquipmentService.getProducts(filters);
    return ApiResponse.success(res, 'Products retrieved successfully', result);
  });

  /**
   * GET /api/v1/equipment/products/:id
   */
  static getProductById = asyncHandler(async (req: Request, res: Response) => {
    const product = await EquipmentService.getProductById(req.params.id);
    return ApiResponse.success(res, 'Product details retrieved successfully', { product });
  });

  /**
   * POST /api/v1/equipment/enquiries (GYM_OWNER Only)
   */
  static createEnquiry = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const enquiry = await EquipmentService.createEnquiry(req.user!.userId, req.body);
    return ApiResponse.success(
      res,
      'Equipment RFQ Enquiry submitted successfully',
      { enquiry },
      HTTP_STATUS.CREATED
    );
  });
}
