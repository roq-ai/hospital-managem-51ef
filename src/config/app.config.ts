interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Doctor', 'Pharmacist', 'Nurse'],
  tenantName: 'Hospital',
  applicationName: 'Hospital Management  v3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View doctor availability', 'Create a new appointment', 'Manage own appointments'],
  ownerAbilities: [
    'Manage hospital records',
    'Invite doctors, nurses, and pharmacists to the system',
    'Manage user records',
  ],
};
