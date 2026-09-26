import { Product } from '../types';

export interface SeriesMeta {
  id: string;
  name: string;
  shortName: string;
  categoryId: 'cardio' | 'strength' | 'vision';
  description: string;
  order: number;
}

export const MAIN_EQUIPMENT_CATEGORY_IDS = ['cardio', 'strength', 'vision'] as const;
export type MainCategoryId = (typeof MAIN_EQUIPMENT_CATEGORY_IDS)[number];

export const CATEGORY_SERIES_CONFIG: Record<MainCategoryId, SeriesMeta[]> = {
  cardio: [
    {
      id: 'matrix-cardio-performance-series',
      name: 'Matrix Cardio Performance Series',
      shortName: 'Performance Series',
      categoryId: 'cardio',
      description: 'Elite commercial cardio platforms with precision TouchXL and Premium LED consoles, engineered for high-traffic fitness clubs.',
      order: 1,
    },
    {
      id: 'matrix-indurance-series',
      name: 'Matrix Indurance Series',
      shortName: 'Indurance Series',
      categoryId: 'cardio',
      description: 'Heavy-duty commercial continuous-duty cardio built for high member volume, long sessions, and low maintenance.',
      order: 2,
    },
    {
      id: 'matrix-lifestyle-series',
      name: 'Matrix Lifestyle Series',
      shortName: 'Lifestyle Series',
      categoryId: 'cardio',
      description: 'Compact commercial cardio tailored for luxury hotels, corporate wellness centers, and residential developments.',
      order: 3,
    },
  ],
  strength: [
    {
      id: 'matrix-ultra-series',
      name: 'Matrix Ultra Series',
      shortName: 'Ultra Series',
      categoryId: 'strength',
      description: 'Flagship selectorized strength machines with intelligent electronic consoles and converging/diverging biomechanics.',
      order: 1,
    },
    {
      id: 'matrix-versa-series',
      name: 'Matrix Versa Series',
      shortName: 'Versa Series',
      categoryId: 'strength',
      description: 'Modular commercial strength stations offering dual-action exercises, intuitive adjustments, and compact footprints.',
      order: 2,
    },
    {
      id: 'matrix-aura-series',
      name: 'Matrix Aura Series',
      shortName: 'Aura Series',
      categoryId: 'strength',
      description: 'Proven multi-station towers, multi-plane selectorized units, and classic aesthetic commercial strength engineering.',
      order: 3,
    },
    {
      id: 'matrix-go-series',
      name: 'Matrix Go Series',
      shortName: 'Go Series',
      categoryId: 'strength',
      description: 'Accessible, user-friendly selectorized strength equipment with minimal footprint and low starting resistance.',
      order: 4,
    },
    {
      id: 'matrix-magnum-series',
      name: 'Matrix Magnum Series',
      shortName: 'Magnum Series',
      categoryId: 'strength',
      description: 'Heavy plate-loaded machines, Olympic power racks, and rugged structural steel free weight equipment.',
      order: 5,
    },
    {
      id: 'matrix-jeevan-series',
      name: 'Matrix Jeevan Series',
      shortName: 'Jeevan Series',
      categoryId: 'strength',
      description: 'Heavy structural steel strength lines engineered specifically for high-capacity Indian commercial gym facilities.',
      order: 6,
    },
    {
      id: 'matrix-versity-series',
      name: 'Matrix Versity Series',
      shortName: 'Versity Series',
      categoryId: 'strength',
      description: 'Institutional-grade, high-durability strength stations designed for athletic academies and university facilities.',
      order: 7,
    },
  ],
  vision: [
    {
      id: 'vision-60-series',
      name: 'Vision 60 Series Commercial',
      shortName: 'Vision 60 Series',
      categoryId: 'vision',
      description: 'Heavy commercial Vision treadmills, suspension ellipticals, and cycles featuring cordless generator drives.',
      order: 1,
    },
    {
      id: 'vision-30-series',
      name: 'Vision 30 Series Commercial',
      shortName: 'Vision 30 Series',
      categoryId: 'vision',
      description: 'Refined commercial cardio designed for corporate fitness suites, luxury boutique gyms, and residential towers.',
      order: 2,
    },
    {
      id: 'vision-strength-series',
      name: 'Vision Dual Strength Series',
      shortName: 'Dual Strength Series',
      categoryId: 'vision',
      description: 'Space-saving commercial dual-function selectorized strength machinery with quick weight stack selection.',
      order: 3,
    },
  ],
};

