const mapping: Record<string, string> = {
  appointments: 'appointment',
  hospitals: 'hospital',
  medicines: 'medicine',
  'new-tabel-hs': 'new_tabel_h',
  patients: 'patient',
  'test-reports': 'test_report',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
