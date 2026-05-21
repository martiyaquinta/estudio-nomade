import { Invitation } from './types';

const STORAGE_KEY = 'invitaciones-digitales';

export const invitationStorage = {
  // Obtener todas las invitaciones
  getAll: (): Invitation[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Obtener una invitación por ID
  getById: (id: string): Invitation | null => {
    const invitations = invitationStorage.getAll();
    return invitations.find(inv => inv.id === id) || null;
  },

  // Guardar una nueva invitación
  save: (invitation: Omit<Invitation, 'id' | 'createdAt' | 'updatedAt'>): Invitation => {
    const invitations = invitationStorage.getAll();
    const newInvitation: Invitation = {
      ...invitation,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    invitations.push(newInvitation);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(invitations));
    return newInvitation;
  },

  // Actualizar una invitación existente
  update: (id: string, data: Partial<Invitation>): Invitation | null => {
    const invitations = invitationStorage.getAll();
    const index = invitations.findIndex(inv => inv.id === id);
    
    if (index === -1) return null;
    
    invitations[index] = {
      ...invitations[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(invitations));
    return invitations[index];
  },

  // Eliminar una invitación
  delete: (id: string): boolean => {
    const invitations = invitationStorage.getAll();
    const filtered = invitations.filter(inv => inv.id !== id);
    
    if (filtered.length === invitations.length) return false;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  },
};