/**
 * Resolves the canonical series id for any product.
 */
export function resolveProductSeries(product: Product): string {
  if (product.series) {
    const sLower = product.series.toLowerCase();
    // Direct matching
    if (sLower.includes('performance')) return 'matrix-cardio-performance-series';
    if (sLower.includes('indurance') || sLower.includes('endurance')) return 'matrix-indurance-series';
    if (sLower.includes('lifestyle')) return 'matrix-lifestyle-series';
    if (sLower.includes('ultra')) return 'matrix-ultra-series';
    if (sLower.includes('versa')) return 'matrix-versa-series';
    if (sLower.includes('aura')) return 'matrix-aura-series';
    if (sLower.includes('go')) return 'matrix-go-series';
    if (sLower.includes('magnum')) return 'matrix-magnum-series';
    if (sLower.includes('jeevan')) return 'matrix-jeevan-series';
    if (sLower.includes('versity') || sLower.includes('varsity')) return 'matrix-versity-series';
    if (sLower.includes('60')) return 'vision-60-series';
    if (sLower.includes('30')) return 'vision-30-series';
    if (sLower.includes('dual') || sLower.includes('vision strength')) return 'vision-strength-series';
  }

  const name = (product.name || '').toLowerCase();
  const categoryId = (product.categoryId || '').toLowerCase();

  // Cardio Series
  if (categoryId === 'cardio' || name.includes('treadmill') || name.includes('climbmill') || name.includes('elliptical') || name.includes('cycle') || name.includes('ascent')) {
    if (name.includes('performance')) return 'matrix-cardio-performance-series';
    if (name.includes('endurance') || name.includes('indurance')) return 'matrix-indurance-series';
    if (name.includes('lifestyle')) return 'matrix-lifestyle-series';
  }

  // Vision Series
  if (categoryId === 'vision' || product.brand?.toLowerCase().includes('vision') || name.includes('vision')) {
    if (name.includes('60') || name.includes('t60') || name.includes('s60') || name.includes('u60') || name.includes('r60')) {
      return 'vision-60-series';
    }
    if (name.includes('30') || name.includes('t30') || name.includes('s30') || name.includes('u30')) {
      return 'vision-30-series';
    }
    return 'vision-strength-series';
  }

  // Strength Series
  if (name.includes('ultra')) return 'matrix-ultra-series';
  if (name.includes('versa')) return 'matrix-versa-series';
  if (name.includes('aura')) return 'matrix-aura-series';
  if (name.includes('go series') || name.includes('go s')) return 'matrix-go-series';
  if (name.includes('magnum')) return 'matrix-magnum-series';
  if (name.includes('jeevan')) return 'matrix-jeevan-series';
  if (name.includes('versity') || name.includes('varsity')) return 'matrix-versity-series';

  // Fallback for general strength
  if (categoryId === 'strength') {
    return 'matrix-aura-series'; // canonical default commercial series
  }

  return 'other-series';
}

/**
 * Returns the SeriesMeta object for a given series id.
 */
export function getSeriesMeta(seriesId: string): SeriesMeta | undefined {
  for (const cat of MAIN_EQUIPMENT_CATEGORY_IDS) {
    const found = CATEGORY_SERIES_CONFIG[cat].find(s => s.id === seriesId);
    if (found) return found;
  }
  return undefined;
}
