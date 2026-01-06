export enum constants {
  Started = 'Started',
  Token = 'Token',
  RefreshToken = 'RefreshToken',
  Theme = 'Theme'
}

export function cleanSearchValue(value: string): string {
  if (!value) return '';
  return value.trim().replace(/\s+/g, ' ');
}


