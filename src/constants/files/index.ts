import IFile from './types';
import robotoRegularFont from '../../../assets/fonts/Roboto-Regular.ttf';
import robotoBoldFont from '../../../assets/fonts/Roboto-Bold.ttf';
import noItems from '../../../assets/images/no-items.png';

const Files: IFile = {
  fonts: {
    'roboto-regular': robotoRegularFont,
    'roboto-bold': robotoBoldFont,
  },
  images: {
    noItems,
  }
};

export default Files;
