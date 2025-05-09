import { PrismaClient } from '../../generated/prisma-watchdog/index.js';
import { getLocalDate } from './dateTimeFormatter.util.js';

const prisma = new PrismaClient();

export const watchDogOnInit = async () => {
  const applicationType = await prisma.applications.findUnique({ where: { application_type: process.env.APPLICATION_TYPE as string } })

  if (applicationType) {
    if (!applicationType.is_application_type_active) {
      await prisma.applications.update(
        { 
          where: { id: applicationType.id }, 
          data: { 
            watchdog_try_count: 0,
            is_notified_by_watchdog: false
          } 
        }
      );
    }
  
    await prisma.applications.update(
      { 
        where: { id: applicationType.id }, 
        data: { 
          is_application_type_active: true,
          heartbeat: getLocalDate()
        } 
      }
    );
  }
}

export const watchDogHeartBeat = async () => {
  const applicationType = await prisma.applications.findUnique({ where: { application_type: process.env.APPLICATION_TYPE as string } })

  if (applicationType) {
    await prisma.applications.update(
      { 
        where: { id: applicationType.id }, 
        data: { 
          watchdog_try_count: 0,
          is_notified_by_watchdog: false,
          is_application_type_active: true,
          heartbeat: getLocalDate()
        } 
      }
    );
  }
}