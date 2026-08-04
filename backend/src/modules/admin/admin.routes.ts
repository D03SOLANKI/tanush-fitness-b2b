import { Router } from 'express';
import { UserRole } from '@prisma/client';
import { authenticate, authorize } from '../auth/auth.middleware';
import { AdminController } from './admin.controller';

const adminRouter = Router();

// Protect ALL Admin Routes (ADMIN Only)
adminRouter.use(authenticate, authorize(UserRole.ADMIN));

adminRouter.get('/stats', AdminController.getDashboardStats);

export default adminRouter;
