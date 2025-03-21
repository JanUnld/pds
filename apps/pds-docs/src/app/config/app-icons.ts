import { Provider } from '@angular/core';
import { SVG_ICON_IMPORT, SvgIconImportConfig } from '@vitagroup/cdk';
import { appIconVitagroupSignet } from '../../icons/app-icons';
import { faBrandIconAngular, faBrandIconGithub, faBrandIconSass } from '../../icons/fa-brand-icons';
import {
  faSolidIconArrowLeft,
  faSolidIconArrowRight,
  faSolidIconBookOpen,
  faSolidIconBuilding,
  faSolidIconCircle,
  faSolidIconCog,
  faSolidIconCopy,
  faSolidIconExclamationTriangle,
  faSolidIconGlobe,
  faSolidIconHome,
  faSolidIconInfo,
  faSolidIconMoon,
  faSolidIconPuzzlePiece,
  faSolidIconSearch,
  faSolidIconSquare,
  faSolidIconSquareFull,
  faSolidIconSun,
  faSolidIconTimes,
  faSolidIconUser,
  faSolidIconUsers,
} from '../../icons/fa-solid-icons';

export const APP_ICON_IMPORT_PROVIDER: Provider = {
  provide: SVG_ICON_IMPORT,
  useValue: {
    icons: [
      appIconVitagroupSignet,
      faSolidIconSun,
      faSolidIconMoon,
      faSolidIconSearch,
      faSolidIconTimes,
      faSolidIconArrowRight,
      faSolidIconArrowLeft,
      faSolidIconExclamationTriangle,
      faSolidIconCopy,
      faSolidIconInfo,
      faSolidIconGlobe,
      faSolidIconUser,
      faSolidIconUsers,
      faSolidIconCircle,
      faSolidIconSquare,
      faSolidIconSquareFull,
      faSolidIconBuilding,
      faSolidIconBookOpen,
      faSolidIconHome,
      faSolidIconPuzzlePiece,
      faSolidIconCog,
      faBrandIconGithub,
      faBrandIconAngular,
      faBrandIconSass,
    ],
  } as SvgIconImportConfig,
};
