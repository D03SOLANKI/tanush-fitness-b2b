import { prisma } from '../../config/database';

export class AdminService {
  /**
   * Protected (ADMIN Only): Platform Overview & Stats Dashboard
   */
  static async getDashboardStats() {
    const [
      totalUsers,
      totalGymOwners,
      totalJobSeekers,
      totalEquipmentEnquiries,
      totalServiceEnquiries,
      totalJobs,
      totalApplications,
      recentAuditLogs,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { role: 'GYM_OWNER' } }),
      prisma.user.count({ where: { role: 'JOB_SEEKER' } }),
      prisma.equipmentEnquiry.count(),
      prisma.serviceEnquiry.count(),
      prisma.job.count({ where: { isActive: true } }),
      prisma.jobApplication.count(),
      prisma.auditLog.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: {
          admin: {
            select: { id: true, email: true, name: true },
          },
        },
      }),
    ]);

    return {
      stats: {
        totalUsers,
        totalGymOwners,
        totalJobSeekers,
        totalEquipmentEnquiries,
        totalServiceEnquiries,
        totalJobs,
        totalApplications,
      },
      recentAuditLogs,
    };
  }
}
